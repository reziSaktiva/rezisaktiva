import { defineTheme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral";

/**
 * Warna kanvas + aksen dari `design-mockups/shared.css` (`--c-*`).
 * Dipetakan ke token Astryx via `defineTheme` (ADR-018), bukan override
 * `--color-*` di `:root`.
 *
 * Light / dark:
 * --c-bg            237 234 225 / 10 15 26
 * --c-bg-elevated   228 223 209 / 18 26 43
 * --c-fg            20 24 31    / 237 234 225
 * --c-fg-muted      110 106 95  / 155 150 138
 * --c-border        218 213 199 / 34 43 61
 * --c-brand         10 15 26    / 237 234 225
 * --c-accent        76 122 115  / 127 179 170
 * --c-on-accent     237 234 225 / 10 15 26
 * --c-accent-muted  216 226 222 / 30 48 46
 */
export const rezisaktivaTheme = defineTheme({
  name: "rezisaktiva",
  extends: neutralTheme,
  tokens: {
    "--color-background-surface": ["#edeae1", "#0a0f1a"],
    "--color-background-body": ["#edeae1", "#0a0f1a"],
    "--color-background-card": ["#edeae1", "#0a0f1a"],
    "--color-background-popover": ["#e4dfd1", "#121a2b"],
    "--color-background-muted": ["#e4dfd1", "#121a2b"],
    "--color-background-inverted": ["#0a0f1a", "#edeae1"],

    "--color-accent": ["#4c7a73", "#7fb3aa"],
    "--color-accent-muted": ["#d8e2de", "#1e302e"],
    "--color-on-accent": ["#edeae1", "#0a0f1a"],
    "--color-text-accent": ["#4c7a73", "#7fb3aa"],
    "--color-icon-accent": ["#4c7a73", "#7fb3aa"],

    "--color-text-primary": ["#14181f", "#edeae1"],
    "--color-text-secondary": ["#6e6a5f", "#9b968a"],
    "--color-icon-primary": ["#14181f", "#edeae1"],
    "--color-icon-secondary": ["#6e6a5f", "#9b968a"],
    "--color-on-dark": "#edeae1",
    "--color-on-light": "#14181f",

    "--color-border": ["#dad5c7", "#222b3d"],
    "--color-border-emphasized": ["#dad5c7", "#222b3d"],
  },
});
