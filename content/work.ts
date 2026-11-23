import type { Locale } from "@/lib/locale";
import { catalogLiveUrls } from "@/lib/linkify";
import { isProjectRepoUrl } from "@/lib/project-live-preview";
import projects from "./data/projects.json";

/**
 * R1 work catalog + Work index page copy. Facts in
 * `content/data/projects.json` — locked T-021.5 from resume, do not invent.
 * Kebab-case slug = case route `/[locale]/projects/[slug]` (T-056.2).
 *
 * `liveHrefs` / `href` = live sites (not GitHub). Empty = no link.
 * Work cards link straight to the case page; Live is a secondary link on the
 * case page (ADR-054 point 2, T-081.3).
 *
 * Hide work: add id to `hiddenIds` in JSON (data kept).
 * `hiddenIds` items have no public `/projects/[slug]` route (ADR-044).
 * Public work without brand names: descriptive title/slug, no branded live/repo (ADR-045).
 * Case depth (ADR-046): period, stack, bullets from CV — `work-case.ts`.
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
  liveHrefs: readonly string[];
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
  const liveHrefs = catalogLiveUrls(item.liveHref).filter(
    (url) => !isProjectRepoUrl(url),
  );
  const row: WorkItem = {
    id: item.id,
    slug: item.slug,
    name: item.name,
    outcome: item.outcome[locale],
    imageSrc: item.cover,
    year: item.year,
    featured: item.featured,
    liveHrefs,
  };
  if (liveHrefs[0]) {
    row.href = liveHrefs[0];
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

/**
 * Work index copy. The Monolith index (T-081.1) shows `h1` as the sticky giant
 * title and `lead` under it. Copy approved by Boss Rezi 2026-11-23 (T-084.3).
 */
export const WORK_PAGE_COPY: Record<Locale, WorkPageCopy> = {
  id: {
    h1: ["Semua", "proyek."],
    lead: "Pekerjaan dari enam tahun di Insvire Omni Technologies dan produk saya sendiri: peran saya, stack-nya, dan apa yang dirilis.",
    ctaQuestion: "Ada yang mau dibahas?",
    ctaLink: "Tulis ke saya",
  },
  en: {
    h1: ["All", "projects."],
    lead: "Work from six years at Insvire Omni Technologies and my own products: the role I held, the stack, and what shipped.",
    ctaQuestion: "Want to talk about one?",
    ctaLink: "Write to me",
  },
};
