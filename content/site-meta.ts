import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";

/**
 * Title + description destinasi R1. Dikunci T-021.7 (2026-08-28);
 * About vs Workflow dipisah ADR-035 (2026-09-07); About jadi section Home
 * (ADR-040). Contact = modal, tidak punya title halaman.
 */

export type SiteSurface = "home" | "workflow" | "work";

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
    workflow: {
      title: "rezisaktiva — Proses Kerja",
      description:
        "AI mengeksekusi kode; saya mengunci keputusan. Metode kerja doc-first, ADR tertulis, dan orkestrasi AI paralel.",
    },
    work: {
      title: "rezisaktiva — Proyek",
      description:
        "Proyek dari pengalaman fullstack saya, dengan beberapa yang terbaru mengeksplorasi AI ecosystem yang saya kembangkan sendiri.",
    },
  },
  en: {
    home: {
      title: "rezisaktiva — Home",
      description: HOME_COPY.en.contactBody,
    },
    workflow: {
      title: "rezisaktiva — How I Work",
      description:
        "AI executes the code; I drive the decisions. Doc-first method, written ADRs, and parallel AI orchestration.",
    },
    work: {
      title: "rezisaktiva — Projects",
      description:
        "Projects from my fullstack experience, with a few recent ones exploring the AI ecosystem I built myself.",
    },
  },
};
