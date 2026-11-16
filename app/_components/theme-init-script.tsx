"use client";

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getThemeInitScript } from "@/lib/theme-mode";

/**
 * Inject anti-flash script into SSR HTML outside the hydrated tree.
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
