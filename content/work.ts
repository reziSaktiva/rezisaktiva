import type { Locale } from "@/lib/locale";
import { catalogLiveUrls } from "@/lib/linkify";
import { isProjectRepoUrl } from "@/lib/project-live-preview";
import projects from "./data/projects.json";

/**
 * R1 work catalog + Work index page copy. Facts in
 * `content/data/projects.json` — locked T-021.5 from resume, do not invent.
 * Kebab-case slug + case page body = same sheet slot (T-056.2).
 *
 * `liveHrefs` / `href` = live sites (not GitHub). Empty = no link.
 * Work tile opens M10 sheet (T-026); Live on sheet and case page.
 *
 * Hide work: add id to `hiddenIds` in JSON (data kept).
 * `hiddenIds` items have no public `/projects/[slug]` route (ADR-044).
 * Public work without brand names: descriptive title/slug, no branded live/repo (ADR-045).
 * Case page deeper than sheet (ADR-046): period, stack, bullets from CV.
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

export const WORK_PAGE_COPY: Record<Locale, WorkPageCopy> = {
  id: {
    h1: ["Proyek", "saya."],
    lead: "Berikut adalah beberapa proyek yang pernah saya kerjakan dari nol hingga siap rilis.",
    ctaQuestion: "Ada yang mau dibahas?",
    ctaLink: "Hubungi saya",
  },
  en: {
    h1: ["My", "Projects"],
    lead: "Here are a few projects I’ve crafted from the ground up.",
    ctaQuestion: "Want to talk about one?",
    ctaLink: "Get in touch",
  },
};
