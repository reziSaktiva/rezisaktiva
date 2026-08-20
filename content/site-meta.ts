import { HOME_COPY } from "@/content/home";
import { WORK_PAGE_COPY } from "@/content/work";
import type { Locale } from "@/lib/locale";

/**
 * Title + description destinasi R1 — sementara dari mockup (`title.*` +
 * lead halaman). OG/canonical di T-017.2; copy final di T-021.7.
 *
 * `about.description` ditulis dedicated (bukan reuse `ABOUT_COPY.lead1`
 * penuh) — `lead1` sudah jadi paragraf panjang (T-021.3) yang kalau dipakai
 * apa adanya bakal terpotong di hasil pencarian (~155–160 char). Masih
 * placeholder teknis sampai wording final dikunci di T-021.7.
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
      description:
        "Fullstack developer yang mengorkestrasi tim AI subagent — dari discovery, arsitektur, sampai deployment produk.",
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
      title: "rezisaktiva — How I Work",
      description:
        "A fullstack developer orchestrating AI subagent teams — from discovery and architecture to deployment.",
    },
    work: {
      title: "rezisaktiva — Work",
      description: WORK_PAGE_COPY.en.lead,
    },
  },
};
