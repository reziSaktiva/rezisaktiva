import type { Locale } from "@/lib/locale";

/**
 * Copy About pribadi. Lead dikunci Boss Rezi 2026-09-07 (ADR-039).
 * Bukti AI = T-021.2. Cara kerja ada di `content/workflow.ts` (ADR-035).
 */

export interface AboutCopy {
  h1: readonly string[];
  lead: string;
  portraitAlt: string;
  portraitCaption: string;
  buktiLabel: string;
  buktiEmphasis: string;
  buktiRest: string;
}

export const ABOUT_PORTRAIT_SRC = "/media/about-hero.jpg";

export const ABOUT_COPY: Record<Locale, AboutCopy> = {
  id: {
    h1: ["Halo,", "saya", "Rezi."],
    lead: "Fokus saya bukan sekadar menulis baris kode, melainkan merancang arsitektur sistem dan efisiensi eksekusi memanfaatkan perangkat modern untuk mengubah ide Anda menjadi produk aktif secepat mungkin tanpa mengorbankan kualitas. Berbekal pengalaman full-stack selama lebih dari enam tahun, saat ini saya mengelola pipeline sub-agent AI dari tahap discovery hingga deployment, menggabungkan eksekusi teknis dengan sudut pandang bisnis yang tajam untuk menilai kelayakan serta nilai strategis dari setiap fitur yang saya bangun.",
    portraitAlt:
      "Karya seni: siluet di balik kaca buram, telapak tangan menekan permukaan — bukan potret Rezi",
    portraitCaption: "This is not me",
    buktiLabel: "Bukti",
    buktiEmphasis: "AI tidak menghilangkan pekerjaan saya.",
    buktiRest:
      " AI mengangkat status saya — dari developer, jadi engineer of my own AI ecosystem.",
  },
  en: {
    h1: ["Hello,", "I'm", "Rezi."],
    lead: "Rather than just typing lines of code, my focus is on system architecture and execution efficiency using modern tools to transform your idea into a live product as quickly as possible without compromising quality. Backed by over six years of full-stack experience, I now orchestrate an AI sub-agent pipeline spanning from discovery to deployment, combining technical execution with a sharp commercial perspective to evaluate both the feasibility and strategic value of every feature I build.",
    portraitAlt:
      "Artwork: a silhouette behind frosted glass with a hand pressed to the surface — not a portrait of Rezi",
    portraitCaption: "This is not me",
    buktiLabel: "Proof",
    buktiEmphasis: "AI didn't take my job.",
    buktiRest:
      " It leveled me up — from developer to engineer of my own AI ecosystem.",
  },
};
