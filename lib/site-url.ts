const FALLBACK_SITE_URL = "http://localhost:3000";

/**
 * Host publik yang tetap (ADR-048). Apex `rezisaktiva.space` mengarah ke sini.
 * Bukan `*.vercel.app`.
 */
export const PRODUCTION_SITE_URL = "https://www.rezisaktiva.space";

/** Hostname deploy Vercel yang tidak boleh jadi URL kanonis. */
export const VERCEL_DEPLOY_HOST = "rezisaktiva.vercel.app";

/**
 * Canonical origin untuk meta/OG/JSON-LD/sitemap (T-017.2, ADR-048).
 * Build Vercel (production dan preview) selalu memakai `PRODUCTION_SITE_URL`,
 * meski `NEXT_PUBLIC_SITE_URL` kosong, localhost, atau `*.vercel.app`.
 * Lokal: nilai env, atau localhost bila kosong / bukan http(s).
 */
export function getSiteUrl(): string {
  if (
    process.env.VERCEL_ENV === "production" ||
    process.env.VERCEL_ENV === "preview"
  ) {
    return PRODUCTION_SITE_URL;
  }

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

/** Path cara kerja M14 (label Proses Kerja / How I Work). */
export const WORKFLOW_PATH = "workflow";

export function projectsHref(locale: string): string {
  return localePath(locale, PROJECTS_PATH);
}

export function projectCaseHref(locale: string, slug: string): string {
  return localePath(locale, `${PROJECTS_PATH}/${slug}`);
}

export function workflowHref(locale: string): string {
  return localePath(locale, WORKFLOW_PATH);
}
