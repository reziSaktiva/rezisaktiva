import type { Locale } from "@/lib/locale";

/**
 * Copy Quick Info panel. Dikunci T-021.6 (2026-08-28) lewat diskusi:
 * bio dari About (pendek); Services = offering About; Tools + label
 * mockup apa adanya (campur EN di locale ID). Bukan form Contact (ADR-022).
 * Daftar karya / email / LinkedIn+GitHub dari `content/work.ts` + `contact.ts`.
 */

export interface QuickInfoCopy {
  tab: string;
  title: string;
  close: string;
  bio: string;
  servicesLabel: string;
  services: readonly string[];
  toolsLabel: string;
  tools: readonly string[];
  worksLabel: string;
  emailLabel: string;
  linksLabel: string;
}

export const QUICK_INFO_COPY: Record<Locale, QuickInfoCopy> = {
  id: {
    tab: "Quick info",
    title: "Quick info",
    close: "Tutup quick info",
    bio: "Fullstack Product Builder. Saya mengorkestrasi tim AI subagent dari discovery hingga deployment—sementara arsitektur dan keputusan akhir tetap mutlak di tangan saya.",
    servicesLabel: "Services",
    services: ["Product", "Fullstack", "AI & Orchestration"],
    toolsLabel: "Tools",
    tools: ["Next.js", "TypeScript", "Astryx", "Figma", "Postgres", "Vercel"],
    worksLabel: "Works index",
    emailLabel: "Email",
    linksLabel: "Links",
  },
  en: {
    tab: "Quick info",
    title: "Quick info",
    close: "Close quick info",
    bio: "Fullstack Product Builder. I orchestrate a team of AI subagents from discovery through deployment—but the architecture and final decisions remain firmly in my hands.",
    servicesLabel: "Services",
    services: ["Product", "Fullstack", "AI & Orchestration"],
    toolsLabel: "Tools",
    tools: ["Next.js", "TypeScript", "Astryx", "Figma", "Postgres", "Vercel"],
    worksLabel: "Works index",
    emailLabel: "Email",
    linksLabel: "Links",
  },
};
