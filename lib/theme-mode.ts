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
 *
 * Cookie = satu-satunya sumber kebenaran untuk snapshot React (code review
 * 2026-08-16, lihat COMPLETE_TASK.md): `getThemeModeSnapshot` DULU membaca
 * localStorage untuk priming cache, yang bisa berbeda dari cookie (mis. user
 * bersihkan cookie tapi tidak localStorage, atau sebaliknya) — begitu
 * berbeda, `useSyncExternalStore` mendeteksi mismatch client vs server lagi
 * dan bug flash yang sama muncul kembali. `getThemeModeSnapshot` sekarang
 * SELALU prime dari `fallback` (`initialMode`, dari cookie) tanpa membaca
 * localStorage sama sekali — localStorage hanya jadi target tulis
 * (`writeStoredThemeMode`, dipakai `getThemeInitScript` /
 * `ThemeInitScript` sebagai fallback pra-hydrasi kalau cookie belum pernah
 * ada sama sekali — kasus migrasi 1x, self-healing karena script itu
 * langsung menulis cookie).
 */
export const THEME_MODE_STORAGE_KEY = "rz-theme";

/**
 * T-038.2 / ADR-021 update 2026-09-04 — light di-hold.
 * Ship selalu dark; toggle chrome disembunyikan. Jangan hapus mesin cookie.
 * Cabut hold: set `false` + tampilkan `ThemeToggle` lagi.
 */
export const THEME_HOLD_FORCE_DARK = true;

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

/**
 * Suffix atribut cookie bersama (dipakai `writeStoredThemeMode` di sini).
 * `secure` cuma disertakan di HTTPS — kalau selalu disertakan, cookie diam-
 * diam gagal ter-set di `next dev` (http://localhost), karena browser
 * menolak cookie `Secure` di origin non-HTTPS.
 */
function cookieAttributes(): string {
  const secure =
    typeof location !== "undefined" && location.protocol === "https:" ? "; secure" : "";
  return `path=/; max-age=${THEME_MODE_COOKIE_MAX_AGE_SECONDS}; samesite=lax${secure}`;
}

function writeStoredThemeMode(mode: ThemeMode): void {
  try {
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
  } catch {
    // Abaikan kegagalan storage — toggle tetap bekerja untuk sesi berjalan.
  }
  try {
    document.cookie = `${THEME_MODE_COOKIE_KEY}=${mode}; ${cookieAttributes()}`;
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
 * (lihat `ThemeModeProvider`, nilainya dari cookie). SENGAJA tidak membaca
 * localStorage di sini (lihat komentar besar di atas) — priming cache HARUS
 * sama dengan apa yang sudah di-render server, supaya tidak ada mismatch
 * `useSyncExternalStore` sama sekali, terlepas dari isi localStorage.
 */
export function getThemeModeSnapshot(fallback: ThemeMode): ThemeMode {
  if (cachedMode === null) {
    cachedMode = fallback;
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

/**
 * Blocking anti-flash — diinjeksikan lewat `useServerInsertedHTML`
 * (bukan `<Script>` / `<script>` di pohon layout: React 19 menolak itu).
 */
export function getThemeInitScript(): string {
  return `(function () {
  try {
    var key = ${JSON.stringify(THEME_MODE_STORAGE_KEY)};
    var forceDark = ${THEME_HOLD_FORCE_DARK ? "true" : "false"};
    var prefix = key + "=";
    var mode = null;
    if (forceDark) {
      mode = "dark";
    } else {
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
    }
    var root = document.documentElement;
    root.setAttribute("data-theme", mode);
    root.style.colorScheme = mode;
    root.classList.toggle("dark", mode === "dark");
  } catch (e) {}
})();`;
}
