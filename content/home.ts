import type { Locale } from "@/lib/locale";
import { WORK_ITEMS, type WorkItem } from "./work";

/**
 * Copy Home sementara dari mockup (`design-mockups/home.html` + `shared.js`).
 * Bukan copy final — kunci + ganti teks di T-021.2 (v10).
 * Item teaser = 3 karya pertama dari katalog Work (T-019 / T-021.5).
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
    h1: ["Membangun", "produk."],
    buktiLabel: "Bukti",
    buktiEmphasis: "~6 tahun",
    buktiRest:
      " membangun software fullstack — kini memakai AI sebagai cara kerja, bukan sekadar kata kunci.",
    workLabel: "Karya terpilih",
    workTitle: "Beberapa hal yang sudah dibangun",
    workAll: "Lihat semua →",
    teasers: WORK_ITEMS.id.slice(0, 3),
    contactLabel: "Contact",
    contactTitle: "Mari mengobrol.",
    contactBody:
      "Terbuka untuk percakapan soal produk, peluang kerja sama, atau sekadar bertukar ide.",
    contactCta: "Hubungi saya",
  },
  en: {
    h1: ["Building", "products."],
    buktiLabel: "Proof",
    buktiEmphasis: "~6 years",
    buktiRest:
      " building fullstack software — now using AI as a way of working, not just a keyword.",
    workLabel: "Selected work",
    workTitle: "A few things already shipped",
    workAll: "See all →",
    teasers: WORK_ITEMS.en.slice(0, 3),
    contactLabel: "Contact",
    contactTitle: "Let's talk.",
    contactBody:
      "Open to conversations about product, collaboration, or a fit that makes sense.",
    contactCta: "Get in touch",
  },
};
