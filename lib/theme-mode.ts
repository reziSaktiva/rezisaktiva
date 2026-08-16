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
 *
 * Anti-flash fix (bug ditemukan 2026-08-16, lihat CONVERSATIONS.md):
 * localStorage tidak terbaca server, jadi kalau server snapshot selalu
 * hardcode "light", user yang preferensinya "dark" PASTI kena render
 * hydration-mismatch-correction — dan komponen `Theme` Astryx mengikat warna
 * ke atribut yang di-render React (wrapper div-nya), bukan cuma CSS murni,
 * jadi render koreksi itu benar-benar tampak sebagai flash.
 *
 * Preferensi sekarang JUGA disimpan di cookie (dibaca `app/layout.tsx` lewat
 * `next/headers`, per-request) supaya Server Component tahu preferensi asli
 * SEBELUM render pertama, lalu dialirkan ke `ThemeModeProvider` sebagai PROP
 * `initialMode` — bukan lewat variable module-level. Ini penting: module JS
 * di server (Node.js runtime) dipakai bersama antar request yang berjalan
 * bersamaan, jadi variable module-level TIDAK boleh menyimpan nilai yang
 * berbeda per-request (risiko preferensi user A "bocor" ke response user B).
 * `cachedMode` di bawah cuma pernah dibaca/ditulis oleh kode client (browser
 * tab punya module instance sendiri), sehingga tetap aman dipakai sebagai
 * cache in-memory untuk sinkron antar-tab.
 */
export const THEME_MODE_STORAGE_KEY = "rz-theme";

/** Nama cookie sama dengan storage key — satu sumber nilai, dua media penyimpanan. */
const THEME_MODE_COOKIE_KEY = THEME_MODE_STORAGE_KEY;
const THEME_MODE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 tahun

export type ThemeMode = "light" | "dark";

type Listener = () => void;

const listeners = new Set<Listener>();

/** Cache in-memory client-only — diisi sekali dari localStorage saat pertama dibaca. */
let cachedMode: ThemeMode | null = null;

function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === "dark" || value === "light";
}

function readStoredThemeMode(): ThemeMode | null {
  try {
    const stored = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
    return isThemeMode(stored) ? stored : null;
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
  try {
    document.cookie = `${THEME_MODE_COOKIE_KEY}=${mode}; path=/; max-age=${THEME_MODE_COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
  } catch {
    // Abaikan kegagalan cookie — hanya memengaruhi anti-flash SSR, bukan fungsi toggle.
  }
}

/**
 * Parse nilai cookie (dibaca `app/layout.tsx` lewat `cookies()` dari
 * `next/headers`, request-scoped & aman) jadi `ThemeMode` yang valid.
 * Pure function, tidak menyentuh `window`/`document` — aman dipanggil server.
 */
export function parseThemeModeCookieValue(value: string | null | undefined): ThemeMode | null {
  return isThemeMode(value) ? value : null;
}

export function subscribeThemeMode(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Snapshot client — dipanggil `useSyncExternalStore` setelah hydration.
 * `fallback` adalah `initialMode` yang dialirkan lewat prop dari server
 * (lihat `ThemeModeProvider`) — dipakai kalau localStorage kosong/gagal
 * dibaca, supaya konsisten dengan apa yang sudah di-render server.
 */
export function getThemeModeSnapshot(fallback: ThemeMode): ThemeMode {
  if (cachedMode === null) {
    cachedMode = readStoredThemeMode() ?? fallback;
  }
  return cachedMode;
}

export function setThemeMode(mode: ThemeMode): void {
  cachedMode = mode;
  writeStoredThemeMode(mode);
  for (const listener of listeners) {
    listener();
  }
}
