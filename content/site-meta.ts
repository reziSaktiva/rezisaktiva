import { PERSON, yearsOfExperience } from "@/content/person";
import { WORK_PAGE_COPY } from "@/content/work";
import type { Locale } from "@/lib/locale";

/**
 * Title + description destinasi R1. Dikunci T-021.7 (2026-08-28);
 * About vs Workflow dipisah ADR-035 (2026-09-07); About jadi section Home
 * (ADR-040). Contact = page `/contact` (T-083). Titles and descriptions
 * approved by Boss Rezi 2026-11-23 (T-084.6).
 */

/** Name used in page titles (case pages too). */
export const SITE_TITLE_NAME = PERSON.fullName;
const YEARS = yearsOfExperience();

export type SiteSurface = "home" | "workflow" | "work" | "contact";

export interface SurfaceMeta {
  title: string;
  description: string;
}

export const SITE_META: Record<Locale, Record<SiteSurface, SurfaceMeta>> = {
  id: {
    home: {
      title: `${SITE_TITLE_NAME} — Senior Web Engineer`,
      description:
        `Senior web engineer di Bandung, Indonesia. ${YEARS}+ tahun membangun produk fullstack dengan Next.js, TypeScript, dan Node.js, dan cara saya membangunnya bersama AI.`,
    },
    workflow: {
      title: `${SITE_TITLE_NAME} — Proses Kerja`,
      description:
        "AI mengeksekusi kode; saya mengunci keputusan. Metode kerja doc-first, ADR tertulis, dan orkestrasi AI paralel.",
    },
    work: {
      title: `${SITE_TITLE_NAME} — Proyek`,
      description: WORK_PAGE_COPY.id.lead,
    },
    contact: {
      title: `${SITE_TITLE_NAME} — Kontak`,
      description:
        "Tulis ke Rezi soal posisi kerja atau proyek. Balasan lewat email, dari Bandung.",
    },
  },
  en: {
    home: {
      title: `${SITE_TITLE_NAME} — Senior Web Engineer`,
      description:
        `Senior web engineer in Bandung, Indonesia. ${YEARS}+ years shipping fullstack products in Next.js, TypeScript and Node.js, and how I build them with AI.`,
    },
    workflow: {
      title: `${SITE_TITLE_NAME} — How I Work`,
      description:
        "AI executes the code; I drive the decisions. Doc-first method, written ADRs, and parallel AI orchestration.",
    },
    work: {
      title: `${SITE_TITLE_NAME} — Projects`,
      description: WORK_PAGE_COPY.en.lead,
    },
    contact: {
      title: `${SITE_TITLE_NAME} — Contact`,
      description:
        "Write to Rezi about a role or a project. Replies by email, from Bandung.",
    },
  },
};
