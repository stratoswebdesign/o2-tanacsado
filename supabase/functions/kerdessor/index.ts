/**
 * Önellenőrző kérdéssor beküldése – Supabase Edge Function (projekt: o2-tanacsado).
 *
 * A GitHub Pages-en futó o2tanacsado.hu ide küldi a kitöltést. A függvény:
 * 1. elmenti a kitöltést a kerdessor_kitoltesek táblába (így akkor sem vész el
 *    érdeklődő, ha a levélküldés nem sikerül),
 * 2. a Resendben felveszi a kitöltőt (keresztnévvel), és elküldi az
 *    o2.kerdessor.kitoltve eseményt: ez indítja az 5 leveles welcome sorozatot,
 * 3. értesítést küld az O2-nak a pontszámmal és a válaszokkal.
 *
 * GET kérés: ébrentartás (a GitHub Actions naponta hívja), egy adatbázis-lekérdezéssel,
 * hogy az ingyenes Supabase-projekt ne álljon le inaktivitás miatt.
 *
 * Titkos beállítás: RESEND_API_KEY (Supabase → Edge Functions → Secrets).
 * Telepítés: verify_jwt = false (nyilvános végpont; a védelem lent, kódban van).
 */
import { createClient } from "npm:@supabase/supabase-js@2";
import { ANSWER_OPTIONS, STATEMENTS, bandFor, encodeAnswers, isComplete, scoreOf } from "./self-check.ts";

/**
 * A welcome sorozat csak akkor indul, ha a Resendben hitelesítve van az o2tanacsado.hu
 * domain és létezik az automatizálás. Addig a kitöltések csak az adatbázisba kerülnek.
 */
const WELCOME_SERIES_LIVE = false;

const SITE = "https://o2tanacsado.hu";
const ALLOWED_ORIGINS = new Set(["https://o2tanacsado.hu", "https://www.o2tanacsado.hu", "http://localhost:3000"]);
const EVENT = "o2.kerdessor.kitoltve";
const NOTIFY_FROM = "O2 weboldal <info@o2tanacsado.hu>";
const NOTIFY_TO = Deno.env.get("NOTIFY_TO_EMAIL") ?? "info@o2tanacsado.hu";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Visszaélés ellen: IP-címenként óránként legfeljebb ennyi kitöltés. */
const MAX_PER_IP_PER_HOUR = 10;

function secretKey() {
  const keys = Deno.env.get("SUPABASE_SECRET_KEYS");
  if (keys) {
    try {
      const k = JSON.parse(keys).default;
      if (k) return k as string;
    } catch {
      // régi kulcsformátum
    }
  }
  return Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
}

const db = createClient(Deno.env.get("SUPABASE_URL")!, secretKey(), { auth: { persistSession: false } });
const TABLE = "kerdessor_kitoltesek";

function corsHeaders(origin: string): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.has(origin) ? origin : SITE,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(body: unknown, status: number, origin: string) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
  });
}

