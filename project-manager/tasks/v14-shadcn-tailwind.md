# v14 — Migrasi Astryx → shadcn/ui + Tailwind CSS v4

File task **tersendiri**. Keputusan material: **[ADR-028](../decisions/ADR-028-shadcn-tailwind-replaces-astryx.md)** (supersede ADR-018; evaluasi ADR-026 selesai).

Bukan halaman baru. Bukan R2 `/work/[slug]`. Bukan tulis ulang copy T-021. Bukan redesain palet/chrome. Bukan memasang `next-themes` sebagai default. Bukan wiring compiler StyleX.

**Paket dikunci Boss Rezi (2026-09-01):** pindah primitf ke shadcn + Tailwind v4; bentuk visual produksi tetap; Motion (motion.dev) untuk gerak identitas; MCP shadcn + Motion; dark/light tetap kontrak ADR-021.

**Prioritas (2026-09-01):** rilis ini **diutamakan** di atas T-031. **T-032.1** ✅. Mulai eksekusi dari **T-032.2**. T-031 mengantri **setelah T-037** (keduanya menyentuh `app/layout.tsx` / head). Kerjakan di **satu branch** (`feat/shadcn-tailwind`). Dual-boot Astryx+shadcn hanya di branch itu. **Definition of Done rilis ini:** Astryx tidak ada di `package.json`, tidak ada impor `@astryxdesign` / `@stylexjs`, MCP `xds` sudah dicabut.

---

## Kontrak yang tidak boleh pecah

| Area | Tetap | Berganti |
| ---- | ----- | -------- |
| Visual | Kode produksi sekarang (ADR-024): pill kuning, `--elev-3d`, palet `rezisaktiva`, overlay `.ct-*` / `.qi-*` / `.ps-*` | Primitive Astryx → shadcn + Tailwind |
| Copy / konten | `content/*` T-021, katalog karya, Now, Insvire | Tidak |
| IA / overlay | Contact modal (ADR-019), Quick Info kanan (ADR-022), sheet karya dari bawah (ADR-027), hamburger &lt;1024px (ADR-020) | Dialog / Sheet / Drawer sebagai primitf, **bentuk sama** |
| Tema | Default light, toggle chrome, cookie `rz-theme`, anti-flash (ADR-021) | `Theme mode=` Astryx → `class="dark"` di `<html>` |
| Motion | Lenis + ritme page overlay ADR-025; `prefers-reduced-motion`; tanpa parallax | Reveal/magnetic/word-reveal/container-reveal → Motion |
| Render | SSG + `content/` + `generateStaticParams` (ADR-015); `"use client"` hanya island; `cookies()` tema hanya root layout | Tidak |
| Acuan visual | Bukan `design-mockups/` | Screenshot baseline **T-032.1** vs halaman hidup |

**Verifikasi tiap parent (wajib, rule UI):** Home / About / Work, light **dan** dark, 320px + 375px + desktop ≥1024px, overlay Contact + Quick Info + project sheet, reduced-motion. Bukan satu screenshot.

---

## Inventaris Astryx yang dipakai (terkunci 2026-09-01)

Sumber: impor `@astryxdesign/core` di `app/` + `lib/astryx-theme.ts`. Jangan menambah primitf shadcn di luar kolom kanan kecuali gap nyata saat eksekusi (itu urgent — tanya Boss Rezi).

### Primitive yang diimpor

