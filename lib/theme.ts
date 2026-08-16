import { defineTheme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";

/**
 * Chip kuning theme-independent — dipakai chrome selalu-terlihat (nav pill,
 * locale switch) di `site-header.tsx`. Sama seperti pola yang sudah dipakai
 * mockup untuk Contact modal / Quick Info (lihat `project-manager/CONVERSATIONS.md`,
 * `design-mockups/shared.css` `.chip-fixed-text`) — warna tetap sama di
 * light/dark, teks selalu ink gelap supaya kontras terjaga.
 *
 * Pill "aktif" (item terpilih) pakai warna brand ink (arah `design-tokens.md`
 * Color — Brand): ink gelap di light mode, tint terang di dark mode — dibalik
 * lewat `light-dark()` supaya tetap kontras di kedua mode.
 */
const CHIP_BG = "#FDE047";
const CHIP_FG = "#14181F";
const BRAND_PILL_BG = "light-dark(#0A0F1A, #EDE9E1)";
const BRAND_PILL_FG = "light-dark(#EDE9E1, #0A0F1A)";

/**
 * Radius pill nav/locale mockup = `rounded-2xl` (16px di breakpoint desktop),
 * BUKAN pill penuh (`--radius-full`/9999px) — dikonfirmasi lewat computed
 * style `design-mockups/home.html` (`.header-nav a`, `.locale-switch a`).
 * Literal karena skala radius Astryx tidak punya step yang pas 16px.
 */
const CHIP_RADIUS = "16px";

/**
 * Theme project — extends `neutralTheme` dengan override `components`
 * (bukan `--color-*` manual di `:root`, sesuai `.cursor/rules/xds.mdc`)
 * supaya nav pill + locale switch cocok dengan `design-mockups/*.html`
 * (follow-up T-013.4: style navbar disamakan mockup).
 *
 * Sengaja pakai `components` di `defineTheme` (di-generate & di-inject
 * Astryx sendiri lewat <style> tag), BUKAN `xstyle`/`stylex.create()` —
 * compiler StyleX (`@stylexjs/babel-plugin` + postcss plugin) belum wired
 * ke build Turbopack project ini (gap ditemukan saat implementasi ini;
 * `stylex.create()` gagal build dengan "Unexpected call at runtime").
 * Setup compiler StyleX perlu keputusan terpisah (trade-off Turbopack vs
 * webpack) — lihat catatan di laporan T-013.4.
 *
 * Ukuran (height/padding) dikoreksi lewat computed-style diff langsung
 * terhadap `design-mockups/home.html` (`.locale-switch--bar`, tombol
 * Contact, `.theme-toggle`) — bukan tebakan.
 */
export const siteTheme = defineTheme({
  name: "rezisaktiva",
  extends: neutralTheme,
  components: {
    "top-nav": {
      base: {
        // Mockup: `.site-header` min-h-20 (80px) + padding-inline 40px (desktop).
        minHeight: "80px",
        paddingInline: "var(--spacing-10)",
      },
    },
    "top-nav-heading": {
      base: {
        fontWeight: "600",
      },
    },
    "top-nav-item": {
      base: {
        // Latar chip kuning ada di WRAPPER (`.site-nav-chip`, lihat
        // `site-header.tsx` + `app/globals.css`), item sendiri transparan —
        // supaya jadi satu bar kuning menyatu, bukan chip terpisah per item.
        backgroundColor: "transparent",
        color: CHIP_FG,
        borderRadius: CHIP_RADIUS,
      },
      selected: {
        backgroundColor: BRAND_PILL_BG,
        color: BRAND_PILL_FG,
      },
    },
    "segmented-control": {
      base: {
        backgroundColor: CHIP_BG,
        borderRadius: CHIP_RADIUS,
        // Mockup `.locale-switch--bar`: height 40px, padding 6px/12px, gap 4px.
        height: "40px",
        paddingBlock: "var(--spacing-1-5)",
        paddingInline: "var(--spacing-3)",
        gap: "var(--spacing-1)",
      },
    },
    "segmented-control-item": {
      base: {
        color: CHIP_FG,
        borderRadius: CHIP_RADIUS,
        // Mockup `.locale-switch--bar button`: padding 2px/8px.
        paddingBlock: "var(--spacing-0-5)",
        paddingInline: "var(--spacing-2)",
      },
      selected: {
        backgroundColor: BRAND_PILL_BG,
        color: BRAND_PILL_FG,
      },
    },
    "side-nav-item": {
      base: {
        backgroundColor: CHIP_BG,
        color: CHIP_FG,
        borderRadius: CHIP_RADIUS,
      },
      selected: {
        backgroundColor: BRAND_PILL_BG,
        color: BRAND_PILL_FG,
      },
    },
    button: {
      "variant:primary+size:sm": {
        // Tombol Contact mockup: pill penuh, height ~32px, padding 6px/16px.
        borderRadius: "var(--radius-full)",
        height: "var(--size-element-md)",
        paddingBlock: "var(--spacing-1-5)",
        paddingInline: "var(--spacing-4)",
      },
    },
    "toggle-button": {
      base: {
        // Theme toggle mockup `.theme-toggle`: lingkaran penuh, 36px.
        borderRadius: "var(--radius-full)",
        width: "var(--size-element-lg)",
        height: "var(--size-element-lg)",
      },
    },
  },
});
