/**
 * T-013.4 (ADR-021) — external store for dark/light toggle preference.
 * Uses the `useSyncExternalStore` pattern (not useState + useEffect) so
 * reading localStorage during hydration does not trigger "setState in effect" /
 * hydration mismatch — the official React pattern for values that may
 * differ between server & client renders (see React docs for
 * `useSyncExternalStore`, e.g. dark mode preference).
 *
 * Key & storage pattern follow the mockup (`design-mockups/shared.js`,
 * `rz-theme`) per ADR-021 point 2.
 *
 * Anti-flash fix (bug found 2026-08-16, see CONVERSATIONS.md):
 * localStorage is unreadable on the server, so if the server snapshot always
 * hardcoded "light", users who prefer "dark" WILL hit hydration-mismatch
 * correction — and the Astryx `Theme` component bound colors to React-rendered
 * attributes (its wrapper div), not pure CSS alone,
 * so that correction render visibly flashed.
 *
 * Preference is now ALSO stored in a cookie (read in `app/layout.tsx` via
 * `next/headers`, per-request) so Server Components know the real preference
 * BEFORE the first render, then pass it to `ThemeModeProvider` as the
 * `initialMode` prop — not via module-level state. Important: JS modules on
 * the server (Node.js runtime) are shared across concurrent requests, so
 * module-level state MUST NOT hold per-request values (risk of user A's
 * preference leaking into user B's response). `cachedMode` below is only ever
 * read/written by client code (each browser tab has its own module instance),
 * so it remains safe as an in-memory cache for cross-tab sync.
 *
 * Cookie = the only source of truth for the React snapshot (code review
 * 2026-08-16, see COMPLETE_TASK.md): `getThemeModeSnapshot` used to read
 * localStorage first for cache priming, which could diverge from the cookie (e.g.
 * user clears cookie but not localStorage, or the reverse) — once they differ,
 * `useSyncExternalStore` detects client vs server mismatch again and the same
 * flash bug returns. `getThemeModeSnapshot` now ALWAYS primes from `fallback`
 * (`initialMode`, from cookie) without reading localStorage at all — localStorage
 * is only a write target (`writeStoredThemeMode`, used by `getThemeInitScript` /
 * `ThemeInitScript` as a pre-hydration fallback when no cookie exists yet —
 * one-time migration, self-healing because that script writes the cookie).
 */
export const THEME_MODE_STORAGE_KEY = "rz-theme";

/**
 * T-038.2 / ADR-021 update 2026-09-04 — light on hold.
 * Ship is always dark; chrome toggle hidden. Do not remove the cookie machinery.
 * Release hold: set `false` and show `ThemeToggle` again.
 */
export const THEME_HOLD_FORCE_DARK = true;

/** Cookie name matches storage key — one value source, two storage media. */
const THEME_MODE_COOKIE_KEY = THEME_MODE_STORAGE_KEY;
const THEME_MODE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 year

export type ThemeMode = "light" | "dark";

type Listener = () => void;

const listeners = new Set<Listener>();

/** Client-only in-memory cache — filled once from localStorage on first read. */
let cachedMode: ThemeMode | null = null;

function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === "dark" || value === "light";
}

/**
 * Shared cookie attribute suffix (used by `writeStoredThemeMode` here).
 * `secure` is only sent on HTTPS — if always sent, the cookie silently fails on
 * `next dev` (http://localhost) because the browser rejects `Secure` cookies on
 * non-HTTPS origins.
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
    // Ignore storage failure — toggle still works for the current session.
  }
  try {
    document.cookie = `${THEME_MODE_COOKIE_KEY}=${mode}; ${cookieAttributes()}`;
  } catch {
    // Ignore cookie failure — only affects SSR anti-flash, not toggle behavior.
  }
}

/**
 * Parse cookie value (read in `app/layout.tsx` via `cookies()` from
 * `next/headers`, request-scoped & safe) into a valid `ThemeMode`.
 * Pure function, does not touch `window`/`document` — safe to call on the server.
 */
export function parseThemeModeCookieValue(value: string | null | undefined): ThemeMode | null {
  return isThemeMode(value) ? value : null;
}

export function subscribeThemeMode(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Client snapshot — called by `useSyncExternalStore` after hydration.
 * `fallback` is `initialMode` passed via prop from the server
 * (see `ThemeModeProvider`, value from cookie). Deliberately does not read
 * localStorage here (see block comment above) — cache priming MUST match
 * what the server already rendered so there is no `useSyncExternalStore`
 * mismatch at all, regardless of localStorage contents.
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
 * Blocking anti-flash — injected via `useServerInsertedHTML`
 * (not `<Script>` / `<script>` in the layout tree: React 19 rejects that).
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