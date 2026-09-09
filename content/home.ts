import type { Locale } from "@/lib/locale";

/**
 * Copy Home. Klaim + dua baris display ADR-038 / T-051.
 * Lede + tautan Workflow ADR-037 / ADR-038. Now bukan di Home.
 * Contact footer tetap T-021.2.
 */

export interface HomeCopy {
  lede: string;
  ledeCta: string;
  h1: [string, string];
  contactLabel: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  id: {
    lede: "Adaptabilitas adalah skill utama bagi seorang developer. Mengadopsi AI agents memungkinkan saya fokus ke arsitektur tingkat tinggi dan merealisasikan produk digital rumit dengan jauh lebih cepat.",
    ledeCta: "Lihat cara saya bekerja",
    h1: [
      "Saya mengubah ide kompleks",
      "menjadi produk digital yang mulus.",
    ],
    contactLabel: "Contact",
    contactTitle: "Ada project?",
    contactBody:
      "Cerita bentar aja soal apa yang mau dibangun. Kalau cocok, kita lanjut.",
    contactCta: "Hubungi saya",
  },
  en: {
    lede: "Adaptability is the ultimate developer skill. Embracing AI agents allowed me to focus on high-level architecture and bring complex digital products to life faster.",
    ledeCta: "See how I work",
    h1: ["I transform complex ideas", "into seamless digital products."],
    contactLabel: "Contact",
    contactTitle: "Got a project?",
    contactBody: "Tell me what you're building. If it's a fit, we go from there.",
    contactCta: "Get in touch",
  },
};
