import type { Locale } from "@/lib/locale";

/**
 * Slot project sheet (M10, T-026.1, ADR-027). Fakta dari
 * `private/Resume_rezi_updated_agustus_2026.md` — bukan dikarang.
 * Gambar R1 = gambar tile yang sudah ada (CV tidak punya aset galeri).
 * Year tetap di `WorkItem` (T-021.5).
 */

export interface WorkSheetCopy {
  close: string;
  servicesLabel: string;
  locationLabel: string;
  yearLabel: string;
  descriptionLabel: string;
  liveLabel: string;
  repoLabel: string;
}

export interface WorkSheetFields {
  services: readonly string[];
  locationOrCompany: string;
  description: string;
  gitHref?: string;
}

export const WORK_SHEET_COPY: Record<Locale, WorkSheetCopy> = {
  id: {
    close: "Tutup detail proyek",
    servicesLabel: "Layanan",
    locationLabel: "Lokasi / perusahaan",
    yearLabel: "Tahun",
    descriptionLabel: "Deskripsi",
    liveLabel: "Live",
    repoLabel: "Repo",
  },
  en: {
    close: "Close project details",
    servicesLabel: "Services",
    locationLabel: "Location / company",
    yearLabel: "Year",
    descriptionLabel: "Description",
    liveLabel: "Live",
    repoLabel: "Repo",
  },
};

const INSPIRE = {
  id: "Insvire Omni Technology, Bandung",
  en: "Insvire Omni Technology, Bandung",
} as const;

const BANDUNG = {
  id: "Bandung, Indonesia",
  en: "Bandung, Indonesia",
} as const;

/**
 * Kunci = `WorkItem.id`. Role/services mengikuti subtitle CV.
 */
export const WORK_SHEET_BY_ID: Record<
  string,
  {
    gitHref?: string;
    services: Record<Locale, readonly string[]>;
    locationOrCompany: Record<Locale, string>;
    description: Record<Locale, string>;
  }
