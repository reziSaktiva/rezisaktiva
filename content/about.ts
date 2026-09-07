import type { Locale } from "@/lib/locale";

/**
 * Copy About pribadi. Dikunci T-021.3 (hero + lead) + T-021.2 (bukti AI).
 * Cara kerja (offers, approach, values, proses) ada di `content/workflow.ts`
 * (ADR-035). ID = teks final dari Boss Rezi; EN = adaptasi makna.
 */

export interface AboutCopy {
  h1: readonly string[];
  lead1: string;
  lead2: string;
  availability: string;
  availabilityBadge: string;
  portraitAlt: string;
  buktiLabel: string;
  buktiEmphasis: string;
  buktiRest: string;
}

export const ABOUT_PORTRAIT_SRC =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop";

export const ABOUT_COPY: Record<Locale, AboutCopy> = {
  id: {
    h1: ["Halo,", "saya", "Rezi."],
    lead1:
      "Saya tidak menghabiskan waktu untuk sekadar mengetik baris kode. Fokus utama saya adalah arsitektur sistem dan efisiensi eksekusi—memanfaatkan alat modern untuk merakit ide Anda menjadi produk live secepat mungkin, tanpa mengorbankan kualitas.",
    lead2:
      "Berbekal 6+ tahun pengalaman fullstack, kini saya mengorkestrasi pipeline AI subagent dari discovery hingga deployment. Lensa komersial yang saya miliki memastikan saya tidak cuma tahu cara build, tapi paham kelayakan dan nilai strategis di balik setiap fitur.",
    availability:
      "Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.",
    availabilityBadge: "Terbuka untuk proyek baru",
    portraitAlt: "Placeholder — ganti dengan foto pribadi Rezi",
    buktiLabel: "Bukti",
    buktiEmphasis: "AI tidak menghilangkan pekerjaan saya.",
    buktiRest:
      " AI mengangkat status saya — dari developer, jadi engineer of my own AI ecosystem.",
  },
  en: {
    h1: ["Hello,", "I'm", "Rezi."],
    lead1:
      "I don't spend my time just typing lines of code. My focus is system architecture and execution efficiency—using modern tools to turn your idea into a live product as fast as possible, without compromising quality.",
    lead2:
      "With 6+ years of fullstack experience, I now orchestrate an AI subagent pipeline from discovery to deployment. My commercial lens means I don't just know how to build—I understand the feasibility and strategic value behind every feature.",
    availability: "Open to selected projects in the coming months.",
    availabilityBadge: "Available for new projects",
    portraitAlt: "Placeholder — replace with Rezi’s photo",
    buktiLabel: "Proof",
    buktiEmphasis: "AI didn't take my job.",
    buktiRest:
      " It leveled me up — from developer to engineer of my own AI ecosystem.",
  },
};
