import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";

/**
 * Title + description destinasi R1. Dikunci T-021.7 (2026-08-28);
 * About vs Workflow dipisah ADR-035 (2026-09-07).
 * Contact = modal, tidak punya title halaman. OG/canonical tetap T-017.2.
 */

export type SiteSurface = "home" | "about" | "workflow" | "work";

export interface SurfaceMeta {
  title: string;
  description: string;
}

export const SITE_META: Record<Locale, Record<SiteSurface, SurfaceMeta>> = {
  id: {
    home: {
      title: "rezisaktiva — Home",
      description: HOME_COPY.id.contactBody,
    },
    about: {
      title: "rezisaktiva — Tentang",
      description:
        "Fokus saya bukan sekadar menulis baris kode, melainkan merancang arsitektur sistem dan efisiensi eksekusi.",
    },
    workflow: {
      title: "rezisaktiva — Proses Kerja",
      description:
        "Fullstack developer yang mengorkestrasi tim AI subagent — dari discovery, arsitektur, sampai deployment produk.",
    },
    work: {
      title: "rezisaktiva — Proyek",
      description:
        "Proyek dari pengalaman fullstack saya, dengan beberapa yang terbaru mengeksplorasi AI ecosystem yang saya kembangkan sendiri.",
    },
  },
  en: {
    home: {
      title: "rezisaktiva — Home",
      description: HOME_COPY.en.contactBody,
    },
    about: {
      title: "rezisaktiva — About",
      description:
        "Rather than just typing lines of code, my focus is on system architecture and execution efficiency.",
    },
    workflow: {
      title: "rezisaktiva — How I Work",
      description:
        "A fullstack developer orchestrating AI subagent teams — from discovery and architecture to deployment.",
    },
    work: {
      title: "rezisaktiva — Projects",
      description:
        "Projects from my fullstack experience, with a few recent ones exploring the AI ecosystem I built myself.",
    },
  },
};