async function sha256(s: string) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function resend(path: string, body: unknown, method = "POST") {
  const res = await fetch(`https://api.resend.com${path}`, {
    method,
    headers: { Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${method} ${path}: ${res.status} ${await res.text()}`);
  return res.json().catch(() => ({}));
}

async function setStatus(id: string, mail_status: string, mail_error: string | null = null) {
  await db.from(TABLE).update({ mail_status, mail_error: mail_error?.slice(0, 500) ?? null }).eq("id", id);
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") ?? "";

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });

  // Ébrentartás: egy valódi adatbázis-lekérdezés.
  if (req.method === "GET") {
    const { error } = await db.from(TABLE).select("id", { count: "exact", head: true });
    return json({ ok: !error }, error ? 500 : 200, origin);
  }

  if (req.method !== "POST") return json({ ok: false, error: "method" }, 405, origin);
  if (!ALLOWED_ORIGINS.has(origin)) return json({ ok: false, error: "origin" }, 403, origin);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, origin);
  }

  // Honeypot: robotok kitöltik, emberek nem látják.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true, mailed: false }, 200, origin);
  }

  const firstName = String(body.firstName ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  if (
    firstName.length < 2 ||
    firstName.length > 80 ||
    !EMAIL_RE.test(email) ||
    email.length > 200 ||
    body.consent !== true ||
    !isComplete(body.answers)
  ) {
    return json({ ok: false, error: "validation" }, 422, origin);
  }

  const answers = body.answers as number[];
  const score = scoreOf(answers);
  const band = bandFor(score);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const ipHash = ip ? (await sha256(`${ip}|${secretKey()}`)).slice(0, 32) : null;
  const now = Date.now();

  if (ipHash) {
    const { count } = await db
      .from(TABLE)
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", new Date(now - 3600_000).toISOString());
    if ((count ?? 0) >= MAX_PER_IP_PER_HOUR) return json({ ok: false, error: "rate_limited" }, 429, origin);
  }

  // Ugyanarra a címre 24 órán belül nem indítjuk újra a sorozatot.
  const { count: recent } = await db
    .from(TABLE)
    .select("id", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", new Date(now - 86_400_000).toISOString());
  const duplicate = (recent ?? 0) > 0;

  const { data: row, error: insertError } = await db
    .from(TABLE)
    .insert({
      first_name: firstName,
      email,
      answers,
      score,
      band: band.title,
      consent: true,
      ip_hash: ipHash,
      mail_status: duplicate ? "duplicate" : "pending",
    })
    .select("id")
    .single();
  if (insertError || !row) {
    console.error("[kerdessor] mentési hiba:", insertError);
    return json({ ok: false, error: "store_failed" }, 500, origin);
  }

  if (duplicate) return json({ ok: true, mailed: false, duplicate: true }, 200, origin);

  if (!WELCOME_SERIES_LIVE || !Deno.env.get("RESEND_API_KEY")) {
    await setStatus(row.id, "not_configured");
    return json({ ok: true, mailed: false }, 200, origin);
  }

  try {
    // A névjegy keresztneve adja a levelek megszólítását ({{{FIRST_NAME}}}).
    try {
      await resend("/contacts", { email, first_name: firstName, unsubscribed: false });
    } catch {
      await resend(`/contacts/${encodeURIComponent(email)}`, { first_name: firstName }, "PATCH");
    }
    await resend("/events/send", {
      event: EVENT,
      email,
      payload: {
        score,
        bandTitle: band.title,
        bandText1: band.paragraphs[0] ?? "",
        bandText2: band.paragraphs[1] ?? "",
        resultUrl: `${SITE}/onellenorzo-kerdessor/eredmeny/?v=${encodeAnswers(answers)}`,
      },
    });
  } catch (err) {
    console.error("[kerdessor] welcome sorozat:", err);
    await setStatus(row.id, "failed", String(err));
    return json({ ok: true, mailed: false }, 200, origin);
  }

  let notifyError: string | null = null;
  try {
    const rows = STATEMENTS.map(
      (s, i) => `<li>${escapeHtml(s)} <strong>${escapeHtml(ANSWER_OPTIONS[answers[i]].label)} (${answers[i]})</strong></li>`,
    ).join("");
    await resend("/emails", {
      from: NOTIFY_FROM,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `Kérdéssor: ${firstName} – ${score} / 36`,
      html: `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#0b1a3a">
        <h2 style="margin:0 0 12px">Új kitöltés: önellenőrző kérdéssor</h2>
        <p style="margin:0">Keresztnév: <strong>${escapeHtml(firstName)}</strong><br>
        E-mail: <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br>
        Pontszám: <strong>${score} / 36</strong> – ${escapeHtml(band.title)}</p>
        <ol style="padding-left:20px">${rows}</ol>
        <p style="color:#7c869f;font-size:13px">A welcome sorozat elindult. Forrás: o2tanacsado.hu önellenőrző kérdéssor</p>
      </div>`,
      text: [
        `Keresztnév: ${firstName}`,
        `E-mail: ${email}`,
        `Pontszám: ${score} / 36 – ${band.title}`,
        "",
        ...STATEMENTS.map((s, i) => `${answers[i]} – ${s} (${ANSWER_OPTIONS[answers[i]].label})`),
      ].join("\n"),
    });
  } catch (err) {
    console.error("[kerdessor] értesítés:", err);
    notifyError = `értesítés: ${String(err)}`;
  }

  await setStatus(row.id, "sent", notifyError);
  return json({ ok: true, mailed: true }, 200, origin);
});
