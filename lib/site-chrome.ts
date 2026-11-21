import { projectsHref } from "@/lib/site-url";

/** `<main>` id + skip-to-content. Page-vt clone strips `id`, so lock CSS must exclude `.page-vt-clone`. */
export const MAIN_CONTENT_ID = "site-chrome-main";

/**
 * Header variant for a path (T-081.1): the Work index uses the floating glass
 * bar (v5 mockup `.wbar`); every other page, case pages included, keeps the
 * masthead + scroll-up dock.
 */
export type SiteHeaderVariant = "masthead" | "bar";

export function siteHeaderVariant(
  pathname: string,
  locale: string,
): SiteHeaderVariant {
  const work = projectsHref(locale);
  return pathname === work || pathname === `${work}/` ? "bar" : "masthead";
}
