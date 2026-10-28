export const SITE_URL = "https://o2tanacsado.hu";
export const SITE_NAME = "O2 Tanácsadó";
export const LEGAL_NAME = "O2 Tanácsadó Kft.";

export const CONTACT_EMAIL = "info@o2tanacsado.hu";
export const ADDRESS = {
  street: "Bródy Sándor utca 26.",
  postalCode: "1088",
  city: "Budapest",
  country: "HU",
  full: "1088 Budapest, Bródy Sándor utca 26.",
};

/** Al-útvonal statikus (GitHub Pages) kiadásnál; next/link és next/image automatikusan kezeli, nyers href/src-hez withBase() kell. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

export function withBase(path: string) {
  return `${BASE_PATH}${path}`;
}

/** Adatkezelési tájékoztató: alapértelmezésben a webhely saját, belső oldala. */
export const PRIVACY_PATH = "/adatkezelesi-tajekoztato/";
export const PRIVACY_URL = process.env.NEXT_PUBLIC_PRIVACY_URL || withBase(PRIVACY_PATH);

/** Google Search Console HTML-meta ellenőrző kód (opcionális; a DNS- vagy fájlalapú ellenőrzés is használható). */
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const IS_PRODUCTION =
  process.env.NEXT_PUBLIC_SITE_ENV === "production" ||
  process.env.VERCEL_ENV === "production";

/** Elsődleges CTA felirat – a személyes első beszélgetésre hív. */
export const CTA_LABEL = "Beszéljünk";
export const FORM_ANCHOR = "ajanlatkeres";

export const NAV = [
  { href: "/", label: "Főoldal" },
  { href: "/szolgaltatasok/", label: "Szolgáltatások" },
  { href: "/blog/", label: "Blog" },
  { href: "/rolunk/", label: "Rólunk" },
  { href: "/kapcsolat/", label: "Kapcsolat" },
] as const;

/**
 * Országos szolgáltatási és témaoldalak (láblécben, sitemapben, hivatkozásokban).
 * Az első négy a szövegdokumentum szerinti oldal, a többi a dokumentum irányelvei
 * szerint átírt régi oldal. Az útvonalak a régiek maradtak, a dokumentum által
 * javasolt új címek (/havi-egyuttmukodes, /ceges-diagnozis) csak javaslatok.
 */
export const SERVICE_PAGES = [
  { href: "/hr-tanacsadas-kkv-knak/", label: "Havi együttműködés" },
  { href: "/szervezetfejlesztes/", label: "Céges diagnózis" },
  { href: "/vezetoi-coaching/", label: "Vezetői coaching" },
  { href: "/team-coaching/", label: "Team coaching" },
  { href: "/vezetoi-trening/", label: "Vezetői tréning" },
  { href: "/munkaero-megtartas/", label: "Munkaerő-megtartás" },
  { href: "/munkakori-leiras-minta/", label: "Munkaköri leírás minta" },
] as const;

/** Önellenőrző kérdéssor (opt-in oldal). */
export const SELF_CHECK_PATH = "/onellenorzo-kerdessor/";
/**
 * A kitöltést fogadó végpont. Statikus tárhelyen (GitHub Pages) a Supabase Edge Function
 * (supabase/functions/kerdessor), szerveres tárhelyen üresen hagyva a saját /api/kerdessor/ útvonal.
 */
export const SELF_CHECK_ENDPOINT = process.env.NEXT_PUBLIC_SELF_CHECK_ENDPOINT || "";
export const SELF_CHECK_ANCHOR = "kerdessor";

export const LOCAL_PAGES = [
  { href: "/hr-tanacsadas-budapest/", label: "Budapest és Pest vármegye" },
  { href: "/hr-tanacsadas-gyor/", label: "Győr-Moson-Sopron vármegye" },
  { href: "/hr-tanacsadas-szeged/", label: "Csongrád-Csanád vármegye" },
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
