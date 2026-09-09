import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_REQUEST_HEADER, isLocale } from "@/lib/locale";
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
};

/**
 * Anti-flash + `html.dark` (T-032.5) tanpa `className` di JSX `<html>`.
 * Lenis, `ct-lock` / `qi-lock` / `ps-lock`, dan `page-vt-lock` juga menulis
 * class di `documentElement` lewat `classList`. Kalau React punya
 * `className` di `<html>`, reconcile RSC (navigasi setelah cookie tema
 * berubah) menimpa seluruh atribut `class` dan class itu hilang.
 *
 * Class `dark` awal: `ThemeInitScript` (`useServerInsertedHTML`) memanggil
 * `classList.toggle("dark")` — tidak `setAttribute("class")`.
 * Cookie menang vs localStorage (code review 2026-08-16). Tanpa cookie,
 * localStorage di-apply sekali dan cookie di-tulis (migrasi 1x).
 * `data-theme` di-set di JSX dari cookie (`initialMode`) supaya first paint
 * CSS `html[data-theme]` tidak menunggu script. Toggle tanpa reload tetap
 * lewat `ThemeModeProvider` (`setAttribute`), bukan `className` di `<html>`.
 */
export default async function RootLayout({ children }: LayoutProps<"/">) {
  /**
   * Fix flash tema (bug ditemukan 2026-08-16, lihat COMPLETE_TASK.md):
   * baca preferensi dari cookie SEBELUM render pertama, supaya server &
   * client langsung sinkron — tidak ada lagi render koreksi
   * `useSyncExternalStore` yang bikin flash. `cookies()` di Next.js
   * request-scoped/aman untuk concurrent request (bukan module state).
   * Default "dark" selama T-038.2 hold (`THEME_HOLD_FORCE_DARK`).
   * Cookie light tidak boleh menampilkan palet krem lama.
   *
   * Trade-off yang perlu diketahui: memanggil `cookies()` di root layout
   * membuat SELURUH app keluar dari static rendering (semua route jadi
   * render dinamis per-request, tidak bisa di-cache statis/ISR) — ini
   * konsekuensi inheren cookie-based SSR-theme, bukan sesuatu yang bisa
   * dihindari selagi tema harus diketahui server sebelum render pertama.
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
         * Deklarasi `color-scheme` di 2 tempat sejak byte pertama HTML (tanpa
         * JS/CSS sama sekali): meta tag ini + inline `style` di `<html>` di
         * atas. Script anti-flash class `dark` = `ThemeInitScript` (bukan
         * `next/script` di sini — React 19 menolak `<script>` di pohon layout).
         * Ini lapis pertahanan terhadap heuristik "auto dark mode"
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
