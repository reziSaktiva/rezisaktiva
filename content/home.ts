import type { Locale } from "@/lib/locale";
import { WORK_ITEMS, type WorkItem } from "./work";

/**
 * Copy Home. h1 dikunci T-021.2 (2026-08-20). Slot lain masih mockup
 * sampai dikunci di putaran diskusi berikutnya. Teaser = 3 karya pertama
 * katalog Work (final nama/outcome: T-021.5).
 */

export type HomeTeaserItem = WorkItem;

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
    teasers: WORK_ITEMS.id.slice(0, 3),
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
    teasers: WORK_ITEMS.en.slice(0, 3),
    contactLabel: "Contact",
    contactTitle: "Got a project?",
    contactBody: "Tell me what you're building. If it's a fit, we go from there.",
    contactCta: "Get in touch",
  },
};
