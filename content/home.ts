import type { Locale } from "@/lib/locale";
import { HOME_TEASER_IDS, WORK_ITEMS, type WorkItem } from "./work";

/**
 * Copy Home. Dikunci T-021.2 (h1/bukti/seksi karya/contact 2026-08-20;
 * teaser 2026-08-28). Nama/outcome teaser = katalog T-021.5, satu sumber.
 * Set teaser dikunci di `content/data/projects.json` (`homeTeaserIds`).
 */

export type HomeTeaserItem = WorkItem;

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
  nowLabel: string;
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

export const HOME_COPY: Record<Locale, HomeCopy> = {
  id: {
    h1: ["Ceritamu", "lewat produk."],
    nowLabel: "Sekarang",
    buktiLabel: "Bukti",
    buktiEmphasis: "AI tidak menghilangkan pekerjaan saya.",
    buktiRest:
      " AI mengangkat status saya — dari developer, jadi engineer of my own AI ecosystem.",
    workLabel: "Proyek terpilih",
    workTitle: "Beberapa yang udah dipakai orang.",
    workAll: "Semua proyek →",
    teasers: teasersFor("id"),
    contactLabel: "Contact",
    contactTitle: "Ada project?",
    contactBody:
      "Cerita bentar aja soal apa yang mau dibangun. Kalau cocok, kita lanjut.",
    contactCta: "Hubungi saya",
  },
  en: {
    h1: ["Your story,", "in the product."],
    nowLabel: "Now",
    buktiLabel: "Proof",
    buktiEmphasis: "AI didn't take my job.",
    buktiRest:
      " It leveled me up — from developer to engineer of my own AI ecosystem.",
    workLabel: "Selected projects",
    workTitle: "A few things people actually use.",
    workAll: "All projects →",
    teasers: teasersFor("en"),
    contactLabel: "Contact",
    contactTitle: "Got a project?",
    contactBody: "Tell me what you're building. If it's a fit, we go from there.",
    contactCta: "Get in touch",
  },
};
