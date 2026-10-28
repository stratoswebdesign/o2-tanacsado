import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "./CtaBand";
import { CtaLink } from "./CtaLink";
import { ArrowRight, Check } from "./Icons";
import { FOUNDERS, OFFERS, OFFER_BY_ID } from "@/lib/content";
import { LOCAL, type LocalPage } from "@/lib/local";
import { breadcrumbLd, jsonLd } from "@/lib/seo";
import { ADDRESS, LEGAL_NAME, SERVICE_PAGES, SITE_URL } from "@/lib/site";
import styles from "./LocalLanding.module.css";

export function LocalLanding({ page }: { page: LocalPage }) {
  const others = LOCAL.filter((l) => l.slug !== page.slug);
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    description: page.description,
    url: `${SITE_URL}${page.path}`,
    inLanguage: "hu",
    about: { "@type": "Service", serviceType: "HR-tanácsadás", provider: { "@id": `${SITE_URL}/#organization` } },
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "O2 Tanácsadó" },
  };

  return (
    <>
      <section className={styles.head} aria-labelledby="local-h1">
        <span className="o2-ring" style={{ width: 640, height: 640, right: -260, top: -300 }} aria-hidden="true" />
        <div className={`container ${styles.headGrid}`}>
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 id="local-h1">{page.h1}</h1>
            <p className="lead">{page.intro[0]}</p>
            <div className={styles.headCtas}>
              <CtaLink />
              <Link href="/szolgaltatasok/" className="btn btn--ghost">
                Szolgáltatások
              </Link>
            </div>
          </div>
          <div className={styles.headAside}>
            <p className={styles.headAsideText}>{page.intro[1]}</p>
            <ul className={styles.quickFacts}>
              <li>20–200 fős cégeknek</li>
              <li>Személyesen a cégnél vagy akár online is</li>
              <li>Gyakorló cégvezető-tanácsadók segítségével</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="local-services-title">
        <div className="container">
          <div className={`${styles.split} reveal`}>
            <div>
              <p className="eyebrow">Szolgáltatások</p>
              <h2 id="local-services-title">Miben segítünk {page.city} és {page.county} cégeinek?</h2>
            </div>
            <p className="lead">
              Két lépésben dolgozunk. A diagnózis megmutatja, hol tart a cég, aztán havi
              rendszerességgel, személyesen segítünk, ahogy a helyzet éppen kívánja.
            </p>
          </div>
          <ol className={styles.services}>
            {OFFERS.map((o, i) => (
              <li key={o.id} className={`${styles.service} reveal`}>
                <div className={styles.serviceImg} aria-hidden="true">
                  <Image src={o.image} alt="" sizes="120px" loading="lazy" />
                </div>
                <div className={styles.serviceBody}>
                  <p className={styles.serviceNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3>{o.question}</h3>
                  <p className={styles.serviceLead}>
                    <Link href={o.href}>
                      <strong>{o.name}</strong>
                    </Link>{" "}
                    {o.text}
                  </p>
                  <p className={styles.serviceNote}>{page.offerNotes[o.id]}</p>
                  <div className={styles.serviceLinks}>
                    <Link href={o.href} className="link-arrow">
                      Ez érdekel <ArrowRight />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section section--paper2 ${styles.contexts}`} aria-labelledby="ctx-title">
        <span className="o2-disc" style={{ width: 460, height: 460, left: -200, bottom: -200 }} aria-hidden="true" />
        <div className={`container ${styles.ctxGrid}`}>
          <div className={`${styles.ctxIntro} reveal`}>
            <p className="eyebrow">Térségi helyzetek</p>
            <h2 id="ctx-title">{page.contextTitle}</h2>
            <p className="lead">
              Kész receptet nem adunk. Ezek olyan helyzetek, amik a térség cégeinél gyakran
              előkerülhetnek, és amikben tudunk segíteni.
            </p>
          </div>
          <ol className={styles.ctxList}>
            {page.contexts.map((c) => (
              <li key={c.title} className={`${styles.ctx} reveal`}>
                <span className={styles.ctxMark} aria-hidden="true">
                  <Check />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <Link href={OFFER_BY_ID[c.offer].href} className={styles.ctxLink}>
                    {OFFER_BY_ID[c.offer].name.replace(/\.$/, "")} <ArrowRight />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="area-title">
        <div className={`container ${styles.areaGrid}`}>
          <div className={`${styles.areaText} reveal`}>
            <p className="eyebrow">Szolgáltatási terület</p>
            <h2 id="area-title">{page.areaTitle}</h2>
            <div className="prose">
              {page.area.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className={styles.otherRegions}>
              Országosan dolgozunk, személyesen a cégnél vagy akár online is. Részletes oldalaink:{" "}
              {SERVICE_PAGES.map((s, i) => (
                <span key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                  {i < SERVICE_PAGES.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <p className={styles.otherRegions}>
              Más térségekben is dolgozunk:{" "}
              {others.map((o, i) => (
                <span key={o.slug}>
                  <Link href={o.path}>{o.label}</Link>
                  {i < others.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>

          <div className={`${styles.trust} reveal`}>
            <p className="eyebrow">Kik vagyunk?</p>
            <ul className={styles.founders}>
              {FOUNDERS.map((f) => (
                <li key={f.name}>
                  <div className={styles.portrait}>
                    <Image src={f.image} alt={f.imageAlt} sizes="96px" loading="lazy" />
                  </div>
                  <div>
                    <strong>{f.name}</strong>
                    <br />
                    <span className="muted">{f.role}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles.trustText}>
              Tibor és Ádám vagyunk, gyakorló cégvezetők. 25 éve vezetjük a saját informatikai
              cégünket, az Onlinet Kft.-t, ami a tulajdonosok napi jelenléte nélkül is jól működik. A
              megélt gyakorlatot és a tanult tudást együtt adjuk át neked.
            </p>
            <p className={styles.trustText}>
              <strong>{LEGAL_NAME}</strong> · {ADDRESS.full}
            </p>
            <Link href="/rolunk/" className="link-arrow">
              Bővebben rólunk <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand id="cta-title" title={page.cta.title} text={page.cta.text} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: page.label, path: page.path },
            ]),
          ),
        }}
      />
    </>
  );
}
