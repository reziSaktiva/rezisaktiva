import type { Locale } from "@/lib/locale";
import projects from "./data/projects.json";

/**
 * Katalog karya R1 + copy halaman Work index. Fakta di
 * `content/data/projects.json` — dikunci T-021.5 dari resume, jangan dikarang.
 * Slug kebab-case + isi halaman case = slot sheet yang sama (T-056.2).
 *
 * `href` = tautan keluar (live diutamakan, fallback repo). `undefined` =
 * tanpa tautan. Di Work index, tile membuka sheet M10 (T-026);
 * live/repo hanya di dalam sheet.
 *
 * Sembunyikan karya: tambah id ke `hiddenIds` di JSON (data tetap tersimpan).
 * Karya di `hiddenIds` tidak punya rute publik `/projects/[slug]` (ADR-044).
 */

export const PROJECT_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface WorkItem {
  id: string;
  slug: string;
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

export function toWorkItem(
  item: (typeof projects.items)[number],
  locale: Locale,
): WorkItem {
  const row: WorkItem = {
    id: item.id,
    slug: item.slug,
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

export const PROJECTS_CATALOG = projects.items;

export function isProjectSlug(value: string): boolean {
  return PROJECT_SLUG_PATTERN.test(value);
}

export function publicProjectRows(): readonly (typeof projects.items)[number][] {
  return PROJECTS_CATALOG.filter((item) => !hiddenIds.has(item.id));
}

export function getPublicProjectBySlug(
  slug: string,
): (typeof projects.items)[number] | undefined {
  if (!isProjectSlug(slug)) {
    return undefined;
  }
  return publicProjectRows().find((item) => item.slug === slug);
}

export const WORK_ITEMS: Record<Locale, readonly WorkItem[]> = {
  id: publicProjectRows().map((item) => toWorkItem(item, "id")),
  en: publicProjectRows().map((item) => toWorkItem(item, "en")),
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
