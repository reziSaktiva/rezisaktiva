import type { Locale } from "@/lib/locale";
import { isProjectRepoUrl } from "@/lib/project-live-preview";
import { projectCaseHref } from "@/lib/site-url";
import { PROJECTS_CATALOG } from "./work";

/**
 * Slot project sheet (M10, T-026.1, ADR-027). Fakta di
 * `content/data/projects.json`. Cover galeri = `gallery`. Seksi media sheet:
 * iframe live (jika URL http(s) non-GitHub dan situs izinkan framing), else
 * `gallery`, else kosong. Year tetap di `WorkItem`.
 */

export interface WorkSheetCopy {
  close: string;
  servicesLabel: string;
  locationLabel: string;
  yearLabel: string;
  descriptionLabel: string;
  imagesLabel: string;
  previewLabel: string;
  liveLabel: string;
  readMoreLabel: string;
}

export interface WorkSheetFields {
  services: readonly string[];
  locationOrCompany: string;
  description: string;
}

export const WORK_SHEET_COPY: Record<Locale, WorkSheetCopy> = {
  id: {
    close: "Tutup detail proyek",
    servicesLabel: "Layanan",
    locationLabel: "Lokasi / perusahaan",
    yearLabel: "Tahun",
    descriptionLabel: "Deskripsi",
    imagesLabel: "Gambar proyek",
    previewLabel: "Pratinjau situs",
    liveLabel: "Live",
    readMoreLabel: "Baca selengkapnya",
  },
  en: {
    close: "Close project details",
    servicesLabel: "Services",
    locationLabel: "Location / company",
    yearLabel: "Year",
    descriptionLabel: "Description",
    imagesLabel: "Project images",
    previewLabel: "Live preview",
    liveLabel: "Live",
    readMoreLabel: "Read the full case",
  },
};

export function workSheetImages(id: string): readonly string[] {
  return PROJECTS_CATALOG.find((item) => item.id === id)?.gallery ?? [];
}

export function getWorkSheet(
  locale: Locale,
  id: string,
): WorkSheetFields | undefined {
  const row = PROJECTS_CATALOG.find((item) => item.id === id);
  if (!row) {
    return undefined;
  }
  return {
    services: row.services[locale],
    locationOrCompany: row.locationOrCompany[locale],
    description: row.description[locale],
  };
}

/** Primer = case in-site; Live sekunder. Tanpa tautan Repo (chat 2026-09-15). */
export function projectActionHrefs(
  locale: Locale,
  item: { slug: string; href?: string },
): {
  caseHref: string;
  liveHref: string | undefined;
} {
  const liveHref =
    item.href && !isProjectRepoUrl(item.href) ? item.href : undefined;
  return {
    caseHref: projectCaseHref(locale, item.slug),
    liveHref,
  };
}
