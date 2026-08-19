import type { Metadata } from "next";
import Script from "next/script";
import { cookies } from "next/headers";
import { ThemeModeProvider } from "./_components/theme-mode-provider";
import {
  parseThemeModeCookieValue,
  THEME_MODE_STORAGE_KEY,
} from "@/lib/theme-mode";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "rezisaktiva",
    template: "%s",
  },
};

/**
 * Lapis pertahanan HANYA untuk kasus migrasi 1x (bukan lagi sumber utama
 * anti-flash — lihat `initialMode` di bawah, sumber kebenaran sekarang
 * cookie): kalau cookie belum PERNAH ada sama sekali (user lama dari
 * sebelum fix cookie ini ship, localStorage sudah punya preferensi tapi
 * belum pernah toggle sejak itu) tapi localStorage sudah punya preferensi,
 * script blocking ini set `data-theme`/`color-scheme` di `<html>` SEBELUM
 * React hydrate — pola resmi yang direkomendasikan Astryx sendiri (lihat
 * komentar `Theme` component di `@astryxdesign/core`: "For RSC/SSR, set
 * data-theme on <html> ... to avoid a flash of wrong theme before
 * hydration"). Tidak menyebabkan hydration mismatch karena `<html>` di JSX
 * di bawah tidak mendeklarasikan `data-theme` sama sekali — React tidak
 * mengelola atribut yang bukan bagian dari render output-nya sendiri.
 *
 * SENGAJA cek cookie dulu dan no-op kalau sudah ada (code review
 * 2026-08-16, lihat COMPLETE_TASK.md): kalau script ini tetap jalan
 * berdasarkan localStorage TANPA peduli cookie, dan keduanya kebetulan
 * berbeda (mis. user bersihkan cookie tapi tidak localStorage), script ini
 * akan memaksa `<html>` ke nilai localStorage padahal SSR (dan React yang
 * akan hydrate) sudah commit ke nilai cookie yang berbeda — flash yang
 * coba dihilangkan malah muncul lagi lewat jalur ini. Dengan hanya jalan
 * saat cookie benar-benar belum ada, lalu langsung MENULIS cookie itu juga
 * (self-healing), konflik ini cuma bisa terjadi maksimal 1x per browser
 * (kunjungan pertama setelah fix ini ship) — bukan risiko berulang.
 *
 * Key harus sama dengan `THEME_MODE_STORAGE_KEY` (`lib/theme-mode.ts`) —
 * di-inline langsung karena script ini harus plain JS (tidak bisa import
 * modul TS ke inline script).
 */
const themeInitScript = `
(function () {
  try {
    var key = ${JSON.stringify(THEME_MODE_STORAGE_KEY)};
    if (document.cookie.indexOf(key + "=") !== -1) {
      return;
    }
    var stored = window.localStorage.getItem(key);
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
      document.documentElement.style.colorScheme = stored;
      var secure = location.protocol === "https:" ? "; secure" : "";
      document.cookie = key + "=" + stored + "; path=/; max-age=31536000; samesite=lax" + secure;
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

  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ colorScheme: initialMode }}
    >
      <head>
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
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body>
        <ThemeModeProvider initialMode={initialMode}>
          {children}
        </ThemeModeProvider>
      </body>
    </html>
  );
}
