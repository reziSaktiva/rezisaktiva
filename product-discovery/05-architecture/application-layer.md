# Application Layer

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-11). Material changes after this require a new ADR. The runtime note for theme `cookies()` (ADR-021) was added on 2026-08-28 (T-027) — it is not a change to the SSG shape.

This document defines the conceptual application layer for the **rezisaktiva** portfolio website (static-first).

---

# Overview

R1 uses **Static-first (SSG)**: pages are generated at build time from repo content and served as static assets (CDN/hosting). There is no business application server, no domain API, and no transactional service layer.

The concrete framework (Astro / Next / etc.) is locked in **06-engineering** — this document only defines the behavioral contract.

> **Update (2026-08-15/16, ADR-019/ADR-020; 2026-09-07, ADR-035; 2026-09-08, ADR-040; 2026-09-14, ADR-044):** Page routes = Home (including `#about`), Workflow (`/workflow`), Work index (`/projects`), **Work case (`/projects/[slug]`, R2)**. `/about` redirects to `#about`. Contact is **not** a route. M10 Sheet remains an overlay.

---

# Purpose

* Lock how visitor requests are fulfilled
* Align i18n paths & geo redirect with ADR-014
* Keep the “application layer” from expanding into an app backend

---

# Architecture Shape

```text
[Repo content] → [Build / SSG] → [Static assets + meta]
                      ↑
              [i18n routes /id|/en]
                      
[Visitor] → [CDN / hosting]
               ├── locale-prefixed path → static page
               └── `/` (without locale) → UX-rule redirect
```

---

# Entry Points

| Entry | Behavior |
| ----- | -------- |
| `/[id\|en]/`, `/[id\|en]/workflow`, `/[id\|en]/projects`, `/[id\|en]/projects/[slug]` | Serve the page built for that locale |
| `/[id\|en]/about` | Redirect to `/[id\|en]#about` (ADR-040) — not a content page |
| `/` or URL without locale | Redirect to the default locale (geo → browser → preference after switcher) per ADR-014 |
| Contact modal (chrome button) | Client-side overlay; not a new route/page (ADR-019) |
| Quick Info drawer (right-edge tab) | Client-side overlay; not a new route/page (ADR-022) |
| Project sheet (Work index tile) | Bottom overlay; not a route (ADR-027); link to `/projects/[slug]` inside the sheet (ADR-044) |
| Switcher | Navigate to the sibling locale path; set preference only for the next `/` visit |
| Satellite links | Leave the site (GitHub/LinkedIn) |
| `mailto:` / modal form | `mailto:` fallback; form POST to Resend (ADR-047) — not a product domain API |

---

# Service Boundaries

There is **no** in-process domain service required for R1.

| Conceptual “service” | Where |
| -------------------- | ----- |
| Page render | Build time (SSG) |
| Locale routing | Framework + hosting rules |
| Meta/OG | Generated at build per Page×Locale |
| Contact | Client-side modal (ADR-019); send via Route Handler + Resend (ADR-047) |

An **edge/redirect helper** on hosting is allowed for geo-default — that is infrastructure, not a domain API.

---

# Data Access Pattern

* Read content from the **filesystem/repo at build time** (`content/*.ts` for UI copy; `content/data/*.json` for frequently changed facts)
* No runtime query to DB
* No application state cache that must be synchronized across users

---

# Runtime Concerns (not mandatory SSR)

| Concern | R1 Approach |
| ------- | ----------- |
| Performance | Static + CDN; `generateStaticParams` per locale |
| i18n | Path prefix at build; `/` redirect at edge/host |
| Language preference | Cookie `NEXT_LOCALE` + `proxy.ts` (read cookie/header) **only** for the `/` redirect — locale-prefixed paths are not rewritten (ADR-014) |
| Theme preference | Cookie `rz-theme` is read in the root layout (Next `cookies()`, ADR-021) to prevent flash. Next renders the layout per request — **not** permission for SSR-as-product, ISR, or API. Do not add Next `cookies()`/`headers()` to locale page routes. Do not treat `proxy.ts` as a theme playbook violation. Playbook: `../06-engineering/code-discipline.md` |
| Form/API | Only `POST` Contact → Resend (ADR-047). Not a business API. Pages remain SSG |
| Draft preview | Optional later (not Must); if it exists, still outside product auth unless a new ADR changes it |

**Full SSR/hybrid** was rejected for R1 (option B) — complexity without a new product Must. Engineering may use a framework that is *capable* of SSR, as long as **R1 default delivery = SSG/static** (repo content, not CMS/API). ISR and streaming are **not** the default — see `code-discipline.md`.

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Application shape | Static-first SSG + repo content |
| SSR as R1 default | No |
| Business API | No (Contact Resend = exception, ADR-047) |

---

# Success Criteria

1. Entry/redirect contract aligns with ADR-014
2. Does not require DB/auth/jobs
3. Enough for Engineering to choose the framework without changing shape A

---

# Related Documents

* `README.md`
* `domain-model.md`
* `integration-layer.md`
* `../06-engineering/code-discipline.md` — when to use SSG / `cookies()` / client
* `../04-ux/information-architecture.md`
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
