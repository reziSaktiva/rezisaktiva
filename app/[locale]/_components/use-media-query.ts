"use client";

import { useSyncExternalStore } from "react";

/**
 * Live `matchMedia` result. The server snapshot (and so the hydration render)
 * is always `false`, then the client re-renders with the real value. Use it
 * when SSR markup and the first client render must match.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
