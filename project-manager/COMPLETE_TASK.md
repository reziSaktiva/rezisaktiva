# COMPLETE TASK

⚠️ **Peringatan untuk AI:** Jangan membaca riwayat di bawah kecuali Boss Rezi memerintahkan secara eksplisit. Selalu **append entri baru di bagian paling atas** (setelah header ini).

Format entri:

```
## [YYYY-MM-DD]
### Added
- ...
### Changed
- ...
### Fixed
- ...
```

## [2026-08-15] (3)

### Changed

- Mockup navbar mobile/tablet (`design-mockups/`): hamburger di viewport <1024px — menu berisi Home / Proses Kerja / Karya + ID/EN; Contact dan tombol tema tetap visible. Desktop (≥1024px) tetap 3 grup, chip nav di tengah. Menyimpang dari T-013.1 / `navigation-patterns.md` (tanpa hamburger); catatan di `tasks/v03-development-r1.md`.

## [2026-08-15] (2)

### Fixed

- Mockup navbar (`design-mockups/`) — hasil code review PR redesign pill:
  - **Overflow header mobile**: tombol tema & Contact ter-clip/tidak bisa diklik di viewport ≤~405px (mencakup hampir semua ponsel — iPhone SE/12/13, Pixel, Galaxy S). Dirapatkan padding/gap chip di tier mobile + ditambahkan `flex-wrap` sebagai fallback (header pecah jadi 2 baris tanpa clipping) untuk perangkat ultra-sempit (≤~340px). Terverifikasi tidak overflow di 320px & 375px, dan tampilan desktop/tablet tidak berubah.
  - **Aksesibilitas keyboard**: pill preview di nav & locale switch sekarang juga muncul saat item di-fokus lewat Tab (`focus`/`blur`), sebelumnya hanya lewat mouse hover. Ditambahkan `aria-current="page"` pada link nav yang aktif.
  - **Deteksi item aktif diperkuat**: `initPillGroups` (`shared.js`) sebelumnya mendeteksi item aktif lewat class presentasi `bg-brand` (rapuh — bisa rusak diam-diam kalau class itu dipakai untuk keperluan styling lain). Sekarang pakai atribut `data-active` sebagai sumber kebenaran, `bg-brand`/`text-on-brand` tetap disinkronkan untuk graceful degradation tanpa JS. Ditambahkan guard idempotency (`data-pill-group-ready`).
  - Dihapus dead code: key i18n yatim (`home.kicker`, `home.sub`, `home.lead`, `home.available`, `home.cta.talk`, `home.cta.work`, `page.process`) dan CSS `.about-rule` yang tidak lagi dipakai sejak konten terkait dihapus di iterasi sebelumnya.

## [2026-08-15]

### Changed

- Mockup navbar (`design-mockups/`, referensi untuk T-013.1 nav & T-013.2 locale switcher — belum implementasi kode): header dipecah jadi 3 grup — nav halaman (Home/Proses Kerja/Karya), locale switch (ID/EN), dan tema+Contact — masing-masing chip terpisah dengan `rounded-2xl`.
- Ditambahkan link "Home" ke nav.
- State selected pada nav & locale switch pakai pill indicator (`bg-brand`/`text-on-brand`) yang geser smooth (CSS transition + `shared.js` `initPillGroups`) saat hover/klik, teks tidak bold.
- Tombol tema disamakan gaya dan animasi magnetic-nya dengan button Contact.
- Spacing mobile dirapatkan agar header tidak overflow di viewport sempit.
- Fix: rule `.chip-fixed-text` di `shared.css` sekarang mengecualikan elemen `.text-on-brand` agar teks tidak hilang saat pill aktif/hover.

## [2026-08-14]

### Changed

- Laporan sesi mockup Quick info: tab kompak di tepi kanan (rounded kiri), hilang halus saat dibuka; drawer geser dari kanan dengan close kotak di header; full lebar di bawah md, ~38rem di atas md. Stack tetap Astryx (ADR-018), bukan shadcn.