| Astryx | Dipakai di | Pengganti (bentuk sama) |
| ------ | ---------- | ------------------------ |
| `AppShell` + `useAppShellMobile` | `app/[locale]/layout.tsx`, `site-header.tsx` | Layout custom: header + `<main>`. Breakpoint hamburger = `lg` / 1024px (bukan Sidebar shadcn) |
| `TopNav`, `TopNavHeading`, `TopNavItem` | `site-header.tsx` | `next/link` + `Button` variant ghost + `sliding-pill-group` yang sudah ada |
| `MobileNavToggle`, `SideNavItem` | `site-header.tsx` | `Button` pemicu + `Sheet` (panel kuning full-item seperti sekarang, bukan default zinc) |
| `Button` | header, footer CTA, Contact, Quick Info, project sheet | `Button` shadcn, restyle: `--elev-3d`, hover aksen, jangan tampilan default |
| `ToggleButton` | `theme-toggle.tsx` | `Toggle` |
| `SegmentedControl` | `locale-switcher.tsx` | `ToggleGroup` + `ToggleGroupItem` (2 opsi ID/EN) |
| `Icon` | chrome, overlay, About | Krom brand: SVG di `overlay-icons.tsx` (Menu, Close, ArrowRight, Copy, GitHub, LinkedIn, Sun, Moon, Layers, Product, Sparkle, Discover, Design, Build, Ship). `chevronDown` di About lead → Lucide `ChevronDown` **ukuran/warna token aksen**, bukan glyph berbeda yang mengubah bentuk. Jangan ganti ikon sosial ke Lucide jika path brand berubah |
| `Heading`, `Text` | hampir semua halaman | HTML semantik `h1`–`h3` / `p` / `span` + skala tipe yang sudah di `globals.css` (`.about-h1`, kicker, dll.). **Jangan** `@tailwindcss/typography` prose kecuali terbukti perlu |
| `VStack`, `HStack`, `Center`, `Grid`, `GridSpan`, `Section` | layout halaman | Tailwind: `flex flex-col gap-*`, `flex flex-row gap-*`, `items-center justify-center`, `grid grid-cols-* col-span-*`, `<section>`. **Bukan** `space-y-*` / `space-x-*`. Disiplin gap vs padding (T-027) tetap |
| `Card` | `about-rest-active.tsx` | `Card` shadcn, class scoped `.about-offer-card` dll. tetap |
| `Badge` | About availability | `Badge` + restyle hijau availability |
| `StatusDot` | About badge (pulsing) | Komponen lokal kecil (`StatusDot`) — shadcn tidak punya padanan; pulsa CSS/Motion, token success |
| `Collapsible`, `CollapsibleGroup` | `about-process.tsx` | `Collapsible` (type single, default `01`, dividers) |
| `AspectRatio` | foto About | `AspectRatio` 4/5 |
| `Link` | footer, Contact, QI, tile, workplace | `next/link`; tombol-link pakai `Button asChild` |
| `Theme` + `defineTheme` | `theme-mode-provider.tsx`, `lib/astryx-theme.ts`, `theme/` | Class `dark` + CSS variables (lihat Tema di bawah). File `lib/astryx-theme.ts` + `theme/astryx-theme.css` **dihapus di T-037** |
| `useContainerReveal` | `work-tile.tsx` | Motion `whileInView` |
| `mergeProps` | `work-tile.tsx` | `cn()` dari `lib/utils.ts` |

### Overlay custom (bukan primitive Astryx hari ini)

Astryx `Dialog` / `BottomSheet` **sengaja tidak dipakai** (komentar di `contact-modal.tsx`; T-026.5). Migrasi **memakai** primitf shadcn, lalu di-skin ulang agar bentuk tetap:

| Permukaan | Sekarang | Target primitf | Bentuk yang dikunci |
| --------- | -------- | -------------- | ------------------- |
| Contact | overlay custom `.ct-*`, `trapTabKey`, `data-lenis-prevent`, kartu dark-ink | `Dialog` (+ `DialogTitle` wajib; `sr-only` jika judul visual sudah ada) | Kartu dark-ink, form native → `Field` + `FieldGroup` + `Input` + `Textarea`; `mailto:` primer; state Terkirim/salin |
| Quick Info | overlay dari **kanan**, tab tepi | `Sheet` `side="right"` | Tab tepi kanan, isi bio/Services/Tools/Works/Email/Links; bukan route |
| Project sheet | overlay dari **bawah**, lebar penuh, galeri pin | `Drawer` (vaul, dari bawah) | Lebar penuh, info hug + galeri; klik tile buka sheet; live/repo di dalam |
| Mobile nav | panel kuning via AppShell | `Sheet` (arah/isi mengikuti panel sekarang) | Item full-width, switcher compact, Contact+tema di luar hamburger |

Jangan pasang `Sidebar`. Jangan ganti Drawer jadi halaman `/work/[slug]`.

### File yang mengimpor Astryx (daftar kerja)

