/**
 * Azoknak az országos oldalaknak a tartalma, amelyekhez a 2026. októberi
 * szövegdokumentum nem adott új szöveget (vezetői tréning, munkaköri leírás
 * minta, munkaerő-megtartás). A szöveg a dokumentum irányelveit és hangnemét
 * követi: tegezés, a két alapító „mi” hangja, cégtulajdonos vezetőknek, nincs
 * ügyfélnév, logó, kitalált vélemény vagy ár, konkrét eredményt nem ígér. Az új
 * szövegű oldalak (havi együttműködés, céges diagnózis, vezetői és team coaching)
 * adatai az offers.ts-ben vannak.
 */

export type ServiceSlug = "vezetoi-trening" | "munkakori-leiras-minta" | "munkaero-megtartas";

export interface Faq {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface ServicePageData {
  slug: ServiceSlug;
  path: string;
  /** Rövid név hivatkozásokhoz. */
  label: string;
  /** SEO title (teljes, márkanévvel). */
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  /** Rövid tények a nyitó szekció mellett. */
  facts: string[];
  /** schema.org Service.serviceType */
  serviceType: string;
  problem: { title: string; paragraphs: string[] };
  forWhom: { title: string; intro?: string; items: string[] };
  symptoms: { title: string; intro?: string; items: string[] };
  process: { title: string; intro?: string; steps: ProcessStep[] };
  results: { title: string; intro: string; items: string[]; caveat: string };
  faq: Faq[];
  /** Kapcsolódó szolgáltatási oldalak (path). */
  related: string[];
  /** Kapcsolódó blogcikkek (slug). */
  posts: string[];
  /** A záró „Első beszélgetés” sáv. */
  cta: { title: string; text: string };
}

const FACTS = [
  "20–200 fős cégeknek",
  "Országosan, személyesen a cégnél vagy akár online is",
  "Gyakorló cégvezető-tanácsadók segítségével",
];

export const SERVICE_PAGES_DATA: ServicePageData[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "vezetoi-trening",
    path: "/vezetoi-trening/",
    label: "Vezetői tréning",
    title: "Vezetői tréning középvezetőknek, kkv-knak | O2 Tanácsadó",
    description:
      "Vezetői tréning középvezetőknek: delegálás, visszajelzés, nehéz beszélgetések a cég saját helyzetein. Nem kész tematika, hanem a havi munka része.",
    h1: "Vezetői tréning: a középvezetőid szakmailag jók, vezetőként mégis hozzád fordulnak minden kérdéssel",
    eyebrow: "Vezetői tréning · a havi együttműködés része",
    lead:
      "A legtöbb középvezető azért lett vezető, mert a legjobb volt a szakmájában. Senki nem mutatta meg neki, hogyan delegáljon, hogyan adjon visszajelzést, vagy hogyan kezdjen bele egy nehéz beszélgetésbe. A vezetői tréningen ezt gyakoroljuk be, a saját csapatuk valós helyzetein, hogy kevesebb döntés kerüljön vissza hozzád.",
    facts: FACTS,
    serviceType: "Vezetői tréning",
    problem: {
      title: "A jó szakemberből nem lesz magától jó vezető",
      paragraphs: [
        "Egy 60 fős cégnél jellemzően 5–8 ember vezet másokat: műszakvezető, csoportvezető, projektvezető, részlegvezető. A többségük szakemberként volt kiváló, vezetőként viszont magára maradt. Ezért inkább maga csinálja meg a feladatot, a csapata pedig a kérdéseivel hozzád jön. A problémák addig nőnek, amíg már nem lehet nem foglalkozni velük, és a végén megint te döntesz.",
        "Nem általános vezetői programot tartunk. A vezetőiddel, a cég konkrét helyzetein gyakoroljuk be azt a néhány vezetői eszközt, ami a napi működésben a legtöbbet számít. Kész, konzerv tematikát nem adunk el: azt, hogy miről legyen szó, a veled és a vezetőkkel folytatott beszélgetések döntik el.",
      ],
    },
    forWhom: {
      title: "Kinek való?",
      items: [
        "Közép- és csoportvezetőknek, akik szakmai háttérből kerültek vezetői szerepbe.",
        "Neked, ha azt szeretnéd, hogy a vezetőid egységesen és önállóan irányítsák a csapatukat.",
        "Cégeknek, ahol a vezetők gyors növekedés, átszervezés vagy generációváltás miatt új szerepbe kerültek.",
        "Vezetői csapatoknak, amelyeknek nincs közös vezetői nyelve és gyakorlata.",
      ],
    },
    symptoms: {
      title: "Tipikus helyzetek, amikor érdemes a vezetőkkel dolgozni",
      items: [
        "A középvezető inkább maga csinálja meg a feladatot, mert „úgy gyorsabb”.",
        "A visszajelzés elmarad, vagy csak akkor hangzik el, amikor már nagy a baj.",
        "A gyenge teljesítményt hónapokig tűrik, mert a vezető nem tudja, hogyan kezdjen bele a beszélgetésbe.",
        "Minden vezető másképp és más szabályok szerint vezeti a csapatát.",
        "A csapat a középvezető helyett hozzád fordul a kérdéseivel.",
        "Az új vezető szakmailag hiteles, de a korábbi kollégái felett nehezen lép vezetői szerepbe.",
      ],
    },
    process: {
      title: "Hogyan zajlik?",
      intro:
        "Ez nem egy előre legyártott csomag. A tréning a vezetőid valós helyzeteiből áll össze, és a havi együttműködés része.",
      steps: [
        {
          title: "Beszélgetés veled",
          text: "Tisztázzuk, mit vársz a vezetőidtől, és hol akadnak el most. Van, hogy kiderül: tréning helyett előbb diagnózisra vagy egyéni coachingra van szükség.",
        },
        {
          title: "Beszélgetések a vezetőkkel",
          text: "Minden résztvevővel röviden, bizalmasan beszélgetünk: milyen helyzetekben bizonytalan, mi nehéz ma a csapatával. Ebből áll össze, miről legyen szó.",
        },
        {
          title: "Közös alkalmak",
          text: "A vezetők a saját ügyeiken gyakorolnak: delegálás, visszajelzés, teljesítménybeszélgetés, nehéz beszélgetés, értekezlet vezetése. Mindenki konkrét vállalással zár: mit csinál másképp a saját csapatával a következő hetekben.",
        },
        {
          title: "Utánkövetés",
          text: "Néhány hét múlva visszanézzük, mi épült be a mindennapokba, és hol kell korrigálni. Ahol egy vezetőnek egyéni elakadása van, vezetői coachinggal folytatjuk.",
        },
      ],
    },
    results: {
      title: "Mi változik?",
      intro: "Ezeket a változásokat célozzuk, és együtt követjük:",
      items: [
        "A középvezetők több feladatot és döntést vállalnak, kevesebb kérdés kerül vissza hozzád.",
        "A teljesítményproblémákat időben és egyenesen kezelik, nem görgetik hónapokig.",
        "A csapatok egységes keretben működnek: hasonló szabályok, hasonló visszajelzési gyakorlat.",
        "Az új kollégák gyorsabban beilleszkednek, mert a vezető tudja, mit és hogyan várjon el.",
        "A vezetők közös nyelvet használnak, ezért könnyebben dolgoznak együtt.",
      ],
      caveat:
        "Egy tréning önmagában nem változtat meg egy vezetőt. Az eredmény azon múlik, mennyire gyakorolják a vezetők a saját helyzeteiken, mennyire világos, mit vársz tőlük, és hogy van-e utánkövetés. Konkrét számot ezért nem ígérünk.",
    },
    faq: [
      {
        q: "Csak tréninget is kérhetek?",
        a: "A vezetői tréning nálunk a havi együttműködés része, mert a hatása a következő hónapokban dől el. Ha ezzel kezdenénk, az első beszélgetésen közösen megnézzük, mi a legjobb belépő.",
      },
      {
        q: "Egy alkalom vagy több?",
        a: "A beszélgetések döntik el. Egy szűk téma, például a visszajelzés, akár egy alkalommal is feldolgozható. Ha a vezetők szerepe is változik, több alkalomban dolgozunk, közöttük néhány hetes szünettel, hogy legyen idő kipróbálni, amit megbeszéltünk.",
      },
      {
        q: "Vezetői tréning vagy vezetői coaching: melyik kell?",
        a: "A tréning közös eszköztárat ad egy vezetői csoportnak, a coaching egy vezető saját helyzetével foglalkozik, négyszemközt. Ha több vezetőnek hasonló a nehézsége, tréninggel kezdünk. Ha egy kulcsvezetőnél szerepváltás vagy elakadás van, coachinggal. A kettő gyakran kiegészíti egymást.",
      },
      {
        q: "Hol tartjátok a tréninget?",
        a: "Országosan, jellemzően a cégnél vagy egy általad választott helyszínen, egyes alkalmak online is mehetnek. A cégnél tartott alkalom előnye, hogy a vezetők a saját környezetükben, a saját ügyeiken dolgoznak.",
      },
      {
        q: "Milyen témák szoktak előkerülni?",
        a: "Leggyakrabban a delegálás és a számonkérés, a visszajelzés, a teljesítménybeszélgetés, a nehéz beszélgetések (figyelmeztetés, elválás), az értekezlet vezetése, a döntés-előkészítés, a konfliktusok kezelése és a vezetői szerep vállalása a korábbi kollégák felett. Hogy nálatok miről legyen szó, azt a beszélgetések döntik el.",
      },
      {
        q: "Honnan látszik, hogy működött?",
        a: "A vezetők vállalásaiból és az utánkövetésből. Előre megbeszéljük veled azt is, miből fogod észrevenni a változást, például hogy kevesebb kérdés jut vissza hozzád, és ezt néhány hónap múlva közösen visszanézzük.",
      },
    ],
    related: ["/vezetoi-coaching/", "/team-coaching/", "/szervezetfejlesztes/", "/hr-tanacsadas-kkv-knak/"],
    posts: ["vezetoi-trening-vagy-vezetoi-coaching", "hogyan-csokkentheto-a-fluktuacio-kkv-ban"],
    cta: {
      title: "Első beszélgetés",
      text: "Beszéljük át, hol akadnak el most a vezetőid. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkakori-leiras-minta",
    path: "/munkakori-leiras-minta/",
    label: "Munkaköri leírás minta",
    title: "Munkaköri leírás minta: letölthető sablon | O2 Tanácsadó",
    description:
      "Munkaköri leírás minta ingyen: másolható, letölthető sablon és rövid útmutató arról, mit tartalmazzon egy jó munkaköri leírás, és mit hagyj ki belőle.",
    h1: "Munkaköri leírás minta: sablon és útmutató kkv-knak",
    eyebrow: "Munkaköri leírás · minta és útmutató",
    lead:
      "Az alábbi mintát szabadon másolhatod, letöltheted, és a saját cégedre alakíthatod. Utána röviden leírjuk, mit tartalmazzon egy jó munkaköri leírás, mit hagyj ki belőle, és mikor érdemes a munkaköröket egészében rendbe tenni.",
    facts: [
      "Szabadon másolható és letölthető",
      "Egy-két oldalas, kitöltési útmutatóval",
      "Gyakorló cégvezetők tapasztalatából",
    ],
    serviceType: "Munkakörök és munkaköri leírások kialakítása",
    problem: {
      title: "Miért nem elég egy letöltött sablon önmagában?",
      paragraphs: [
        "A munkaköri leírás a munkaszerződés melléklete, és a legtöbb cégnél azért készül, mert kell. Ilyenkor általános, másolt szöveg lesz belőle: a kolléga nem tudja belőle, mit várnak tőle, a vezetője nem tud rá hivatkozni, és sem a kiválasztásnál, sem a teljesítményértékelésnél nem lehet rá építeni.",
        "Egy jó munkaköri leírás rövid, konkrét, és a cég tényleges működéséből indul ki. Leírja, miért van a munkakör, mi az öt-nyolc legfontosabb feladata, miről dönthet a kolléga egyedül, kinek felel, és miből látszik, hogy jól végzi a munkáját. A lenti minta ezt a szerkezetet követi.",
      ],
    },
    forWhom: {
      title: "Kinek készült a minta?",
      items: [
        "Cégtulajdonosoknak és ügyvezetőknek, akik gyorsan, de nem felületesen szeretnének munkaköri leírást készíteni.",
        "Irodavezetőknek, HR-eseknek és pénzügyi vezetőknek, akiknél a HR-adminisztráció is a feladat része.",
        "Középvezetőknek, akik a saját csapatuk munkaköreit szeretnék tisztázni.",
        "Cégeknek, ahol nőtt a létszám, és a régi munkaköri leírások már nem fedik a valós feladatokat.",
      ],
    },
    symptoms: {
      title: "Miből látszik, hogy a munkakörök rendezésre szorulnak?",
      items: [
        "Ugyanazt a feladatot ketten is csinálják, egy másikat viszont senki.",
        "A munkaköri leírások évek óta nem frissültek, miközben a cég megduplázódott.",
        "Az új kolléga az első hetekben nem tudja, pontosan mi a dolga, és kitől kérdezhet.",
        "A teljesítményértékelésnél nincs mihez mérni, mert az elvárások nincsenek leírva.",
        "A vezető nem tud hivatkozni a munkaköri leírásra, mert az általános és semmitmondó.",
        "A munkakörök az emberekhez igazodnak, nem a cég működéséhez: ha valaki kilép, „a munkaköre is megszűnik”.",
      ],
    },
    process: {
      title: "Hogyan segítünk, ha sok munkakört kell rendezni?",
      intro:
        "Ha nem egy, hanem tucatnyi munkakört kell rendbe tenni, a minta már nem elég. Ilyenkor ez szervezeti kérdés, és a havi együttműködésben így dolgozunk rajta:",
      steps: [
        {
          title: "A valós működés áttekintése",
          text: "A szervezeti ábrát összevetjük azzal, ahogy a cég ténylegesen működik: ki kinek felel valójában, hol vannak átfedések, és hol nincs felelős.",
        },
        {
          title: "Beszélgetések a munkakörökről",
          text: "A munkakör betöltőjével és a vezetőjével külön-külön beszélgetünk: mi a tényleges feladat, mi a fontos, és mi az, ami rendszeresen bizonytalan.",
        },
        {
          title: "A munkaköri leírások megírása",
          text: "Egységes szerkezetben, a cég saját nyelvén, munkakörönként egy-két oldalon. A hasonló munkaköröket csoportokba rendezzük, hogy a rendszer később is karbantartható legyen.",
        },
        {
          title: "Átadás beszélgetésben",
          text: "A vezetőkkel átnézzük és véglegesítjük a leírásokat, a kollégáknak pedig beszélgetésben adják át, nem e-mailben. Így a munkaköri leírás a napi vezetés eszköze lesz, nem papír a fiókban.",
        },
      ],
    },
    results: {
      title: "Mit ad a cégnek a rendezett munkaköri rendszer?",
      intro: "A jól megírt munkaköri leírás nem HR-dokumentum, hanem vezetői eszköz:",
      items: [
        "A felelősségek egyértelműek, a feladatok nem esnek ki és nem duplázódnak.",
        "A kiválasztás pontosabb, mert a hirdetés és az interjú a valós munkakörre épül.",
        "Az új kolléga az első naptól tudja, mi a dolga.",
        "A teljesítménybeszélgetésnek van alapja: leírt elvárás és látható eredmény.",
        "Kevesebb kérdés kerül hozzád, mert mindenki tudja, miről dönthet egyedül.",
      ],
      caveat:
        "A munkaköri leírás önmagában nem pótolja a vezetést: ha a vezető nem használja, papír marad. Ezért a bevezetést mindig vezetői beszélgetéssel kötjük össze.",
    },
    faq: [
      {
        q: "Kötelező munkaköri leírást készíteni?",
        a: "A Munka Törvénykönyve szerint a munkáltató köteles írásban tájékoztatni a munkavállalót a munkakörébe tartozó feladatokról, legkésőbb a munkaviszony kezdetétől számított hét napon belül. A gyakorlatban ezt a munkaköri leírás teljesíti, amely a munkaszerződés melléklete. A jogi tartalmat érdemes munkajogásszal egyeztetni, mi a munkakör tartalmával és a szervezeti oldalával foglalkozunk.",
      },
      {
        q: "Milyen hosszú legyen egy munkaköri leírás?",
        a: "Egy-két oldal. Ha ennél hosszabb, senki nem olvassa el, ha rövidebb, nem mond semmit. A fő feladatokból 5–8 pont legyen, a hatáskörből és a felelősségből néhány konkrét mondat.",
      },
      {
        q: "Mi a különbség a munkaköri leírás és a munkaszerződés között?",
        a: "A munkaszerződés a jogviszony alapadatait rögzíti: a munkakör megnevezését, az alapbért, a munkahelyet és a munkaidőt. A munkaköri leírás azt részletezi, mi a munkakör tartalma: feladatok, hatáskör, felelősség, elvárások. A munkaköri leírást a munkáltató egyoldalúan is módosíthatja, ha a munkakör megnevezése és lényege nem változik.",
      },
      {
        q: "Használhatom a mintát több munkakörre?",
        a: "Igen, a szerkezet minden munkakörre jó. A tartalmat viszont minden munkakörnél újra kell gondolni, mert a cél, a fő feladatok és a döntési jogkör munkakörönként más. Ha 20-nál több munkakört kell rendezni, érdemes munkakörcsaládokban gondolkodni.",
      },
      {
        q: "Ki írja meg: a vezető vagy a HR?",
        a: "A tartalmat a közvetlen vezető ismeri a legjobban, a szerkezetet és az egységességet a HR vagy egy külső tanácsadó adja. A legjobb munkaköri leírások a vezető és a munkakör betöltőjének közös beszélgetéséből születnek.",
      },
      {
        q: "Mikor érdemes segítséget kérni?",
        a: "Ha a munkakörök rendezése az egész céget érinti, ha a felelősségi viták már a működést terhelik, vagy ha növekedés, átszervezés, generációváltás kíséri. Ilyenkor a munkakörök rendezése a céges diagnózissal kezdődik, és a havi együttműködésben folytatódik.",
      },
    ],
    related: ["/szervezetfejlesztes/", "/hr-tanacsadas-kkv-knak/", "/vezetoi-trening/", "/munkaero-megtartas/"],
    posts: ["munkakori-leiras-minta-mit-tartalmazzon", "toborzas-es-kivalasztas-gyorsabban-pontosabban"],
    cta: {
      title: "Első beszélgetés",
      text: "Ha nem egy, hanem sok munkakört kell rendbe tenni, beszéljük át a helyzetet. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkaero-megtartas",
    path: "/munkaero-megtartas/",
    label: "Munkaerő-megtartás",
    title: "Munkaerő-megtartás, fluktuáció csökkentése | O2 Tanácsadó",
    description:
      "Miért mennek el a jó kollégák? Megnézzük, kik, mikor és miért távoznak, és arra adunk megoldást, amit a vezetőid fenn tudnak tartani. Országosan.",
    h1: "Munkaerő-megtartás: hogyan csökkenthető a fluktuáció egy 20–200 fős cégnél?",
    eyebrow: "Munkaerő-megtartás · a havi együttműködés része",
    lead:
      "Egy 20–200 fős cégnél a fluktuáció nem statisztika, hanem konkrét emberek: a műszakvezető, aki átment a konkurenciához, a könyvelő, aki két év után elment, az új kolléga, aki a próbaidő végén felmondott. Mi azzal kezdjük, hogy megnézzük, kik mennek el, mikor és miért. Csak utána beszélünk eszközökről.",
    facts: FACTS,
    serviceType: "Munkaerő-megtartás és ösztönzési rendszer",
    problem: {
      title: "A fluktuáció ára, amit senki nem számol ki",
      paragraphs: [
        "Egy betanított kolléga pótlása (hirdetés, interjúk, betanítás, a kieső teljesítmény, a többiek túlterhelése) jellemzően több havi bérének megfelelő költség. Egy kulcsember távozása ennél is többe kerül: viszi a tudást, akadozik az ügyfélkapcsolat, és néha követi a következő két kilépő. A legtöbb cég ezt nem számolja ki, ezért kevesebbet szán a megtartásra, mint amennyibe a fluktuáció kerül.",
        "A megtartás nem egyetlen eszköz. Nem béremelés, nem cafeteria, és nem is egy csapatépítő nap. Az, hogy tudod, kiket szeretnél megtartani, érted, miért maradnak vagy mennek, és a vezetőid napi működése ezt támogatja. A kilépések okai legtöbbször a közvetlen vezetőnél, a tisztázatlan elvárásoknál és a fejlődés hiányánál vannak, nem a bértáblánál.",
      ],
    },
    forWhom: {
      title: "Kinek való?",
      intro: "Olyan 20–200 fős cégeknek, ahol:",
      items: [
        "az elmúlt egy-két évben érezhetően nőtt a fluktuáció, vagy egy-egy területen tartósan magas;",
        "kulcsemberek, jó teljesítők vagy frissen betanított kollégák mennek el;",
        "a béremelés az egyetlen megtartó eszköz, és ebben már nem tudsz vagy nem akarsz versenyezni;",
        "nem tudod pontosan, miért mennek el az emberek, mert nincs velük rendszeres beszélgetés;",
        "ösztönzési rendszert vezetnél be, de nem tudod, mire és hogyan.",
      ],
    },
    symptoms: {
      title: "Tipikus tünetek",
      items: [
        "Sokan mennek el a próbaidő végén vagy az első évben.",
        "A jó teljesítők távoznak, a gyengébbek maradnak.",
        "Egy részlegnél vagy egy vezető alatt kiugróan sokan mennek el.",
        "A kilépőbeszélgetésen mindenki „jobb ajánlatot kapott”, a valódi ok nem derül ki.",
        "A bérek a piaci szint körül vannak, mégis mennek az emberek.",
        "A prémiumrendszer nem motivál, csak vitát okoz.",
      ],
    },
    process: {
      title: "Hogyan dolgozunk a megtartáson?",
      intro:
        "A megtartás a havi együttműködés egyik leggyakoribb témája. Nem kész programot hozunk, hanem az okokból indulunk ki.",
      steps: [
        {
          title: "Személyes beszélgetések",
          text: "Veled kezdjük: kiket veszít a cég, mit próbáltatok már, és mit mutatnak a számok. A megállapodás előtt akár két-három beszélgetés is van, hogy mindketten lássuk, mire vállalkozunk.",
        },
        {
          title: "Az okok feltárása",
          text: "Megnézzük a kilépési adatokat (ki, mikor, honnan ment el), és bizalmasan beszélgetünk a vezetőkkel és a kollégákkal. Egy külsősnek hamarabb kimondják, amit a cégen belül senki nem mond ki.",
        },
        {
          title: "Megtartási lépések",
          text: "Az okokra válaszolunk: a vezetői gyakorlatra, az elvárások és a fejlődési lehetőségek tisztázására, az új kollégák beillesztésére, a kulcsemberek egyéni helyzetére. Csak azt javasoljuk, amit a vezetőid fenn tudnak tartani.",
        },
        {
          title: "Ösztönzési rendszer, ha kell",
          text: "Ha indokolt, a cég céljaihoz kötött, egyszerű és átlátható ösztönzési rendszert alakítunk ki, amit a kollégák értenek, és ami nem okoz több vitát, mint motivációt.",
        },
        {
          title: "Visszanézés",
          text: "Rendszeresen visszanézzük, hogyan alakulnak a kilépések, és a vezetőkkel együtt korrigálunk, ahol kell.",
        },
      ],
    },
    results: {
      title: "Mire számíthatsz?",
      intro: "A megtartási munka eredménye a kilépésekben és a vezetők működésében látszik:",
      items: [
        "Tudod, kik a kulcsembereid, és tudatosan foglalkozol a megtartásukkal.",
        "Ismered a kilépések valódi okait, és azokra reagálsz, nem általános béremeléssel.",
        "A vezetők rendszeresen beszélgetnek a kollégáikkal, és időben észreveszik, ha valaki menni készül.",
        "Az ösztönzési rendszer a cég céljait szolgálja, és a kollégák értik.",
        "Kevesebben mennek el a próbaidő alatt és az első évben, mert a beillesztés tudatos.",
      ],
      caveat:
        "Azt, hogy mennyivel csökken a fluktuáció, előre nem ígérjük: az ágazat, a helyi munkaerőpiac és a cég döntései is befolyásolják. Az első látható eredmények általában 3–6 hónap után jelentkeznek.",
    },
    faq: [
      {
        q: "Mi számít magas fluktuációnak?",
        a: "Ágazatonként más. Termelésben és kereskedelemben a 20–30 százalékos éves fluktuáció is előfordul, szellemi munkaköröknél már a 10–15 százalék fölötti is figyelmeztető. A számnál fontosabb, hogy kik mennek el: ha a jó teljesítők és a kulcsemberek, akkor alacsony fluktuáció mellett is baj van.",
      },
      {
        q: "Mivel lehet megtartani az embereket a béremelésen kívül?",
        a: "A közvetlen vezető minőségével, tisztázott elvárásokkal, látható fejlődési lehetőséggel, rugalmassággal, tudatos beillesztéssel, rendszeres visszajelzéssel és elismeréssel, és azzal, hogy a kollégák értik, mire jó a munkájuk. Ezek többsége nem pénzbe, hanem vezetői figyelembe kerül.",
      },
      {
        q: "Hogyan érdemes ösztönzési rendszert építeni?",
        a: "A cég két-három legfontosabb céljából kiindulva, kevés és egyértelmű mutatóval, olyan eredményhez kötve, amire a kolléga hatni tud. Legyen egyszerűen kiszámolható, negyedévesnél ne legyen ritkább, és a vezetők tudják elmagyarázni. Az első negyedévet érdemes próbaüzemben futtatni.",
      },
      {
        q: "Mennyi idő alatt látszik a változás?",
        a: "Az első lépések, például a rendszeres vezetői beszélgetések és a tudatos beillesztés, néhány héten belül elindulhatnak. Az első látható eredmények 3–6 hónap után jelentkeznek, a kilépési számokban pedig általában hosszabb idő után látszik megbízhatóan a változás.",
      },
      {
        q: "Mérni kell a munkavállalói elégedettséget?",
        a: "Ha a helyzet kívánja. Nagyvállalati felmérés helyett egy 20–200 fős cégnél a bizalmas beszélgetések és néhány jól megválasztott kérdés pontosabb képet ad. Ha egy-egy vezető működése a kérdés, 360 fokos értékelést is javasolhatunk.",
      },
      {
        q: "Ez külön szolgáltatás?",
        a: "A megtartás a havi együttműködés része: a kiválasztás, a megtartás, a fejlesztés és a motiváció azok a HR-kérdések, amik a legtöbb cégnél visszatérően a tulajdonos idejét viszik el. Ha nem tudod, hol kezdd, a céges diagnózis megmutatja.",
      },
    ],
    related: ["/hr-tanacsadas-kkv-knak/", "/szervezetfejlesztes/", "/vezetoi-trening/", "/munkakori-leiras-minta/"],
    posts: [
      "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
      "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
      "mukodo-osztonzesi-rendszer-kkv-ban",
    ],
    cta: {
      title: "Első beszélgetés",
      text: "Beszéljük át, miért mennek el nálatok az emberek. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    },
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICE_PAGES_DATA.map((s) => [s.slug, s]),
) as Record<ServiceSlug, ServicePageData>;
