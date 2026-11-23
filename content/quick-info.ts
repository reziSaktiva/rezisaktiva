import type { Locale } from "@/lib/locale";
import services from "./data/services.json";
import tools from "./data/tools.json";

/**
 * Quick Info panel copy. Locked T-021.6. Bio from About (short).
 * Services / tools from `content/data/services.json` + `tools.json`.
 * Work list / email / links from `content/work.ts` + `contact.ts`.
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
    bio: "Senior Web Engineer di Bandung, Indonesia. 6+ tahun membangun produk web fullstack dengan Next.js, TypeScript, dan Node.js, kini dengan alur kerja berbantuan AI yang mendokumentasikan setiap keputusan.",
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
    bio: "Senior Web Engineer in Bandung, Indonesia. 6+ years building fullstack web products in Next.js, TypeScript and Node.js, now with an AI-assisted workflow where every decision is documented.",
    servicesLabel: "Services",
    services: services.en,
    toolsLabel: "Tools",
    tools: tools.en,
    worksLabel: "Projects",
    emailLabel: "Email",
    linksLabel: "Links",
  },
};
