/**
 * Locale skeleton — path prefix `/[id|en]/...` per ADR-014.
 * Baseline R1 hanya dua locale; tambah locale baru = perubahan material (butuh ADR).
 */
export const LOCALES = ["id", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Request header set by `proxy.ts` so root `<html lang>` follows the path. */
export const LOCALE_REQUEST_HEADER = "x-locale";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : null;
}
