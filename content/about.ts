import type { Locale } from "@/lib/locale";

/**
 * Copy About / Proses Kerja sementara dari mockup (`design-mockups/about.html`).
 * Bukan copy final — kunci + ganti teks di T-021.3 (v10).
 */

export interface AboutOffer {
  num: string;
  title: string;
  body: string;
}

export interface AboutStep {
  num: string;
  title: string;
  body: string;
}

export interface AboutCopy {
  h1: readonly string[];
  lead1: string;
  lead2: string;
  availability: string;
  portraitAlt: string;
  helpTitle: string;
  offers: readonly AboutOffer[];
  approachLabel: string;
  approachBody: string;
  valuesLabel: string;
  values: readonly string[];
  processTitle: string;
  processNote: string;
  steps: readonly AboutStep[];
  ctaQuestion: string;
  ctaLink: string;
}

export const ABOUT_PORTRAIT_SRC =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop";

export const ABOUT_COPY: Record<Locale, AboutCopy> = {
  id: {
    h1: ["Halo,", "saya", "Rezi."],
    lead1:
      "Membangun produk dari ide sampai live — itu yang saya lakukan setiap hari.",
    lead2:
      "~6 tahun di fullstack. Saya bantu founder dan PO membuat sesuatu yang benar-benar terpakai, bukan yang hanya terdengar bagus di slide.",
    availability:
      "Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.",
    portraitAlt: "Placeholder — ganti dengan foto pribadi Rezi",
    helpTitle: "Yang bisa saya bantu",
    offers: [
      {
        num: "01",
        title: "Product",
        body: "Dari pertanyaan “apa yang seharusnya dibangun” sampai alur yang siap di-ship.",
      },
      {
        num: "02",
        title: "Fullstack",
        body: "Data, API, interface. Satu orang yang bisa bicara trade-off di semua lapisan.",
      },
      {
        num: "03",
        title: "AI",
        body: "Akselerator, bukan klaim. Mempercepat proses — fondasi engineering tetap di tangan.",
      },
    ],
    approachLabel: "Approach",
    approachBody:
      "Selalu penasaran, selalu belajar, menikmati setiap langkahnya. Termasuk yang berantakan di tengah.",
    valuesLabel: "Values",
    values: [
      "Yang belum live, belum selesai.",
      "Desain yang baik adalah sistem keputusan — bukan slide yang cantik.",
      "Siklus pendek mengalahkan spekulasi.",
    ],
    processTitle: "Bagaimana saya menggerakkan sebuah project",
    processNote:
      "Dari ide ke sesuatu yang bisa dicoba. Keputusan berikutnya dari bukti, bukan tebakan.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "Pahami masalah nyatanya dulu. Baru kode.",
      },
      {
        num: "02",
        title: "Design",
        body: "Alur produk dan pilihan teknis yang bisa dibela — bukan stack yang lagi tren.",
      },
      {
        num: "03",
        title: "Build",
        body: "Eksekusi cepat. AI mempercepat, tidak memutuskan.",
      },
      {
        num: "04",
        title: "Ship & Iterate",
        body: "Rilis, lalu perbaiki dari yang benar-benar terjadi.",
      },
    ],
    ctaQuestion: "Tertarik mengobrol lebih jauh?",
    ctaLink: "Hubungi saya",
  },
  en: {
    h1: ["Hello,", "I'm", "Rezi."],
    lead1: "Building products from idea to live — that is the work, every day.",
    lead2:
      "~6 years in fullstack. I help founders and POs ship something people actually use, not something that only sounds good on a slide.",
    availability: "Open to selected projects in the coming months.",
    portraitAlt: "Placeholder — replace with Rezi’s photo",
    helpTitle: "I can help you with",
    offers: [
      {
        num: "01",
        title: "Product",
        body: "From the question “what should be built” to a flow that is ready to ship.",
      },
      {
        num: "02",
        title: "Fullstack",
        body: "Data, API, interface. One person who can talk trade-offs across the stack.",
      },
      {
        num: "03",
        title: "AI",
        body: "An accelerator, not a claim. Faster process — engineering still in human hands.",
      },
    ],
    approachLabel: "Approach",
    approachBody:
      "Always curious, always learning, enjoying every step. Even the messy middle.",
    valuesLabel: "Values",
    values: [
      "If it is not live, it is not done.",
      "Good design is a system of decisions — not a pretty slide.",
      "A short cycle beats speculation.",
    ],
    processTitle: "How I move a project forward",
    processNote:
      "From idea to something tryable. The next decision comes from evidence, not guesswork.",
    steps: [
      {
        num: "01",
        title: "Discover",
        body: "Understand the real problem first. Then code.",
      },
      {
        num: "02",
        title: "Design",
        body: "Product flow and technical choices that can be defended — not a trendy stack.",
      },
      {
        num: "03",
        title: "Build",
        body: "Execute fast. AI accelerates; it does not decide.",
      },
      {
        num: "04",
        title: "Ship & Iterate",
        body: "Ship, then improve from what actually happens.",
      },
    ],
    ctaQuestion: "Want to talk further?",
    ctaLink: "Get in touch",
  },
};
