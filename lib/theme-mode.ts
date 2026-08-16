/**
 * T-013.4 (ADR-021) — external store untuk preferensi dark/light toggle.
 * Pakai pola `useSyncExternalStore` (bukan useState + useEffect) supaya
 * baca localStorage saat hydration tidak memicu "setState in effect" /
 * hydration mismatch — ini pola resmi React untuk nilai yang boleh
 * berbeda antara render server & client (lihat dokumentasi React untuk
 * `useSyncExternalStore`, contoh use case: preferensi dark mode).
 *
 * Key & pola penyimpanan mengikuti mockup (`design-mockups/shared.js`,
 * `rz-theme`) sesuai ADR-021 poin 2.
 */
export const THEME_MODE_STORAGE_KEY = "rz-theme";

export type ThemeMode = "light" | "dark";

type Listener = () => void;

const listeners = new Set<Listener>();

/** Cache in-memory — diisi sekali dari localStorage saat pertama dibaca di client. */
let cachedMode: ThemeMode | null = null;

function readStoredThemeMode(): ThemeMode | null {
  try {
    const stored = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    // Storage tidak tersedia (private mode, dsb.) — treat seperti tidak ada preferensi.
    return null;
  }
}

function writeStoredThemeMode(mode: ThemeMode): void {
  try {
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
  } catch {
    // Abaikan kegagalan storage — toggle tetap bekerja untuk sesi berjalan.
  }
}

export function subscribeThemeMode(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Snapshot client — dipanggil `useSyncExternalStore` setelah hydration. */
export function getThemeModeSnapshot(): ThemeMode {
  if (cachedMode === null) {
    cachedMode = readStoredThemeMode() ?? "light";
  }
  return cachedMode;
}

/** Snapshot server — default ship tetap light (ADR-021 poin 2). */
export function getThemeModeServerSnapshot(): ThemeMode {
  return "light";
}

export function setThemeMode(mode: ThemeMode): void {
  cachedMode = mode;
  writeStoredThemeMode(mode);
  for (const listener of listeners) {
    listener();
  }
}
