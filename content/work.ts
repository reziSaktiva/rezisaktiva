import type { Locale } from "@/lib/locale";

/**
 * Katalog karya R1 + copy halaman Work index. Dikunci T-021.5 (2026-08-20)
 * dari `private/Resume_rezi_updated_agustus_2026.md` — nama, outcome, dan
 * tautan harus faktual, tidak dikarang.
 *
 * `href` = tautan keluar (live diutamakan, fallback repo). `undefined` =
 * tanpa tautan (SMC Migration: project internal, tidak ada URL publik).
 * Di Work index, tile membuka sheet M10 (T-026); live/repo hanya di dalam
 * sheet. Teaser Home tetap ke `/[locale]/work`.
 */

export interface WorkItem {
  id: string;
  name: string;
  outcome: string;
  imageSrc: string;
  year: string;
  featured: boolean;
  href?: string;
}

const WORK_IMAGES: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop",
  "2": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  "3": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  "4": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  "5": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop",
  "6": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "7": "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  "8": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
};

export interface WorkPageCopy {
  h1: [string, string];
  lead: string;
  ctaQuestion: string;
  ctaLink: string;
}

export const WORK_ITEMS: Record<Locale, readonly WorkItem[]> = {
  id: [
    {
      id: "1",
      name: "Social Media Management Platform",
      outcome:
        "Platform medsos dari nol, dikerjain bareng 7 AI subagent — backend, QA, arsitektur, UI.",
      imageSrc: WORK_IMAGES["1"],
      year: "2026",
      featured: true,
      href: "https://github.com/reziSaktiva/social-media-management",
    },
    {
      id: "2",
      name: "Cook It Real Good",
      outcome:
        "Migrasi ~500 resep dari WordPress lama ke Next.js headless, tuntas 1–2 hari.",
      imageSrc: WORK_IMAGES["2"],
      year: "2025",
      featured: false,
      href: "https://www.cookitrealgood.com/",
    },
    {
      id: "3",
      name: "Minerank — Blog",
      outcome:
        "Blog headless dengan update instan lewat webhook, tanpa rebuild penuh.",
      imageSrc: WORK_IMAGES["3"],
      year: "2025",
      featured: false,
      href: "https://www.minerank.com/blog",
    },
    {
      id: "4",
      name: "SMC Auction",
      outcome:
        "Lelang real-time — job queue, notifikasi otomatis, bot Discord interaktif.",
      imageSrc: WORK_IMAGES["4"],
      year: "2024",
      featured: false,
      href: "https://smc.auction",
    },
    {
      id: "5",
      name: "Personal Portfolio — rezisaktiva",
      outcome:
        "Situs ini sendiri: keputusan produk lewat 22 ADR, eksekusi lewat AI.",
      imageSrc: WORK_IMAGES["5"],
      year: "2026",
      featured: true,
      href: "https://rezisaktiva.space",
    },
    {
      id: "6",
      name: "Gamestalgia",
      outcome: "Emulator konsol lewat WebAssembly, jalan langsung di browser.",
      imageSrc: WORK_IMAGES["6"],
      year: "2023",
      featured: false,
      href: "http://www.gamestalgia.net",
    },
    {
      id: "7",
      name: "Curious",
      outcome:
        "Dual-backend GraphQL dengan personalisasi Algolia. Dihentikan product owner, bukan kendala teknis.",
      imageSrc: WORK_IMAGES["7"],
      year: "2023–2024",
      featured: false,
      href: "https://github.com/reziSaktiva/curious-server",
    },
    {
      id: "8",
      name: "SMC Migration",
      outcome:
        "Migrasi ribuan artikel dari MySQL ke WordPress dengan checkpoint/resume otomatis.",
      imageSrc: WORK_IMAGES["8"],
      year: "2025",
      featured: false,
    },
  ],
  en: [
    {
      id: "1",
      name: "Social Media Management Platform",
      outcome:
        "A social platform built from scratch with 7 AI subagents — backend, QA, architecture, UI.",
      imageSrc: WORK_IMAGES["1"],
      year: "2026",
      featured: true,
      href: "https://github.com/reziSaktiva/social-media-management",
    },
    {
      id: "2",
      name: "Cook It Real Good",
      outcome:
        "Migrated ~500 recipes from legacy WordPress to headless Next.js in 1–2 days.",
      imageSrc: WORK_IMAGES["2"],
      year: "2025",
      featured: false,
      href: "https://www.cookitrealgood.com/",
    },
    {
      id: "3",
      name: "Minerank — Blog",
      outcome:
        "Headless blog with instant webhook updates, no full rebuilds.",
      imageSrc: WORK_IMAGES["3"],
      year: "2025",
      featured: false,
      href: "https://www.minerank.com/blog",
    },
    {
      id: "4",
      name: "SMC Auction",
      outcome:
        "Real-time auctions — job queues, automated alerts, an interactive Discord bot.",
      imageSrc: WORK_IMAGES["4"],
      year: "2024",
      featured: false,
      href: "https://smc.auction",
    },
    {
      id: "5",
      name: "Personal Portfolio — rezisaktiva",
      outcome:
        "This site itself: product decisions across 22 ADRs, execution through AI.",
      imageSrc: WORK_IMAGES["5"],
      year: "2026",
      featured: true,
      href: "https://rezisaktiva.space",
    },
    {
      id: "6",
      name: "Gamestalgia",
      outcome: "A console emulator running straight in the browser via WebAssembly.",
      imageSrc: WORK_IMAGES["6"],
      year: "2023",
      featured: false,
      href: "http://www.gamestalgia.net",
    },
    {
      id: "7",
      name: "Curious",
      outcome:
        "Dual-backend GraphQL with Algolia personalization. Shut down by the product owner, not a technical failure.",
      imageSrc: WORK_IMAGES["7"],
      year: "2023–2024",
      featured: false,
      href: "https://github.com/reziSaktiva/curious-server",
    },
    {
      id: "8",
      name: "SMC Migration",
      outcome:
        "Migrated thousands of articles from MySQL to WordPress with automatic checkpoint/resume.",
      imageSrc: WORK_IMAGES["8"],
      year: "2025",
      featured: false,
    },
  ],
};

export const WORK_PAGE_COPY: Record<Locale, WorkPageCopy> = {
  id: {
    h1: ["Proyek", "saya."],
    lead: "Kumpulan proyek dari pengalaman fullstack saya, dengan beberapa proyek terbaru mengeksplorasi AI ecosystem yang saya kembangkan sendiri.",
    ctaQuestion: "Ada yang mau dibahas?",
    ctaLink: "Hubungi saya",
  },
  en: {
    h1: ["My", "Projects"],
    lead: "A collection of projects from my fullstack experience, with a few recent ones exploring the AI ecosystem I built myself.",
    ctaQuestion: "Want to talk about one?",
    ctaLink: "Get in touch",
  },
};
