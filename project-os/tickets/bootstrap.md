# Bootstrap — T-008 … T-012

Release to scaffold the application (Next single-app + pnpm), DX tooling, locale routing skeleton, and CI/deploy/env — according to the Engineering Baseline (ADR-016). Not the full R1 content/feature implementation.

---

## T-008 — Scaffold Next single-app + pnpm

* **Status:** ✅ Done
* **Domain:** Engineering
* **Read first:** `product-discovery/06-engineering/monorepo-setup.md`, ADR-016

### Subtasks

- [x] **T-008.1** — Initialize Next.js App Router + TypeScript (`strict`) + pnpm at the root (`package.json`, `pnpm-lock.yaml`, `packageManager`)
- [x] **T-008.2** — Folder structure: `app/`, `content/`, `public/` alongside docs (`product-discovery/`, `project-os/`, `private/`)
- [x] **T-008.3** — Minimal scripts: `dev`, `build`, `start`, `lint`, `typecheck`
- [x] **T-008.4** — Ensure `pnpm build` is green with a minimal stub

---

## T-009 — DX + design token foundation

* **Status:** ✅ Done
* **Domain:** Engineering
* **Read first:** `product-discovery/06-engineering/dx-tooling.md`, `design-tokens.md`, `dependency-strategy.md`, ADR-018

### Subtasks

- [x] **T-009.1** — ESLint (`eslint-config-next`) + Prettier + `eslint-config-prettier`; script `lint` / `format` / `format:check`
- [x] **T-009.2** — ~~Tailwind + CSS variables~~ (light default; `dark:` foundation without toggle UI) — **superseded by T-009.4** (ADR-018)
- [x] **T-009.3** — Dependabot (or equivalent) for lightweight dependency updates
- [x] **T-009.4** — Migrate styling from Tailwind to **Astryx** (`@astryxdesign/core` + StyleX + `theme-neutral`); `Theme` in root layout (`mode="light"` default); agent docs in `.cursor/rules/xds.mdc`; Tailwind uninstalled — **ADR-018**

---

## T-010 — Locale routing skeleton

* **Status:** ✅ Done
* **Domain:** Engineering
* **Read first:** `product-discovery/06-engineering/deployment-infrastructure.md`, UX locale ADR-014, architecture SSG ADR-015

### Subtasks

- [x] **T-010.1** — App Router paths `/id` and `/en` (minimal page stub) — `app/[locale]/page.tsx` + `lib/locale.ts`, `generateStaticParams` for SSG, `notFound()` for other locales
- [x] **T-010.2** — Middleware / redirect rule `/` → default locale (geo/default according to baseline) — `proxy.ts` (renamed from `middleware.ts` following Next.js 16 convention); signal order: preference cookie → `x-vercel-ip-country` → `Accept-Language` → fallback `en` (see implementation decision note in the file comment)
- [x] **T-010.3** — Thin locale switcher stub (without content polish) — `app/[locale]/_components/locale-switcher.tsx` (Astryx `Link`), set cookie `NEXT_LOCALE` on click, in `app/[locale]/layout.tsx`

---

## T-011 — CI + Vercel + thin env

* **Status:** ✅ Done
* **Domain:** Engineering
* **Read first:** `product-discovery/06-engineering/cicd-pipeline.md`, `deployment-infrastructure.md`, `environment-management.md`

### Subtasks

- [x] **T-011.1** — GitHub Actions: pnpm + lint + typecheck on PR — `.github/workflows/ci.yml` (trigger `pull_request` + `push` to `main`; checkout → `pnpm/action-setup` → `actions/setup-node` (pnpm cache) → `pnpm install --frozen-lockfile` → `pnpm lint` → `pnpm typecheck`; without `next build`, without secrets)
- [x] **T-011.2** — Connect the Vercel project (Preview PR + Production from the main branch) — done manually by Boss Rezi in the Vercel dashboard; project is connected and deploy succeeded
- [x] **T-011.3** — Thin env: `.env.example` + `.env.local` gitignored; document Local/Preview/Production tiers (minimal/empty product secrets) — `.env.example` (`NEXT_PUBLIC_SITE_URL` + tier comments); `.gitignore` already ignores `.env` / `.env.*` except `.env.example` (verified, existed since early bootstrap)

---

## T-012 — Exit Bootstrap → ready for Development

* **Status:** ✅ Done
* **Domain:** Documentation
* **Read first:** `PROJECT_STATE.md` Active Mode, Bootstrap exit criteria (defined in this task file)

### Subtasks

- [x] **T-012.1** — Verify: local build + green CI + Vercel Preview + structure/tokens/locale according to baseline
- [x] **T-012.2** — Update `PROJECT_STATE.md` → Development phase (R1 feature Active Mode)
- [x] **T-012.3** — Append `COMPLETE_TASK.md` + update Focus in `AVAILABLE_TICKETS.md`

---

## Not Included In The Bootstrap Backlog

- R1 content/feature implementation (polished Home/About/Contact, final work teaser)
- Auth / DB / ORM (N/A — ADR-011/015)
- Required Husky / test runner (deferred per `dx-tooling.md`)
- Dark mode toggle UI (Should/Later when bootstrap was written; **superseded** — promoted to Must R1 via ADR-021, done as T-013.4 in `r1.md`)
