# Decision ADR-016

### Title

Engineering Baseline v1.0: lock `06-engineering/` (Next.js single-app + Vercel + ESLint/Prettier + Tailwind tokens)

### Status

Accepted

### Date

2026-08-11

### Decision

1. **Engineering Baseline v1.0 is established** for all documents in `product-discovery/06-engineering/` (including `auth-strategy.md` and `database-orm.md` as N/A).
2. Engineering package locked with this baseline:
   - **Repo** = single app in this repo (not monorepo); **Next.js** App Router static-first SSG; **pnpm**; TypeScript strict (`monorepo-setup.md`)
   - **Deploy** = **Vercel** (Preview PR + Production); Middleware/edge for locale redirect `/` (`deployment-infrastructure.md`)
   - **Auth strategy** = **N/A** - aligned with ADR-011 / ADR-015 (`auth-strategy.md`)
   - **Database/ORM** = **N/A** - aligned with ADR-015 (`database-orm.md`)
   - **CI/CD** = option B - GitHub Actions (lint + typecheck; tests if any) + Vercel deploy (`cicd-pipeline.md`)
   - **Env** = Local / Preview / Production; thin catalog; secrets in Vercel; no vault (`environment-management.md`)
   - **DX** = **ESLint + Prettier**; no husky in R1; test runner not yet required (`dx-tooling.md`)
   - **Dependency** = committed `pnpm-lock.yaml`; `^` ranges; **Dependabot** (Renovate alternative); Bun rejected as R1 package manager (`dependency-strategy.md`)
   - **Tokens** = **Tailwind + CSS variables**; light = default; dark/`dark:` foundation ready; toggle UI = Should/Later; visual values may iterate (`design-tokens.md`)
3. No Must changes to Architecture Baseline (ADR-015) or earlier product/UX baselines; engineering respects static-first SSG + content-in-repo.
4. Material changes after this -> **new ADR** + revision to affected documents.

### Reason

- All `06-engineering/` documents have been filled and agreed (T-006.1-T-006.9); Engineering phase exit criteria are met.
- Locking the stack before bootstrap prevents implementation from guessing framework, host, CI, DX, or token system.
- N/A auth/ORM keeps the public portfolio lean and proportional (ADR-008 / ADR-011 pattern).

### Alternatives Considered

- **Monorepo / Turborepo** - rejected for R1; single-app is enough.
- **Biome** instead of ESLint + Prettier - rejected; familiarity + `eslint-config-next` + plugin ecosystem.
- **Bun** as package manager - rejected; keep pnpm for Next/Vercel predictability.
- **Dark mode Must** (toggle + full QA in R1) - rejected; A+ (foundation ready, toggle Later).
- **Vercel-only CI without Actions** - rejected; option B locked in T-006.5.
- Engineering Baseline v1.0 as above - accepted.

### Update - 2026-09-03

Styling/token item 2 (**Tailwind + CSS variables**) has been replaced twice: **ADR-018** (Astryx), then **[ADR-028](ADR-028-shadcn-tailwind-replaces-astryx.md)** (shadcn/ui + Tailwind CSS v4). This ADR remains the historical Engineering Baseline v1.0 trail; active styling contract = ADR-028.
