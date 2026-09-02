"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Theme } from "@astryxdesign/core/theme";
import { rezisaktivaTheme } from "@/theme/rezisaktiva";
import {
  getThemeModeSnapshot,
  setThemeMode,
  subscribeThemeMode,
  type ThemeMode,
} from "@/lib/theme-mode";

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggle: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

interface ThemeModeProviderProps {
  children: ReactNode;
  /**
   * Preferensi yang sudah diketahui server (dibaca dari cookie di
   * `app/layout.tsx`, default "light" kalau tidak ada — ADR-021 poin 2).
   * Dialirkan sebagai prop (bukan module state) supaya per-request dan aman
   * dari kebocoran antar request — lihat komentar `lib/theme-mode.ts`.
   *
   * Karena nilai ini identik dengan yang akan dipakai render client pertama
   * (`getSnapshot` di bawah jatuh balik ke prop ini kalau localStorage
   * kosong), server & client snapshot SELALU sama — tidak ada lagi render
   * koreksi `useSyncExternalStore` yang menyebabkan flash tema.
   */
  initialMode: ThemeMode;
}

/**
 * T-013.4 (ADR-021) — default ship tetap light kalau belum ada preferensi.
 * Mode dibaca lewat `useSyncExternalStore` dari `lib/theme-mode.ts`; server
 * & client snapshot pertama sama-sama `initialMode` (dari cookie), sehingga
 * tanpa effect/setState terpisah dan tanpa hydration mismatch/flash.
 */
export function ThemeModeProvider({ children, initialMode }: ThemeModeProviderProps) {
  const getServerSnapshot = useCallback(() => initialMode, [initialMode]);
  const getSnapshot = useCallback(
    () => getThemeModeSnapshot(initialMode),
    [initialMode],
  );
  const mode = useSyncExternalStore(subscribeThemeMode, getSnapshot, getServerSnapshot);

  /**
   * Sinkronkan `style.colorScheme` + class `dark` di `<html>` tiap kali
   * `mode` berubah (toggle tanpa reload). Jangan lewat `className` React di
   * `<html>` — itu menimpa class Lenis / overlay lock. Nilai awal: cookie
   * SSR untuk `colorScheme` + script `beforeInteractive` (`classList`).
   * Layout effect `Theme` Astryx (`useRootThemeSync`) cuma `data-theme`.
   */
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = mode;
    root.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const value = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      toggle: () => setThemeMode(mode === "dark" ? "light" : "dark"),
    }),
    [mode],
  );

  return (
    <ThemeModeContext value={value}>
      <Theme theme={rezisaktivaTheme} mode={mode}>
        {children}
      </Theme>
    </ThemeModeContext>
  );
}

export function useThemeMode(): ThemeModeContextValue {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode harus dipakai di dalam ThemeModeProvider");
  }
  return ctx;
}

/**
 * Warna chip kuning (nav link, locale switch, mobile drawer — lihat
 * `globals.css` `.site-nav-chip`/`.site-locale-switch`/`.site-mobile-nav-chip`).
 *
 * Bug ditemukan 2026-08-16 (lihat COMPLETE_TASK.md): sebelumnya dua warna ini
 * ("--chrome-pill-bg"/"--chrome-pill-fg") didefinisikan lewat CSS
 * `light-dark()` di `:root` (`globals.css`), MEWARISI `color-scheme` dari
 * wrapper `<div>` Astryx yang jauh di atasnya. Terbukti lewat CDP
 * (`transition-property: background-color, color` bawaan Astryx pada chip)
 * bahwa browser sempat meng-kalkulasi `light-dark()` itu 1 pass memakai
 * skema yang salah sebelum "settle" ke yang benar — transition Astryx lalu
 * membuat koreksi itu terlihat sebagai animasi warna (persis gejala yang
 * dilaporkan: chip "Home"/bahasa terpilih kedip sebentar sebelum jadi hitam).
 *
 * Fix: jangan gantungkan warna ini ke resolusi `light-dark()` CSS sama
 * sekali. Hitung langsung dari `mode` React (satu-satunya sumber kebenaran,
 * sudah dijamin identik antara server & client — lihat `ThemeModeProvider`
 * di atas) dan suntikkan sebagai inline `style` di elemen wrapper masing-
 * masing (`site-header.tsx`, `locale-switcher.tsx`). Tidak ada CSS
 * `color-scheme`/`light-dark()` yang perlu di-resolve sama sekali untuk 2
 * token ini lagi, jadi tidak ada lagi kemungkinan koreksi 2-pass.
 *
 * PENTING — jaga sinkron manual (code review 2026-08-16): nilai hex di
 * bawah adalah SATU-SATUNYA sumber yang benar-benar dipakai saat runtime.
 * `app/globals.css` `:root { --chrome-pill-bg/--chrome-pill-fg }` cuma
 * fallback statis (tidak pernah kepakai selama `useChipColorVars()`
 * ter-render) — kalau ubah warna di sini, update juga fallback di
 * `globals.css` (komentar di sana menunjuk balik ke sini).
 */
const CHIP_COLOR_BY_MODE: Record<ThemeMode, { bg: string; fg: string }> = {
  light: { bg: "#0a0f1a", fg: "#edeae1" },
  dark: { bg: "#edeae1", fg: "#0a0f1a" },
};

/**
 * `CSSProperties` bawaan React belum punya index signature untuk custom
 * property (`--*`) — intersection type ini (bukan `as` cast, code review
 * 2026-08-16) tetap menahan compiler mengecek 2 key wajibnya, karena semua
 * properti `CSSProperties` opsional sehingga object literal yang cuma
 * berisi 2 custom property ini tetap valid secara struktural.
 */
type ChipColorVars = CSSProperties & {
  "--chrome-pill-bg": string;
  "--chrome-pill-fg": string;
};

export function useChipColorVars(): ChipColorVars {
  const { mode } = useThemeMode();
  const { bg, fg } = CHIP_COLOR_BY_MODE[mode];
  return { "--chrome-pill-bg": bg, "--chrome-pill-fg": fg };
}