## [2026-08-14] (2)

### Changed

- Mockup Quick info: tab rounded kiri (bukan atas); drawer full lebar di bawah md, di atas md lebar ~38rem.

## [2026-08-14] (2)

### Changed

- Mockup Quick info: tab fade+geser halus saat drawer buka; radius atas 0.75rem (setara rounded-xl drawer, karena tab diputar).

## [2026-08-14] (2)

### Fixed

- Mockup Quick info: tab tetap pill kompak (bukan tinggi penuh) dan menempel panel sehingga ikut geser saat drawer dibuka.

## [2026-08-14] (2)

### Changed

- Mockup Quick info: tab kanan jadi pill kompak putih (bukan strip gelap penuh), hover hijau gelap, panel buka terpisah dari tab.

## [2026-08-14] (2)

### Added

- Mockup Quick info (pola karolinahess.com): tab kanan + drawer di Home, Proses Kerja, Karya, Contact — tidak di work-case.

## [2026-08-14] (3)

### Changed

- Catatan: seluruh copy di `design-mockups/` masih contoh/placeholder — bukan teks yang diinginkan untuk produksi (`CONVERSATIONS.md`).

## [2026-08-14] (4)

### Changed

- Mockup Home diarahkan ulang (Karolina type+cutout × Bartek quiet): hero dua kata oversized + foto cutout, chrome tenang, karya sebagai tile gambar.
- Mockup About, Work, Contact, dan work-case diselaraskan ke arah yang sama.
- Mockup About diubah mengikuti pola mazurbartek.com/about: sapaan + foto potret, bukan headline slogan.
- Copy About disesuaikan ke gaya karolinahess.com/about: kalimat pendek, “yang bisa saya bantu”, approach, values.

### Added

- `design-mockups/work.html` — mockup indeks seluruh karya (dari See all / nav Karya).
- `design-mockups/work-case.html` — mockup cerita singkat per project (dari Baca cerita).

### Changed

- `.cursor/rules/ui-ux-mockup-check.mdc` — jika mockup ada: jelaskan lalu tanya pakai/perbarui; jika belum ada: wajib buat mockup HTML dulu (tidak boleh skip ke kode).
- `project-manager/tasks/v03-development-r1.md` — catatan pra-eksekusi UI/UX diselaraskan.
- `project-manager/CONVERSATIONS.md` — alur mockup wajib.
- `design-mockups/` — switcher ID/EN berfungsi di Home, Proses Kerja, Contact (copy paritas + locale tersimpan); See all + nav Karya → `work.html`.

## [2026-08-13] (6)

### Added

- `project-manager/tasks/v03-development-r1.md` — backlog Development R1 (T-013 chrome, T-014 Home+teaser, T-015 About, T-016 Contact, T-017 meta, T-018 exit R1).

### Changed

- `project-manager/TASKS.md`, `project-manager/PROJECT_STATE.md` — indeks v0.3; Fokus/Top Next Task = **T-013**.

## [2026-08-13] (5)

### Fixed

- README Static Reference tidak lagi menanam status fase hidup: `product-discovery/03-user/README.md`, `04-ux/README.md`, `05-architecture/README.md` (hapus “(saat ini Repository & Bootstrap)”); `06-engineering/README.md` + `product-discovery/README.md` memakai rumusan urutan historis + rujuk `PROJECT_STATE.md`.

## [2026-08-13] (4)

### Changed

- **T-012.1** — Exit Bootstrap diverifikasi: `pnpm lint` + `typecheck` + `build` hijau lokal (route `/id`/`/en` SSG + Proxy); CI Actions hijau di PR #20 dan push `main`; Vercel Preview + Production success; struktur (`app/` `content/` `public/`), token Astryx (ADR-018), locale `/[locale]` + `proxy.ts` sesuai baseline.
- **T-012.2** — `PROJECT_STATE.md` → fase **Development**; Active Mode fitur R1 (M1–M7); Top Next Task = susun backlog Development R1 (v0.3).
- **T-012.3** — `tasks/v02-bootstrap.md` T-012 ✅ Done; `TASKS.md` Fokus + indeks v0.2 ✅ Done.

