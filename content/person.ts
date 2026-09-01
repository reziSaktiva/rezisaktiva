import type { Locale } from "@/lib/locale";

/**
 * Identitas yang sudah tampil di UI (T-029.1).
 * `name` = h1 About (`ABOUT_COPY.h1`), bukan nama legal yang belum tertulis.
 * `jobTitle` = frasa yang sama di bio Quick Info — bukan string baru.
 * `worksFor` = tempat kerja yang tampil di Home (seksi Now), About, dan Quick Info.
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

export const PERSON_WORKPLACE_COPY: Record<
  Locale,
  { prefix: string; newTab: string }
> = {
  id: { prefix: "Saat ini di", newTab: "(buka tab baru)" },
  en: { prefix: "Currently at", newTab: "(opens in a new tab)" },
};
