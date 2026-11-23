import type { Locale } from "@/lib/locale";

/**
 * Identity already shown in the UI (T-029.1).
 * `name` = About title (`ABOUT_COPY.title`), not an unwritten legal name.
 * `jobTitle` = same phrase in Quick Info bio — not a new string.
 * `worksFor` = workplace shown in About section (`#now`) and Quick Info.
 * `fullName` = the one source for page titles, JSON-LD Person name, and the
 * chrome label.
 * Email / sameAs from `content/data/email.json` + `links.json`. JSON-LD is not written in this file.
 */

const FULL_NAME = "Rezi Saktiva";

export const PERSON = {
  name: "Rezi",
  fullName: FULL_NAME,
  alternateName: "rezisaktiva",
  jobTitle: "Senior Web Engineer",
  worksFor: {
    name: "Insvire Omni Technologies",
    url: "https://www.insvire.com/",
  },
} as const;

/** Label chrome kiri (ADR-034). Bukan h1 About / bio Quick Info. */
export const PERSON_CHROME = {
  name: FULL_NAME.toUpperCase(),
  jobTitle: PERSON.jobTitle,
} as const;

/** Career start: Junior Full Stack Developer, June 2020 (resume). */
export const CAREER_START = { year: 2020, month: 6 } as const;

/** Full years since `CAREER_START`, evaluated at build time (SSG). */
export function yearsOfExperience(now: Date = new Date()): number {
  const months =
    (now.getFullYear() - CAREER_START.year) * 12 +
    (now.getMonth() + 1 - CAREER_START.month);
  return Math.floor(months / 12);
}

const NUMBER_WORDS: Record<Locale, readonly string[]> = {
  en: [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
  ],
  id: [
    "nol",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
    "dua belas",
    "tiga belas",
    "empat belas",
    "lima belas",
  ],
};

/** Years of experience as a word ("six" / "enam"); digits past fifteen. */
export function yearsOfExperienceWord(
  locale: Locale,
  now: Date = new Date(),
): string {
  const years = yearsOfExperience(now);
  return NUMBER_WORDS[locale][years] ?? String(years);
}

/** Uppercase first letter, for a years word that starts a line. */
export function capitalizeFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const PERSON_WORKPLACE_COPY: Record<
  Locale,
  { kicker: string; prefix: string; newTab: string }
> = {
  id: { kicker: "Sekarang", prefix: "Saat ini di", newTab: "(buka tab baru)" },
  en: { kicker: "Now", prefix: "Currently at", newTab: "(opens in a new tab)" },
};
