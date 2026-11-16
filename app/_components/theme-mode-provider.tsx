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
import {
  getThemeModeSnapshot,
  setThemeMode,
  subscribeThemeMode,
  type ThemeMode,
} from "@/lib/theme-mode";
import { ThemeInitScript } from "./theme-init-script";

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggle: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

interface ThemeModeProviderProps {
  children: ReactNode;
  /**
   * Preference already known on the server (read from cookie in
   * `app/layout.tsx`, default "light" when missing — ADR-021 point 2).
   * Passed as a prop (not module state) so it is per-request and safe from
   * cross-request leakage — see `lib/theme-mode.ts` comments.
   *
   * Because this value matches the first client render
   * (`getSnapshot` below falls back to this prop when localStorage is empty),
   * server & client snapshots are ALWAYS equal — no more
   * `useSyncExternalStore` correction renders that caused theme flash.
   */
  initialMode: ThemeMode;
}

/**
 * T-013.4 (ADR-021) — default ship stays light when no preference yet.
 * Mode is read via `useSyncExternalStore` from `lib/theme-mode.ts`; first
 * server & client snapshots are both `initialMode` (from cookie), so there is
 * no separate effect/setState and no hydration mismatch/flash.
 */
export function ThemeModeProvider({ children, initialMode }: ThemeModeProviderProps) {
  const getServerSnapshot = useCallback(() => initialMode, [initialMode]);
  const getSnapshot = useCallback(
    () => getThemeModeSnapshot(initialMode),
    [initialMode],
  );
  const mode = useSyncExternalStore(subscribeThemeMode, getSnapshot, getServerSnapshot);

  /**
   * Sync `style.colorScheme` + `dark` class on `<html>` whenever `mode` changes
   * (toggle without reload). Do not use React `className` on `<html>` — it
   * overwrites Lenis / overlay lock classes. Initial values: cookie SSR for
   * `colorScheme` + `ThemeInitScript` (`classList`).
   * `data-theme` is set in SSR markup (`app/layout.tsx`) and synced here on
   * toggle without reload. Initial `dark` class: `ThemeInitScript`
   * (`useServerInsertedHTML` + `classList`). No React `className` on `<html>`.
   */
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);
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
      <ThemeInitScript />
      {children}
    </ThemeModeContext>
  );
}

export function useThemeMode(): ThemeModeContextValue {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }
  return ctx;
}

/**
 * Yellow chip colors (nav link, locale switch, mobile drawer — see
 * `globals.css` `.site-nav-chip`/`.site-mobile-nav-chip`).
 *
 * Bug found 2026-08-16 (see COMPLETE_TASK.md): previously these two colors
 * ("--chrome-pill-bg"/"--chrome-pill-fg") were defined via CSS `light-dark()`
 * on `:root` (`globals.css`), INHERITING `color-scheme` from a high Astryx
 * wrapper `<div>`. Proven via CDP (`transition-property: background-color, color`
 * on chips by default) that the browser sometimes computed `light-dark()` in
 * one pass with the wrong scheme before settling — Astryx transition then made
 * the correction look like a color animation (exact symptom reported: selected
 * "Home"/language chip flashed briefly before turning black).
 *
 * Fix: do not tie these colors to CSS `light-dark()` resolution at all.
 * Compute directly from React `mode` (single source of truth, already guaranteed
 * identical server & client — see `ThemeModeProvider` above) and inject as inline
 * `style` on each wrapper (`site-header.tsx`). No CSS `color-scheme`/`light-dark()`
 * resolution needed for these 2 tokens anymore, so no 2-pass correction.
 *
 * IMPORTANT — keep in sync manually (code review 2026-08-16): hex values below
 * are the ONLY source actually used at runtime. `app/globals.css`
 * `:root { --chrome-pill-bg/--chrome-pill-fg }` is only a static fallback
 * (never used while `useChipColorVars()` renders) — if you change colors here,
 * update the fallback in `globals.css` (comments there point back here).
 */
const CHIP_COLOR_BY_MODE: Record<ThemeMode, { bg: string; fg: string }> = {
  /* T-038.3 selected = blood spot; T-039.1 wine. Hold: same in both modes. */
  light: { bg: "#6B1C23", fg: "#E8E4DC" },
  dark: { bg: "#6B1C23", fg: "#E8E4DC" },
};

/**
 * Built-in React `CSSProperties` has no index signature for custom properties
 * (`--*`) — this intersection type (not an `as` cast, code review 2026-08-16)
 * still lets the compiler check the two required keys, because all `CSSProperties`
 * fields are optional so an object literal with only these 2 custom properties
 * remains structurally valid.
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