## [2026-08-13] (3)

### Changed

- **T-011.2** — Project Vercel dihubungkan (import repo GitHub, Production Branch, env var) oleh Boss Rezi secara manual di dashboard Vercel; deploy pertama berhasil. `tasks/v02-bootstrap.md` T-011 ditandai ✅ Done penuh (T-011.1/.2/.3 selesai).
- `project-manager/TASKS.md`, `project-manager/PROJECT_STATE.md` — Fokus/Snapshot/Current Focus diupdate: T-011 selesai, Top Next Task berikutnya **T-012** (Exit Bootstrap → siap Development), Blocker dikosongkan.

## [2026-08-13] (2)

### Added

- **T-010.1** — App Router locale skeleton: `lib/locale.ts` (`LOCALES`, `DEFAULT_LOCALE`, `isLocale`), `app/[locale]/page.tsx` (stub `id`/`en`, `generateStaticParams` untuk SSG, `notFound()` untuk locale lain sesuai ADR-015 static-first).
- **T-010.2** — `proxy.ts` (root) redirect `/` → locale default; matcher hanya `/` (path ber-locale tidak pernah disentuh, sesuai ADR-014). File dibuat sebagai `middleware.ts` lalu di-rename ke `proxy.ts` (+ fungsi `proxy`) mengikuti konvensi Next.js 16.3 (menghindari warning deprecation).
- **T-010.3** — `app/[locale]/layout.tsx` + `app/[locale]/_components/locale-switcher.tsx`: stub switcher tipis (Astryx `Link`) yang link ke sibling path locale dan set cookie `NEXT_LOCALE` saat diklik.
- **T-011.1** — `.github/workflows/ci.yml`: GitHub Actions (`pull_request` + `push` ke `main`) — checkout, `pnpm/action-setup`, `actions/setup-node` (cache pnpm), `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`. Tanpa `next build` di Actions (build produksi tetap di Vercel, sesuai `cicd-pipeline.md`).
- **T-011.3** — `.env.example` (`NEXT_PUBLIC_SITE_URL` + komentar tier Local/Preview/Production, referensi ke `environment-management.md`). `.gitignore` diverifikasi sudah meng-ignore `.env` / `.env.*` kecuali `.env.example`.

### Changed

- `app/page.tsx` — jadi stub root (komentar dijelaskan: tidak pernah diakses langsung karena `proxy.ts` selalu redirect `/`).
- `project-manager/tasks/v02-bootstrap.md` — T-010 ditandai ✅ Done (semua subtask); T-011 subtask T-011.1/T-011.3 ✅, T-011.2 tetap ⏳ (butuh aksi manual Boss Rezi di dashboard Vercel — langkah manual didokumentasikan di file task).
- `project-manager/TASKS.md`, `project-manager/PROJECT_STATE.md` — update Fokus/Snapshot/Current Focus mencerminkan T-010 selesai dan T-011 menunggu Vercel manual.

### Fixed

- (tidak ada)

### Catatan keputusan implementasi (bukan ADR — untuk konfirmasi Boss Rezi bila perlu)

