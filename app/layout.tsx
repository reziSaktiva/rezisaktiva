import type { Metadata } from "next";
import Script from "next/script";
import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_REQUEST_HEADER, isLocale } from "@/lib/locale";
import { getSiteUrl } from "@/lib/site-url";
import {
  parseThemeModeCookieValue,
  THEME_MODE_STORAGE_KEY,
} from "@/lib/theme-mode";
import { ThemeModeProvider } from "./_components/theme-mode-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "rezisaktiva",
    template: "%s",
  },
};

/**
 * Anti-flash + `html.dark` (T-032.5) tanpa `className` di JSX `<html>`.
 * Lenis, `ct-lock` / `qi-lock` / `ps-lock`, dan `page-vt-lock` juga menulis
 * class di `documentElement` lewat `classList`. Kalau React punya
 * `className` di `<html>`, reconcile RSC (navigasi setelah cookie tema
 * berubah) menimpa seluruh atribut `class` dan class itu hilang.
 *
 * Script ini `classList.toggle("dark")` saja — tidak `setAttribute("class")`.
 * Cookie menang vs localStorage (code review 2026-08-16). Tanpa cookie,
 * localStorage di-apply sekali dan cookie di-tulis (migrasi 1x).
 * `data-theme` di-set di JSX dari cookie (`initialMode`) supaya first paint
 * CSS `html[data-theme]` tidak menunggu script. Toggle tanpa reload tetap
 * lewat `ThemeModeProvider` (`setAttribute`), bukan `className` di `<html>`.
 *
 * Key = `THEME_MODE_STORAGE_KEY` — di-inline karena script harus plain JS.
 */
const themeInitScript = `
(function () {
  try {
    var key = ${JSON.stringify(THEME_MODE_STORAGE_KEY)};
    var prefix = key + "=";
    var mode = null;
    var parts = document.cookie.split("; ");
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].indexOf(prefix) === 0) {
        mode = parts[i].slice(prefix.length);
        break;
      }
    }
    var fromCookie = mode === "dark" || mode === "light";
    if (!fromCookie) {
      mode = window.localStorage.getItem(key);
      if (mode !== "dark" && mode !== "light") {
        return;
      }
      var secure = location.protocol === "https:" ? "; secure" : "";
      document.cookie = key + "=" + mode + "; path=/; max-age=31536000; samesite=lax" + secure;
    }
    var root = document.documentElement;
    root.setAttribute("data-theme", mode);
    root.style.colorScheme = mode;
    root.classList.toggle("dark", mode === "dark");
  } catch (e) {}
})();
`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  /**
   * Fix flash tema (bug ditemukan 2026-08-16, lihat COMPLETE_TASK.md):
   * baca preferensi dari cookie SEBELUM render pertama, supaya server &
   * client langsung sinkron — tidak ada lagi render koreksi
   * `useSyncExternalStore` yang bikin flash. `cookies()` di Next.js
   * request-scoped/aman untuk concurrent request (bukan module state).
   * Default "light" kalau cookie belum ada (ADR-021 poin 2, tidak berubah).
   *
   * Trade-off yang perlu diketahui: memanggil `cookies()` di root layout
   * membuat SELURUH app keluar dari static rendering (semua route jadi
   * render dinamis per-request, tidak bisa di-cache statis/ISR) — ini
   * konsekuensi inheren cookie-based SSR-theme, bukan sesuatu yang bisa
   * dihindari selagi tema harus diketahui server sebelum render pertama.
   */
  const cookieStore = await cookies();
  const initialMode =
    parseThemeModeCookieValue(cookieStore.get(THEME_MODE_STORAGE_KEY)?.value) ??
    "light";

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
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&f[]=satoshi@400,500&display=swap"
          rel="stylesheet"
        />
        {/*
         * Deklarasi `color-scheme` di 2 tempat sejak byte pertama HTML (tanpa
         * JS/CSS sama sekali): meta tag ini + inline `style` di <html> di
         * atas. Ini lapis pertahanan terhadap heuristik "auto dark mode"
         * browser (Chrome dkk. bisa auto-render konten belum-bergaya pakai
         * warna gelap kalau OS dark & halaman belum menyatakan color-scheme
         * yang didukung) — sumber sisa flash yang dilihat Boss Rezi khusus
         * di light mode + OS dark, tidak tertangkap 2 lapis fix sebelumnya
         * (cookie SSR + wrapper div Astryx) karena keduanya baru berlaku
         * setelah CSS/komponen React ter-render, bukan dari HTML mentah.
         * Nilai selalu sinkron dengan `initialMode` (server, per-request).
         */}
        <meta name="color-scheme" content={initialMode} />
      </head>
      <body suppressHydrationWarning>
        <ThemeModeProvider initialMode={initialMode}>
          {children}
        </ThemeModeProvider>
      </body>
    </html>
  );
}
