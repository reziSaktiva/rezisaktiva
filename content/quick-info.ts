import type { Locale } from "@/lib/locale";
import services from "./data/services.json";
import tools from "./data/tools.json";

/**
 * Copy Quick Info panel. Dikunci T-021.6. Bio dari About (pendek).
 * Services / tools dari `content/data/services.json` + `tools.json`.
 * Daftar karya / email / tautan dari `content/work.ts` + `contact.ts`.
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
    services: services.id,
    toolsLabel: "Tools",
    tools: tools.id,
    worksLabel: "Proyek",
    emailLabel: "Email",
    linksLabel: "Links",
  },
  en: {
    tab: "Quick info",
    title: "Quick info",
    close: "Close quick info",
    bio: "Fullstack Product Builder. I orchestrate a team of AI subagents from discovery through deployment—but the architecture and final decisions remain firmly in my hands.",
    servicesLabel: "Services",
    services: services.en,
    toolsLabel: "Tools",
    tools: tools.en,
    worksLabel: "Projects",
    emailLabel: "Email",
    linksLabel: "Links",
  },
};
