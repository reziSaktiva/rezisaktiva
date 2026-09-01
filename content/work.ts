import type { Locale } from "@/lib/locale";
import projects from "./data/projects.json";

/**
 * Katalog karya R1 + copy halaman Work index. Fakta di
 * `content/data/projects.json` — dikunci T-021.5 dari resume, jangan dikarang.
 *
 * `href` = tautan keluar (live diutamakan, fallback repo). `undefined` =
 * tanpa tautan. Di Work index dan teaser Home, tile membuka sheet M10 (T-026);
 * live/repo hanya di dalam sheet. Tautan “Semua proyek” di Home tetap ke
 * `/[locale]/projects`.
 *
 * Sembunyikan karya: tambah id ke `hiddenIds` di JSON (data tetap tersimpan).
 */

export interface WorkItem {
  id: string;
  name: string;
  outcome: string;
  imageSrc: string;
  year: string;
  featured: boolean;
  href?: string;
}

export interface WorkPageCopy {
  h1: [string, string];
  lead: string;
  ctaQuestion: string;
  ctaLink: string;
}

const hiddenIds = new Set(projects.hiddenIds);

function toWorkItem(
  item: (typeof projects.items)[number],
  locale: Locale,
): WorkItem {
  const row: WorkItem = {
    id: item.id,
    name: item.name,
    outcome: item.outcome[locale],
    imageSrc: item.cover,
    year: item.year,
    featured: item.featured,
  };
  if (item.liveHref) {
    row.href = item.liveHref;
  }
  return row;
}

/** Urutan teaser Home (tile pertama = featured penuh lebar). */
export const HOME_TEASER_IDS: readonly string[] = projects.homeTeaserIds;

export const PROJECTS_CATALOG = projects.items;

export const WORK_ITEMS: Record<Locale, readonly WorkItem[]> = {
  id: PROJECTS_CATALOG.filter((item) => !hiddenIds.has(item.id)).map((item) =>
    toWorkItem(item, "id"),
  ),
  en: PROJECTS_CATALOG.filter((item) => !hiddenIds.has(item.id)).map((item) =>
    toWorkItem(item, "en"),
  ),
};

export const WORK_PAGE_COPY: Record<Locale, WorkPageCopy> = {
  id: {
    h1: ["Proyek", "saya."],
    lead: "Kumpulan proyek dari pengalaman fullstack saya, dengan beberapa proyek terbaru mengeksplorasi AI ecosystem yang saya kembangkan sendiri.",
    ctaQuestion: "Ada yang mau dibahas?",
    ctaLink: "Hubungi saya",
  },
  en: {
    h1: ["My", "Projects"],
    lead: "A collection of projects from my fullstack experience, with a few recent ones exploring the AI ecosystem I built myself.",
    ctaQuestion: "Want to talk about one?",
    ctaLink: "Get in touch",
  },
};
