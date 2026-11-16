const FALLBACK_SITE_URL = "http://localhost:3000";

/**
 * Stable public host (ADR-048). Apex `rezisaktiva.space` points here.
 * Not `*.vercel.app`.
 */
export const PRODUCTION_SITE_URL = "https://www.rezisaktiva.space";

/** Vercel deploy hostname that must not become the canonical URL. */
export const VERCEL_DEPLOY_HOST = "rezisaktiva.vercel.app";

/**
 * Canonical origin for meta/OG/JSON-LD/sitemap (T-017.2, ADR-048).
 * Vercel builds (production and preview) always use `PRODUCTION_SITE_URL`
 * even when `NEXT_PUBLIC_SITE_URL` is empty, localhost, or `*.vercel.app`.
 * Local: env value, or localhost when empty / not http(s).
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

/** M9 catalog path (label Proyek / Projects). */
export const PROJECTS_PATH = "projects";

/** M14 workflow path (label Proses Kerja / How I Work). */
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