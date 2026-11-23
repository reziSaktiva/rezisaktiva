import type { Locale } from "@/lib/locale";

/**
 * Identity already shown in the UI (T-029.1).
 * `name` = About title (`ABOUT_COPY.title`), not an unwritten legal name.
 * `jobTitle` = same phrase in Quick Info bio — not a new string.
 * `worksFor` = workplace shown in About section (`#now`) and Quick Info.
 * Email / sameAs from `content/data/email.json` + `links.json`. JSON-LD is not written in this file.
 */

export const PERSON = {
  name: "Rezi",
  alternateName: "rezisaktiva",
  jobTitle: "Senior Web Engineer",
  worksFor: {
    name: "Insvire Omni Technologies",
    url: "https://www.insvire.com/",
  },
} as const;

/** Label chrome kiri (ADR-034). Bukan h1 About / bio Quick Info. */
export const PERSON_CHROME = {
  name: "REZI SAKTIVA",
  jobTitle: "Senior Web Engineer",
} as const;

export const PERSON_WORKPLACE_COPY: Record<
  Locale,
  { kicker: string; prefix: string; newTab: string }
> = {
  id: { kicker: "Sekarang", prefix: "Saat ini di", newTab: "(buka tab baru)" },
  en: { kicker: "Now", prefix: "Currently at", newTab: "(opens in a new tab)" },
};
