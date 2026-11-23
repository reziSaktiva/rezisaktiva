import type { Locale } from "@/lib/locale";

/**
 * About section on Home (`#about`, ADR-040; S-002 Monolith, T-080.2).
 * Lead and body approved by Boss Rezi 2026-11-23 (T-084.2), replacing the
 * ADR-039 lead.
 * The Workflow link label is the former Home lede CTA (ADR-038).
 * How I work lives in `content/workflow.ts` (ADR-035).
 */

export interface AboutCopy {
  /** Section `h2`, one entry per visual line. */
  title: readonly string[];
  /** Scrubbed lead (first sentence of the ADR-039 lead). */
  lead: string;
  /** Supporting copy (second sentence of the ADR-039 lead). */
  body: string;
  workflowCta: string;
  portraitAlt: string;
}

export const ABOUT_PORTRAIT_SRC = "/media/about-hero.jpg";

export const ABOUT_COPY: Record<Locale, AboutCopy> = {
  id: {
    title: ["Halo,", "saya Rezi."],
    lead: "Saya memimpin arsitektur dan code review produk web di Insvire Omni Technologies, dari frontend Next.js sampai backend Node.js dan Bun.",
    body: "Saya kuliah Manajemen Bisnis sambil bekerja sebagai developer, jadi setiap fitur saya nilai dari biaya dan nilainya, bukan hanya kodenya. Sekarang saya membangun bersama AI subagent dengan peran masing-masing (backend, QA, arsitektur, UI) dan mencatat setiap keputusan sebagai ADR. Lebih dari 50 ADR di balik situs ini terbuka untuk dibaca.",
    workflowCta: "Lihat cara saya bekerja",
    portraitAlt: "Foto hitam-putih Rezi, mata ditutup coretan hitam",
  },
  en: {
    title: ["Hello,", "I'm Rezi."],
    lead: "I lead architecture and code review on web products at Insvire Omni Technologies, from Next.js frontends to Node.js and Bun backends.",
    body: "I studied Business Management while working as a developer, so I judge a feature by its cost and value, not only its code. Today I build with role-specific AI subagents (backend, QA, architecture, UI) and log every decision as an ADR. The 50+ behind this site are public.",
    workflowCta: "See how I work",
    portraitAlt: "Black-and-white photo of Rezi with eyes redacted",
  },
};
