import type { Locale } from "@/lib/locale";

/**
 * Copy Quick Info panel sementara dari mockup (`design-mockups/shared.js`).
 * Bukan copy final — kunci + ganti teks di T-021.6 (v10).
 *
 * Email/Links = tautan/rujukan, bukan form inbound (ADR-022).
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
    bio: "Saya merancang pengalaman digital yang bersih. Berbasis di Indonesia. Bekerja worldwide. (contoh)",
    servicesLabel: "Services",
    services: [
      "Product",
      "Fullstack",
      "AI",
      "Interaction design",
      "Strategy",
      "Research",
    ],
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
    bio: "I craft clean digital experiences. Based in Indonesia. Working worldwide. (sample copy)",
    servicesLabel: "Services",
    services: [
      "Product",
      "Fullstack",
      "AI",
      "Interaction design",
      "Strategy",
      "Research",
    ],
    toolsLabel: "Tools",
    tools: ["Next.js", "TypeScript", "Astryx", "Figma", "Postgres", "Vercel"],
    worksLabel: "Works index",
    emailLabel: "Email",
    linksLabel: "Links",
  },
};
