const FALLBACK_SITE_URL = "http://localhost:3000";

/**
 * Canonical origin untuk meta/OG (T-017.2).
 * Nilai dari `NEXT_PUBLIC_SITE_URL` — trailing slash dibuang.
 * Kosong / bukan URL http(s) jatuh ke localhost supaya `new URL()` di
 * metadata root tidak throw.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";
  const candidate = raw.replace(/\/+$/, "");
  if (!candidate) {
    return FALLBACK_SITE_URL;
  }
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return FALLBACK_SITE_URL;
    }
    return candidate;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function localePath(locale: string, pathname = ""): string {
  const suffix = pathname.startsWith("/")
    ? pathname
    : pathname
      ? `/${pathname}`
      : "";
  return `/${locale}${suffix}`;
}

/** Path katalog M9 (label Proyek / Projects). */
export const PROJECTS_PATH = "projects";

export function projectsHref(locale: string): string {
  return localePath(locale, PROJECTS_PATH);
}
