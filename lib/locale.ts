/**
 * Locale skeleton — path prefix `/[id|en]/...` per ADR-014.
 * Baseline R1 hanya dua locale; tambah locale baru = perubahan material (butuh ADR).
 */
export const LOCALES = ["id", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