> = {
  "1": {
    services: {
      id: ["Product Owner & AI Orchestrator"],
      en: ["Product Owner & AI Orchestrator"],
    },
    locationOrCompany: BANDUNG,
    description: {
      id: "Membangun platform manajemen media sosial dengan mengorkestrasi 7 AI subagent berperan spesifik (backend, QA, arsitektur, UI, product design) melalui workflow terstruktur end-to-end. Tiga custom skill mendokumentasikan keputusan, bug, dan progres sepanjang siklus development. Staging di Railway; integrasi publishing pihak ketiga (Outstand) sedang berjalan.",
      en: "A social media management platform built by orchestrating 7 role-specific AI subagents (backend, QA, architecture, UI, product design) through an end-to-end workflow. Three custom skills keep decisions, bugs, and progress documented across the development cycle. Staging is live on Railway; third-party publishing (Outstand) is in progress.",
    },
  },
  "2": {
    gitHref: "https://github.com/reziSaktiva/cookitrealgood",
    services: {
      id: ["Web Engineer"],
      en: ["Web Engineer"],
    },
    locationOrCompany: INSPIRE,
    description: {
      id: "Memimpin migrasi ~500 resep dari WordPress lama menggunakan Node.js (tuntas 1–2 hari), termasuk migrasi plugin resep dari Mediavine ke WP Recipe Maker. Komponen WordPress (WPRM, Feast, Kadence) diterjemahkan menjadi custom component Next.js agar kartu dan daftar resep konsisten di frontend headless. Menambah Web Stories dan structured data (schema.org: Recipe, Organization) untuk menjaga visibilitas SEO. Infrastruktur bergeser dari VPS + Coolify ke Railway; PostHog terpasang untuk analytics.",
      en: "Led the migration of ~500 recipes off legacy WordPress with Node.js (finished in 1–2 days), including moving the recipe plugin from Mediavine to WP Recipe Maker. WordPress pieces (WPRM, Feast, Kadence) became custom Next.js components so recipe cards and lists stay consistent on the headless frontend. Added Web Stories and schema.org structured data (Recipe, Organization) to keep SEO visibility. Infrastructure moved from VPS + Coolify to Railway, with PostHog for analytics.",
    },
  },
  "3": {
    gitHref: "https://github.com/reziSaktiva/minecraft-new",
    services: {
      id: ["Fullstack Developer"],
      en: ["Fullstack Developer"],
    },
    locationOrCompany: INSPIRE,
    description: {
      id: "Membangun halaman blog (/blog) dengan arsitektur headless — WordPress sebagai CMS, Next.js sebagai frontend — dengan Core Web Vitals yang dijaga. On-demand revalidation (ISR) lewat webhook supaya update konten instan tanpa rebuild penuh. Dua plugin WordPress internal untuk routing dan pencarian REST API sesuai kebutuhan frontend.",
      en: "Built the /blog surface as a headless stack — WordPress as CMS, Next.js as the frontend — with Core Web Vitals kept in range. On-demand ISR via webhook so content updates without a full rebuild. Two internal WordPress plugins cover routing and REST search for the frontend.",
    },
  },
  "4": {
    gitHref: "https://github.com/reziSaktiva/smc-auction",
    services: {
      id: ["Fullstack Developer"],
      en: ["Fullstack Developer"],
    },
    locationOrCompany: INSPIRE,
    description: {
      id: "Job queue (BullMQ) untuk tugas latar belakang berat, termasuk notifikasi lelang otomatis ke Discord. Klasemen lelang real-time lewat Socket.io dan bot Discord interaktif. Next-Auth v5 plus validasi form ketat (React Hook Form + Zod) di klien dan server.",
      en: "A BullMQ job queue for heavy background work, including automatic auction alerts to Discord. Live standings over Socket.io and an interactive Discord bot. Next-Auth v5 plus strict form validation (React Hook Form + Zod) on client and server.",
    },
  },
  "5": {
    gitHref: "https://github.com/reziSaktiva/rezisaktiva",
    services: {
      id: ["Product Owner & AI Orchestrator"],
      en: ["Product Owner & AI Orchestrator"],
    },
    locationOrCompany: BANDUNG,
    description: {
      id: "Merancang dan mengarahkan pengembangan portofolio pribadi melalui alur kerja AI-native: product discovery → arsitektur → eksekusi fitur. Keputusan teknis dan produk dijaga lewat Architecture Decision Record (ADR).",
      en: "Designed and directed this personal portfolio through an AI-native workflow: product discovery → architecture → feature execution. Technical and product decisions are kept consistent through Architecture Decision Records (ADRs).",
    },
  },
  "6": {
    services: {
      id: ["Fullstack Developer"],
      en: ["Fullstack Developer"],
    },
    locationOrCompany: INSPIRE,
    description: {
      id: "Sanity CMS (GROQ) untuk pustaka ROM dan metadata game. Emulator WebAssembly menjalankan game konsol (PS1, PSP, NES) langsung di browser. Engagement lewat Disqus, social share, dan Vercel Analytics.",
      en: "Sanity CMS (GROQ) for the ROM library and game metadata. A WebAssembly emulator runs console games (PS1, PSP, NES) in the browser. Engagement via Disqus, social share, and Vercel Analytics.",
    },
  },
  "7": {
    services: {
      id: ["Backend Developer"],
      en: ["Backend Developer"],
    },
    locationOrCompany: INSPIRE,
    description: {
      id: "Dual-backend Apollo GraphQL (Admin & Client) dengan pemisahan akses. Personalisasi Algolia dan kategorisasi topik multimodal (Google Cloud AI: teks, gambar, video). Nearby Posts (geolokasi) dan grup sosial Rooms dengan notifikasi real-time lewat GraphQL Subscriptions. Infrastruktur serverless Firebase Cloud Functions. Scope fitur yang direncanakan selesai; pengembangan dihentikan keputusan strategis product owner, bukan kendala teknis.",
      en: "A dual-backend Apollo GraphQL setup (Admin & Client) with strict access separation. Algolia personalization and multimodal topic tagging (Google Cloud AI: text, image, video). Nearby Posts (geolocation) and social Rooms with real-time GraphQL subscriptions. Serverless Firebase Cloud Functions. Planned feature scope shipped; the product owner stopped development for strategic reasons, not a technical failure.",
    },
  },
  "8": {
    services: {
      id: ["Data Engineering & System Migration"],
      en: ["Data Engineering & System Migration"],
    },
    locationOrCompany: INSPIRE,
    description: {
      id: "Migrasi dua tahap (metadata & konten) untuk memindahkan ribuan artikel dari MySQL ke WordPress. Checkpoint/resume berbasis log CSV agar migrasi bisa dilanjut setelah gangguan. Google Vision AI dan Gemini (gemini-2.5-flash) untuk alt-text SEO otomatis pada gambar yang dimigrasi. Project internal — tidak ada URL publik.",
      en: "A two-stage migration (metadata and content) moving thousands of articles from MySQL to WordPress. CSV-log checkpoint/resume so the job can continue after a network or server interruption. Google Vision AI and Gemini (gemini-2.5-flash) generate SEO alt text for migrated images. Internal project — no public URL.",
    },
  },
};

export function getWorkSheet(
  locale: Locale,
  id: string,
): WorkSheetFields | undefined {
  const row = WORK_SHEET_BY_ID[id];
  if (!row) {
    return undefined;
  }
  return {
    services: row.services[locale],
    locationOrCompany: row.locationOrCompany[locale],
    description: row.description[locale],
    gitHref: row.gitHref,
  };
}
