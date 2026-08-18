# v0.3 — Development R1 (MVP Clarity)

Release untuk implementasi fitur/konten R1 Must (M1–M7, + M9 via ADR-020, + theme toggle via ADR-021, + M13 via ADR-022): chrome, Home + work teaser, About, Contact, Work index, Quick Info panel, meta — sesuai Product/UX baseline (ADR-010, ADR-014, ADR-019, ADR-020, ADR-021, ADR-022) dan Astryx (ADR-018). Bukan magnet R2 (Work case/detail penuh — M10).

Urutan kerja: chrome dulu (dipakai semua halaman), lalu halaman, lalu meta, lalu exit.

**Teks / copy** semua permukaan R1 dikunci lewat **T-021** ([`v10-page-copy.md`](v10-page-copy.md)) — diskusi dengan Boss Rezi, bukan AI mengarang. Subtask `*.1` di bawah memakai hasil itu.

Sebelum eksekusi task UI/UX: cek kelengkapan task **dan** mockup di `design-mockups/` (rule `ui-ux-mockup-check`). Jika mockup sudah ada dan selaras task/ADR — pelajari lalu pakai (jangan tanya ritual pakai/perbarui). Jika mockup belum ada, konflik, atau di luar rencana — berhenti dan tanya Boss Rezi; tidak boleh langsung ke kode.

---

## T-013 — Site chrome R1 (M6 + polish M5)

* **Status:** ✅ Done (T-013.1–T-013.4, 2026-08-16)
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/04-ux/information-architecture.md`, `navigation-patterns.md` (override ADR-020 / ADR-021), `key-screen-patterns.md` (S0), `06-engineering/design-tokens.md` (tema — ADR-021), ADR-014, ADR-019, ADR-020, ADR-021, `.cursor/rules/xds.mdc`, `design-mockups/home.html` (chrome bersama), `app/[locale]/_components/site-header.tsx`
* **Keputusan (2026-08-15, ADR-020):** ikut mockup penuh — nav Home · About · Karya (M9) sebagai link, Contact sebagai tombol pembuka modal (bukan link), hamburger aktif <1024px (nav halaman + switcher masuk menu; Contact-button + tema tetap di luar).
* **Keputusan (2026-08-16, ADR-021):** toggle dark/light di chrome naik jadi Must R1; default ship tetap light; preferensi user disimpan.
* **Keputusan (2026-08-16, style navbar):** chip kuning pill (nav link, locale switch, mobile drawer) diimplementasi persis mockup — ditambahkan sebagai custom theme (`lib/theme.ts`, `defineTheme` `components` override), bukan `--color-*` manual di `:root`. **Catatan penting:** `xstyle`/`stylex.create()` (jalur yang direkomendasikan `xds.mdc`) ternyata **belum bisa dipakai** di project ini — compiler StyleX (`@stylexjs/babel-plugin` + postcss plugin) belum wired ke build Turbopack, build langsung gagal saat dicoba. Styling chip di atas jadi 100% lewat mekanisme `defineTheme` (di-generate & di-inject Astryx sendiri, tidak butuh compiler tambahan). Setup compiler StyleX (trade-off Turbopack vs webpack) masih terbuka sebagai keputusan/task terpisah — lihat COMPLETE_TASK.md.
* **Implementasi:** `app/[locale]/_components/site-header.tsx` (TopNav + MobileNav via `AppShell`, breakpoint `lg`/1024px lewat `useAppShellMobile`), `app/[locale]/_components/site-footer.tsx`, `app/[locale]/_components/locale-switcher.tsx` (SegmentedControl ID/EN), `app/[locale]/_components/theme-toggle.tsx` + `theme-toggle-icons.tsx`, `app/_components/theme-mode-provider.tsx` (state via `useSyncExternalStore`, `lib/theme-mode.ts`), `lib/theme.ts` (custom theme + chip/pill override), `lib/nav.ts`, `app/layout.tsx`, `app/[locale]/layout.tsx`. Stub `about/`, `work/` ditambah agar link nav tidak 404 selama T-015/T-019 belum digarap. Contact button belum wired ke modal (menyusul T-016).

### Subtasks

- [x] **T-013.1** — Nav Home · About · Karya (M9) sebagai link; Contact = tombol (belum wired ke modal — menyusul T-016); ≥1024px semua selalu terlihat, <1024px nav+switcher di balik hamburger (Contact-button tetap di luar, ≤1 ketukan)
- [x] **T-013.2** — Locale switcher selalu terlihat di desktop; masuk hamburger di mobile bersama nav (polish stub T-010.3 — sekarang `SegmentedControl` ID/EN); cookie `NEXT_LOCALE` tetap hanya untuk redirect `/`
- [x] **T-013.3** — Footer: identitas singkat + satelit LinkedIn/GitHub (bukan pengganti Contact; tanpa WA/IG); URL satelit masih placeholder `#` sampai konten T-015.1/T-016.1 tersedia
- [x] **T-013.4** — Komponen theme toggle di chrome (`site-header.tsx`) sesuai mockup + ADR-021: selalu terlihat di luar hamburger (bersama Contact-button); default light; persist preferensi (localStorage `rz-theme` + cookie `rz-theme` untuk SSR anti-flash, lihat COMPLETE_TASK.md 2026-08-16); Astryx `Theme` `mode` `'light' | 'dark'` (bukan `system` sebagai Must)

---

## T-014 — Home + work teaser (M1 + M4)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M1, M4), `04-ux/key-screen-patterns.md` (S1), ADR-010, ADR-017, `design-mockups/home.html`

### Subtasks

