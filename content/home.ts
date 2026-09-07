import type { Locale } from "@/lib/locale";

/**
 * Copy Home. Dikunci T-021.2 (h1 / Now / contact 2026-08-20).
 * Bukti AI pindah ke About; teaser karya dicabut (ADR-032).
 * Contact tetap dipakai pita footer.
 */

export interface HomeCopy {
  h1: [string, string];
  nowLabel: string;
  contactLabel: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  id: {
    h1: ["Ceritamu", "lewat produk."],
    nowLabel: "Sekarang",
    contactLabel: "Contact",
    contactTitle: "Ada project?",
    contactBody:
      "Cerita bentar aja soal apa yang mau dibangun. Kalau cocok, kita lanjut.",
    contactCta: "Hubungi saya",
  },
  en: {
    h1: ["Your story,", "in the product."],
    nowLabel: "Now",
    contactLabel: "Contact",
    contactTitle: "Got a project?",
    contactBody: "Tell me what you're building. If it's a fit, we go from there.",
    contactCta: "Get in touch",
  },
};
