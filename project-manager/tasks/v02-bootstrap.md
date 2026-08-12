# v0.2 — Repository & Bootstrap

Release untuk scaffold aplikasi (Next single-app + pnpm), tooling DX, locale routing skeleton, dan CI/deploy/env — sesuai Engineering Baseline (ADR-016). Bukan implementasi konten/fitur R1 penuh.

---

## T-008 — Scaffold Next single-app + pnpm

* **Status:** ⏳ Todo
* **Domain:** Engineering
* **Baca dulu:** `product-discovery/06-engineering/monorepo-setup.md`, ADR-016

### Subtasks

- [x] **T-008.1** — Init Next.js App Router + TypeScript (`strict`) + pnpm di root (`package.json`, `pnpm-lock.yaml`, `packageManager`)
- [ ] **T-008.2** — Struktur folder: `app/`, `content/`, `public/` berdampingan docs (`product-discovery/`, `project-manager/`, `private/`)
- [ ] **T-008.3** — Script minimal: `dev`, `build`, `start`, `lint`, `typecheck`
- [ ] **T-008.4** — Pastikan `pnpm build` hijau dengan stub minimal

---

## T-009 — DX + design tokens fondasi

* **Status:** ⏳ Todo
* **Domain:** Engineering
* **Baca dulu:** `product-discovery/06-engineering/dx-tooling.md`, `design-tokens.md`, `dependency-strategy.md`

### Subtasks

- [ ] **T-009.1** — ESLint (`eslint-config-next`) + Prettier + `eslint-config-prettier`; script `lint` / `format` / `format:check`
- [ ] **T-009.2** — Tailwind + CSS variables (light default; fondasi `dark:` tanpa toggle UI)
- [ ] **T-009.3** — Dependabot (atau setara) untuk update dependency ringan

---

## T-010 — Locale routing skeleton

* **Status:** ⏳ Todo
* **Domain:** Engineering
* **Baca dulu:** `product-discovery/06-engineering/deployment-infrastructure.md`, UX locale ADR-014, architecture SSG ADR-015

### Subtasks

- [ ] **T-010.1** — App Router paths `/id` dan `/en` (stub halaman minimal)
- [ ] **T-010.2** — Middleware / aturan redirect `/` → locale default (geo/default sesuai baseline)
- [ ] **T-010.3** — Stub switcher locale tipis (tanpa polish konten)

---

## T-011 — CI + Vercel + env tipis

* **Status:** ⏳ Todo
* **Domain:** Engineering
* **Baca dulu:** `product-discovery/06-engineering/cicd-pipeline.md`, `deployment-infrastructure.md`, `environment-management.md`

### Subtasks

- [ ] **T-011.1** — GitHub Actions: pnpm + lint + typecheck pada PR
- [ ] **T-011.2** — Hubungkan project Vercel (Preview PR + Production dari branch utama)
- [ ] **T-011.3** — Env tipis: `.env.example` + `.env.local` gitignored; dokumentasikan tier Local/Preview/Production (secret produk minimal/kosong)

---

## T-012 — Exit Bootstrap → siap Development

* **Status:** ⏳ Todo
* **Domain:** Documentation
* **Baca dulu:** `PROJECT_STATE.md` Active Mode, exit kriteria Bootstrap (didefinisikan di file task ini)

### Subtasks

- [ ] **T-012.1** — Verifikasi: build lokal + CI hijau + Preview Vercel + struktur/token/locale sesuai baseline
- [ ] **T-012.2** — Update `PROJECT_STATE.md` → fase Development (Active Mode fitur R1)
- [ ] **T-012.3** — Append `COMPLETE_TASK.md` + update Fokus di `TASKS.md`

---

## Yang tidak masuk backlog Bootstrap

- Implementasi konten/fitur R1 (Home/About/Contact polished, work teaser final)
- Auth / DB / ORM (N/A — ADR-011/015)
- Husky / test runner wajib (ditunda per `dx-tooling.md`)
- Dark mode toggle UI (Should/Later)