- [ ] **T-014.1** — Konten Home di `content/` — **sumber copy: T-021.2** (diskusi, jangan mengarang); hero, credibility, arah soft, availability opsional
- [ ] **T-014.2** — Halaman `/[locale]` (bukan stub): first viewport product builder + fullstack + AI edge; Astryx; motion memperkuat hierarchy (ADR-017) tanpa mengalahkan clarity
- [ ] **T-014.3** — Work teaser 1–3 item (nama · peran/outcome · tautan bukti opsional); satu-satunya blok karya di Home

---

## T-015 — About (M2)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M2), `04-ux/key-screen-patterns.md` (S2), ADR-002, `design-mockups/about.html`

### Subtasks

- [ ] **T-015.1** — Konten About di `content/` — **sumber copy: T-021.3** (diskusi, jangan mengarang)
- [ ] **T-015.2** — Halaman `/[locale]/about` sesuai pola S2 + mockup; Astryx; soft arah ke Contact / teaser Home

---

## T-016 — Contact (M3)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M3), `04-ux/key-screen-patterns.md` (S3 — final modal-only, ADR-019), ADR-014, ADR-019, `design-mockups/shared.js` (komponen modal Contact — `contact.html` sudah dihapus)
* **Keputusan (2026-08-16):** Contact **modal-only** — final, selaras ADR-019. Dialog/Modal global (bukan halaman `/[locale]/contact`), dibuka dari nav/CTA di semua halaman; termasuk form email + message (ADR-019 override ADR-014 poin "tanpa form"). **Tidak ada** route `/[locale]/contact` — jangan dibuat sebagai fallback/SEO tanpa ADR baru.

### Subtasks

- [ ] **T-016.1** — Konten Contact di `content/` — **sumber copy: T-021.4** (diskusi, jangan mengarang)
- [ ] **T-016.2** — Komponen Contact modal sesuai pola S3 (ADR-019) + mockup; `mailto:` tetap primer; form email+message diizinkan; tanpa calendar / WA / IG / pricing; tidak membuat route `/contact` terpisah

---

## T-017 — Destination meta (M7)

* **Status:** ⏳ Todo
* **Domain:** Engineering
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M7), `06-engineering/environment-management.md`, ADR-015

### Subtasks

- [ ] **T-017.1** — `title` + `description` per halaman, per locale (`id`/`en`) — **sumber copy: T-021.7**
- [ ] **T-017.2** — OG dasar + canonical dari `NEXT_PUBLIC_SITE_URL`

---

## T-018 — Exit R1 → destination layak evaluasi

* **Status:** ⏳ Todo
* **Domain:** Documentation
* **Baca dulu:** `product-discovery/02-product/release-roadmap.md` (Exit R1), `success-metrics.md` (Phase 1 — Validation)

### Subtasks

- [ ] **T-018.1** — Verifikasi exit R1: reviewer bisa merangkum product builder + fullstack + AI edge; Contact soft path jelas; paritas makna ID/EN; a11y dasar (heading, kontras, fokus keyboard)
- [ ] **T-018.2** — Update `PROJECT_STATE.md` (R1 exit / Validation) + append `COMPLETE_TASK.md` + update Fokus di `TASKS.md`

---

## T-019 — Work index R1 (M9, override ADR-020)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M9), ADR-020, `design-mockups/work.html`
* **Catatan:** M9 naik jadi Must R1 lewat ADR-020 (2026-08-15); nav "Karya" (T-013.1) butuh destination nyata. Halaman detail per karya (M10/`work-case.html`) **tetap R2** — jangan bangun detail case di sini, cukup index/katalog yang link keluar (repo/live) atau ke placeholder detail sampai M10 digarap.

### Subtasks

- [ ] **T-019.1** — Konten Work index di `content/` — **sumber copy: T-021.5** (daftar karya; selaras teaser Home T-021.2)
- [ ] **T-019.2** — Halaman `/[locale]/work` sesuai mockup; Astryx; konsisten dengan chrome T-013

---

## T-020 — Quick Info panel (M13, ADR-022)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M13), `04-ux/navigation-patterns.md` (Secondary — Quick info), `key-screen-patterns.md` (S0), `ux-principles.md` (overlay ≠ halaman baru, UX3), ADR-019, ADR-022, `design-mockups/shared.js` (`mountQuickInfo()`), `design-mockups/home.html`
* **Catatan:** M13 naik jadi Must R1 lewat ADR-022 (2026-08-16). Overlay global (tab tepi kanan → drawer), **bukan route baru**. Tampil di semua halaman R1 kecuali Work case detail (M10). Jangan duplikasi Contact modal (ADR-019) atau footer satelit (M6): Email/Links di panel = tautan/rujukan, bukan form inbound.

### Subtasks

- [ ] **T-020.1** — Konten Quick Info di `content/` — **sumber copy: T-021.6** (diskusi, jangan mengarang dari placeholder mockup)
- [ ] **T-020.2** — Komponen overlay (tab tepi kanan → drawer, focus trap, Astryx + overlay custom per ADR-018/ADR-022); mount di chrome global; **exclude** di Work case detail; jangan wire form Contact ke dalam drawer

---

## Yang tidak masuk backlog Development R1

- Work case / detail per karya (M10 — R2); Work index (M9) sudah masuk R1 via ADR-020 (T-019)
- Form, calendar, WA, Instagram, pricing (ADR-008 / ADR-014) — form Contact tetap di T-016, bukan di Quick Info
- Blog / CMS / auth / DB (N/A — ADR-011/015)
- Husky / test runner wajib (ditunda per `dx-tooling.md`)
