/**
 * Blogcikkek. A 2026. októberi szövegdokumentum a bloghoz nem adott új
 * szöveget, ezért a cikkek a dokumentum irányelveit és hangnemét követik:
 * tegezés, cégtulajdonos vezetőknek, ügyfélnév és kitalált állítás nélkül. Ahol
 * egy cikk az O2 munkájáról szól (céges diagnózis, havi együttműködés, coaching),
 * ott a dokumentum leírását követi.
 *
 * Minden cikk egy konkrét cégvezetői kérdésre válaszol, és egy szolgáltatási
 * oldal felé vezet. A `sections` szerkezete adja a H2-ket; a cikk H1-je a `title`.
 */

export interface PostSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Post {
  slug: string;
  title: string;
  /** SEO title (teljes). */
  seoTitle: string;
  description: string;
  /** ISO dátum. */
  date: string;
  /** Rövid kivonat a listákhoz. */
  excerpt: string;
  /** Témakör címkéje. */
  topic: string;
  /** Kapcsolódó szolgáltatási oldal (path). */
  service: string;
  serviceLabel: string;
  ctaTitle: string;
  ctaText: string;
  intro: string[];
  sections: PostSection[];
  /** Kapcsolódó cikkek (slug). */
  related: string[];
}

export const POSTS: Post[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
    title: "Hogyan csökkenthető a fluktuáció egy 20–200 fős kkv-ban?",
    seoTitle: "Hogyan csökkenthető a fluktuáció egy kkv-ban? | O2 Tanácsadó",
    description:
      "Fluktuáció csökkentése kkv-nál négy lépésben: kilépési adatok, valódi okok, a közvetlen vezető szerepe, megtartási terv a kulcsemberekre.",
    date: "2026-08-26",
    excerpt:
      "A fluktuáció csökkentése nem béremeléssel kezdődik, hanem azzal, hogy pontosan tudod, kik, mikor és miért mennek el. Négy lépés, ami egy 20–200 fős cégnél működik.",
    topic: "Munkaerő-megtartás",
    service: "/munkaero-megtartas/",
    serviceLabel: "Munkaerő-megtartás",
    ctaTitle: "Magas a fluktuáció a cégednél?",
    ctaText:
      "Beszéljük át, mit mutatnak a kilépések, és hol érdemes kezdeni. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    intro: [
      "Egy 60 fős cégnél évi 15 kilépés 25 százalékos fluktuációt jelent. Ez a szám önmagában nem mond sokat. Az számít, hogy a 15 emberből hány volt kulcsember, hányan mentek el az első évben, és hányan ugyanattól a vezetőtől. A fluktuáció csökkentése ezért nem eszközválasztással kezdődik, hanem adatokkal és az okok feltárásával.",
      "Az alábbi négy lépést azoknak a cégtulajdonosoknak írtuk, akiknek nincs HR-osztályuk, de van kilépési problémájuk.",
    ],
    sections: [
      {
        heading: "1. Nézd meg, kik mennek el, és mikor",
        paragraphs: [
          "Gyűjtsd össze az elmúlt 12–24 hónap kilépéseit egy egyszerű táblázatban: név, munkakör, közvetlen vezető, a belépés és a kilépés dátuma, ki kezdeményezte a kilépést, és mi volt az elhangzott indok. A legtöbb cégnél már ez a táblázat megmutatja a mintázatot.",
        ],
        bullets: [
          "Ha a kilépők nagy része az első 6–12 hónapban megy el, a kiválasztással vagy a beillesztéssel van baj.",
          "Ha egy vezető alatt kiugróan sokan mennek el, a vezetői működéssel van baj.",
          "Ha a két-négy éve a cégnél dolgozó jó teljesítők mennek el, a fejlődési lehetőség és az elismerés hiányzik.",
          "Ha egy munkakörcsaládban tartósan magas, a bér vagy a munkakörülmények nem versenyképesek.",
        ],
      },
      {
        heading: "2. Derítsd ki a valódi okokat, ne a kimondottakat",
        paragraphs: [
          "A kilépőbeszélgetésen a többség „jobb ajánlatot kapott”. Ez ritkán a teljes igazság: az emberek általában akkor kezdenek másik állást nézni, amikor valami elromlott a jelenlegiben. A valódi okokhoz három forrás vezet: bizalmas beszélgetések a maradókkal (ők látják, miért mentek el a többiek), néhány jól megválasztott, névtelenül megválaszolható kérdés, és pár kilépett kolléga megkeresése két-három hónappal a távozása után, amikor már őszintébben beszél.",
          "A leggyakoribb valódi okok jellemzően a közvetlen vezető, a tisztázatlan elvárások, a fejlődés hiánya, a következetlen szabályok és az elismerés hiánya. A bér a lista közepén van, nem az elején.",
        ],
      },
      {
        heading: "3. Kezdd a közvetlen vezetőnél",
        paragraphs: [
          "A kilépések okainak jelentős része a közvetlen vezetőnél van: hogyan ad visszajelzést, hogyan osztja el a munkát, mennyire következetes, és észreveszi-e, ha valaki elégedetlen. Egy 20–200 fős cégnél a középvezetők többsége vezetői felkészítés nélkül lett vezető, ezért ez nem személyes hiba, hanem a működés hibája.",
          "Gyakorlati lépések: rendszeres, rövid egyéni beszélgetések a vezető és minden beosztottja között (havonta 20–30 perc), egyértelmű, leírt elvárások, és a vezetők felkészítése a visszajelzésre és a nehéz beszélgetésekre. Ez utóbbi a vezetői tréning tipikus témája.",
        ],
      },
      {
        heading: "4. Készíts megtartási tervet a kulcsemberekre",
        paragraphs: [
          "Nem mindenkit lehet és nem is kell egyformán megtartani. Egy 20–200 fős cégben jellemzően 5–15 ember van, akinek a távozása komoly kárt okozna. Rájuk külön, egyéni terv kell: mi tartja itt őket, mi vinné el, mit tud adni a cég (felelősséget, fejlődést, rugalmasságot, részesedést az eredményből), és ki beszél velük erről rendszeresen.",
          "A megtartási terv nem titkos ígéretgyűjtemény, hanem tudatos vezetői figyelem. A legtöbb kulcsember nem többet akar, hanem azt, hogy lássák, és számoljanak vele.",
        ],
      },
      {
        heading: "Mit ne csinálj?",
        paragraphs: [],
        bullets: [
          "Ne emelj általánosan bért, mielőtt tudnád, miért mennek el az emberek: drága, és nem hat az okokra.",
          "Ne cafeteriával vagy csapatépítéssel válaszolj egy vezetői problémára.",
          "Ne fogadd el változtatás nélkül, hogy „ilyen a piac”: a fluktuáció egy része mindig a cég döntésein múlik.",
          "Ne várj egy évet az első lépéssel: a rendszeres vezetői beszélgetéseket akár holnap elkezdhetitek.",
        ],
      },
      {
        heading: "Összefoglalás",
        paragraphs: [
          "A fluktuáció csökkentése négy lépés: adatok, valódi okok, a közvetlen vezető működése, és egyéni terv a kulcsemberekre. A vezetői működésben néhány hét után látszik a változás, a kilépési számokban hosszabb idő kell hozzá. Ha a kilépések már a működést terhelik, érdemes kívülről ránézni, hol kezdd.",
        ],
      },
    ],
    related: [
      "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
      "mukodo-osztonzesi-rendszer-kkv-ban",
      "vezetoi-trening-vagy-vezetoi-coaching",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
    title: "Munkaerő-megtartási eszközök, amelyek nem csak béremelésről szólnak",
    seoTitle: "Munkaerő-megtartás eszközei béremelés nélkül | O2 Tanácsadó",
    description:
      "Kilenc munkaerő-megtartási eszköz kkv-knak, ami nem béremelésre épül: vezetői beszélgetés, elvárások, fejlődési út, rugalmasság, beillesztés, elismerés.",
    date: "2026-08-05",
    excerpt:
      "A bér a megtartás alapfeltétele, de ritkán az oka annak, hogy valaki marad. Kilenc eszköz, ami pénz helyett vezetői figyelembe kerül.",
    topic: "Munkaerő-megtartás",
    service: "/munkaero-megtartas/",
    serviceLabel: "Munkaerő-megtartás",
    ctaTitle: "Melyik eszköz illik a cégedhez?",
    ctaText:
      "A megtartási eszközök akkor működnek, ha a kilépések valódi okaira válaszolnak. Beszéljük át, mi az ok nálatok. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    intro: [
      "Amikor egy jó kolléga felmond, az első reflex a bérajánlat. Néha működik, de aki ellenajánlatra marad, gyakran egy éven belül mégis elmegy, mert az ok, ami miatt nézelődni kezdett, nem változott. A bér a megtartás alapfeltétele: ha jóval a piac alatt van, semmi más nem segít. Ha viszont a piac körül van, az alábbi eszközök többet számítanak, mint a következő emelés.",
    ],
    sections: [
      {
        heading: "1. Rendszeres egyéni beszélgetés a közvetlen vezetővel",
        paragraphs: [
          "Havi 20–30 perc, négyszemközt, nem a feladatokról, hanem arról, hogy van a kolléga, mi megy jól, mi nem, és mit szeretne. Ez az egyetlen eszköz, ami szinte minden kilépési okra hat, és semmibe nem kerül. A legtöbb cégnél mégsem létezik, mert a vezetők nem tudják, hogyan kell csinálni. Ezt meg lehet tanulni.",
        ],
      },
      {
        heading: "2. Tisztázott elvárások és munkakör",
        paragraphs: [
          "A bizonytalanság fáraszt. Ha a kolléga nem tudja pontosan, mi a dolga, miről dönthet, és miből látszik, hogy jól dolgozik, előbb-utóbb máshol keresi a tisztaságot. Egy jó munkaköri leírás és egy negyedéves beszélgetés az elvárásokról ezt rendezi.",
        ],
      },
      {
        heading: "3. Látható fejlődési út",
        paragraphs: [
          "Egy 20–200 fős cég nem tud nagyvállalati karrierlétrát kínálni, de fejlődést igen: új felelősség, egy projekt vezetése, egy terület átvétele, egy képzés, egy új kolléga betanítása. A lényeg, hogy a kolléga lássa: egy év múlva más lehet a szerepe, ha akarja. Ezt érdemes kimondani és rögzíteni.",
        ],
      },
      {
        heading: "4. Rugalmasság, ahol a munka engedi",
        paragraphs: [
          "Rugalmas munkakezdés, otthoni munka, műszakcsere, sűrített munkahét. Nem mindenhol megoldható, de ahol igen, ott az egyik legerősebb megtartó eszköz, különösen a családos és az ingázó kollégáknál. A szabályait írásban, mindenkire egyformán érvényesen érdemes rögzíteni, különben feszültséget okoz.",
        ],
      },
      {
        heading: "5. Tudatos beillesztés az első 90 napban",
        paragraphs: [
          "A kilépések jelentős része az első évben történik. Az első három hónap dönti el, hogy az új kolléga marad-e: kap-e mentort, tudja-e, mi a dolga, kap-e visszajelzést, találkozik-e a vezetőjével. Egy egyoldalas beillesztési terv és három rögzített beszélgetés (az első héten, az első hónap végén és a harmadik hónap végén) sok korai kilépést megelőz.",
        ],
      },
      {
        heading: "6. Elismerés, ami konkrét, és időben érkezik",
        paragraphs: [
          "Nem az év dolgozója díj, hanem az, hogy a vezető észreveszi és kimondja, ha valaki jól csinált valamit, lehetőleg még aznap. Ez a legolcsóbb és a leginkább elhanyagolt eszköz.",
        ],
      },
      {
        heading: "7. Következetes szabályok",
        paragraphs: [
          "Az emberek nem a szigorú szabályoktól mennek el, hanem az igazságtalanoktól: amikor ugyanazért az egyik kolléga jutalmat kap, a másik figyelmeztetést. Ha a vezetők egységesen értelmezik a szabályokat, az maga is megtartó erő.",
        ],
      },
      {
        heading: "8. Részesedés az eredményből",
        paragraphs: [
          "Ha a cég jól megy, a kollégák is érezzék. Egy egyszerű, átlátható, a cég céljaihoz kötött ösztönzési rendszer többet ér, mint az eseti jutalom, mert kiszámítható. Erről külön cikkben írunk.",
        ],
      },
      {
        heading: "9. A munka értelme",
        paragraphs: [
          "A kollégák nagy része nem tudja, mire használja az ügyfél, amit ő csinál, és hogyan járul hozzá a cég eredményéhez. Ezt negyedévente, konkrétan, számokkal elmondani nem HR-eszköz, hanem vezetői feladat, és meglepően sokat számít.",
        ],
      },
      {
        heading: "Hogyan válassz az eszközök közül?",
        paragraphs: [
          "Ne vezesd be mind a kilencet egyszerre. Nézd meg a kilépési adatokat, derítsd ki a valódi okokat, és arra a két-három eszközre koncentrálj, ami az okokra válaszol. A beillesztés a korai kilépésekre hat, a vezetői beszélgetések és a fejlődési út a két-négy éve a cégnél dolgozó jó teljesítők távozására, a következetes szabályok a bérfeszültségre.",
        ],
      },
    ],
    related: [
      "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
      "mukodo-osztonzesi-rendszer-kkv-ban",
      "munkakori-leiras-minta-mit-tartalmazzon",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkakori-leiras-minta-mit-tartalmazzon",
    title: "Munkaköri leírás minta: mit tartalmazzon, és milyen hibákat kerülj el?",
    seoTitle: "Munkaköri leírás: mit tartalmazzon, mit kerüljünk? | O2 Tanácsadó",
    description:
      "Mit tartalmazzon egy jó munkaköri leírás egy kkv-nál? A hasznos elemek, a hét leggyakoribb hiba, és mikor kell a teljes rendszert rendezni. Letölthető minta.",
    date: "2026-07-15",
    excerpt:
      "A legtöbb munkaköri leírás azért készül, mert kell, és ezért nem használja senki. Mi különbözteti meg a hasznosat a papírtól, és melyik hét hibát érdemes elkerülni?",
    topic: "Munkakörök",
    service: "/munkakori-leiras-minta/",
    serviceLabel: "Munkaköri leírás minta",
    ctaTitle: "Sok munkakört kell rendbe tenni?",
    ctaText:
      "Ha a munkakörök rendezése az egész céget érinti, a céges diagnózissal kezdjük, és a havi együttműködésben folytatjuk. Beszéljük át a helyzetet.",
    intro: [
      "A munkaköri leírás a munkaszerződés melléklete, és a legtöbb cégnél azért készül, mert a munkajog megköveteli. Ezért általános, másolt szöveg lesz belőle, amit a belépés után senki nem vesz elő. Pedig a jó munkaköri leírás a vezetés egyik legegyszerűbb eszköze: tisztázza, ki miért felel, mire lehet hivatkozni, és mihez lehet mérni a teljesítményt.",
      "Ebben a cikkben végignézzük, mit tartalmazzon, mit hagyj ki belőle, és milyen hibákat látunk a leggyakrabban. A cikk végén a letölthető, másolható mintánkra is hivatkozunk.",
    ],
    sections: [
      {
        heading: "Mit tartalmazzon egy jó munkaköri leírás?",
        paragraphs: ["A szerkezet egyszerű, és minden munkakörre jó:"],
        bullets: [
          "Alapadatok: a munkakör megnevezése, szervezeti egység, közvetlen felettes, a munkakör betöltője, az érvényesség kezdete.",
          "A munkakör célja: egy-két mondatban, miért létezik ez a munkakör a cégben. Ha ezt nem lehet leírni, a munkakörrel van baj.",
          "Fő feladatok: 5–8 pont, a legfontosabbtól a kevésbé fontos felé. Nem minden tevékenység, csak a lényegesek.",
          "Hatáskör és döntési jogkör: miről dönthet egyedül, mihez kell jóváhagyás, milyen összeghatárig, mit írhat alá.",
          "Felelősség: miért felel (eredmény, minőség, határidő, eszközök, adatok), és kinek számol be.",
          "Kapcsolatok: kivel dolgozik együtt a cégen belül és kívül (ügyfelek, beszállítók, hatóságok).",
          "Követelmények: végzettség, tapasztalat, szakmai és személyes kompetenciák, és ha kell, jogosítvány, nyelvtudás.",
          "Teljesítménymutatók: 2–4 mérőszám vagy konkrét elvárás, amiből látszik, hogy jól végzi a munkáját.",
          "Helyettesítés: kit helyettesít, és ki helyettesíti őt.",
          "Záradék: dátum, aláírások, és hogy a munkaszerződés melléklete.",
        ],
      },
      {
        heading: "Mit hagyj ki belőle?",
        paragraphs: [],
        bullets: [
          "Az általános kötelezettségeket, amik minden munkavállalóra vonatkoznak (munkavédelem, titoktartás, együttműködés): ezek a munkaszerződésbe és a belső szabályzatokba valók.",
          "A „minden egyéb, a vezető által meghatározott feladat” típusú gumimondatot: egy rövid, korlátozott változata elég.",
          "A cég értékeit és küldetését: ide nem tartoznak.",
          "A bért és a juttatásokat: ezek a munkaszerződés részei, nem a munkaköri leírásé.",
        ],
      },
      {
        heading: "A hét leggyakoribb hiba",
        paragraphs: [],
        bullets: [
          "Túl hosszú: háromoldalas felsorolás, amit senki nem olvas el. Egy-két oldal az ideális.",
          "Túl általános: internetről másolt szöveg, ami bármelyik cégnél állhatna.",
          "Az emberhez igazodik, nem a munkakörhöz: ha a kolléga kilép, „a munkaköre is megszűnik”.",
          "Hiányzik a döntési jogkör: a kolléga nem tudja, miről dönthet, ezért minden kérdéssel a vezetőjéhez megy.",
          "Nincs teljesítménymutató: a teljesítményértékelésnél nincs mihez mérni.",
          "Soha nem frissül: a cég megduplázódott, a munkaköri leírás ötéves.",
          "E-mailben adják át: a munkaköri leírást beszélgetésben kell átadni, különben papír marad.",
        ],
      },
      {
        heading: "Mikor kell az egész rendszert rendbe tenni?",
        paragraphs: [
          "Ha egy-két munkakörről van szó, a minta és egy jó beszélgetés a vezetővel elég. Ha viszont rendszeresek a felelősségi viták, a szervezeti felépítés nem követi a cég működését, vagy 20-nál több munkakört kell egyszerre rendezni, akkor a munkakörök rendezése szervezeti kérdés: először a felépítést és a döntési szinteket kell tisztázni, és csak utána a munkaköri leírásokat. Ilyenkor a céges diagnózissal érdemes kezdeni.",
        ],
      },
      {
        heading: "Letölthető minta",
        paragraphs: [
          "A fenti szerkezetet követő, szabadon másolható és letölthető munkaköri leírás mintánkat a Munkaköri leírás minta oldalon találod, rövid kitöltési útmutatóval.",
        ],
      },
    ],
    related: [
      "toborzas-es-kivalasztas-gyorsabban-pontosabban",
      "szervezeti-diagnozis-mikor-erdemes",
      "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "mikor-van-szuksege-kkv-nak-hr-tanacsadora",
    title: "Mikor van szüksége egy kkv-nak HR-tanácsadóra?",
    seoTitle: "Mikor kell HR-tanácsadó egy kkv-nak? 7 jel | O2 Tanácsadó",
    description:
      "Hét jel, hogy egy 20–200 fős cégnek HR-tanácsadóra van szüksége, és három helyzet, amikor nincs. Mit csinál a HR-tanácsadó, és mire számíthatsz?",
    date: "2026-06-24",
    excerpt:
      "Nem minden HR-gondhoz kell tanácsadó. Hét jel, amikor igen, három helyzet, amikor nem, és mire számíthatsz az első beszélgetésen.",
    topic: "HR-tanácsadás",
    service: "/hr-tanacsadas-kkv-knak/",
    serviceLabel: "Havi együttműködés",
    ctaTitle: "Ismerős a jelek közül néhány?",
    ctaText:
      "Az első beszélgetésen közösen eldöntjük, van-e értelme együtt dolgozni. Ha kiderül, hogy nem tanácsadóra van szükséged, ezt megmondjuk. Díjmentes, és nem jár elköteleződéssel.",
    intro: [
      "Egy 20 fős cégnél a HR a tulajdonos feladata, és ez rendben van. Ahogy a cég nő, a kiválasztás, a megtartás, a fejlesztés, a motiváció és a vezetők közötti viták egyre több időt visznek el, és visszatérően nálad kötnek ki. Ekkora méretnél gyakran nincs érdemi HR-részleg, legfeljebb HR-adminisztráció. A kérdés ezért nem az, hogy kell-e HR, hanem hogy milyen formában.",
    ],
    sections: [
      {
        heading: "Hét jel, hogy HR-tanácsadóra van szükség",
        paragraphs: [],
        bullets: [
          "Heti több órát töltesz HR-ügyekkel: felvétel, kilépés, bérvita, szabadság, konfliktus.",
          "Egy kulcspozíció három hónapnál régebben betöltetlen, és nem világos, miért.",
          "A jó emberek egy-két év után elmennek, és a kilépőbeszélgetésekből nem áll össze a kép.",
          "A béremelés az egyetlen ösztönző eszköz, és már nem működik.",
          "A vezetők másképp értelmezik a szabályokat: túlóra, otthoni munka, jutalom, figyelmeztetés.",
          "A cég nőne, de nem tudod, milyen munkakörökre és milyen vezetőkre lesz szükség a következő két-három évben.",
          "Több HR-projekt indult már (munkakörök, értékelés, ösztönzés), de egyikből sem lett működő rendszer.",
        ],
      },
      {
        heading: "Három helyzet, amikor nem tanácsadó kell",
        paragraphs: [],
        bullets: [
          "Ha csak bérszámfejtésre, munkaügyi adminisztrációra van szükség: erre könyvelő vagy bérszámfejtő partner való.",
          "Ha a gond egyetlen ember egyéni helyzete: erre vezetői coaching vagy munkajogász a válasz.",
          "Ha nem szeretnél változtatni a saját működéseden: a HR-tanácsadás a vezetői döntéseket is érinti, és ez a tulajdonost is.",
        ],
      },
      {
        heading: "Mit csinál egy HR-tanácsadó egy 20–200 fős cégnél?",
        paragraphs: [
          "Nálunk ez két lépés. Először kívülről megnézzük a céget: interjúk a vezetőkkel és a kulcsemberekkel, beszélgetések veled, majd írásos összefoglaló, amit személyesen mutatunk be. Utána havonta rendszeresen ott vagyunk a cégnél: vezetői és HR-tanácsadás, egyéni és team coachingok, a folyamatok és a belső kommunikáció fejlesztése, a nem adminisztratív HR-feladatok átvétele.",
          "Nem építünk kicsiben nagyvállalati HR-rendszert. Megnézzük, melyik néhány döntés viszi előre, vagy tartja vissza a céget, és arra olyan megoldást adunk, amit a meglévő vezetők fenn tudnak tartani.",
        ],
      },
      {
        heading: "Egyszeri projekt vagy havi együttműködés?",
        paragraphs: [
          "Egy egyszeri projekt egy helyzetet rendez, aztán véget ér. A havi együttműködésben folyamatosan jelen vagyunk, és ez azért fontos, mert a cég környezete folyamatosan változik, a HR-t is mindig hozzá kell igazítani. Az együttműködés akkor sem ér véget, amikor hátrébb lépsz: folytatjuk az új vezetéssel.",
        ],
      },
      {
        heading: "Mire számíthatsz az első beszélgetésen?",
        paragraphs: [
          "Egy-másfél órás személyes beszélgetésre. Elmondod, mi nehéz most a cégben, mi pedig figyelünk, és mesélünk a saját cégünkről is. Közösen eldöntjük, van-e értelme együtt dolgozni. Ha kiderül, hogy nem tanácsadóra van szükséged, ezt megmondjuk. A beszélgetés díjmentes, és nem jár elköteleződéssel.",
        ],
      },
    ],
    related: [
      "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
      "szervezeti-diagnozis-mikor-erdemes",
      "toborzas-es-kivalasztas-gyorsabban-pontosabban",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "szervezeti-diagnozis-mikor-erdemes",
    title: "Szervezeti diagnózis: mikor érdemes elvégezni, és mire használható?",
    seoTitle: "Szervezeti diagnózis: mikor érdemes és mire jó? | O2 Tanácsadó",
    description:
      "Mi a szervezeti diagnózis, mikor érdemes elvégezni egy 20–200 fős cégnél, hogyan zajlik, és mit kapsz belőle? Gyakorlati leírás cégtulajdonosoknak.",
    date: "2026-06-03",
    excerpt:
      "A diagnózis nem felmérés, hanem kívülről érkező kép arról, mi hol akad a cég működésében, és miért. Öt helyzet, amikor érdemes, és amit a végén a kezedben tartasz.",
    topic: "Céges diagnózis",
    service: "/szervezetfejlesztes/",
    serviceLabel: "Céges diagnózis",
    ctaTitle: "Nem látod, hol akad a cég?",
    ctaText:
      "Beszéljük át, mi indokolja nálatok a diagnózist, és mire terjedjen ki. A diagnózis díjáról a személyes beszélgetések után adunk ajánlatot.",
    intro: [
      "A legtöbb cégvezető érzi, ha a cég nem működik jól: lassulnak a döntések, ismétlődnek a hibák, fáradnak a jó emberek. Azt viszont ritkán látja pontosan, mi az ok. A felépítés? A folyamatok? A középvezetők? A saját működése? A kollégák ritkán jeleznek vissza a főnöküknek, ezért belülről ezt nehéz látni. A diagnózis erre ad választ, mielőtt drága és rossz irányú változtatásba kezdenél.",
    ],
    sections: [
      {
        heading: "Mi a szervezeti diagnózis?",
        paragraphs: [
          "Kívülről érkező, nyílt kép arról, hogyan működik a céged. Nálunk céges diagnózisnak hívjuk: 60–75 perces személyes, egyéni interjúk a vezetőkkel és a kulcsemberekkel, beszélgetések veled, majd írásos összefoglaló, amit személyesen mutatunk be. Nem elégedettségi felmérés, nem audit, és nem általánosságokkal teli tanácsadói jelentés, hanem a cégedre szabott helyzetkép, ami alapján dönteni lehet.",
        ],
      },
      {
        heading: "Öt helyzet, amikor érdemes elvégezni",
        paragraphs: [],
        bullets: [
          "Gyors növekedés után: a létszám két-három év alatt megduplázódott, és a régi működés már nem tartja.",
          "Tulajdonos- vagy vezetőváltás előtt: aki átveszi a céget, annak pontos képre van szüksége arról, mit vesz át.",
          "Ismétlődő problémák esetén: ugyanaz a hiba, ugyanaz a konfliktus, ugyanaz a késés tér vissza, a korábbi megoldások nem tartottak.",
          "Nagyobb változás előtt: új üzletág, új telephely, új rendszer bevezetése előtt tudni kell, mit bír el a szervezet.",
          "Ha a vezetők nem értenek egyet abban, mi a baj: a diagnózis közös, tényekre épülő képet ad.",
        ],
      },
      {
        heading: "Hogyan zajlik?",
        paragraphs: ["Egymásra épülő lépésekben:"],
        bullets: [
          "Személyes beszélgetések: a megállapodás előtt akár két-három beszélgetés is van, hogy mindkét fél tudja, mire vállalkozik.",
          "Interjúk: a vezetőkkel és a kulcsemberekkel külön-külön beszélgetünk. A titoktartás itt is alap: az interjúkon elhangzottakat nem név szerint adjuk tovább.",
          "Összefoglaló és bemutatás: az írásos összefoglalót személyesen mutatjuk be, hogy kérdezhess, és együtt döntsünk a folytatásról.",
          "360 fokos értékelés, ha kell: ha a helyzet kívánja, egy-egy vezetőről online kitölthető 360 fokos értékelést is javaslunk, amiben a felettese, a beosztottai és a mellérendelt munkatársai mondanak róla véleményt.",
        ],
      },
      {
        heading: "Mit kapsz a végén?",
        paragraphs: [
          "Írásos összefoglalót, amit személyesen mutatunk be: a cég erősségeit, amikre építeni lehet, a nehézségeit, a ki nem mondott, visszatérő problémákat, és javaslatokat a jobb működéshez, például a belső kommunikáció, a döntési jogkörök, a feladatmegosztás, a teljesítményértékelés és a munkaszervezés témájában. Része a távlati irány vázlata is, vagyis hogy honnan hova juthatunk.",
          "A távlati irányt itt még nem dolgozzuk ki részletesen, mert a részletek a havi együttműködésben, veled közösen alakulnak ki. Ha nem folytatjuk, akkor is használható képet kapsz a cég helyzetéről.",
        ],
      },
      {
        heading: "Mire nem való a diagnózis?",
        paragraphs: [],
        bullets: [
          "Nem egyes kollégák értékelése: az összefoglalóban a cég működéséről írunk, nem egyes kollégák kijelentéseiről.",
          "Nem helyettesíti a döntést: a diagnózis képet ad, a folytatásról te döntesz.",
          "Nem egyszeri csoda: a cég változik, ezért idővel érdemes újra ránézni.",
        ],
      },
    ],
    related: [
      "mikor-van-szuksege-kkv-nak-hr-tanacsadora",
      "vezetoi-trening-vagy-vezetoi-coaching",
      "munkakori-leiras-minta-mit-tartalmazzon",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vezetoi-trening-vagy-vezetoi-coaching",
    title: "Vezetői tréning vagy vezetői coaching: melyik mire való?",
    seoTitle: "Vezetői tréning vagy coaching: melyik mire való? | O2 Tanácsadó",
    description:
      "Vezetői tréning és vezetői coaching: mi a különbség, melyik milyen helyzetben működik egy 20–200 fős cégnél, és mikor érdemes a kettőt együtt használni?",
    date: "2026-05-13",
    excerpt:
      "A tréning közös eszköztárat ad egy vezetői csoportnak, a coaching egy vezető saját helyzetével foglalkozik. Hat tipikus helyzet, és hogy melyikre melyik a válasz.",
    topic: "Vezetőfejlesztés",
    service: "/vezetoi-trening/",
    serviceLabel: "Vezetői tréning",
    ctaTitle: "Nem tudod, melyik kell a vezetőidnek?",
    ctaText:
      "Az első beszélgetésen közösen megnézzük, hogy tréning, coaching vagy a kettő együtt illik-e a vezetőidhez. Díjmentes, és nem jár elköteleződéssel.",
    intro: [
      "„Kellene valami a vezetőinknek.” Sok beszélgetés így kezdődik. A „valami” mögött két, egymástól nagyon különböző eszköz áll: a vezetői tréning és a vezetői coaching. Mindkettő fejleszt, de más helyzetre, más módon és más eredménnyel. A rossz választás nem árt, de nem is hoz sokat.",
    ],
    sections: [
      {
        heading: "Mi a vezetői tréning?",
        paragraphs: [
          "Csoportos fejlesztés, ami közös vezetői eszköztárat ad: delegálás, visszajelzés, teljesítménybeszélgetés, értekezletvezetés, konfliktuskezelés. Akkor működik, ha a résztvevők a saját helyzeteiket gyakorolják, és konkrét vállalással zárnak. Előnye, hogy a vezetők egységes keretben kezdenek dolgozni, és közös nyelvet kapnak. Korlátja, hogy egy-egy vezető egyéni elakadására nem tud mélyen ráállni.",
        ],
      },
      {
        heading: "Mi a vezetői coaching?",
        paragraphs: [
          "Négyszemközti, bizalmas beszélgetéssorozat egy vezetővel: szerepváltás, egy halogatott döntés végiggondolása, delegálás, terhelés, konfliktus egy vezetőtárssal. A coach nem tanít, hanem kérdez, tükröz és keretet tart, a vezető pedig a saját döntéseire jut. Minden ülés a vezető aktuális helyzetéből indul, és konkrét döntéssel vagy lépéssel zárul. Előnye a mélység és a bizalmasság, korlátja, hogy nem ad közös eszköztárat egy csoportnak.",
        ],
      },
      {
        heading: "Hat tipikus helyzet, és hogy melyikre melyik a válasz",
        paragraphs: [],
        bullets: [
          "Öt középvezető, akik szakemberből lettek vezetők, és mindegyikük máshogy irányít: tréning.",
          "Át szeretnéd adni az operatív irányítást, de nem tudod, hogyan: coaching.",
          "Az új termelésvezető a korábbi kollégái felett nem tud vezetőként fellépni: coaching, esetleg a tréning után.",
          "A vezetői csapat tagjai külön-külön jól dolgoznak, együtt mégsem születik döntés: egyik sem, hanem team coaching.",
          "A vezetők nem adnak visszajelzést, és a teljesítményproblémákat hónapokig görgetik: tréning, utánkövetéssel.",
          "Egy kulcsvezető a kiégés közelében van, és ez már a működést is érinti: coaching.",
        ],
      },
      {
        heading: "Mikor érdemes a kettőt együtt használni?",
        paragraphs: [
          "Gyakran a kettő együtt a legjobb: a vezetői csapat tréningen kap közös eszköztárat, az a két-három vezető pedig, akinél egyéni elakadás vagy szerepváltás van, coachingban folytatja. A tréning így nem marad egyszeri esemény, a coaching pedig nem lóg a levegőben, mert van közös keret, amire épül. Nálunk mindkettő a havi együttműködés része.",
        ],
      },
      {
        heading: "Mire figyelj a választásnál?",
        paragraphs: [],
        bullets: [
          "Előzetes beszélgetések nélkül ne rendelj se tréninget, se coachingot: a helyzet határozza meg az eszközt.",
          "Tréningnél az utánkövetés legalább annyit számít, mint maga az alkalom: egy nap önmagában senkit nem változtat meg.",
          "Coachingnál az illeszkedés dönt: az első beszélgetés után a vezető döntse el, szeretne-e együtt dolgozni a coachcsal.",
          "Legyen világos, mit vársz a vezetőidtől a fejlesztés után.",
        ],
      },
    ],
    related: [
      "szervezeti-diagnozis-mikor-erdemes",
      "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
      "mikor-van-szuksege-kkv-nak-hr-tanacsadora",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "mukodo-osztonzesi-rendszer-kkv-ban",
    title: "Hogyan építsünk működő ösztönzési rendszert kkv-ban?",
    seoTitle: "Működő ösztönzési rendszer kkv-ban: 6 lépés | O2 Tanácsadó",
    description:
      "Ösztönzési rendszer kkv-nál: hat lépés a cég céljaitól a bevezetésig, és öt hiba, ami miatt a prémiumrendszer több vitát okoz, mint motivációt.",
    date: "2026-04-22",
    excerpt:
      "A legtöbb prémiumrendszer több vitát okoz, mint motivációt, mert túl bonyolult, túl ritka, vagy a kolléga nem tud hatni rá. Hat lépés egy egyszerű, működő ösztönzési rendszerhez.",
    topic: "Munkaerő-megtartás",
    service: "/munkaero-megtartas/",
    serviceLabel: "Munkaerő-megtartás",
    ctaTitle: "Ösztönzési rendszert vezetnél be?",
    ctaText:
      "Beszéljük át, honnan indulsz, és mi illik a cégedhez. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    intro: [
      "Az ösztönzési rendszer sok cégnél úgy születik, hogy a tulajdonos év végén kioszt valamit, aztán valaki megsértődik. A következő évben jön egy táblázat tíz mutatóval, amit senki nem ért, és fél év után már senki nem néz. A működő ösztönzési rendszer ennél egyszerűbb, de tudatosabb.",
    ],
    sections: [
      {
        heading: "1. Indulj a cég két-három céljából",
        paragraphs: [
          "Az ösztönzési rendszer arra való, hogy a kollégák energiája oda menjen, ahol a cégnek szüksége van rá. Ezért először a cég következő évi két-három legfontosabb céljából kell kiindulni: árbevétel, nyereség, egy új termék, kevesebb selejt, az ügyfelek megtartása. Ha ezek nincsenek kimondva, az ösztönzési rendszer nem tud jó lenni.",
        ],
      },
      {
        heading: "2. Kevés mutató, amire a kolléga hatni tud",
        paragraphs: [
          "Munkakörcsaládonként két-három mutató, nem több. És csak olyan, amire a kolléga a saját munkájával hat: a termelésben dolgozó a selejtre és a határidőre, az értékesítő a fedezetre és az új ügyfelekre, a vezető a csapata eredményére és a fluktuációra. A cég nyeresége a tulajdonos mutatója, nem a betanított munkásé.",
        ],
      },
      {
        heading: "3. Egyszerű, kiszámítható képlet",
        paragraphs: [
          "Ha a kolléga nem tudja fejben kiszámolni, mennyit kap, ha teljesít, a rendszer nem motivál. Egy jó képlet egy mondatban elmondható: „Ha a csapat selejtje 2 százalék alatt marad, mindenki bruttó X forintot kap negyedévente.” A sávos, súlyozott, tízváltozós képletek papíron igazságosabbak, a gyakorlatban használhatatlanok.",
        ],
      },
      {
        heading: "4. Negyedéves ritmus",
        paragraphs: [
          "Az éves prémium túl messze van ahhoz, hogy a napi munkára hasson. A havi túl gyakori, és sok adminisztrációval jár. Negyedévente a kolléga még látja az összefüggést a munkája és az eredmény között, a cég pedig még tud korrigálni, ha valami nem működik.",
        ],
      },
      {
        heading: "5. Próbaüzem és személyes bevezetés",
        paragraphs: [
          "Az első negyedévet érdemes próbaüzemként futtatni: mérni, kifizetni, de jelezni, hogy a rendszer még finomodik. A bevezetés vezetői feladat: minden vezető a saját csapatának, személyesen mondja el, mi a cél, mi a mutató, mi a képlet, és válaszol a kérdésekre. Egy e-mailben kiküldött szabályzat még nem ösztönzési rendszer.",
        ],
      },
      {
        heading: "6. Mérés és évenkénti felülvizsgálat",
        paragraphs: [
          "A mutatókat láthatóan és rendszeresen kell közölni, hogy a kollégák negyedév közben is tudják, hol tartanak. Évente egyszer érdemes az egészet átnézni: változtak-e a cég céljai, működik-e a mutató, és van-e olyan hatása, amit nem akartatok, például hogy a mennyiség a minőség rovására megy.",
        ],
      },
      {
        heading: "Öt hiba, ami tönkreteszi az ösztönzési rendszert",
        paragraphs: [],
        bullets: [
          "Túl sok mutató, és olyanok, amikre a kolléga nem tud hatni: nem érti, és nem is érdekli.",
          "„Megérzés alapú” jutalom: igazságtalanságérzetet szül, és hiteltelenné teszi a rendszert.",
          "A célok év közben változnak, a kolléga pedig utólag tudja meg.",
          "A prémium alapbérré válik: ha mindig mindenki megkapja, nem ösztönöz, csak elvárás lesz belőle.",
          "A vezetők nem tudják elmagyarázni: ha a vezető sem érti, a csapat sem fogja.",
        ],
      },
      {
        heading: "Mit ne várj az ösztönzési rendszertől?",
        paragraphs: [
          "Az ösztönzési rendszer nem pótolja a jó vezetést, a tisztázott elvárásokat és a fejlődési lehetőséget. Ha a kilépések oka a közvetlen vezető, a prémium nem tartja meg az embereket. Az ösztönzés a megtartás egyik eszköze a sok közül, és csak akkor működik, ha a többi is rendben van.",
        ],
      },
    ],
    related: [
      "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
      "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
      "mikor-van-szuksege-kkv-nak-hr-tanacsadora",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "toborzas-es-kivalasztas-gyorsabban-pontosabban",
    title: "Toborzás és kiválasztás: hogyan legyen gyorsabb és pontosabb?",
    seoTitle: "Toborzás és kiválasztás: gyorsabban, pontosabban | O2 Tanácsadó",
    description:
      "Toborzás és kiválasztás kkv-nál öt lépésben: kulcspozíciók, valós munkakörre épülő hirdetés, strukturált interjú, gyors döntés, tudatos próbaidő.",
    date: "2026-04-01",
    excerpt:
      "A toborzás sok cégnél akkor indul, amikor már ég a ház, és azért lassú, mert nem világos, kit keresnek. Öt lépés, amitől gyorsabb és pontosabb lesz a kiválasztás.",
    topic: "Toborzás és kiválasztás",
    service: "/hr-tanacsadas-kkv-knak/",
    serviceLabel: "Havi együttműködés",
    ctaTitle: "Hónapok óta betöltetlen egy kulcspozíció?",
    ctaText:
      "Beszéljük át, kit keres valójában a cég, és hogyan lehet a kiválasztást gyorsabbá és pontosabbá tenni. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    intro: [
      "Egy 20–200 fős cégnél a toborzás jellemzően három ok miatt lassú: nem világos, kit keresnek; a hirdetés és az interjú nem a valós munkakörre épül; és a döntés túl sok ember között, túl lassan születik meg. A jó jelöltek közben máshová mennek. Az alábbi öt lépés ezt a három okot kezeli.",
    ],
    sections: [
      {
        heading: "1. Döntsd el, melyek a kulcspozíciók",
        paragraphs: [
          "Nem minden pozíció egyformán fontos. Egy 80 fős cégnél jellemzően 8–12 olyan pozíció van, aminek a betöltetlensége közvetlen kárt okoz: a termelésvezető, a kulcsügyfelek értékesítője, a főkönyvelő, a műszakvezetők. Ezekre több figyelem, nagyobb költségkeret és gyorsabb döntés jár, mint a többire. Ha ez nincs eldöntve, a cég minden pozíciót ugyanúgy toboroz, és a fontosakra nem jut elég figyelem.",
        ],
      },
      {
        heading: "2. Írd le a valós munkakört, mielőtt hirdetsz",
        paragraphs: [
          "A hirdetés gyakran a régi munkaköri leírásból vagy egy másik cég hirdetéséből készül. A jelölt így nem azt kapja, amire számít, és a próbaidő végén kilép. Hirdetés előtt érdemes a vezetővel tisztázni: mi a munkakör célja, mi az öt legfontosabb feladat, miről dönt a kolléga egyedül, mi a nehéz ebben a munkában, és miből látszik három hónap múlva, hogy jó volt a választás. Ez egy óra, és sok toborzási időt megspórol.",
        ],
      },
      {
        heading: "3. Strukturált interjú, ugyanazokkal a kérdésekkel",
        paragraphs: [
          "A „beszélgessünk egy kicsit” interjú a rokonszenvet méri, nem az alkalmasságot. A strukturált interjúban minden jelölt ugyanazt a 8–10 kérdést kapja a munkakör valós helyzeteiről, például: „Mondjon egy példát, amikor egy határidőt nem tudott tartani. Mit tett?” A válaszokat előre rögzített szempontok szerint értékelitek. Ez nem bonyolultabb, mint a kötetlen beszélgetés, csak pontosabb, és két interjúztató is össze tudja hasonlítani a jelölteket.",
        ],
      },
      {
        heading: "4. Kevés döntéshozó, gyors döntés",
        paragraphs: [
          "Egy jó jelölt egy-két hétig vár. Ha a döntéshez a tulajdonos, az ügyvezető, a területvezető és a HR is kell, és ők három hét alatt tudnak egyeztetni, a jelölt már máshol dolgozik. Kulcspozíciónál két interjús kör, két döntéshozó, és az utolsó interjú után három munkanapon belül ajánlat. Ehhez előre el kell dönteni, ki dönt, és milyen bérsávban.",
        ],
      },
      {
        heading: "5. A próbaidő legyen a kiválasztás része",
        paragraphs: [
          "A próbaidő nem formalitás, hanem a kiválasztás utolsó lépése. Az első 90 napra legyen beillesztési terv: mit kell megtanulnia, ki segíti, és mikor kap visszajelzést (az első héten, az első hónap végén és a harmadik hónap végén). A harmadik hónap végén a vezető tudatosan dönt, hogy a kolléga marad-e. Sok rossz felvétel azért marad évekig a cégnél, mert a próbaidő végén senki nem döntött.",
        ],
      },
      {
        heading: "Mikor érdemes külső segítséget bevonni?",
        paragraphs: [
          "Ha egy kulcspozíció három hónapnál régebben betöltetlen, ha a felvett kollégák jelentős része a próbaidő alatt kilép, vagy ha egyszerre több pozíciót kell betölteni, és nincs, aki vigye a folyamatot. A kiválasztás és a megtartás a havi együttműködésben is visszatérő téma: azok közé a HR-kérdések közé tartoznak, amik a legtöbb cégnél a tulajdonos idejét viszik el.",
        ],
      },
    ],
    related: [
      "munkakori-leiras-minta-mit-tartalmazzon",
      "mikor-van-szuksege-kkv-nak-hr-tanacsadora",
      "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
    ],
  },
];

export const POST_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p])) as Record<string, Post>;

/** Cikkek dátum szerint csökkenő sorrendben. */
export function sortedPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("hu-HU", { year: "numeric", month: "long", day: "numeric" }).format(d);
}

/** Becsült olvasási idő percben (200 szó/perc). */
export function readingMinutes(post: Post) {
  const text = [
    ...post.intro,
    ...post.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}
