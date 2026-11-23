import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_REQUEST_HEADER, isLocale } from "@/lib/locale";
import { SITE_CANVAS_COLOR, SITE_HEAD_ICONS } from "@/lib/site-manifest";
import { getSiteUrl } from "@/lib/site-url";
import { archivo, barlowCondensed, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "rezisaktiva",
    template: "%s",
  },
  icons: SITE_HEAD_ICONS,
};

/** T-031.4 / T-085.5 — browser chrome matches the paper masthead; static, no cookie. */
export const viewport: Viewport = {
  themeColor: SITE_CANVAS_COLOR,
};

/**
 * Single theme (ADR-054): no cookie, no anti-flash script, no `data-theme`.
 * Lenis and `page-vt-lock` write classes on
 * `documentElement` via `classList`, so `<html>` never gets a React `className`.
 * The root layout no longer reads `cookies()`; only the locale request header.
 */
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerLocale = (await headers()).get(LOCALE_REQUEST_HEADER);
  const htmlLang =
    headerLocale && isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${barlowCondensed.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
