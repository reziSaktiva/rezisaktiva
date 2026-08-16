import type { Metadata } from "next";
import Script from "next/script";
import { ThemeModeProvider } from "./_components/theme-mode-provider";
import { THEME_MODE_STORAGE_KEY } from "@/lib/theme-mode";
import "./globals.css";

export const metadata: Metadata = {
  title: "rezisaktiva",
  description: "Portfolio site — bootstrap stub",
};

/**
 * Anti-flash untuk user yang sudah pilih dark mode (ADR-021): SSR/hydration
 * awal selalu snapshot "light" (lihat `lib/theme-mode.ts`), jadi tanpa ini
 * ada flash terang→gelap sesaat untuk user yang preferensinya tersimpan.
 * Script blocking ini set `data-theme` di `<html>` SEBELUM React hydrate —
 * pola resmi yang direkomendasikan Astryx sendiri (lihat komentar `Theme`
 * component di `@astryxdesign/core`: "For RSC/SSR, set data-theme on <html>
 * ... to avoid a flash of wrong theme before hydration"). Tidak menyebabkan
 * hydration mismatch karena `<html>` di JSX di bawah tidak mendeklarasikan
 * `data-theme` sama sekali — React tidak mengelola atribut yang bukan
 * bagian dari render output-nya sendiri.
 *
 * Key harus sama dengan `THEME_MODE_STORAGE_KEY` (`lib/theme-mode.ts`) —
 * di-inline langsung karena script ini harus plain JS (tidak bisa import
 * modul TS ke inline script).
 */
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem(${JSON.stringify(THEME_MODE_STORAGE_KEY)});
    if (stored === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body>
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </body>
    </html>
  );
}
