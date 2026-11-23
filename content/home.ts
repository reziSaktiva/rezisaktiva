import {
  capitalizeFirst,
  yearsOfExperienceWord,
} from "@/content/person";
import type { Locale } from "@/lib/locale";

/**
 * Home copy (S-002 Monolith, T-080.1). Hero = three-line statement + lede
 * (ADR-054 point 4 amends the ADR-038 hero shape). The Workflow link moved
 * to About (`content/about.ts`). Now stays on About (ADR-037).
 * Contact strings feed the footer (T-079.2). Copy approved by Boss Rezi
 * 2026-11-23 (T-084.1 footer, T-084.2 hero and Work labels).
 */

export interface HomeCopy {
  /** SEO `h1`, one entry per visual line. */
  heroLines: readonly [string, string, string];
  lede: string;
  /** Scroll cue under the hero (decorative). */
  scrollCue: string;
  /** Sticky Work section title (`h2`), one entry per visual line. */
  workTitle: readonly [string, string];
  /** Link from the Home Work section to the Work index. */
  workMore: string;
  contactLabel: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  id: {
    heroLines: [
      "Senior web engineer.",
      `${capitalizeFirst(yearsOfExperienceWord("id"))} tahun membangun`,
      "produk fullstack.",
    ],
    lede: "Dari migrasi WordPress headless sampai lelang real-time. Saya merancang arsitekturnya, AI agent menulis kodenya, dan setiap keputusan tercatat.",
    scrollCue: "Gulir untuk menjelajah",
    workTitle: ["Karya", "pilihan."],
    workMore: "Semua proyek",
    contactLabel: "Kontak",
    contactTitle: "Merekrut, atau membangun sesuatu?",
    contactBody:
      "Email bisa untuk keduanya. Untuk proyek, formulirnya menanyakan hal yang penting lebih dulu.",
    contactCta: "Hubungi saya",
  },
  en: {
    heroLines: [
      "Senior web engineer.",
      `${capitalizeFirst(yearsOfExperienceWord("en"))} years shipping`,
      "fullstack products.",
    ],
    lede: "From headless WordPress migrations to real-time auctions. I design the architecture, AI agents write the code, and every decision is on the record.",
    scrollCue: "Scroll to explore",
    workTitle: ["Selected", "work."],
    workMore: "All projects",
    contactLabel: "Contact",
    contactTitle: "Hiring, or building something?",
    contactBody:
      "Email works for both. For a project, the form asks the useful questions first.",
    contactCta: "Get in touch",
  },
};
