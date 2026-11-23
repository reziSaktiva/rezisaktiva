import type { Metadata } from "next";
import { PERSON } from "@/content/person";
import {
  SITE_META,
  SITE_TITLE_NAME,
  type SiteSurface,
} from "@/content/site-meta";
import type { Locale } from "@/lib/locale";
import { getSiteUrl, localePath, PROJECTS_PATH } from "@/lib/site-url";

/** Single site share card T-031.1 / T-031.3. Not Unsplash, not a portrait photo. */
export const SITE_SHARE_IMAGE = {
  url: "/brand/og.png",
  width: 1200,
  height: 630,
  alt: "rezisaktiva",
} as const;

/**
 * Base OG + canonical from `NEXT_PUBLIC_SITE_URL` (T-017.2, M7).
 * Path without locale prefix, e.g. `""` (Home), `"workflow"`, `"projects"`.
 * About = `#about` on Home (ADR-040), not a page path.
 */
export function pageMetadata(
  locale: Locale,
  surface: SiteSurface,
  path = "",
  copyOverride?: { title: string; description: string },
): Metadata {
  const copy = copyOverride ?? SITE_META[locale][surface];
  const siteUrl = getSiteUrl();
  const canonicalPath = localePath(locale, path);
  const canonical = `${siteUrl}${canonicalPath}`;

  const aboutUrl = `${siteUrl}${localePath(locale)}#about`;

  return {
    title: copy.title,
    description: copy.description,
    applicationName: PERSON.alternateName,
    authors: [{ name: PERSON.name, url: aboutUrl }],
    creator: PERSON.name,
    publisher: PERSON.name,
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      telephone: false,
      address: false,
    },
    alternates: {
      canonical,
      languages: {
        id: `${siteUrl}${localePath("id", path)}`,
        en: `${siteUrl}${localePath("en", path)}`,
        "x-default": `${siteUrl}${localePath("en", path)}`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonical,
      siteName: "rezisaktiva",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
      images: [SITE_SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [SITE_SHARE_IMAGE.url],
    },
  };
}

/**
 * Title/description/canonical/OG per case page (T-056.5).
 * Share card = site asset; per-work OG is not a blocker.
 */
export function casePageMetadata(
  locale: Locale,
  slug: string,
  copy: { name: string; description: string },
): Metadata {
  return pageMetadata(locale, "work", `${PROJECTS_PATH}/${slug}`, {
    title: `${SITE_TITLE_NAME} — ${copy.name}`,
    description: copy.description,
  });
}