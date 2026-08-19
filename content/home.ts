import type { Locale } from "@/lib/locale";

/**
 * Copy Home sementara dari mockup (`design-mockups/home.html` + `shared.js`).
 * Bukan copy final — kunci + ganti teks di T-021.2 (v10).
 */
export interface HomeTeaserItem {
  id: string;
  name: string;
  outcome: string;
  imageSrc: string;
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

const TEASER_IMAGES = [
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
] as const;

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
    teasers: [
      {
        id: "1",
        name: "Nama Project 01",
        outcome: "Peran / outcome singkat, satu kalimat.",
        imageSrc: TEASER_IMAGES[0],
      },
      {
        id: "2",
        name: "Nama Project 02",
        outcome: "Peran / outcome singkat, satu kalimat.",
        imageSrc: TEASER_IMAGES[1],
      },
      {
        id: "3",
        name: "Nama Project 03",
        outcome: "Peran / outcome singkat, satu kalimat.",
        imageSrc: TEASER_IMAGES[2],
      },
    ],
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
    teasers: [
      {
        id: "1",
        name: "Project name 01",
        outcome: "Role / outcome in one sentence.",
        imageSrc: TEASER_IMAGES[0],
      },
      {
        id: "2",
        name: "Project name 02",
        outcome: "Role / outcome in one sentence.",
        imageSrc: TEASER_IMAGES[1],
      },
      {
        id: "3",
        name: "Project name 03",
        outcome: "Role / outcome in one sentence.",
        imageSrc: TEASER_IMAGES[2],
      },
    ],
    contactLabel: "Contact",
    contactTitle: "Let's talk.",
    contactBody:
      "Open to conversations about product, collaboration, or a fit that makes sense.",
    contactCta: "Get in touch",
  },
};
