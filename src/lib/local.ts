/**
 * Térségi oldalak. A 2026. októberi szövegdokumentum ezekhez nem adott új
 * szöveget, ezért a dokumentum irányelveit és hangnemét követik: tegezés,
 * cégtulajdonos vezetőknek, a dokumentum szerinti ajánlat (céges diagnózis,
 * havi együttműködés, 360 fokos értékelés), óvatos, nem statisztikai térségi
 * megfogalmazás, ügyfélnév és kitalált állítás nélkül.
 */
import type { OfferId } from "./content";

export interface LocalPage {
  slug: "hr-tanacsadas-budapest" | "hr-tanacsadas-gyor" | "hr-tanacsadas-szeged";
  path: string;
  /** Rövid név a hivatkozásokhoz. */
  label: string;
  city: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  /** Szolgáltatási terület természetes leírása, bekezdésenként. */
  areaTitle: string;
  area: string[];
  /** Térségi helyzetek, amelyekben segíteni tudunk – óvatos, nem statisztikai megfogalmazással. */
  contextTitle: string;
  contexts: { title: string; text: string; offer: OfferId }[];
  /** Térség-specifikus mondat szolgáltatásonként. */
  offerNotes: Record<OfferId, string>;
  cta: { title: string; text: string };
}

const CTA = {
  title: "Első beszélgetés",
  text: "Beszéljük át személyesen, mi viszi el most a legtöbb energiádat a cégnél. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
};

const AREA_CONTACT =
  "A vármegye bármely településéről ugyanúgy kereshetsz minket. Írd le röviden, mi viszi el most a legtöbb energiádat, és megbeszéljük, hol találkozzunk.";

