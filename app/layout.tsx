import type { Metadata } from "next";
import Script from "next/script";
import { cookies } from "next/headers";
import { ThemeModeProvider } from "./_components/theme-mode-provider";
import { parseThemeModeCookieValue, THEME_MODE_STORAGE_KEY } from "@/lib/theme-mode";
import "./globals.css";

export const metadata: Metadata = {
  title: "rezisaktiva",
  description: "Portfolio site — bootstrap stub",
};

/**
 * Lapis pertahanan tambahan (bukan lagi sumber utama anti-flash — lihat
 * `initialMode` di bawah): kalau untuk suatu alasan cookie tidak terkirim
 * ke server (mis. di-strip proxy/CDN) tapi localStorage masih ada, script
 * blocking ini tetap set `data-theme` di `<html>` SEBELUM React hydrate,
 * sebelum layout effect `Theme` Astryx sempat jalan. Pola ini resmi
 * direkomendasikan Astryx sendiri (lihat komentar `Theme` component di
 * `@astryxdesign/core`: "For RSC/SSR, set data-theme on <html> ... to avoid
 * a flash of wrong theme before hydration"). Tidak menyebabkan hydration
 * mismatch karena `<html>` di JSX di bawah tidak mendeklarasikan `data-theme`
 * sama sekali — React tidak mengelola atribut yang bukan bagian dari render
 * output-nya sendiri.
 *
 * Key harus sama dengan `THEME_MODE_STORAGE_KEY` (`lib/theme-mode.ts`) —
 * di-inline langsung karena script ini harus plain JS (tidak bisa import
 * modul TS ke inline script).
 */
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem(${JSON.stringify(THEME_MODE_STORAGE_KEY)});
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
      document.documentElement.style.colorScheme = stored;
    }
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
   */
  const cookieStore = await cookies();
  const initialMode =
    parseThemeModeCookieValue(cookieStore.get(THEME_MODE_STORAGE_KEY)?.value) ?? "light";

  return (
    <html lang="en" suppressHydrationWarning style={{ colorScheme: initialMode }}>
      <head>
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
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body>
        <ThemeModeProvider initialMode={initialMode}>{children}</ThemeModeProvider>
      </body>
    </html>
  );
}
