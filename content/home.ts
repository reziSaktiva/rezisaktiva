import type { Locale } from "@/lib/locale";
import { WORK_ITEMS, type WorkItem } from "./work";

/**
 * Copy Home. Dikunci T-021.2 (h1/bukti/seksi karya/contact 2026-08-20;
 * teaser 2026-08-28). Nama/outcome teaser = katalog T-021.5, satu sumber.
 * Set teaser dikunci Boss Rezi: SMMP · Cook It Real Good · SMC Auction.
 */

export type HomeTeaserItem = WorkItem;

/** Urutan tampil di Home (tile pertama = featured penuh lebar). */
const HOME_TEASER_IDS = ["1", "2", "4"] as const;

function teasersFor(locale: Locale): readonly HomeTeaserItem[] {
  const byId = new Map(WORK_ITEMS[locale].map((item) => [item.id, item]));
  return HOME_TEASER_IDS.map((id) => {
    const item = byId.get(id);
    if (!item) {
      throw new Error(`Home teaser: work id ${id} missing for locale ${locale}`);
    }
    return item;
  });
}

export interface HomeCopy {
  h1: [string, string];
  buktiLabel: string;
  buktiEmphasis: string;
  buktiRest: string;
  workLabel: string;
  workTitle: string;
  workAll: string;
  teasers: readonly HomeTeaserItem[];
  contactLabel: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
}

export const HERO_PORTRAIT_SRC =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop";

export const HOME_COPY: Record<Locale, HomeCopy> = {
  id: {
    h1: ["Ceritamu", "lewat produk."],
    buktiLabel: "Bukti",
    buktiEmphasis: "AI tidak menghilangkan pekerjaan saya.",
    buktiRest:
      " AI mengangkat status saya — dari developer, jadi engineer of my own AI ecosystem.",
    workLabel: "Karya terpilih",
    workTitle: "Beberapa yang udah dipakai orang.",
    workAll: "Semua karya →",
    teasers: teasersFor("id"),
    contactLabel: "Contact",
    contactTitle: "Ada project?",
    contactBody:
      "Cerita bentar aja soal apa yang mau dibangun. Kalau cocok, kita lanjut.",
    contactCta: "Hubungi saya",
  },
  en: {
    h1: ["Your story,", "in the product."],
    buktiLabel: "Proof",
    buktiEmphasis: "AI didn't take my job.",
    buktiRest:
      " It leveled me up — from developer to engineer of my own AI ecosystem.",
    workLabel: "Selected work",
    workTitle: "A few things people actually use.",
    workAll: "All work →",
    teasers: teasersFor("en"),
    contactLabel: "Contact",
    contactTitle: "Got a project?",
    contactBody: "Tell me what you're building. If it's a fit, we go from there.",
    contactCta: "Get in touch",
  },
};
