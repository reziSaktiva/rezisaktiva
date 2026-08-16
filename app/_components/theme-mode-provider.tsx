"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { Theme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";
import {
  getThemeModeServerSnapshot,
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

/**
 * T-013.4 (ADR-021) — default ship tetap light. Mode dibaca lewat
 * `useSyncExternalStore` dari `lib/theme-mode.ts`: server selalu snapshot
 * "light", client membaca preferensi tersimpan (localStorage) — tanpa
 * effect/setState terpisah, tanpa hydration mismatch.
 */
export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const mode = useSyncExternalStore(
    subscribeThemeMode,
    getThemeModeSnapshot,
    getThemeModeServerSnapshot,
  );

  const value = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      toggle: () => setThemeMode(mode === "dark" ? "light" : "dark"),
    }),
    [mode],
  );

  return (
    <ThemeModeContext value={value}>
      <Theme theme={neutralTheme} mode={mode}>
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
