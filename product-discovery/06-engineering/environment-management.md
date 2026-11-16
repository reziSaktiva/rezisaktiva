# Environment Management

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR.

This document defines environment & secret management for the **rezisaktiva** portfolio website.

---

# Overview

R1 is a **public static-first** site without product DB/auth. Environment is intentionally **thin**:

* Tiers: Local / Preview / Production (aligned with Vercel)
* Product secrets: **minimal** — plus `RESEND_*` for the Contact form (**ADR-047**)
* Public config (site URL, optional analytics flag) may use `NEXT_PUBLIC_*` when needed

---

# Purpose

* Prevent unnecessary `.env` and secret sprawl
* Align where values are stored: local vs Vercel vs GitHub Actions
* Protect the public repo (ADR-003)

---

# Environment Tiers

| Tier | Where values are set | Role |
| ---- | -------------------- | ---- |
| **Local** | `.env.local` (gitignored) | `pnpm dev` |
| **Preview** | Vercel project → Preview | PR deployments |
| **Production** | Vercel project → Production | Public site |

There is no required separate staging environment (see `deployment-infrastructure.md`).

R1 GitHub Actions for lint/typecheck **do not need** product secrets; checkout + install are enough.

---

# Secret Management

| Type | R1 Rule |
| ---- | ------- |
| Secrets in git | **Forbidden** (including in `private/` if accidentally intended for runtime — runtime does not read `private/`) |
| Deploy secrets | Only in **Vercel** (if any) |
| CI secrets | Not required for pipeline B |
| Rotation | If an analytics/API key exists later, rotate in the vendor dashboard + Vercel |

There is no external vault (Doppler, AWS SM) for R1.

---

# File Strategy

| File | In repo? | Contents |
| ---- | -------- | -------- |
| `.env.local` | No (gitignore) | Local developer values |
| `.env.example` | Yes | Variable names + comments; **no** secret values |
| `.env` / committed `.env.production` | No | Avoid committing env files with real values |
| Vercel dashboard | N/A | Source of Truth for Preview/Production |

Document variables in `.env.example` so bootstrap is clear without leaking secrets.

---

# Environment Variables Catalog

R1 is expected to be **very short**. Reasonable examples (specific names locked during bootstrap):

| Variable | R1 Required | Tier | Notes |
| -------- | ----------- | ---- | ----- |
| `NEXT_PUBLIC_SITE_URL` | Should | Local | Canonical URL for meta/OG/sitemap on local machines. Vercel build locks `https://www.rezisaktiva.space` (ADR-048) |
| `RESEND_API_KEY` | Must (after ADR-047) | Local / Preview / Prod | Server-only. Do not use `NEXT_PUBLIC_`. |
| `RESEND_FROM` | Must (after ADR-047) | Local / Preview / Prod | Verified mailbox on `rezisaktiva.space` |
| Analytics key (`NEXT_PUBLIC_*` or server) | Could | Preview/Prod | Only if analytics is enabled; privacy-aware |
| `DATABASE_URL` | No | — | N/A |
| Auth secrets (`AUTH_*`, `NEXTAUTH_*`) | No | — | N/A |
| `VERCEL_*` | Automatic | Vercel | Provided by platform; do not duplicate in git |

Add a new variable only if a feature needs it; update `.env.example` + this document (or ADR if material).

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Tiers | Local / Preview / Production |
| R1 secret store | Vercel (+ local `.env.local`) |
| External vault | No |
| Env for DB/auth | None |
| Contact email | Resend `RESEND_API_KEY` + `RESEND_FROM` (ADR-047) |
| CI secrets | Not required (pipeline B) |
| Engineering Baseline | ADR-016 |

---

# Success Criteria

1. Public repo contains no secrets
2. A new person can run locally from `.env.example` + docs
3. There is no `DATABASE_URL` / auth secret assumption in R1

---

# Related Documents

* `README.md` — this phase documentation
* `deployment-infrastructure.md` — Vercel tiers
* `cicd-pipeline.md` — CI without product secrets
* `database-orm.md` — N/A
* `auth-strategy.md` — N/A
* `../../project-os/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
