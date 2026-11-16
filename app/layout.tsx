import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_REQUEST_HEADER, isLocale } from "@/lib/locale";
import { SITE_CANVAS_COLOR, SITE_HEAD_ICONS } from "@/lib/site-manifest";
import { getSiteUrl } from "@/lib/site-url";
import {
  parseThemeModeCookieValue,
  THEME_HOLD_FORCE_DARK,
  THEME_MODE_STORAGE_KEY,
} from "@/lib/theme-mode";
import { ThemeModeProvider } from "./_components/theme-mode-provider";
import { instrumentSans, texturina } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "rezisaktiva",
    template: "%s",
  },
  icons: SITE_HEAD_ICONS,
};

/** T-031.4 — browser chrome. Static dark (T-038.2 hold); does not read cookie. */
export const viewport: Viewport = {
  themeColor: SITE_CANVAS_COLOR,
};

/**
 * Anti-flash + `html.dark` (T-032.5) without `className` on JSX `<html>`.
 * Lenis, `ct-lock` / `qi-lock` / `ps-lock`, and `page-vt-lock` also write
 * classes on `documentElement` via `classList`. If React owns `className` on
 * `<html>`, RSC reconcile (navigation after theme cookie changes) overwrites the
 * entire `class` attribute and those classes disappear.
 *
 * Initial `dark` class: `ThemeInitScript` (`useServerInsertedHTML`) calls
 * `classList.toggle("dark")` — not `setAttribute("class")`.
 * Cookie wins vs localStorage (code review 2026-08-16). Without cookie,
 * localStorage applies once and cookie is written (one-time migration).
 * `data-theme` is set in JSX from cookie (`initialMode`) so first-paint CSS
 * `html[data-theme]` does not wait for script. Toggle without reload still goes
 * through `ThemeModeProvider` (`setAttribute`), not `className` on `<html>`.
 */
export default async function RootLayout({ children }: LayoutProps<"/">) {
  /**
   * Theme flash fix (bug found 2026-08-16, see COMPLETE_TASK.md):
   * read preference from cookie BEFORE the first render so server &
   * client align immediately — no more `useSyncExternalStore` correction
   * flash. `cookies()` in Next.js is request-scoped/safe for concurrent
   * requests (not module state).
   * Default "dark" while T-038.2 hold (`THEME_HOLD_FORCE_DARK`).
   * Light cookie must not show the old cream palette.
   *
   * Trade-off: calling `cookies()` in the root layout opts the ENTIRE app out
   * of static rendering (all routes become per-request dynamic, cannot cache
   * statically/ISR) — inherent to cookie-based SSR theme, not avoidable while
   * the server must know theme before the first render.
   */
  const cookieStore = await cookies();
  const storedTheme = parseThemeModeCookieValue(
    cookieStore.get(THEME_MODE_STORAGE_KEY)?.value,
  );
  const initialMode = THEME_HOLD_FORCE_DARK ? "dark" : (storedTheme ?? "light");

  const headerLocale = (await headers()).get(LOCALE_REQUEST_HEADER);
  const htmlLang =
    headerLocale && isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;

  return (
    <html
      lang={htmlLang}
      data-theme={initialMode}
      suppressHydrationWarning
      style={{ colorScheme: initialMode }}
    >
      <head>
        {/*
         * Declare `color-scheme` in 2 places from the first HTML byte (no JS/CSS):
         * this meta tag + inline `style` on `<html>` above. Anti-flash `dark`
         * class script = `ThemeInitScript` (not `next/script` here — React 19
         * rejects `<script>` in the layout tree).
         * Defense against browser "auto dark mode" heuristics (Chrome etc. may
         * paint unstyled content dark when OS is dark & the page has not declared
         * color-scheme) — remaining flash Boss Rezi saw specifically in light
         * mode + OS dark, not caught by the prior two fixes (cookie SSR + Astryx
         * wrapper div) because those only apply after CSS/React render, not raw HTML.
         * Value always matches `initialMode` (server, per-request).
         */}
        <meta name="color-scheme" content={initialMode} />
      </head>
      <body
        className={`${instrumentSans.variable} ${texturina.variable} ${instrumentSans.className}`}
      >
        <ThemeModeProvider initialMode={initialMode}>
          {children}
        </ThemeModeProvider>
      </body>
    </html>
  );
}