# Deployment & Infrastructure

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR.

This document defines the deploy platform and infrastructure topology for the **rezisaktiva** portfolio website.

---

# Overview

R1 is deployed to **Vercel**, connected to the same public repo (Git-based deploy).

* Site = **Next.js SSG** output (static-first, ADR-015)
* Locale redirect for `/` = **Edge Middleware** / Vercel hosting rules (ADR-014)
* No business application server, managed DB, or queue for the R1 product

---

# Purpose

* Lock the hosting vendor before bootstrap & CI
* Provide the geo/locale redirect foundation without a custom backend
* Keep ops lightweight for a single owner

---

# Platform Overview

| Aspect | R1 Decision |
| ------ | ----------- |
| Platform | **Vercel** |
| Deploy source | Git push / PR to this repo |
| Product runtime | Static pages (SSG) + edge for the `/` redirect |
| CDN | Included in the Vercel platform |
| Product-owned server/DB/queue | No |

**Why Vercel (for R1):** native Next.js, preview per PR, simple domain/TLS, Middleware fits locale rules at `/`. A documentation-only change skips that build (**ADR-051**).

Alternatives considered and **not chosen** for R1: Cloudflare Pages, Netlify, GitHub Pages.

---

# Environment Topology

| Environment | Role |
| ----------- | ---- |
| **Production** | Public site (main domain) |
| **Preview** | Deployment per PR / branch when the site or deploy config changed. Documentation-only changes are skipped (**ADR-051**) |
| **Local** | `pnpm dev` on the developer machine |

There is no required separate staging for R1; Vercel Preview is enough as the quality gate.

**Redesign branch (S-002, ADR-053):** the Monolith redesign lives on the integration branch `redesign/monolith`. Vercel Preview of that branch is the staging; no new environment or Vercel project is created. Production stays on `main` until cutover (T-086). PRs go into `redesign/monolith`. Preview must be `noindex` and must not send real contact mail.

R1 product secrets are expected to be **minimal** — public site without auth/DB. **Validation exception:** `RESEND_API_KEY` + `RESEND_FROM` (**ADR-047**).

---

# Build & Deploy

Conceptual flow:

```text
[Push / PR] → [Documentation-only diff: cancel the build (ADR-051)]
           → [Otherwise Vercel build: pnpm install + next build]
                    → [SSG pages + assets]
                    → [CDN / Production or Preview URL]
```

| Aspect | Notes |
| ------ | ----- |
| Install | pnpm (aligned with `monorepo-setup.md`) |
| Build | `next build` — generate pages `/id`, `/en`, … |
| Redirect `/` | Middleware (geo → `Accept-Language` → preference → fallback `en`) per ADR-014 |
| Contact | `mailto:` fallback; form → Resend Route Handler (**ADR-047**) |
| Analytics | Optional; not a deploy blocker |

Additional CI pipeline details (lint/typecheck in GitHub Actions vs Vercel-only) → `cicd-pipeline.md` (T-006.5).

---

# Domain & TLS

| Aspect | R1 Decision |
| ------ | ----------- |
| TLS | Provided by Vercel (HTTPS) |
| Custom domain | Yes — pointed to the Vercel project |
| Canonical | `https://www.rezisaktiva.space` (ADR-048; replacing the apex lock on 2026-08-26) |
| Apex + `www` | Apex points to `www`. `rezisaktiva.vercel.app` permanently redirects to `www` |

Production domain name: **`https://www.rezisaktiva.space`**. Hosting remains Vercel + TLS.

---

# Rollback Strategy

| Situation | Action |
| --------- | ------ |
| Bad production deploy | Roll back to the previous deployment in the Vercel dashboard |
| Regression in PR | Do not merge; fix in Preview |
| Wrong content | Revert commit / fix file in `content/` + redeploy |

There is no custom blue-green or active-active multi-region setup for R1.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Hosting | Vercel |
| Preview | Vercel Preview (PR) |
| Pure static export required | No — SSG on Vercel + Middleware |
| Cloudflare / Netlify / GitHub Pages | No for R1 |
| Engineering Baseline | ADR-016 |

---

# Success Criteria

1. One mental command: push → Vercel build → live/preview
2. `/` redirect can be implemented without a custom server
3. Rollback is understood without a long runbook

---

# Related Documents

* `README.md` — this phase documentation
* `monorepo-setup.md` — single-app Next + pnpm
* `cicd-pipeline.md` — CI (to follow)
* `environment-management.md` — env/secrets (to follow)
* `../05-architecture/application-layer.md`
* `../05-architecture/integration-layer.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
