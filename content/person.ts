import type { Locale } from "@/lib/locale";

/**
 * Identitas yang sudah tampil di UI (T-029.1).
 * `name` = h1 About (`ABOUT_COPY.h1`), bukan nama legal yang belum tertulis.
 * `jobTitle` = frasa yang sama di bio Quick Info — bukan string baru.
 * `worksFor` = tempat kerja yang tampil di About (`#now`) dan Quick Info (bukan Home, ADR-037).
 * Email / sameAs dari `content/data/email.json` + `links.json`. JSON-LD tidak ditulis di file ini.
 */

export const PERSON = {
  name: "Rezi",
  alternateName: "rezisaktiva",
  jobTitle: "Fullstack Product Builder",
  worksFor: {
    name: "Insvire Technologies",
    url: "https://www.insvire.com/",
  },
} as const;

/** Label chrome kiri (ADR-034). Bukan h1 About / bio Quick Info. */
export const PERSON_CHROME = {
  name: "REZI SAKTIVA",
  jobTitle: "Web Engineer",
} as const;

export const PERSON_WORKPLACE_COPY: Record<
  Locale,
  { kicker: string; prefix: string; newTab: string }
> = {
  id: { kicker: "Sekarang", prefix: "Saat ini di", newTab: "(buka tab baru)" },
  en: { kicker: "Now", prefix: "Currently at", newTab: "(opens in a new tab)" },
};
