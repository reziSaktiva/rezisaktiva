import { ABOUT_COPY } from "@/content/about";
import { HOME_COPY } from "@/content/home";
import { WORK_PAGE_COPY } from "@/content/work";
import type { Locale } from "@/lib/locale";

/**
 * Title + description destinasi R1 — sementara dari mockup (`title.*` +
 * lead halaman). OG/canonical di T-017.2; copy final di T-021.7.
 */

export type SiteSurface = "home" | "about" | "work";

export interface SurfaceMeta {
  title: string;
  description: string;
}

export const SITE_META: Record<Locale, Record<SiteSurface, SurfaceMeta>> = {
  id: {
    home: {
      title: "rezisaktiva — Home",
      description: HOME_COPY.id.contactBody,
    },
    about: {
      title: "rezisaktiva — Proses Kerja",
      description: ABOUT_COPY.id.lead1,
    },
    work: {
      title: "rezisaktiva — Karya",
      description: WORK_PAGE_COPY.id.lead,
    },
  },
  en: {
    home: {
      title: "rezisaktiva — Home",
      description: HOME_COPY.en.contactBody,
    },
    about: {
      title: "rezisaktiva — My Process",
      description: ABOUT_COPY.en.lead1,
    },
    work: {
      title: "rezisaktiva — Work",
      description: WORK_PAGE_COPY.en.lead,
    },
  },
};
