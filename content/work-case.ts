import type { Locale } from "@/lib/locale";
import { isProjectRepoUrl } from "@/lib/project-live-preview";
import { projectCaseHref } from "@/lib/site-url";
import { PROJECTS_CATALOG, type WorkItem } from "./work";

/**
 * Case page content (ADR-044, ADR-046, ADR-054 point 2). Work tiles link
 * straight here; the bottom sheet is gone (T-081.3). Facts come from
 * `content/data/projects.json` (CV + locked copy); do not invent.
 *
 * Labels reuse the approved sheet/case labels. Strings marked
 * `T-084.3 placeholder` are reshaped existing copy waiting for the copy pass.
 */

export interface WorkCaseCopy {
  servicesLabel: string;
  locationLabel: string;
  yearLabel: string;
  periodLabel: string;
  stackLabel: string;
  liveLabel: string;
  imagesLabel: string;
  /** Kicker above the next-project link. */
  nextLabel: string;
  /** Custom-cursor label on project cards. */
  viewLabel: string;
  /** Custom-cursor label on the next-project link. */
  nextCursorLabel: string;
}

export interface WorkCaseSection {
  title?: string;
  stack: readonly string[];
  bullets: readonly string[];
}

export interface WorkCaseFields {
  services: readonly string[];
  locationOrCompany: string;
  period?: string;
  stack: readonly string[];
  sections: readonly WorkCaseSection[];
  gallery: readonly string[];
}

export const WORK_CASE_COPY: Record<Locale, WorkCaseCopy> = {
  id: {
    servicesLabel: "Layanan",
    locationLabel: "Lokasi / perusahaan",
    yearLabel: "Tahun",
    periodLabel: "Periode",
    stackLabel: "Stack",
    liveLabel: "Live",
    imagesLabel: "Gambar proyek",
    // T-084.3 placeholder (reshaped from the "Proyek" nav label)
    nextLabel: "Proyek berikutnya",
    // T-084.3 placeholder (short form of "Baca selengkapnya")
    viewLabel: "Baca",
    // T-084.3 placeholder
    nextCursorLabel: "Lanjut",
  },
  en: {
    servicesLabel: "Services",
    locationLabel: "Location / company",
    yearLabel: "Year",
    periodLabel: "Period",
    stackLabel: "Stack",
    liveLabel: "Live",
    imagesLabel: "Project images",
    // T-084.3 placeholder (reshaped from "Projects")
    nextLabel: "Next project",
    // T-084.3 placeholder (short form of "Read the full case")
    viewLabel: "Read",
    // T-084.3 placeholder
    nextCursorLabel: "Next",
  },
};

export function getWorkCase(
  locale: Locale,
  id: string,
): WorkCaseFields | undefined {
  const row = PROJECTS_CATALOG.find((item) => item.id === id);
  if (!row || !("case" in row) || row.case == null) {
    return undefined;
  }
  const detail = row.case;
  return {
    services: row.services[locale],
    locationOrCompany: row.locationOrCompany[locale],
    period: detail.period?.[locale],
    stack: detail.stack ?? [],
    sections: detail.sections.map((section) => ({
      title: "title" in section ? section.title?.[locale] : undefined,
      stack: "stack" in section && section.stack ? section.stack : [],
      bullets: section.bullets[locale],
    })),
    gallery: row.gallery,
  };
}

/** Project stack plus every section stack, in order, without duplicates. */
export function caseStack(fields: WorkCaseFields): readonly string[] {
  return [
    ...new Set([
      ...fields.stack,
      ...fields.sections.flatMap((section) => section.stack),
    ]),
  ];
}

/** Primary = in-site case; Live secondary (may be more than one site). No repo. */
export function projectActionHrefs(
  locale: Locale,
  item: { slug: string; href?: string; liveHrefs?: readonly string[] },
): {
  caseHref: string;
  liveHref: string | undefined;
  liveHrefs: readonly string[];
} {
  const liveHrefs = (
    item.liveHrefs ??
    (item.href && !isProjectRepoUrl(item.href) ? [item.href] : [])
  ).filter((url) => !isProjectRepoUrl(url));
  return {
    caseHref: projectCaseHref(locale, item.slug),
    liveHref: liveHrefs[0],
    liveHrefs,
  };
}

/** The public project after `item` in catalog order, wrapping to the first. */
export function nextWorkItem(
  items: readonly WorkItem[],
  id: string,
): WorkItem | undefined {
  if (items.length < 2) {
    return undefined;
  }
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return undefined;
  }
  return items[(index + 1) % items.length];
}
