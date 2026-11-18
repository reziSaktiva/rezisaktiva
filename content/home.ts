import type { Locale } from "@/lib/locale";

/**
 * Home copy (S-002 Monolith, T-080.1). Hero = three-line statement + lede
 * (ADR-054 point 4 amends the ADR-038 hero shape). The Workflow link moved
 * to About (`content/about.ts`). Now stays on About (ADR-037).
 * Contact strings feed the footer (T-079.2).
 */

export interface HomeCopy {
  /** SEO `h1`, one entry per visual line. */
  heroLines: readonly [string, string, string];
  lede: string;
  /** Scroll cue under the hero (decorative). */
  scrollCue: string;
  contactLabel: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  id: {
    // T-084.2 placeholder: today's two ADR-038 lines re-split into three.
    heroLines: ["Saya mengubah", "ide kompleks menjadi", "produk digital yang mulus."],
    lede: "Adaptabilitas adalah skill utama bagi seorang developer. Mengadopsi AI agents memungkinkan saya fokus ke arsitektur tingkat tinggi dan merealisasikan produk digital rumit dengan jauh lebih cepat.",
    // T-084.2 placeholder: scroll cue label.
    scrollCue: "Gulir untuk menjelajah",
    contactLabel: "Contact",
    contactTitle: "Ada project?",
    contactBody:
      "Cerita bentar aja soal apa yang mau dibangun. Kalau cocok, kita lanjut.",
    contactCta: "Hubungi saya",
  },
  en: {
    // T-084.2 placeholder: today's two ADR-038 lines re-split into three.
    heroLines: ["I transform", "complex ideas into", "seamless digital products."],
    lede: "Adaptability is the ultimate developer skill. Embracing AI agents allowed me to focus on high-level architecture and bring complex digital products to life faster.",
    // T-084.2 placeholder: scroll cue label.
    scrollCue: "Scroll to explore",
    contactLabel: "Contact",
    contactTitle: "Got a project?",
    contactBody: "Tell me what you're building. If it's a fit, we go from there.",
    contactCta: "Get in touch",
  },
};