export const LOCAL: LocalPage[] = [
  {
    slug: "hr-tanacsadas-budapest",
    path: "/hr-tanacsadas-budapest/",
    label: "Budapest és Pest vármegye",
    city: "Budapest",
    county: "Pest vármegye",
    title: "HR tanácsadás Budapesten és Pest vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás budapesti és Pest vármegyei 20–200 fős cégeknek: céges diagnózis, havi együttműködés, coaching. Gyakorló cégvezetők, budapesti székhely.",
    h1: "HR tanácsadás Budapesten és Pest vármegyében",
    eyebrow: "Budapest · Pest vármegye",
    intro: [
      "Az O2 Tanácsadó székhelye Budapesten, a VIII. kerületben van. Budapesti és Pest vármegyei cégtulajdonos vezetőkkel dolgozunk 20–200 fős vállalkozásokban, hogy a cég egyre kevésbé függjön a napi jelenlétüktől. Gyakorló cégvezetők vagyunk: amit javaslunk, azt a saját cégünkben 25 éve így csináljuk.",
      "Budapest közigazgatásilag nem része Pest vármegyének, a két térség gazdasága és munkaerőpiaca mégis szorosan összefonódik: sok kolléga az agglomerációból jár be dolgozni, és sok cég a városhatáron kívül működik. Ezért ezen az oldalon a főváros és a vármegye cégeiről együtt írunk.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Budapest minden kerületéből várjuk a 20–200 fős cégek tulajdonosait és vezetőit, a belvárosi szolgáltató cégektől a külső kerületek ipari és logisztikai vállalkozásaiig.",
      "Pest vármegyéből ugyanígy várjuk az agglomeráció településein működő cégeket, például Érd, Budaörs, Törökbálint, Budakeszi, Szentendre, Dunakeszi, Fót, Gödöllő, Vecsés, Gyál és Szigetszentmiklós térségéből, és a vármegye távolabbi városainak vállalkozásait is, például Vác és a Dunakanyar, Cegléd, Nagykőrös, Dabas, Monor vagy Ráckeve környékéről.",
    ],
    contextTitle: "Ismerős helyzetek fővárosi és Pest vármegyei cégeknél",
    contexts: [
      {
        title: "Verseny a nagyvállalatokkal a szakemberekért",
        text: "Budapesten egy 20–200 fős cég gyakran ugyanazokért a szakemberekért versenyez, mint a nagyvállalatok. Ilyenkor nem a bér az egyetlen érv: az is számít, mennyire önállóan dolgozhatnak a kollégák, és milyen vezetőt kapnak. A havi együttműködésben a kiválasztással és a megtartással is foglalkozunk.",
        offer: "havi-egyuttmukodes",
      },
      {
        title: "Gyors növekedés, lemaradó szervezet",
        text: "Egy fővárosi vagy agglomerációs cég néhány év alatt 20 főről 100 fölé nőhet. A munkakörök és a döntési szintek ilyenkor lemaradnak a létszám mögött, és minden kérdés hozzád fut be. A céges diagnózis megmutatja, hol akad a működés.",
        offer: "ceges-diagnozis",
      },
      {
        title: "Ingázás és megtartás",
        text: "Az agglomerációból ingázó kollégák előtt több munkahely is nyitva áll. Ilyen környezetben a megtartás nem eseti kérdés: a közvetlen vezetőn, a tisztázott elvárásokon és a fejlődési lehetőségen múlik.",
        offer: "havi-egyuttmukodes",
      },
      {
        title: "Vezetők új szerepben",
        text: "Növekvő cégeknél a kulcsemberek gyakran a szakmájukból kerülnek vezetői szerepbe. Ha nem látod pontosan, hogyan vezetnek, a 360 fokos értékelés több irányból ad visszajelzést, a coaching pedig segít az átmenetben.",
        offer: "ertekeles-360",
      },
    ],
    offerNotes: {
      "ceges-diagnozis":
        "Fővárosi cégeknél gyakori, hogy a cég gyorsabban nőtt, mint a szervezete. A diagnózis kívülről mutatja meg, hol futnak össze nálad a döntések.",
      "havi-egyuttmukodes":
        "Budapesten és Pest vármegyében személyesen, a cégnél dolgozunk veled és a vezetőiddel, rendszeresen.",
      "ertekeles-360":
        "Ha a vezetőid szakmailag erősek, de nem látod, hogyan vezetnek, a 360 fokos értékelés több irányból ad összevethető visszajelzést.",
    },
    cta: CTA,
  },
  {
    slug: "hr-tanacsadas-gyor",
    path: "/hr-tanacsadas-gyor/",
    label: "Győr-Moson-Sopron vármegye",
    city: "Győr",
    county: "Győr-Moson-Sopron vármegye",
    title: "HR tanácsadás Győr-Moson-Sopron vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás győri, soproni, mosonmagyaróvári és Győr-Moson-Sopron vármegyei 20–200 fős cégeknek: céges diagnózis, havi együttműködés, coaching.",
    h1: "HR tanácsadás Győrben és Győr-Moson-Sopron vármegyében",
    eyebrow: "Győr · Győr-Moson-Sopron vármegye",
    intro: [
      "Győr-Moson-Sopron vármegye Északnyugat-Magyarország ismert ipari térsége: ipari beszállítók, logisztikai, kereskedelmi és szolgáltató cégek működnek itt, köztük sok 20–200 fős vállalkozás. Ezeknek a cégeknek a tulajdonosaival dolgozunk, személyesen a cégnél vagy akár online is, hogy a cég egyre kevésbé függjön a napi jelenlétüktől.",
      "A nagy ipari munkáltatók és az osztrák, illetve szlovák határ közelsége miatt itt a kiválasztás és a megtartás sok cégtulajdonosnak visszatérő gond. Ha a jó emberek elmennek, a munkájuk legtöbbször nálad köt ki.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Győrből és a környékéről ugyanúgy várjuk a cégtulajdonosokat, mint a vármegye többi részéről: Mosonmagyaróvár és a Szigetköz, Sopron és a Fertő-táj, a Rábaköz (Csorna, Kapuvár), Pannonhalma térsége, Tét, Jánossomorja, Fertőd és Fertőszentmiklós vállalkozásaitól egyaránt.",
      AREA_CONTACT,
    ],
    contextTitle: "Ismerős helyzetek Győr-Moson-Sopron vármegyei cégeknél",
    contexts: [
      {
        title: "Elvándorlás a nagy munkáltatókhoz és a határon túlra",
        text: "Ha a cég képzett kollégákat veszít a térség nagy munkáltatói vagy a határon túli munka javára, a megtartás nem béremelési verseny. Azt kell tisztázni, mit kínál a cég, amit egy nagyvállalat nem: önállóságot, látható fejlődést, jó közvetlen vezetőt.",
        offer: "havi-egyuttmukodes",
      },
      {
        title: "Kulcsemberek, akiket nehéz pótolni",
        text: "Ipari és műszaki cégeknél egy-egy kulcspozíció hónapokig betöltetlen maradhat, és addig valakinek, legtöbbször neked, kell helyettesítenie. Érdemes kívülről megnézni, hol függ a működés egy-egy embertől, és hogyan lehet úgy megosztani a tudást, hogy egy távozás ne állítsa meg a céget.",
        offer: "ceges-diagnozis",
      },
      {
        title: "Műszakos, több telephelyes működés",
        text: "Műszakos vagy több telephelyes cégeknél könnyen elmosódik, ki miért felel. A diagnózis megmutatja, hol esnek ki vagy duplázódnak a feladatok, és hol kerül vissza minden döntés hozzád.",
        offer: "ceges-diagnozis",
      },
      {
        title: "Műszakvezetők és középvezetők",
        text: "A műszakvezetők és a középvezetők sokszor szakemberként kiválóak, vezetőként bizonytalanok. A 360 fokos értékelés megmutatja, hogyan látják őket a kollégáik, a vezetői és a team coaching pedig segít a változásban.",
        offer: "ertekeles-360",
      },
    ],
    offerNotes: {
      "ceges-diagnozis":
        "Ipari és termelő cégeknél a diagnózisban külön figyelünk arra, hogyan adják át egymásnak a tudást és a felelősséget a műszakok és a telephelyek.",
      "havi-egyuttmukodes":
        "A havi együttműködésben a megtartás itt különösen fontos téma lehet, mert a kollégák előtt több erős alternatíva áll.",
      "ertekeles-360":
        "Műszakvezetőknél és középvezetőknél a 360 fokos értékelés több irányból ad összevethető visszajelzést arról, hogyan vezetnek.",
    },
    cta: CTA,
  },
  {
    slug: "hr-tanacsadas-szeged",
    path: "/hr-tanacsadas-szeged/",
    label: "Csongrád-Csanád vármegye",
    city: "Szeged",
    county: "Csongrád-Csanád vármegye",
    title: "HR tanácsadás Csongrád-Csanád vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás szegedi, hódmezővásárhelyi, makói és Csongrád-Csanád vármegyei 20–200 fős cégeknek: céges diagnózis, havi együttműködés, coaching.",
    h1: "HR tanácsadás Szegeden és Csongrád-Csanád vármegyében",
    eyebrow: "Szeged · Csongrád-Csanád vármegye",
    intro: [
      "Szeged a Dél-Alföld gazdasági, egyetemi és kutatási központja, Csongrád-Csanád vármegyében pedig az élelmiszeripartól a kereskedelmen és a logisztikán át az egészségügyi és tudásalapú szolgáltatásokig sokféle 20–200 fős cég működik. Ezeknek a cégeknek a tulajdonosaival dolgozunk, személyesen a cégnél vagy akár online is.",
      "Az egyetemi háttér és a román, illetve szerb határ közelsége lehetőség és kihívás is: van honnan meríteni, a képzett kollégák megtartása viszont sok helyi cégtulajdonosnak visszatérő kérdés. Az ilyen helyzetekben tudunk segíteni.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Szegedről és a város környékéről (Sándorfalva, Algyő, Deszk, Domaszék, Mórahalom, Kistelek) ugyanúgy várjuk a cégtulajdonosokat, mint a vármegye többi részéről: Hódmezővásárhely, Makó és a Maros mente, valamint a vármegye északi részén Szentes, Csongrád és Mindszent vállalkozásaitól is.",
      AREA_CONTACT,
    ],
    contextTitle: "Ismerős helyzetek Csongrád-Csanád vármegyei cégeknél",
    contexts: [
      {
        title: "Friss diplomások megtartása",
        text: "A friss diplomások és a fiatal szakemberek megtartása sok szegedi cégnél visszatérő kérdés. Ők legtöbbször nem csak a bért nézik: azt is, látnak-e maguk előtt fejlődést, és kapnak-e visszajelzést.",
        offer: "havi-egyuttmukodes",
      },
      {
        title: "Kulcsemberek kisebb jelöltpiacon",
        text: "A speciális tudású kulcsembereket nehéz pótolni. Ha egy távozás után akadozik a működés, mert a tudás nem volt megosztva, érdemes kívülről ránézni, hol függ a cég egy-egy embertől, köztük tőled.",
        offer: "ceges-diagnozis",
      },
      {
        title: "Családi és növekvő cégek",
        text: "Ha a cég családi vállalkozásból nőtt ki, a felelősségek gyakran a tulajdonosnál futnak össze. A generációváltás vagy a hátrébb lépés előtt ezt érdemes tudatosan rendbe tenni.",
        offer: "havi-egyuttmukodes",
      },
      {
        title: "Vezetők visszajelzés nélkül",
        text: "A kollégák ritkán jeleznek vissza a főnöküknek, ezért egy vezető a saját hatását nehezen látja. A 360 fokos értékelés több irányból ad összevethető, tényszerű képet.",
        offer: "ertekeles-360",
      },
    ],
    offerNotes: {
      "ceges-diagnozis":
        "Családi hátterű és növekvő cégeknél a diagnózis megmutatja, hol futnak össze a döntések a tulajdonosnál.",
      "havi-egyuttmukodes":
        "A havi együttműködésben a fiatal szakemberek megtartása és a vezetői utánpótlás is visszatérő téma lehet.",
      "ertekeles-360":
        "Ha egy vezető működéséről csak egy irányból kapsz képet, a 360 fokos értékelés a felettes, a beosztottak és a mellérendelt kollégák véleményét is megmutatja.",
    },
    cta: CTA,
  },
];

export const LOCAL_BY_SLUG = Object.fromEntries(LOCAL.map((l) => [l.slug, l])) as Record<
  LocalPage["slug"],
  LocalPage
>;
