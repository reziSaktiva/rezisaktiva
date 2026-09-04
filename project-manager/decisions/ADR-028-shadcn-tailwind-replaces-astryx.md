# Decision ADR-028

### Title

shadcn/ui + Tailwind CSS v4 menggantikan Astryx sebagai sistem komponen dan styling (pasca-exit R1)

### Status

Accepted

### Date

2026-09-01

### Decision

1. **Ganti stack UI.** Sistem komponen + token aktif = **shadcn/ui** (source di repo, CLI) + **Tailwind CSS v4**. Ini **menggantikan** ADR-018. Paket Astryx (`@astryxdesign/core`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`, `@stylexjs/stylex`) **di-uninstall** di akhir migrasi. **Tidak hybrid** di keadaan selesai (satu sistem styling — alasan yang sama dengan ADR-018/ADR-026). Dual-boot Astryx + shadcn diizinkan di **`main` setelah T-032** (PR bertahap), sampai cabut Astryx di T-037.
2. **Bukan redesain.** Bentuk visual produksi saat ini tetap kontrak (ADR-024): chrome pill kuning + elevasi 3D, palet `rezisaktiva`, Contact kartu dark-ink tema-independen, Quick Info dari kanan, project sheet dari bawah, ritme tipe/gerak Hess–Mazur (ADR-025). Yang berubah = primitf komponen dan cara token di-resolve, bukan layout, copy, atau palet. Acuan = kode `app/` **sebelum** migrasi + arahan yang sudah dikunci — bukan `design-mockups/`, bukan tampilan default shadcn (zinc/slate).
3. **Evaluasi ADR-026 selesai.** Exit R1 (`T-018`) sudah terjadi. Keterbatasan Astryx yang memicu evaluasi (Drawer kiri/kanan, BottomSheet tidak full-width, compiler StyleX tidak wired ke Turbopack) ditutup dengan primitf shadcn (`Sheet`, `Drawer`, `Dialog`) + CSS/Tailwind, bukan menunggu Astryx beta.
4. **Motion: ya, pakai [Motion](https://motion.dev/)** (`pnpm add motion`, impor `motion/react`). Ganti gerak identitas yang sekarang hand-rolled (`Reveal`, `WordReveal`, `HeroWords`, `Magnetic`, `useContainerReveal`) dan enter/exit overlay. **Lenis tetap** (inersia scroll, ADR-025 — bukan domain Motion). **Transisi halaman** tetap ritme CSS yang dikunci ADR-025 (bukan View Transitions API, bukan spectacle Framer). Hover warna/elevasi chrome tetap CSS. `prefers-reduced-motion` tetap wajib.
5. **Dark / light tidak diubah sebagai produk** (ADR-021 tetap):
   - Default ship = **light**
   - Toggle di chrome = Must; `prefers-color-scheme` tetap Could (jangan jadi default)
   - Persistensi = cookie + `localStorage` key `rz-theme`; `cookies()` Next **hanya** di `app/layout.tsx`; anti-flash yang sudah ada **jangan di-regresi**
   - Implementasi baru: class **`dark`** di `<html>` (bukan prop `mode` Astryx `Theme`); token di `:root` (light) dan `.dark` (dark); Tailwind v4 `@custom-variant dark` mengikat ke class, **bukan** ke media query OS
   - **Jangan** pasang `next-themes` kecuali terbukti bisa memakai cookie SSR yang sama tanpa hydration flash — default = pertahankan `lib/theme-mode.ts` + `ThemeModeProvider`
   - Warna chip kuning tetap dihitung dari mode React (`useChipColorVars`), bukan `light-dark()` CSS
   - Contact modal tetap **tema-independen** (kartu dark-ink)
6. **MCP wajib di project** (`.cursor/mcp.json`, di-commit):
   - **shadcn** resmi: `pnpm dlx shadcn@latest mcp init --client cursor`
   - **Motion AI Kit** resmi: `npx motion-ai` (scope project + Cursor; MCP hosted Motion, tanpa token API usang)
   - **Cabut** server `xds` (Astryx) setelah Astryx tidak dipakai
   - **Jangan** pasang MCP Tailwind community tidak resmi — konvensi Tailwind sudah di skill shadcn + docs v4
7. **Konfigurasi shadcn yang dikunci:** Next.js App Router, Tailwind v4, **base Radix**, RSC on, icon library **lucide** untuk komponen generated; ikon krom brand tetap `overlay-icons.tsx` (bentuk tidak ikut default Lucide). File generated di `components/ui/` + `lib/utils.ts` (`cn`). Komposisi halaman tetap di `app/[locale]/_components/`.
8. **Komponen yang di-add** = yang ada padanannya di produksi, bukan katalog penuh. Dilarang menambah Sidebar, Chart, Command palette, Sonner, Calendar, hanya karena template.
9. **Dokumentasi & rule agent** ikut pindah di task penutup: `design-tokens.md`, `code-discipline.md`, `dependency-strategy.md`, `.cursor/rules/xds.mdc` diganti rule shadcn, `AGENTS.md`, `ARCHITECTURE_OVERVIEW.md`. StyleX / T-013.4 **ditutup sebagai gap** — tidak di-wire; jalur itu dihapus bersama Astryx.
10. **Urutan vs T-031:** migrasi **T-032…T-037 diutamakan**. T-031 mengantri setelah T-037 (keduanya menyentuh `app/layout.tsx` / head). Dikunci Boss Rezi 2026-09-01.

### Reason

- ADR-026 sudah mengunci: evaluasi shadcn hanya setelah T-018; T-018 selesai 2026-08-31. Boss Rezi meminta migrasi, bukan tetap Astryx.
- Astryx beta tidak menutup gap yang sudah terasa di R1 (overlay arah, sheet lebar penuh, StyleX + Turbopack). shadcn menyediakan `Dialog` / `Sheet` / `Drawer` sebagai primitf, source di repo, dan MCP/CLI yang sama-sama AI-friendly.
- Satu sistem styling di keadaan selesai menghindari dua token/konvensi (alasan ADR-018 menolak coexist).
- Motion sudah bagian identitas (ADR-017/025) tetapi implementasinya custom IO/CSS; library `motion` adalah SoT yang diminta Boss Rezi (motion.dev), tree-shakeable, dan punya `useReducedMotion`.
- Kontrak tema R1 (light default, toggle, anti-flash cookie) sudah mahal dipoles; migrasi tidak boleh mengulang bug flash 2026-08-16.

### Alternatives Considered

- **Tetap Astryx** sampai primitive Drawer/sheet full-width ada — ditolak; R1 sudah exit; gap StyleX/Turbopack tidak ada rencana wiring.
- **Hybrid Astryx + shadcn** di produksi — ditolak (ADR-018/026).
- **Tailwind murni tanpa shadcn** — ditolak; Boss Rezi tetap ingin rel komponen + MCP, bukan utility-only.
- **`framer-motion` (paket lama) atau GSAP** — ditolak; SoT = [motion.dev](https://motion.dev/) paket `motion`.
- **`next-themes` sebagai sumber tema** — tidak dipilih sebagai default; risiko flash/hydration vs cookie SSR yang sudah dikunci ADR-021.
- **MCP Tailwind community + shadcn.io berbayar** — ditolak; bukan SoT resmi, menambah permukaan yang tidak perlu.

### Impact / Follow-up

- Backlog: [`tasks/v14-shadcn-tailwind.md`](../tasks/v14-shadcn-tailwind.md) (**T-032** … **T-037**).
- ADR-018 **superseded** oleh ADR ini. ADR-021, ADR-017, ADR-025, ADR-019, ADR-022, ADR-024, ADR-027 **tetap berlaku** (perilaku produk); hanya mekanisme komponen yang berganti. **Bentuk visual** (palet/chrome) kemudian diganti **[ADR-029](ADR-029-visual-identity-gothic-blood.md)** — stack shadcn + Tailwind di ADR ini **tetap**.
- Saat T-037: update `product-discovery/06-engineering/` (tokens, dependency, code-discipline, README), `ARCHITECTURE_OVERVIEW.md`, `AGENTS.md`, `.cursor/rules/`.
- Compiler StyleX (catatan T-013.4 / T-027) **tidak dikerjakan** — gap ditutup dengan cabut Astryx.

### Update — 2026-09-04 (ADR-029)

Poin 2 **“bukan redesain / bentuk visual tetap”** **tidak lagi mengikat**. Identitas visual R1 migrasi ke absurdism / surrealism / Gothic Art / dark-blood (**ADR-029**). Keputusan stack (shadcn + Tailwind v4, Motion, `html.dark`, cookie `rz-theme`) **tetap**.

### Update — 2026-09-02

Boss Rezi mempersempit **PR #58 ke T-032 saja**. T-033…T-037 = PR terpisah. Dual-boot boleh di `main` setelah merge T-032; poin 1 “hanya branch kerja” diganti. End state tetap tidak hybrid (T-037).

### Update — 2026-09-01

Boss Rezi mengunci **prioritas:** T-032…T-037 di atas T-031. Poin 10 di atas menggantikan urutan “T-031 dulu”.
