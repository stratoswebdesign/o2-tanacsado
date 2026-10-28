import type { StaticImageData } from "next/image";
import cegesDiagnozis from "@/images/ceges-diagnozis.jpg";
import ertekeles360 from "@/images/ertekeles-360.jpg";
import haviEgyuttmukodes from "@/images/havi-egyuttmukodes.jpg";
import marczali from "@/images/marczali-tibor.png";
import wortmann from "@/images/wortmann-adam.png";

export type OfferId = "ceges-diagnozis" | "havi-egyuttmukodes" | "ertekeles-360";

export interface Offer {
  id: OfferId;
  question: string;
  /** Félkövér név a szöveg elején, ponttal (ahogy a szövegdokumentumban). */
  name: string;
  text: string;
  href: string;
  image: StaticImageData;
}

/**
 * „Ebben tudunk segíteni” – a Főoldal szolgáltatásszekciója a szövegdokumentum
 * szerint, átírás nélkül. A térségi oldalak is ezt a listát használják.
 */
export const OFFERS: Offer[] = [
  {
    id: "ceges-diagnozis",
    question: "Szeretnéd kívülről látni, mi történik a cégedben?",
    name: "Céges diagnózis.",
    text: "Interjúk a vezetőkkel és a kulcsemberekkel, beszélgetések veled, majd írásos összefoglaló, amit személyesen mutatunk be: erősségek, nehézségek, ki nem mondott, visszatérő problémák és javaslatok.",
    href: "/szervezetfejlesztes/",
    image: cegesDiagnozis,
  },
  {
    id: "havi-egyuttmukodes",
    question: "Szeretnéd, hogy rendszeresen ott legyünk melletted?",
    name: "Havi együttműködés.",
    text: "Havonta a cégnél vagyunk: vezetői és HR-tanácsadás, egyéni és team coachingok, a folyamatok és a belső kommunikáció fejlesztése, a nem adminisztratív HR-feladatok átvétele.",
    href: "/hr-tanacsadas-kkv-knak/",
    image: haviEgyuttmukodes,
  },
  {
    id: "ertekeles-360",
    question: "Adatokkal látnád, honnan jönnek a tünetek?",
    name: "360 fokos értékelés.",
    text: "Online kitölthető teszt, amiben a felettes, a beosztottak és a mellérendelt kollégák mondanak véleményt az érintett vezetőről, kollégáról.",
    href: "/szolgaltatasok/#ertekeles-360",
    image: ertekeles360,
  },
];

export const OFFER_BY_ID = Object.fromEntries(OFFERS.map((o) => [o.id, o])) as Record<OfferId, Offer>;

export interface Founder {
  name: string;
  /** Keresztnév, ahogy az oldalak szövege használja. */
  firstName: string;
  role: string;
  /** „Mikor jöttünk rá, hogy a cég nélkülünk is működik” – jóváhagyott, saját történet. */
  story: string;
  facts: string[];
  image: StaticImageData;
  imageAlt: string;
}

/** Alapítók – a jelenlegi oldalon közölt adatok alapján. */
export const FOUNDERS: Founder[] = [
  {
    name: "Marczali Tibor",
    firstName: "Tibor",
    role: "Cégalapító és gyakorló cégvezető",
    facts: [
      "MBA közgazdász, IT-mérnök",
      "Business és menedzsment coach",
      "Szervezetfejlesztő szakember",
    ],
    story:
      "2019 nyarán, a Covid előtt elmentem három hétre nyaralni. Egyszer sem hívott senki, és mire visszajöttem, minden rendben ment tovább. Akkor jöttem rá, hogy a cég nélkülem is megy, a kollégáim pedig szinte minden helyzetben jól döntenek önállóan.",
    image: marczali,
    imageAlt: "Marczali Tibor portréja",
  },
  {
    name: "Wortmann Ádám",
    firstName: "Ádám",
    role: "Cégalapító és gyakorló cégvezető",
    facts: [
      "Közgazdász (MBA)",
      "Coach, szervezetfejlesztési szakember",
      "Mentálhigiénés szakember, pszichodráma-vezető",
    ],
    story:
      "2018-ban megnyertünk egy hatalmas projektet, és az egyik vezető kollégánkra bíztuk, hogy vigye végig. A heti vezetői üléseken rendre beszámolt az állásról, nekem pedig nem volt több kérdésem. Egy teljes negyedévnek kellett eltelnie, mire észrevettem, hogy mindent kézben tart, és mindenben önállóan tud dönteni.",
    image: wortmann,
    imageAlt: "Wortmann Ádám portréja",
  },
];
