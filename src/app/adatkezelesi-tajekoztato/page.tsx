import Link from "next/link";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { ADDRESS, CONTACT_EMAIL, LEGAL_NAME, SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Adatkezelési tájékoztató | O2 Tanácsadó",
  description:
    "Az O2 Tanácsadó Kft. adatkezelési tájékoztatója: a kapcsolatfelvételi űrlap és az önellenőrző kérdéssor adatainak kezelése, a levélsorozat, az adatfeldolgozók és az érintettek jogai.",
  path: "/adatkezelesi-tajekoztato/",
});

/**
 * A weboldal saját adatkezelési tájékoztatója. A cégjegyzékszám és az adószám
 * cégadatbázisból származik (CompanyWall), élesítés előtt a hivatalos cégjegyzékkel
 * egyeztetendő; a szöveget jogi szempontból ellenőriztetni kell.
 */
const LAST_UPDATED = "2026. október 23.";
const COMPANY_REG_NO = "01-09-416675";
const TAX_NO = "32296103-2-42";

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="privacy-h1">
        <div className="container">
          <p className="eyebrow">Adatkezelés</p>
          <h1 id="privacy-h1">Adatkezelési tájékoztató</h1>
          <p className="lead">
            Ez a tájékoztató azt írja le, hogyan kezeli a {LEGAL_NAME} a weboldalon (o2tanacsado.hu)
            megadott személyes adatokat: a kapcsolatfelvételi űrlapon és az önellenőrző kérdéssorban.
            Utolsó frissítés: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="section section--tight" aria-label="A tájékoztató szövege">
        <div className={`container ${styles.doc}`}>
          <h2>1. Az adatkezelő</h2>
          <p>
            <strong>{LEGAL_NAME}</strong>
            <br />
            Székhely: {ADDRESS.full}
            <br />
            Cégjegyzékszám: {COMPANY_REG_NO}
            <br />
            Adószám: {TAX_NO}
            <br />
            E-mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>

          <h2>2. Kapcsolatfelvételi űrlap</h2>
          <p>
            <strong>Kezelt adatok:</strong> név, cégnév, e-mail-cím, telefonszám (nem kötelező) és az
            üzenet szövege.
          </p>
          <p>
            <strong>Cél:</strong> a megkeresés megválaszolása, a személyes beszélgetés megszervezése és az
            ehhez szükséges kapcsolattartás. Az űrlap az adatokat e-mailben juttatja el hozzánk; a
            weboldal maga nem tárolja őket.
          </p>
          <p>
            <strong>Jogalap:</strong> az Ön hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet a
            jelölőnégyzet bejelölésével ad meg, valamint – ha a megkeresés szerződéskötést készít elő – a
            szerződés megkötését megelőző lépések megtétele (GDPR 6. cikk (1) bekezdés b) pont).
          </p>
          <p>
            <strong>Megőrzés:</strong> a megkeresés lezárásától számított legfeljebb 12 hónapig. Ha
            együttműködés jön létre, az adatokat a szerződéses jogviszony és a jogszabályi megőrzési
            kötelezettségek (például a számviteli előírások) szerint kezeljük tovább.
          </p>

          <h2>3. Önellenőrző kérdéssor és levélsorozat</h2>
          <p>
            <strong>Kezelt adatok:</strong> keresztnév, e-mail-cím, a tizenkét állításra adott válaszok és
            az ezekből számolt pontszám, a kitöltés időpontja, a hozzájárulás ténye, valamint az IP-cím
            visszafejthetetlen kivonata (hash).
          </p>
          <p>
            <strong>Cél:</strong> a kérdéssor értékelésének elküldése, a kitöltést követő levélsorozat
            kiküldése, a kapcsolatfelvétel, valamint az, hogy a kitöltésről értesítést kapjunk. Az IP-cím
            kivonatát kizárólag a visszaélések (tömeges, automatizált beküldés) kiszűrésére használjuk.
          </p>
          <p>
            <strong>A levélsorozat:</strong> a kitöltés után azonnal elküldjük az értékelést, majd a 2., az
            5., a 8. és a 12. napon egy-egy további levelet küldünk a módszerünkről és a díjmentes személyes
            beszélgetés lehetőségéről. Ennél több levelet a kérdéssor alapján nem küldünk. Minden levél
            alján egy kattintással leiratkozhat; leiratkozás után a sorozat további leveleit nem kapja meg.
          </p>
          <p>
            <strong>Jogalap:</strong> az Ön hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont; a gazdasági
            reklámot is tartalmazó levelek esetében a gazdasági reklámtevékenység alapvető feltételeiről és
            egyes korlátairól szóló 2008. évi XLVIII. törvény 6. § (1) bekezdése), amelyet a kérdéssor
            megnyitása előtt a jelölőnégyzet bejelölésével ad meg. Az IP-cím kivonatának kezelése a
            visszaélések megelőzéséhez fűződő jogos érdekünkön alapul (GDPR 6. cikk (1) bekezdés f) pont).
          </p>
          <p>
            <strong>Megőrzés:</strong> a kitöltés adatait a kitöltéstől számított 12 hónap után
            automatikusan töröljük, az IP-cím kivonatát 30 nap után. A levélküldő szolgáltatásnál tárolt
            adatai (keresztnév, e-mail-cím) a sorozat utolsó levele után 30 nappal automatikusan törlődnek.
            Ha a hozzájárulását korábban visszavonja vagy törlést kér, adatait haladéktalanul töröljük.
          </p>

          <h2>4. Kik férnek hozzá az adatokhoz?</h2>
          <p>
            Az adatokhoz a {LEGAL_NAME} ügyvezetői férnek hozzá. A weboldal működtetéséhez és a levelek
            kézbesítéséhez az alábbi adatfeldolgozókat vesszük igénybe:
          </p>
          <ul>
            <li>
              <strong>Stratos Webdesign</strong> (stratosweb.hu): a weboldal és a kérdéssor technikai
              üzemeltetése és karbantartása; ehhez hozzáférhet a kérdéssor tárolt kitöltéseihez.
            </li>
            <li>
              <strong>GitHub, Inc.</strong> (88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA): a
              weboldal tárhelye (GitHub Pages). Az űrlapok és a kérdéssor adatait nem tárolja; a
              weboldal kiszolgálásához technikai naplót (például IP-címet) kezelhet.
            </li>
            <li>
              <strong>Supabase, Inc.</strong> (USA; az adatok tárolási helye: Frankfurt, Németország): a
              kérdéssor kitöltéseinek fogadása és tárolása.
            </li>
            <li>
              <strong>Plus Five Five, Inc.</strong> (Resend, USA): a kérdéssor eredményének és a
              levélsorozatnak a kiküldése, valamint a leiratkozások kezelése.
            </li>
            <li>
              <strong>Microsoft Ireland Operations Limited</strong> (One Microsoft Place, South County
              Business Park, Leopardstown, Dublin 18, Írország): az {CONTACT_EMAIL} postafiók
              üzemeltetése, ahová a megkeresések és a kitöltésekről szóló értesítések érkeznek.
            </li>
          </ul>
          <p>
            Az Európai Gazdasági Térségen kívüli (egyesült államokbeli) adatfeldolgozók esetében az
            adattovábbítás az Európai Bizottság által elfogadott általános szerződési feltételek vagy az
            EU–USA adatvédelmi keretrendszer szerinti megfelelő garanciák alapján történik. Az adatokat
            harmadik félnek értékesítési céllal nem adjuk át.
          </p>

          <h2>5. Sütik és mérés</h2>
          <p>
            A weboldal a működéséhez feltétlenül szükséges technikai megoldásokon kívül nem használ
            követő sütiket, és nem alkalmaz látogatottságmérő vagy hirdetési szolgáltatást. A
            levélsorozat leveleiben nem mérjük a megnyitást és a kattintást. Ha ez a jövőben változik, a
            tájékoztatót frissítjük, és ahol szükséges, előzetes hozzájárulást kérünk.
          </p>

          <h2>6. Az Ön jogai</h2>
          <p>A GDPR alapján Ön jogosult:</p>
          <ul>
            <li>tájékoztatást kérni az adatai kezeléséről, és hozzáférni az adataihoz;</li>
            <li>az adatai helyesbítését vagy törlését kérni;</li>
            <li>az adatkezelés korlátozását kérni;</li>
            <li>tiltakozni a jogos érdeken alapuló adatkezelés ellen;</li>
            <li>adathordozhatóságot kérni a hozzájáruláson alapuló, automatizált adatkezelés esetén;</li>
            <li>
              a hozzájárulását bármikor visszavonni – a levélsorozatból a levelek alján lévő
              „Leiratkozás” linkkel is; a visszavonás nem érinti a korábbi adatkezelés jogszerűségét.
            </li>
          </ul>
          <p>
            Kérelmét a(z) <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> címen nyújthatja be;
            a kérelemre legkésőbb egy hónapon belül válaszolunk.
          </p>

          <h2>7. Jogorvoslat</h2>
          <p>
            Ha úgy ítéli meg, hogy az adatkezelés sérti a jogait, panasszal fordulhat a Nemzeti
            Adatvédelmi és Információszabadság Hatósághoz (1055 Budapest, Falk Miksa utca 9–11.;
            levelezési cím: 1363 Budapest, Pf. 9.; www.naih.hu), vagy bírósághoz fordulhat.
          </p>

          <h2>8. A tájékoztató módosítása</h2>
          <p>
            A tájékoztatót szükség esetén frissítjük; a mindenkor hatályos változat ezen az oldalon
            érhető el. Jelentős változásról a weboldalon külön jelzést adunk.
          </p>

          <p className={styles.back}>
            <Link href="/kapcsolat/">Vissza a kapcsolat oldalra</Link>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Adatkezelési tájékoztató",
            url: `${SITE_URL}/adatkezelesi-tajekoztato/`,
            inLanguage: "hu",
            isPartOf: { "@type": "WebSite", url: SITE_URL, name: "O2 Tanácsadó" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Adatkezelési tájékoztató", path: "/adatkezelesi-tajekoztato/" },
            ]),
          ),
        }}
      />
    </>
  );
}
