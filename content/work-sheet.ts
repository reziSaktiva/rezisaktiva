import type { Locale } from "@/lib/locale";
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
  repoLabel: string;
}

export interface WorkSheetFields {
  services: readonly string[];
  locationOrCompany: string;
  description: string;
  gitHref?: string;
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
    repoLabel: "Repo",
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
    repoLabel: "Repo",
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
    gitHref: row.gitHref ?? undefined,
  };
}
