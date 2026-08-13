## Decision ADR-018

### Title

Astryx (component library + StyleX + theme CSS) menggantikan Tailwind CSS + CSS variables sebagai sistem styling/token R1

### Status

Accepted

### Date

2026-08-13

### Decision

R1 memakai **Astryx** (`@astryxdesign/core`, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`) sebagai sistem komponen + sumber token visual, **menggantikan** kontrak Tailwind CSS + CSS custom properties yang sebelumnya dikunci di `design-tokens.md` (T-009, ADR-016).

* Tailwind (`tailwindcss`, `@tailwindcss/postcss`) **di-uninstall**; `postcss.config.mjs` dihapus.
* Global CSS (`app/globals.css`) memuat `@astryxdesign/core/reset.css` + `@astryxdesign/core/astryx.css` + `@astryxdesign/theme-neutral/theme.css`.
* Root layout (`app/layout.tsx`) membungkus subtree dengan `<Theme theme={neutralTheme} mode="light">` — light tetap default sesuai baseline; dark diaktifkan lewat prop `mode`, bukan `.dark` class manual.
* Theme awal: `@astryxdesign/theme-neutral` (muted minimal). Kustomisasi warna brand/accent (ink `#0B1220` + teal `#0F766E`) menyusul via `astryx theme`/`astryx theme add`, **bukan** override langsung `--color-*` di `:root`.
* AI agent docs Astryx digenerate ke **project rule** `.cursor/rules/xds.mdc` (`alwaysApply: true`) — bukan `AGENTS.md` (dokumen navigasi inti project, tidak boleh ditimpa) dan bukan user rule global.
* Script `astryx` ditambahkan di `package.json` untuk invocation CLI yang reliable (`node node_modules/@astryxdesign/cli/clients/cli/bin/astryx.mjs`).

### Reason

* Boss Rezi ingin komponen UI R1 dibangun di atas design system siap-pakai yang AI-friendly (Astryx: 155 komponen, CLI docs terstruktur, MCP server) — bukan membangun/menghardcode komponen dari nol di atas utility Tailwind murni.
* Astryx sengaja didesain agar AI coding agent tidak "menebak" prop/pattern (masalah yang eksplisit disebut docs-nya: model punya 0% pass rate menjawab convention tanpa docs) — cocok dengan pola kerja project ini yang banyak dieksekusi oleh AI agent (lihat `AGENTS.md`, skill `project-os-navigator`).
* React 19 (peer dependency Astryx) sudah dipenuhi oleh stack existing (`react@19.2.8`).
* Opsi "coexist dengan Tailwind via bridge" (`tailwind-theme.css`) tersedia di dokumentasi Astryx, tapi Boss Rezi memilih **replace penuh** untuk menghindari dua sumber token/kontrak styling berjalan paralel (selaras prinsip `dependency-strategy.md`: dependency sedikit, intentional — bukan menumpuk lapisan styling).

### Impact

* `product-discovery/06-engineering/design-tokens.md` — kontrak "Tailwind CSS + CSS variables" (Decision Log) diperbarui menjadi Astryx + StyleX + theme CSS; token warna/font lama (`--color-brand`, dst di `:root`) jadi referensi arah, bukan lagi sumber implementasi aktif.
* `product-discovery/06-engineering/dependency-strategy.md` — dependency baru (`@astryxdesign/core`, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`) tercatat sebagai pengecualian intentional terhadap prinsip "dependency sedikit"; Tailwind dihapus dari daftar devDependencies.
* `app/globals.css`, `app/layout.tsx`, `app/page.tsx` — migrasi ke Astryx (lihat detail di atas).
* `.cursor/rules/xds.mdc` — rule baru (agent docs Astryx, auto-generated + frontmatter ditambahkan manual).
* Belum mengubah `ux-principles.md` / Core Principles (UX1–UX7) — Astryx tetap tunduk pada clarity-first, hanya mengganti *bagaimana* token/komponen diimplementasikan.
* StyleX bundler plugin (untuk kustomisasi lanjutan via prop `xstyle`) **belum** disetel di `next.config.ts` — baseline komponen di R1 masih memakai komponen Astryx tanpa override `xstyle`; ditambahkan saat dibutuhkan (task terpisah, lihat catatan di `dependency-strategy.md`).

### Alternatives Considered

* **Coexist (Astryx + Tailwind bridge)** — ditolak; menambah kompleksitas layer CSS (`@layer` ordering) untuk manfaat marginal di situs selean R1.
* **Tetap Tailwind + CSS variables murni (tanpa component library)** — ditolak; Boss Rezi ingin AI agent punya "rel" komponen siap pakai yang mengurangi risiko UI tidak konsisten/di luar konvensi saat dikerjakan AI.
