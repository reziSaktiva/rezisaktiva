import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";

/**
 * Title + description destinasi R1. Dikunci T-021.7 (2026-08-28);
 * About vs Workflow dipisah ADR-035 (2026-09-07); About jadi section Home
 * (ADR-040). Contact = page `/contact` (T-083); placeholder meta until T-084.6.
 */

export type SiteSurface = "home" | "workflow" | "work" | "contact";

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
        "Berikut adalah beberapa proyek yang pernah saya kerjakan dari nol hingga siap rilis.",
    },
    contact: {
      title: "rezisaktiva — Kontak",
      description:
        "Tulis ke Rezi soal proyek, ide, atau pendapat kedua. Balasan lewat email, dari Bandung.",
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
        "Here are a few projects I’ve crafted from the ground up.",
    },
    contact: {
      title: "rezisaktiva — Contact",
      description:
        "Write to Rezi about a project, an idea, or a second opinion. Replies by email, from Bandung.",
    },
  },
};
