# Monorepo / Repo Setup

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR.

This document defines the application repo shape for the **rezisaktiva** portfolio website.

---

# Overview

R1 uses a **single app in the same repo** (not a monorepo workspace, not a separate app repo).

* Framework: **Next.js** (App Router), **static-first SSG** — aligned with ADR-015
* Package manager: **pnpm**
* One `package.json` at the repo **root**
* Discovery docs (`product-discovery/`, `project-os/`) stay in the same repo (ADR-003)

There is no Turborepo / pnpm multi-package workspace for R1.

---

# Purpose

* Lock the repo shape before bootstrap
* Keep the proportion right: small site + docs, without excessive monorepo scaffolding
* Clearly separate site content vs discovery docs vs private material

---

# Repo Structure

```text
rezisaktiva/
├── app/                    # Next.js App Router (pages /id|/en, …)
├── content/                # Content SoT: TS copy + JSON facts in `content/data/`
├── public/                 # static assets
├── product-discovery/      # product SoT (docs)
├── project-os/             # ways-of-working SoT (docs)
├── private/                # sensitive (ADR-003); not runtime app
├── package.json            # one Next app
├── pnpm-lock.yaml
├── next.config.ts
├── tsconfig.json
├── AGENTS.md
└── …
```

| Area | Role |
| ---- | ---- |
| `app/` | UI & locale routing |
| `content/` | Content built into pages. Frequently changed facts (projects, services, tools, email, links) in `content/data/*.json`; UI copy remains in `content/*.ts` |
| `product-discovery/` | Product decisions — not runtime |
| `project-os/` | Status/task/ADR — not runtime |
| `private/` | Protected; not bundled into the public site |

Implementation folder names may be adjusted during bootstrap as long as the contract above is respected.

---

# Package / Workspace Config

| Aspect | R1 Decision |
| ------ | ----------- |
| Shape | **Single package** (not monorepo) |
| Manifest location | Root `package.json` |
| Package manager | **pnpm** |
| Workspace packages | No |
| Framework | **Next.js** (App Router) |
| Default render | **SSG** — pages generated at build |
| `output: 'export'` | **Not required** — on Vercel, SSG + edge Middleware for the `/` redirect fits better (see `deployment-infrastructure.md`) |
| Node | LTS supported by Next during bootstrap |

Expected minimal scripts during bootstrap: `dev`, `build`, `start` (or equivalent preview), `lint`.

---

# TypeScript Configuration

* TypeScript is **required** for the Next app
* `strict: true` as the default
* Simple path alias (for example `@/`) for `app/` / local modules — no cross-package paths (there are no internal packages)

`tsconfig` details are locked during bootstrap; this document only locks **TS strict + single project exists**.

---

# Import Rules

| Allowed | Not Allowed |
| ------- | ----------- |
| Imports between app modules (`@/…`) | Runtime imports from `product-discovery/` or `project-os/` |
| Read `content/` at build time (SSG) | Treat discovery docs as runtime CMS |
| Import from `public/` via URL path | Bundle `private/` contents to the client |

Docs and app are **co-located in git**, not co-imported at runtime.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Repo shape | Single app in this repo (option A) |
| Framework | Next.js App Router, static-first |
| Package manager | pnpm |
| Monorepo / multi-package | No for R1 |
| Separate app repo | No |
| Engineering Baseline | ADR-016 |

---

# Success Criteria

1. One person understands: where the app is, where content is, where docs are
2. No Turborepo/workspace assumption without a new ADR
3. Bootstrap does not mix discovery SoT into the site bundle

---

# Related Documents

* `README.md` — this phase documentation
* `deployment-infrastructure.md` — Vercel + build/deploy
* `../05-architecture/application-layer.md` — SSG contract
* `../../project-os/decisions/ADR-003-public-repo-privacy-private-folder.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/decisions/ADR-016-engineering-baseline-v1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
