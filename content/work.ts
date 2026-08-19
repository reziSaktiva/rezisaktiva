import type { Locale } from "@/lib/locale";

/**
 * Katalog karya R1 + copy halaman Work index.
 * Teks sementara dari mockup (`design-mockups/work.html` + `shared.js`).
 * Bukan copy final — kunci + ganti teks di T-021.5 (v10).
 *
 * Tile index R1 tidak mengarah ke Work case (M10 / R2). Tautan bukti
 * nyata menyusul T-021.5.
 */

export interface WorkItem {
  id: string;
  name: string;
  outcome: string;
  imageSrc: string;
  year: string;
  featured: boolean;
}

export interface WorkPageCopy {
  h1: [string, string];
  lead: string;
  ctaQuestion: string;
  ctaLink: string;
}

const WORK_IMAGES = [
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
] as const;

const WORK_IDS = ["1", "2", "3", "4", "5", "6"] as const;

function itemsFor(
  names: readonly string[],
  outcome: string,
): readonly WorkItem[] {
  return WORK_IDS.map((id, index) => ({
    id,
    name: names[index] ?? `Project ${id}`,
    outcome,
    imageSrc: WORK_IMAGES[index] ?? WORK_IMAGES[0],
    year: "2024",
    featured: id === "1" || id === "4",
  }));
}

export const WORK_ITEMS: Record<Locale, readonly WorkItem[]> = {
  id: itemsFor(
    [
      "Nama Project 01",
      "Nama Project 02",
      "Nama Project 03",
      "Nama Project 04",
      "Nama Project 05",
      "Nama Project 06",
    ],
    "Peran / outcome singkat, satu kalimat.",
  ),
  en: itemsFor(
    [
      "Project name 01",
      "Project name 02",
      "Project name 03",
      "Project name 04",
      "Project name 05",
      "Project name 06",
    ],
    "Role / outcome in one sentence.",
  ),
};

export const WORK_PAGE_COPY: Record<Locale, WorkPageCopy> = {
  id: {
    h1: ["Seluruh", "hasil kerja."],
    lead: "Daftar karya yang sudah di-ship. Buka tile untuk cerita singkat prosesnya.",
    ctaQuestion: "Ingin membahas salah satu karya ini?",
    ctaLink: "Hubungi saya",
  },
  en: {
    h1: ["All", "shipped work."],
    lead: "Everything shipped so far. Open a tile for a short process story.",
    ctaQuestion: "Want to talk about one of these?",
    ctaLink: "Get in touch",
  },
};
