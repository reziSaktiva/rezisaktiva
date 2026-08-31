import { SITE_META, type SiteSurface } from "@/content/site-meta";
import { LOCALES, type Locale } from "@/lib/locale";
import { getSiteUrl, localePath } from "@/lib/site-url";

function surfacePath(surface: SiteSurface): string {
  return surface === "home" ? "" : surface;
}

function surfaces(): SiteSurface[] {
  return Object.keys(SITE_META[LOCALES[0]]) as SiteSurface[];
}

/** Enam destinasi R1: locale × permukaan, dari `SITE_META` + `LOCALES`. */
export function r1PageUrls(): {
  locale: Locale;
  surface: SiteSurface;
  url: string;
}[] {
  const siteUrl = getSiteUrl();
  return LOCALES.flatMap((locale) =>
    surfaces().map((surface) => ({
      locale,
      surface,
      url: `${siteUrl}${localePath(locale, surfacePath(surface))}`,
    })),
  );
}