- **Urutan resolusi locale di `proxy.ts`:** brief task menuliskan urutan "geo → Accept-Language → preferensi cookie → fallback". Diimplementasikan dengan urutan **cookie preferensi → geo (`x-vercel-ip-country`) → Accept-Language → fallback `en`**, karena preferensi hasil switch eksplisit user seharusnya menang di kunjungan berikutnya dibanding heuristik otomatis. ADR-014 sendiri tidak eksplisit menentukan urutan antara ketiganya. Jika Boss Rezi ingin urutan literal sesuai brief, tinggal pindah blok `resolveFromCookie` ke posisi sebelum fallback di `proxy.ts` (komentar sudah dicatat di file).
- **`middleware.ts` → `proxy.ts`:** repo pakai Next.js 16.3 yang sudah men-deprecate konvensi `middleware.ts` (rename resmi jadi `proxy.ts` + fungsi `proxy`). Dokumen `deployment-infrastructure.md`/ADR-014 menyebut "Edge Middleware" secara konseptual; nama file diimplementasikan sesuai versi Next.js yang terpasang agar tidak ada warning deprecation saat build.

---

## [2026-08-13] (1)

### Added

- Rule `.cursor/rules/ui-ux-mockup-check.mdc` — AI wajib cek ketersediaan mockup (`design-mockups/`) dan tanya user sebelum eksekusi task UI/UX.
- Dependency Astryx (`@astryxdesign/core`, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`) sebagai component library + sistem styling R1 (**T-009.4**, **ADR-018**).
- `.cursor/rules/xds.mdc` — agent docs Astryx (konvensi wajib AI saat menulis komponen), `alwaysApply: true`.
- Script `astryx` di `package.json` untuk invocation CLI reliable.
- `app/layout.tsx` membungkus subtree dengan `<Theme theme={neutralTheme} mode="light">`; `app/page.tsx` migrasi ke komponen Astryx (`Heading`, `Text`, `VStack`).

### Changed

- `design-tokens.md`, `dependency-strategy.md` diperbarui: kontrak styling pindah dari Tailwind + CSS variables ke Astryx (ADR-018).
- `app/globals.css` — import Astryx reset/theme CSS, hapus setup Tailwind (`@import "tailwindcss"` dst).
- `v02-bootstrap.md` — T-009.2 ditandai superseded oleh T-009.4 baru (bukan didaur ulang, sesuai aturan ID subtask).

### Fixed

- (tidak ada)

---

## 2026-08-12
### Added
- Prettier (`.prettierrc.json`, `.prettierignore`) + `eslint-config-prettier` terpasang di ESLint flat config (**T-009.1**)
- Script `format` / `format:check` di `package.json` (**T-009.1**)
- Tailwind CSS v4 (`@tailwindcss/postcss`, `postcss.config.mjs`) + CSS variables token (brand/accent/bg/fg/border/focus/danger/success) di `app/globals.css`, light default + fondasi `.dark` class strategy via `@custom-variant dark` (**T-009.2**)
- `.github/dependabot.yml` — ekosistem `npm` (grouping patch/minor) + `github-actions`, update mingguan (**T-009.3**)
### Changed
- `app/page.tsx` — stub memakai utility Tailwind + token (`font-display`, `text-brand`, `text-fg-muted`) sebagai bukti kontrak token jalan
- `tasks/v02-bootstrap.md` — **T-009.1** … **T-009.3** ✅; parent **T-009** ✅ Done
- `TASKS.md` — Fokus → **T-010**
- `PROJECT_STATE.md` — Snapshot/Fokus → next **T-010**

---

## 2026-08-12
### Added
- `content/README.md` — folder SoT konten situs berdampingan `app/` + `public/` + docs (**T-008.2**)
- Script `typecheck` (`tsc --noEmit`) di `package.json` (**T-008.3**)
- Stub halaman minimal di `app/` agar `pnpm build` hijau (**T-008.4**)
### Changed
- `package.json` — scripts lengkap: `dev`, `build`, `start`, `lint`, `typecheck` (**T-008.3**)
- `app/page.tsx`, `app/layout.tsx`, `app/globals.css` — stub bootstrap (hapus `page.module.css` create-next-app)
- `README.md` — tabel struktur app Bootstrap
- `tasks/v02-bootstrap.md` — **T-008.2** … **T-008.4** ✅; parent **T-008** ✅ Done
- `TASKS.md` — Fokus → **T-009.1**
- `PROJECT_STATE.md` — Snapshot/Fokus → next **T-009.1**

---

## 2026-08-12
### Added
- Scaffold Next.js App Router + TypeScript (`strict`) + pnpm di root (**T-008.1**): `package.json`, `pnpm-lock.yaml`, `packageManager`, `app/`, `public/`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`
### Changed
- `tasks/v02-bootstrap.md` — centang **T-008.1**; parent T-008 tetap ⏳
- `TASKS.md` — Fokus → **T-008.2**
- `PROJECT_STATE.md` — Snapshot/Fokus → next **T-008.2**
- `README.md` / `AGENTS.md` — status stack diselaraskan (bukan docs-only lagi)

---

## 2026-08-11
### Added
- `project-manager/tasks/v02-bootstrap.md` — backlog release Bootstrap (T-008…T-012 + subtasks, mengikuti Engineering Baseline ADR-016)
### Changed
- `TASKS.md` — indeks release v0.2 Bootstrap; Fokus → **T-008.1**
- `PROJECT_STATE.md` — Snapshot/Fokus: backlog Bootstrap sudah ada, next = eksekusi T-008.1

---

## 2026-08-11
### Fixed
- Review PR #10: Decision Rules `03–05` arahkan ke `PROJECT_STATE.md` (bukan “lanjut isi” discovery)
- Review PR #10: Exit Criteria root `product-discovery/README.md` kembali definisi (tanpa stamp status T-007)
- Review PR #10: commit PR tanpa trailer atribusi AI

---

## 2026-08-11
### Added
- **T-007.1** — Exit criteria Product Discovery diverifikasi & disetujui (baseline 01–06 + ADR-001…016)
### Changed
- **T-007.2** — `PROJECT_STATE.md` → fase **Repository & Bootstrap**; Active Mode Bootstrap
- T-007 ✅ Done; v0.1 Product Discovery release ✅; Fokus → backlog Bootstrap + scaffold Next
### Fixed
- Wording README fase **03–06** + `product-discovery/README.md` Exit Criteria selaras baseline (sudah ditetapkan / sudah terpenuhi)

---

## 2026-08-11
### Added
- **T-006.10** / **ADR-016** — Engineering Baseline v1.0 untuk seluruh `06-engineering/`
### Changed
- Status semua dokumen `06-engineering/` → Baseline v1.0 (`auth-strategy.md`, `database-orm.md` tetap N/A)
- T-006 ✅ Done; Fokus → **T-007.1** Exit criteria Product Discovery

---

## 2026-08-11
### Added
- **T-006.7** — `dx-tooling.md` (ESLint + Prettier; tanpa husky; test belum wajib)
- **T-006.8** — `dependency-strategy.md` (pnpm lockfile + `^` + Dependabot; Bun ditolak)
- **T-006.9** — `design-tokens.md` (Tailwind + CSS vars; light default; dark fondasi A+)
### Changed
- Fokus → **T-006.10** Baseline Engineering v1.0 + ADR

---

## 2026-08-11
### Added
- **T-006.4** — `database-orm.md` (N/A — selaras ADR-015; konten di repo)
- **T-006.5** — `cicd-pipeline.md` (opsi B: GitHub Actions lint/typecheck + Vercel deploy)
- **T-006.6** — `environment-management.md` (Local/Preview/Production; env tipis; secret di Vercel)
### Changed
- Fokus → **T-006.7** `dx-tooling.md`

---

## 2026-08-11
### Added
- **T-006.1** — `monorepo-setup.md` (single-app di repo ini; Next.js App Router SSG; pnpm; bukan monorepo)
- **T-006.2** — `deployment-infrastructure.md` (Vercel; Preview PR; Middleware locale `/`)
- **T-006.3** — `auth-strategy.md` (N/A — selaras ADR-011/015)
### Changed
- T-006 → 🔄 In Progress; Fokus → **T-006.4** `database-orm.md`

---

## 2026-08-11
### Fixed
- PR #7 review: Entry Points `application-layer.md` selaras path locale ADR-014 (`/[id|en]/…`, bukan `/about` tanpa prefix)

---

## 2026-08-11
### Added
- **T-005.1** — `domain-model.md` (lean content model; DDD N/A)
- **T-005.2** — `database-strategy.md` (N/A — konten di repo)
- **T-005.3** — `application-layer.md` (static-first SSG)
- **T-005.4** — `integration-layer.md` (mailto + satelit + locale redirect)
- **T-005.5** — `background-jobs.md` (N/A)
- **T-005.6** — `realtime-strategy.md` (N/A)
- **T-005.7** — `auth-architecture.md` (N/A)
- **T-005.8** / **ADR-015** — Architecture Baseline v1.0 (opsi A: SSG + konten repo)
### Changed
- T-005 ✅ Done; Fokus → **T-006.1** `monorepo-setup.md`
- `PROJECT_STATE.md` → Phase 6 — Engineering Planning (06-engineering)
- `TASKS.md` / `tasks/v01-product-discovery.md` / `DECISIONS.md`

---

## 2026-08-10
### Changed
- **T-005 / T-006** subtasks dipecah per dokumen (pola T-001/T-002): 1 file = 1 subtask + baseline/ADR di akhir
- T-005: `T-005.1`…`T-005.7` dokumen architecture; `T-005.8` Baseline + ADR (N/A diizinkan per file)
- T-006: `T-006.1`…`T-006.9` dokumen engineering; `T-006.10` Baseline + ADR
- `TASKS.md` / `PROJECT_STATE.md` Fokus → **T-005.1** `domain-model.md`

---

## 2026-08-10
### Fixed
- Review ketat T-003/T-004: bedakan Home **credibility line** (1 klaim non-kartu) vs **work teaser** (1–3 kartu karya) — IA, key screens, flows, journey
- Tutup handoff User→UX: **OQ2** Closed (Email primer ADR-014); OQ5 Closed di lapisan UX; SC1/SC2/SC5 selaras Email primer
- README `03-user/` & `04-ux/` — hapus living status / “lanjut Phase X”; arahkan ke PROJECT_STATE + DECISIONS
### Added
- IA: **Share & Meta Hygiene** (title/description/OG per locale) + **Content readiness** (jangan ship tanpa teaser Home + Email Contact)
### Changed
- `insights.md` assumption A3: saluran Contact dikunci Email primer; inbound tetap provisional
- Fokus tetap **T-005.1** (tidak ada perubahan phase)

---

## 2026-08-10
### Fixed
- Review UX baseline: nav+switcher always-visible mobile R1 (hilangkan opsi hamburger yang bentrok acceptance ≤1 ketukan)
- Preferensi locale hanya untuk redirect `/` — tidak rewrite URL `/id|en/...` eksplisit
- Notasi route diseragamkan ke `/[id/en]/...` di IA, nav, key screens; ADR-014 diperjelas

---

## 2026-08-10
### Changed
- `04-ux/information-architecture.md` — Site Map memakai notasi param `/[id/en]/...` (setara path prefix; bukan query)

---

## 2026-08-10
### Added
- **T-004.1** — Seluruh dokumen `04-ux/` Baseline v1.0 (ux-principles → key-screen-patterns)
- **T-004.2** / **ADR-014** — UX Baseline v1.0 (path locale `/id`/`/en` + geo default + switcher; Contact Email primer; LinkedIn/GitHub satelit; tanpa WA/IG R1)
### Changed
- T-004 ✅ Done; Fokus → **T-005.1** isi `05-architecture/`
- `PROJECT_STATE.md` → Phase 5 — Architecture (05-architecture)
- `TASKS.md` / `tasks/v01-product-discovery.md` / `DECISIONS.md`

---

## 2026-08-07
### Fixed
- **T-003** review: PP9 → Should (tipis); social jobs `S1–S3` → `SJ1–SJ3`; prioritas segmen `Pri-0/1/2`; I3 case → Later (R2 magnet)

---

## 2026-08-07
### Added
- **T-003.1** — Seluruh dokumen `03-user/` Baseline v1.0 (discovery-plan → insights)
- **T-003.2** / **ADR-013** — User Baseline v1.0 (assumption-led + riset ringan opsional; journey R1 primer + sekunder tipis)
### Changed
- T-003 ✅ Done; Fokus → **T-004.1** isi `04-ux/`
- `PROJECT_STATE.md` → Phase 4 — UX Planning (04-ux)
- `TASKS.md` / `tasks/v01-product-discovery.md` / `DECISIONS.md` / `03-user/README.md`

---

## 2026-08-07
### Added
- **T-002.8** / **ADR-012** — Product Baseline v1.0 untuk seluruh `02-product/`
### Changed
- Status semua dokumen `02-product/` → Baseline v1.0 (`roles-permissions.md` tetap N/A)
- T-002 ✅ Done; Fokus → **T-003.1** isi `03-user/`
- `PROJECT_STATE.md` → Phase 3 — User Discovery (03-user)

---

## 2026-08-07
### Added
- **T-002.7** — `roles-permissions.md` **N/A** (situs publik tanpa auth/RBAC)
- **ADR-011** — Roles & permissions N/A; file tetap ada
### Changed
- Fokus → **T-002.8** Baseline Product v1.0 + ADR
- `PROJECT_STATE.md` / `TASKS.md` / `DECISIONS.md` / `v01` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-002.5** — `release-roadmap.md` Draft v0.1 (R1 Clarity → R2 Magnet → R3 Presence/craft)
- **T-002.6** — `future-roadmap.md` Draft v0.1 (peluang M11/M12, distribusi, batas ekspansi)
### Changed
- Fokus → **T-002.7** `roles-permissions.md`
- `PROJECT_STATE.md` / `TASKS.md` / `v01` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-002.4** — `feature-priority.md` Draft v0.1 (MoSCoW M1–M12 untuk rilis MVP)
### Changed
- Fokus → **T-002.5** `release-roadmap.md`
- `PROJECT_STATE.md` / `TASKS.md` / `v01` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-002.1** — `product-scope.md` Draft v0.1 (Hybrid lean)
- **T-002.2** — `mvp-definition.md` Draft v0.1
- **T-002.3** — `feature-modules.md` Draft v0.1 (M1–M12)
- **ADR-010** — MVP surface Hybrid lean (opsi C)
### Changed
- T-002 → 🟡 In progress; Fokus → **T-002.4** `feature-priority.md`
- `PROJECT_STATE.md` / `TASKS.md` / `DECISIONS.md` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-001.7** — `success-metrics.md` Draft→Baseline: dual north star (brand recall + inbound berkualitas)
- **T-001.8** / **ADR-009** — Business Baseline v1.0 untuk seluruh `01-business/`
### Changed
- Status semua dokumen `01-business/` → Baseline v1.0 (`pricing-strategy.md` tetap N/A)
- T-001 ✅ Done; Fokus → **T-002.1** `product-scope.md`
- `PROJECT_STATE.md` — Phase 2 (02-product); `TASKS.md` / `DECISIONS.md` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Changed
- Sinkron referensi kode subtask `T-XXX.N` di laporan/aturan: `CONVERSATIONS.md`, `PROJECT_RULES.md`, `AGENTS.md`, `DEVELOPER_WORKFLOW.md`, `PROJECT_STATE.md` (Overall Progress), `pricing-strategy.md`, ADR-008, navigator skill
### Fixed
- Impact lama di `CONVERSATIONS.md` dan rujukan “Subtask T-001” tanpa nomor anak diselaraskan ke `T-001.N`

## 2026-08-07
### Changed
- Konvensi ID subtask `T-XXX.N` (contoh T-001.1) — retrofit semua subtask di `tasks/v01-product-discovery.md`
- `TASKS.md` — aturan ID subtask; Fokus sekarang `T-001.7`
- `PROJECT_STATE.md` — Top Next / Current Focus pakai kode subtask
- `.cursor/skills/project-os-navigator/SKILL.md` — rujuk `T-XXX.N`
- Riwayat COMPLETE_TASK di bawah diselaraskan ke kode subtask (atas perintah Boss Rezi)

## 2026-08-07
### Added
- `product-discovery/01-business/pricing-strategy.md` N/A v0.1 (tidak relevan untuk situs; file tetap)
- `project-manager/decisions/ADR-008-pricing-strategy-na-for-portfolio-site.md`
### Changed
- `DECISIONS.md` — indeks ADR-008
- `01-business/README.md` — pricing dicatat N/A
- **T-001.6** dicentang (N/A); fokus lanjut **T-001.7** `success-metrics.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.7

## 2026-08-07
### Added
- `product-discovery/01-business/business-model.md` draft v0.1 (brand + soft inbound; growth destination + magnet ringan)
- `project-manager/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md`
### Changed
- `DECISIONS.md` — indeks ADR-007
- **T-001.5** dicentang; fokus lanjut **T-001.6** `pricing-strategy.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.6

## 2026-08-07
### Added
- `product-discovery/01-business/competitor-analysis.md` draft v0.1 (referensi bernama + pesaing kategori; prioritas clarity → presence → craft)
- `project-manager/decisions/ADR-006-competitor-reference-lens-clarity-presence-craft.md`
### Changed
- `DECISIONS.md` — indeks ADR-006
- **T-001.4** dicentang; fokus lanjut **T-001.5** `business-model.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.5

## 2026-08-06
### Added
- `product-discovery/01-business/target-market.md` draft v0.1 (ICP hybrid founder/PO setara; SEA; digital product/tech)
- `project-manager/decisions/ADR-005-target-market-icp-sea-tech.md`
### Changed
- `DECISIONS.md` — indeks ADR-005
- **T-001.3** dicentang; fokus lanjut **T-001.4** `competitor-analysis.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.4

## 2026-08-06
### Added
- `product-discovery/01-business/problem-statement.md` draft v0.1 (framing dual; rantai visibility → narrative → evaluasi)
- `project-manager/decisions/ADR-004-problem-statement-dual-chain.md`
### Changed
- `DECISIONS.md` — indeks ADR-004
- **T-001.2** dicentang; fokus lanjut **T-001.3** `target-market.md`
- `PROJECT_STATE.md` / `TASKS.md` — fokus & progress diselaraskan

## 2026-08-06

### Added

- ADR-003 — repo publik + folder `private/` untuk materi sensitif
- `private/README.md` (isi folder di-ignore Git)

### Changed

- `.gitignore` — `/private/*` (kecuali README); `product-discovery/` tetap di-track
- `README.md` — catatan privasi repo publik

## 2026-08-06

### Added

- `product-discovery/01-business/product-vision.md` draft v0.1
- ADR-002 — visi portofolio (brand primer, positioning, audiens, bahasa geo-aware)

### Changed

- **T-001.1** dicentang; fokus lanjut **T-001.2** `problem-statement.md`
- `TASKS.md`, `PROJECT_STATE.md`, `DECISIONS.md`, `CONVERSATIONS.md` diselaraskan

## 2026-08-06

### Added

- Scaffold Project OS: `product-discovery/` 01–06 (placeholder), `project-manager/`, `.cursor/skills/` (3 process skills), `AGENTS.md`, `.cursorignore`
- ADR-001 — pemisahan PD/PM + skills Cursor
