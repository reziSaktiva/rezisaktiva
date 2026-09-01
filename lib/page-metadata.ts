import type { Metadata } from "next";
import { SITE_META, type SiteSurface } from "@/content/site-meta";
import type { Locale } from "@/lib/locale";
import { getSiteUrl, localePath } from "@/lib/site-url";

/**
 * OG dasar + canonical dari `NEXT_PUBLIC_SITE_URL` (T-017.2, M7).
 * Path tanpa prefix locale, mis. `""` (Home), `"about"`, `"projects"`.
 */
export function pageMetadata(
  locale: Locale,
  surface: SiteSurface,
  path = "",
): Metadata {
  const copy = SITE_META[locale][surface];
  const siteUrl = getSiteUrl();
  const canonicalPath = localePath(locale, path);
  const canonical = `${siteUrl}${canonicalPath}`;

  return {
    title: copy.title,
    description: copy.description,
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
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
    },
  };
}
