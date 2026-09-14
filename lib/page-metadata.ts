import type { Metadata } from "next";
import { PERSON } from "@/content/person";
import { SITE_META, type SiteSurface } from "@/content/site-meta";
import type { Locale } from "@/lib/locale";
import { getSiteUrl, localePath } from "@/lib/site-url";

/** Satu kartu situs T-031.1 / T-031.3. Bukan Unsplash, bukan foto diri. */
export const SITE_SHARE_IMAGE = {
  url: "/brand/og.png",
  width: 1200,
  height: 630,
  alt: "rezisaktiva",
} as const;

/**
 * OG dasar + canonical dari `NEXT_PUBLIC_SITE_URL` (T-017.2, M7).
 * Path tanpa prefix locale, mis. `""` (Home), `"workflow"`, `"projects"`.
 * About = `#about` di Home (ADR-040), bukan path halaman.
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