`app/[locale]/layout.tsx`, `app/page.tsx`, `app/_components/theme-mode-provider.tsx`, `app/[locale]/_components/`: `site-header`, `site-footer`, `site-footer-cta`, `locale-switcher`, `theme-toggle`, `sliding-pill-group`, `contact-modal`, `quick-info`, `project-sheet`, `project-sheet-media`, `home-page`, `home-motion`, `home-work-teasers`, `home-work-all-link`, `work-page`, `work-index-client`, `work-tile`, `about-page`, `about-offer-grid`, `about-process`, `about-rest-active`, `workplace-line`. Plus `lib/astryx-theme.ts`, `theme/rezisaktiva.d.ts`, `theme/astryx-theme.css`.

### Yang tidak di-install (bukan kebutuhan R1)

`Sidebar`, `Chart`, `Command`, `Sonner`/`toast`, `Calendar`, `Table`, `Resizable`, `Carousel`, `NavigationMenu` (chrome sudah custom), `Accordion` (pakai Collapsible yang sudah ada). Toast tidak ada di produk.

---

## Motion — apakah perlu? Ya

**Ya, install [`motion`](https://motion.dev/)** (`pnpm add motion`). Impor: `import { motion, AnimatePresence, useReducedMotion } from "motion/react"`.

| Gerak | Sekarang | Sesudah | Alasan |
| ----- | -------- | ------- | ------ |
| Scroll reveal, word/hero reveal, magnetic CTA | `home-motion.tsx` (IntersectionObserver + CSS) | Motion `whileInView` / stagger / `whileHover` | Identitas ADR-017; API terawat; reduced-motion built-in |
| Tile Work `useContainerReveal` | hook Astryx | `whileInView` | Hook hilang bersama Astryx |
| Enter/exit overlay | CSS + class lock | `AnimatePresence` **dengan durasi/easing yang sama** seperti sekarang | Jangan “bounce spring” default yang mengubah rasa |
| Sliding pill | JS transform custom | Boleh `layoutId` Motion **jika** hasil visual = sekarang | Jika beda, pertahankan implementasi sekarang |
| Cursor ring | custom | Boleh tetap custom | Bukan harus Motion |
| Lenis | `lenis` | **Tetap** | ADR-025; Motion bukan pengganti inersia window scroll |
| Page overlay Hess | CSS snapshot `page-transition.tsx` | **Tetap ritme** 1s exit scale+naik, delay 0.4s, enter 0.4s, easing `cubic-bezier(0.65, 0, 0.43, 1)` | ADR-025. Jangan View Transitions API |
| Chrome 3D hover | CSS | **Tetap CSS** | Docs Motion: hover warna sederhana = CSS lebih ringan |
| Parallax / loop noise | tidak ada | **Jangan ditambah** | ADR-017 |

Paket **bukan** `framer-motion` (nama lama). Bukan GSAP. Bukan Motion+ berbayar kecuali Boss Rezi minta.

---

## Dark / light — bagaimana

Kontrak produk = ADR-021. Hanya **mekanisme** yang berganti.

**Lakukan**

1. Baca cookie `rz-theme` di `app/layout.tsx` (sudah ada). Set di `<html>`: `className={initialMode === "dark" ? "dark" : undefined}`, `style={{ colorScheme: initialMode }}`, `<meta name="color-scheme" content={initialMode} />`.
2. Tailwind v4: `@custom-variant dark (&:is(.dark *));` supaya `dark:` mengikuti **class**, bukan OS. Jangan andalkan `prefers-color-scheme` sebagai sumber token.
3. Token: `:root { --background: … }` light; `.dark { --background: … }` dark. Map nilai dari `lib/astryx-theme.ts` (pasangan light/dark di bawah). `@theme inline { --color-background: var(--background); … }` agar `bg-background` / `text-foreground` hidup.
4. Pertahankan `lib/theme-mode.ts` + `useSyncExternalStore` + tulis cookie+localStorage. `ThemeModeProvider` **berhenti** merender `<Theme>` Astryx; cukup context + sync `document.documentElement.classList` / `colorScheme` saat toggle.
5. Script `beforeInteractive` yang ada: selain `data-theme` lama, set **`class="dark"`** agar Tailwind/shadcn ikut sebelum hydrate. Self-healing cookie tetap. Jangan baca localStorage jika cookie sudah ada (anti-flash 2026-08-16).
6. Chip nav: tetap `useChipColorVars()` (hex mode React). Jangan `light-dark()`.
7. Contact `.ct-panel`: tetap dark-ink **kedua tema**.
8. Scrollbar T-025.9: track/thumb ikut token baru, light dan dark.

**Jangan**

- Default dark, atau auto-ikuti OS
- `next-themes` sebagai sumber kebenaran (kecuali bukti setara cookie SSR tanpa flash — default jangan)
- `dark:` mentah untuk palet brand yang sudah punya variabel (`bg-zinc-950 dark:bg-white` dilarang)
- Menghapus `cookies()` anti-flash “supaya SSG murni” tanpa ADR baru

### Map token (dari `lib/astryx-theme.ts`)

| Peran | Light | Dark | shadcn-ish |
| ----- | ----- | ---- | ---------- |
| Kanvas / body / card | `#edeae1` | `#0a0f1a` | `--background` / `--card` |
| Elevated / muted / popover | `#e4dfd1` | `#121a2b` | `--muted` / `--popover` |
| Teks primer | `#14181f` | `#edeae1` | `--foreground` |
| Teks sekunder | `#6e6a5f` | `#9b968a` | `--muted-foreground` |
| Border | `#dad5c7` | `#222b3d` | `--border` |
| Aksen | `#4c7a73` | `#7fb3aa` | `--primary` (bukan biru default shadcn) |
| On-accent | `#edeae1` | `#0a0f1a` | `--primary-foreground` |
| Aksen muted | `#d8e2de` | `#1e302e` | `--accent` / `--secondary` |
| Chip kuning (bukan token Astryx theme) | `#fde047` + fg ink | sama kuning, fg menyesuaikan pill | `--chip-bg` / chrome vars yang sudah ada |

Radius, spacing 4px, `--elev-3d`, font General Sans / Satoshi (Fontshare) **tetap**. Jangan ganti ke Inter karena CLI shadcn menyarankan.

---

## MCP yang wajib

SoT = `.cursor/mcp.json` di root repo (di-commit). Plugin Cursor yang error **bukan** pengganti.

| Server | Wajib | Cara | Kapan |
| ------ | ----- | ---- | ----- |
| **shadcn** resmi | Ya | `pnpm dlx shadcn@latest mcp init --client cursor` → `"command": "npx", "args": ["shadcn@latest", "mcp"]` | T-032.2, **sebelum** `shadcn add` massal |
| **Motion AI Kit** | Ya (karena paket `motion`) | `npx motion-ai` scope **project** + agent Cursor. MCP hosted Motion; **jangan** flow lama `npx` + TOKEN | T-032.2 |
| **xds** (Astryx `https://astryx.atmeta.com/mcp`) | Hapus | Setelah tidak ada impor Astryx | T-037.5 |
| Tailwind community MCP | **Tidak** | — | Jangan |
| shadcn.io berbayar | **Tidak** | — | Jangan |

Setelah edit `mcp.json`: enable di Cursor Settings sampai titik hijau. Agent eksekusi berikutnya wajib `pnpm dlx shadcn@latest docs <component>` / MCP search **sebelum** mengarang props.

---

## Best practice (wajib di setiap subtask kode)

1. Package manager **pnpm**; CLI `pnpm dlx shadcn@latest …`. Jangan `npm install` / copy file dari GitHub.
2. Skill shadcn: `gap-*` bukan `space-y-*`; `cn()` bukan ternary class string; `size-*` jika lebar=tinggi; **jangan** `z-index` manual di Dialog/Sheet/Drawer; **jangan** override warna komponen dengan hex di JSX.
3. Form Contact: `FieldGroup` + `Field` + `data-invalid` / `aria-invalid`. Bukan `div` + `space-y`.
4. Overlay: selalu `DialogTitle` / `SheetTitle` / `DrawerTitle` (boleh `sr-only`).
5. `asChild` / `render` sesuai `base` radix. Cek `pnpm dlx shadcn@latest info`.
6. Generated UI di `components/ui/` — jangan diedit habis-habisan sampai tidak bisa di-`add` ulang; skin lewat `className`, variants, dan token. Craft halaman (`.home-*`, `.ct-*`) tetap `globals.css` scoped.
7. Server Component default. Jangan `"use client"` di `page.tsx` / `layout.tsx`. Jangan `"use client"` hanya karena file mengimpor `Button`.
8. Satu sistem di DoD: grep `@astryxdesign` = kosong. Jangan coexist Tailwind *bridge* Astryx.
9. Jangan rewrite `globals.css` craft dalam satu subtask (larangan mode Validation yang lama tetap: **per permukaan**).
10. Ikon di `Button`: ikuti aturan shadcn terkini (`data-icon` jika CLI yang terpasang memakainya).

**Init shadcn yang dikunci:** Next App Router, Tailwind **v4**, base **radix**, RSC **true**, aliases `@/components` + `@/lib/utils`, CSS = `app/globals.css` (satu file, jangan bikin `globals` kedua).

---

## Baca dulu (semua parent)

[ADR-028](../decisions/ADR-028-shadcn-tailwind-replaces-astryx.md), ADR-018 (superseded), ADR-021, ADR-024, ADR-017, ADR-025, ADR-019, ADR-022, ADR-027, ADR-015; `product-discovery/06-engineering/design-tokens.md`, `code-discipline.md`, `dependency-strategy.md`; `.cursor/rules/xds.mdc`, `code-discipline.mdc`, `ui-ux-mockup-check.mdc`; `app/globals.css`, `app/layout.tsx`, `lib/theme-mode.ts`, `lib/astryx-theme.ts`; [shadcn MCP](https://ui.shadcn.com/docs/mcp), [Tailwind v4 + shadcn](https://ui.shadcn.com/docs/tailwind-v4), [Motion React](https://motion.dev/docs/react), [Motion AI Kit](https://motion.dev/docs/ai-kit-install).

---

## T-032 — Fondasi: MCP, Tailwind v4, shadcn init, token, Motion

* **Status:** ⏳ Open — **prioritas #1**
* **Domain:** Engineering
* **Depends:** tidak ada (T-031 mengantri setelah T-037)
* **Baca dulu:** blok di atas + `package.json`, `.cursor/mcp.json`, `app/layout.tsx`, `app/globals.css`
* **Keputusan:** dual-boot diizinkan di branch ini saja. Halaman masih boleh Astryx sampai T-033+. Jangan uninstall Astryx di sini.
* **Output:** MCP hidup; `components.json`; token `rezisaktiva` di CSS shadcn; `motion` terpasang; `html.dark` sinkron cookie; build hijau; **visual halaman belum wajib identik** kecuali regresi tema flash

### Subtasks

- [x] **T-032.1** — Baseline visual: tangkap referensi **sebelum** ubah UI (Home/About/Work, light+dark, 320 & desktop, Contact + Quick Info + satu project sheet). Catat computed token kanvas/fg/chip/accent di COMPLETE_TASK. Ini acuan T-037.6 — bukan mockup HTML. Artefak: [`baselines/t-032.1/`](../baselines/t-032.1/).
- [ ] **T-032.2** — MCP: `pnpm dlx shadcn@latest mcp init --client cursor` (merge, jangan hapus `xds` dulu). Motion AI Kit: `npx motion-ai` project+Cursor. Enable sampai hijau. Jangan MCP Tailwind community. Catat isi akhir `.cursor/mcp.json` di COMPLETE_TASK.
- [ ] **T-032.3** — Tailwind CSS **v4** + PostCSS sesuai Next 16 / shadcn CLI. `pnpm dlx shadcn@latest init` (radix, RSC, lucide, aliases `@/`, CSS `app/globals.css`). Jangan biarkan CLI menimpa font Fontshare atau palet tanpa map token. `lib/utils.ts` (`cn`) boleh baru.
- [ ] **T-032.4** — Map token tabel di atas ke `:root` / `.dark` + `@theme inline`. `@custom-variant dark` = class `.dark`. Chip / `--elev-3d` / scrollbar T-025.9 tetap. Jangan override `--color-*` Astryx di `:root` sebagai jalur baru — jalur baru = variabel shadcn + variabel `--chip-*` yang sudah ada.
- [ ] **T-032.5** — Wiring dark/light: `class="dark"` di `<html>` dari cookie; meta + `colorScheme`; script beforeInteractive set class `dark`; `ThemeModeProvider` sync class saat toggle. Astryx `<Theme>` boleh tetap membungkus **sementara** asal `mode` dan class `dark` **selalu sama**. Uji: default light; toggle persist; reload dark tanpa flash; OS dark + site light tidak auto-gelap.
- [ ] **T-032.6** — `pnpm add motion`. Impor hanya dari `motion/react`. Belum wajib rewrite `home-motion.tsx` (itu T-036) kecuali dibutuhkan smoke import.
- [ ] **T-032.7** — `pnpm dlx shadcn@latest add` **hanya**: `button`, `toggle`, `toggle-group`, `card`, `badge`, `collapsible`, `aspect-ratio`, `dialog`, `sheet`, `drawer`, `input`, `textarea`, plus `field` / `field-group` jika registry CLI menyediakannya. Baca docs CLI per komponen. Jangan add Sidebar/Chart/Sonner.
- [ ] **T-032.8** — `pnpm typecheck` + `pnpm lint` + `pnpm build` hijau dengan Astryx masih ada. Tidak ada regresi flash tema.

---

## T-033 — Chrome: shell, nav, locale, tema, footer

* **Status:** ⏳ Open
* **Domain:** UI/UX
* **Depends:** T-032.8
* **Baca dulu:** `site-header.tsx`, `site-footer.tsx`, `locale-switcher.tsx`, `theme-toggle.tsx`, `sliding-pill-group.tsx`, `app/[locale]/layout.tsx`, ADR-020, ADR-021
* **Keputusan:** AppShell diganti layout custom. Hamburger &lt;1024px; Contact-button + toggle **di luar** menu. Panel mobile = bentuk kuning sekarang via `Sheet` yang di-skin.

### Subtasks

- [ ] **T-033.1** — Ganti `AppShell`: `topNav` + `mobileNav` → header sticky/transparan (hero overlay z seperti sekarang) + `<main>`. Footer tetap di luar main seperti layout sekarang. Jangan Sidebar.
- [ ] **T-033.2** — Desktop nav: `TopNav*` → link + pill kuning 3D (`sliding-pill-group` + token chip). Brand heading tetap. Paritas hover/selected.
- [ ] **T-033.3** — Mobile: `MobileNavToggle` / `SideNavItem` → `Button` + `Sheet` (judul `sr-only` jika perlu). Item full-width; switcher compact; jangan dobel toggle.
- [ ] **T-033.4** — Locale: `SegmentedControl` → `ToggleGroup`. Cookie `NEXT_LOCALE` + perilaku redirect `/` tidak diubah (ADR-014).
- [ ] **T-033.5** — Theme: `ToggleButton` → `Toggle`. Ikon Sun/Moon dari `overlay-icons.tsx`. Persist `rz-theme`. `useChipColorVars` tetap.
- [ ] **T-033.6** — Footer + pita Contact (`site-footer-cta`): `Button` shadcn + Magnetic (masih boleh implementasi lama sampai T-036). Satelit LinkedIn/GitHub tetap.
- [ ] **T-033.7** — Verifikasi chrome: 320/375/≥1024, light/dark, hamburger, locale, toggle, tanpa flash, hero 100svh overlay header.

---

## T-034 — Halaman Home, About, Work

* **Status:** ⏳ Open
* **Domain:** UI/UX
* **Depends:** T-033.7
* **Baca dulu:** `home-page.tsx`, `about-page.tsx`, `work-page.tsx` + island terkait; copy `content/` **jangan diubah**
* **Keputusan:** Layout primitives → Tailwind `flex`/`grid`/`gap`. Heading/Text → semantik + class yang sudah ada. Card/Badge/Collapsible/AspectRatio → shadcn di-skin.

### Subtasks

- [ ] **T-034.1** — Home: section, teaser grid, Now, CTA. Hapus impor Astryx di permukaan Home (kecuali gerak yang masih `home-motion` sampai T-036). Paritas hero dua baris mobile (T-022).
- [ ] **T-034.2** — About: Badge+StatusDot lokal, portrait `AspectRatio`, offer `Card` + rest/active, values, `Collapsible` proses, workplace `Link`. Chevron lead = bentuk yang sama. Copy T-021.3 tidak diubah.
- [ ] **T-034.3** — Work index: grid tile, kicker/judul. `work-tile` tanpa `Link`/`Heading` Astryx; klik tetap buka sheet (T-035 boleh masih overlay lama jika T-035 belum, asal perilaku sama).
- [ ] **T-034.4** — Skala tipe: map `Heading level` / `Text type="label"|size|color` ke class yang sudah di `globals.css`. Jangan skala default shadcn yang mengecilkan hero.
- [ ] **T-034.5** — Verifikasi `/id` `/en` `/about` `/work`: satu `h1` per halaman, grid, rest/active About, tile Work; light/dark; 320 + desktop.

---

## T-035 — Overlay: Contact, Quick Info, project sheet

* **Status:** ⏳ Open
* **Domain:** UI/UX
* **Depends:** T-034.5 (boleh overlap dengan T-034.3 jika sheet masih custom — jangan pecah event `rz-*-open`)
* **Baca dulu:** `contact-modal.tsx`, `quick-info.tsx`, `project-sheet.tsx`, `project-sheet-media.tsx`; ADR-019, ADR-022, ADR-027
* **Keputusan:** Primitf shadcn + class scoped yang ada. Focus trap / Escape / scrim / lock `ct-lock` `qi-lock` / `data-lenis-prevent` / saling tutup overlay **tetap**.

### Subtasks

- [ ] **T-035.1** — Contact → `Dialog`. Skin `.ct-*` (kartu dark-ink). Form → `FieldGroup`/`Field`/`Input`/`Textarea`. Validasi + Terkirim + salin email + `mailto:` primer. `DialogTitle` wajib. Jangan route `/contact`.
- [ ] **T-035.2** — Quick Info → `Sheet` kanan. Tab tepi, isi, tutup. Jangan duplikasi form Contact. Mount tetap global di locale layout.
- [ ] **T-035.3** — Project sheet → `Drawer` bawah lebar penuh. Galeri + slot M10. Tile index + teaser Home membuka sheet, bukan live URL. Item tanpa URL publik tetap bisa dibuka.
- [ ] **T-035.4** — Integrasi: event `rz-contact-open` / `rz-project-sheet-open`; Lenis pause; focus restore; overlay stacking (satu overlay “asing” menutup yang lain seperti sekarang).
- [ ] **T-035.5** — Verifikasi ketiga overlay, ID/EN, light/dark, 320px (modal muat viewport; tab QI tidak menabrak hero), keyboard Escape/Tab, reduced-motion.

---

## T-036 — Motion (motion.dev) + Lenis tetap

* **Status:** ⏳ Open
* **Domain:** UI/UX
* **Depends:** T-035.5 disarankan (overlay sudah primitf); minimal T-032.6
* **Baca dulu:** `home-motion.tsx`, `motion-runtime.tsx`, `smooth-scroll.tsx`, `page-transition.tsx`, ADR-017, ADR-025
* **Keputusan:** Paket `motion`; Lenis tidak diganti; page-vt ritme tidak diganti; reduced-motion = instan / tanpa magnetic / tanpa cursor ring.

### Subtasks

- [ ] **T-036.1** — Rewrite `Reveal`, `WordReveal`, `HeroWords`, `Magnetic` memakai `motion/react`. Hormati `useReducedMotion`. Jangan spring default yang mengubah timing CSS `.home-reveal`.
- [ ] **T-036.2** — `work-tile`: ganti `useContainerReveal`. Hover/touch overlay tile tetap (bukan Overlay Astryx).
- [ ] **T-036.3** — Enter/exit Dialog/Sheet/Drawer: `AnimatePresence` atau transisi primitf **di-kalibrasi** ke durasi sekarang. Jangan bounce.
- [ ] **T-036.4** — `page-transition.tsx`: ritme Hess tetap (T-025.7–T-025.10). Track scrollbar tetap terlihat (`overflow-y: scroll` saat lock). Boleh membungkus dengan Motion **hanya jika** timing/easing identik.
- [ ] **T-036.5** — `CursorRing`: tetap off di sentuh + reduced-motion. Lenis: pause saat overlay lock; off reduced-motion.
- [ ] **T-036.6** — Verifikasi gerak: Home reveal + magnetic, About rest/active, tile Work, overlay, ganti locale/halaman (page-vt), reduced-motion OS.

---

## T-037 — Cabut Astryx, docs/rule, QA paritas

* **Status:** ⏳ Open
* **Domain:** Engineering + Documentation + UI/UX
* **Depends:** T-033 … T-036 (tidak ada sisa impor Astryx di UI)
* **Baca dulu:** `package.json`, `.cursor/rules/*`, `AGENTS.md`, `product-discovery/06-engineering/*`, `ARCHITECTURE_OVERVIEW.md`
* **Keputusan:** DoD rilis = nol Astryx. Rule `xds.mdc` diganti. Gap StyleX/T-013.4 ditutup (tidak di-wire).

### Subtasks

- [ ] **T-037.1** — Grep `@astryxdesign` / `@stylexjs` / `astryx-` di `app/`, `lib/`, `theme/`: kosong. Hapus `lib/astryx-theme.ts`, `theme/astryx-theme.css`, `theme/rezisaktiva.d.ts` (atau ganti tipe tema baru jika masih perlu). Script `astryx` / `theme:build` / `theme:check` di `package.json` dihapus.
- [ ] **T-037.2** — `pnpm remove @astryxdesign/core @astryxdesign/theme-neutral @stylexjs/stylex` + dev `@astryxdesign/cli`. Lockfile update sadar (bukan regenerate buta).
- [ ] **T-037.3** — `globals.css`: hapus `@import` Astryx; ganti selector `.astryx-*` / `#astryx-app-shell-main` ke class baru (header/main). Jangan `!important` baru kecuali preseden sadar. Craft `.home-*` `.ct-*` `.qi-*` `.ps-*` `.page-vt-*` tetap.
- [ ] **T-037.4** — Docs/rule: `design-tokens.md`, `code-discipline.md` + `.mdc`, `dependency-strategy.md`, `06-engineering/README.md`, `ARCHITECTURE_OVERVIEW.md`, `DEVELOPER_WORKFLOW.md`, `AGENTS.md`, `PROJECT_RULES.md` (indeks rule). **Ganti** `.cursor/rules/xds.mdc` jadi rule shadcn (alwaysApply) — konvensi CLI `pnpm exec`/`pnpm dlx shadcn`, tanpa Tailwind-as-coexist Astryx, tanpa StyleX. `ui-ux-mockup-check.mdc`: acuan = `app/` + shadcn/Tailwind, bukan Astryx.
- [ ] **T-037.5** — `.cursor/mcp.json`: hapus `xds`. shadcn + motion tetap. Jangan sebut nama model/tool terlarang di commit.
- [ ] **T-037.6** — QA paritas vs **T-032.1** ([`baselines/t-032.1/`](../baselines/t-032.1/)): Home/About/Work; Contact/QI/sheet; chrome; light/dark; 320/375/desktop; reduced-motion; locale ID/EN; typecheck/lint/build. Catat gap yang tidak 1:1 (jika ada) — **perbaiki dulu** jika bentuk berubah tanpa keputusan. Foto Unsplash tetap bukan blocker.
- [ ] **T-037.7** — Snapshot/Fokus/COMPLETE_TASK: rilis v14 Done; Active Mode Validation; berikutnya **T-031**. Larangan “jangan pasang Tailwind” di PROJECT_STATE sudah ADR-028.

---

## Urutan & paralel

```text
T-032 (fondasi)          ← T-032.1 ✅; lanjut T-032.2
    → T-033 (chrome)
        → T-034 (halaman) ──┐
                            ├──→ T-035 (overlay) → T-036 (motion) → T-037 (cabut + docs + QA)
        → T-035 boleh mulai setelah chrome jika overlay tidak menunggu copy halaman

T-031 (metadata) mengantri setelah T-037
```

Jangan merge ke `main` di tengah dual-boot kecuali Boss Rezi minta. Satu PR di akhir T-037, atau PR bertahap **hanya** jika tiap PR masih visual-parity dan tidak meninggalkan dua sistem di `main`.

## Yang tidak masuk backlog v14

- `/work/[slug]`, CMS, auth, StyleX compiler
- Ganti default tema ke dark / ikuti OS
- Redesain palet, hapus elevasi 3D, ganti font
- MCP / registry shadcn pihak ketiga berbayar
- Menyalin `design-mockups/` sebagai target piksel
