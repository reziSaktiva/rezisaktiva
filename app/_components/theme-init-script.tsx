"use client";

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getThemeInitScript } from "@/lib/theme-mode";

/**
 * Suntik script anti-flash ke HTML SSR di luar pohon yang di-hydrate.
 * `<Script>` / `<script>` di `app/layout.tsx` memicu React 19:
 * "Encountered a script tag while rendering React component".
 */
export function ThemeInitScript() {
  const inserted = useRef(false);
  useServerInsertedHTML(() => {
    if (inserted.current) {
      return null;
    }
    inserted.current = true;
    return (
      <script
        id="theme-init"
        dangerouslySetInnerHTML={{ __html: getThemeInitScript() }}
      />
    );
  });
  return null;
}
