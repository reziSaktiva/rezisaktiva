# Decision ADR-015

### Title

Architecture Baseline v1.0: static-first SSG + content in repo; lock `05-architecture/`

### Status

Accepted

### Date

2026-08-11

### Decision

1. **Architecture Baseline v1.0 is established** for all documents in `product-discovery/05-architecture/`.
2. **R1 system shape** = **Option A - Static-first (SSG) + content in repository** (not SSR by default, not a headless CMS).
3. Document package:
   - `domain-model.md` - lean content/surface model; **DDD bounded context = N/A**
   - `database-strategy.md` - **N/A** (content SoT = files in repo)
   - `application-layer.md` - SSG + locale entry/redirect aligned with ADR-014
   - `integration-layer.md` - mailto + LinkedIn/GitHub satellites + geo/locale redirect; optional analytics
   - `background-jobs.md` - **N/A**
   - `realtime-strategy.md` - **N/A**
   - `auth-architecture.md` - **N/A** (aligned with ADR-011); locale preference != auth
4. No Must changes to Product/User/UX Baseline (ADR-010-014).
5. Framework, hosting, CI, tokens -> **06-engineering** (T-006); must respect shape A.
6. Material changes after this -> **new ADR** + revision to affected documents.

### Update - 2026-09-15 (ADR-047)

Pages remain SSG. **Exception:** `POST` Contact -> Resend. Not CMS, not SSR by default, not a business API.

### Reason

- The public Hybrid lean portfolio does not need DB, auth, jobs, or realtime to satisfy the dual north star.
- SSG + content in repo keeps the site proportional, fast/shareable as a destination, and authorable via git/deploy.
- N/A files remain as decision trails (ADR-008 / ADR-011 pattern).

### Alternatives Considered

- **B - Lightweight SSR/hybrid as default R1** - rejected; runtime complexity without a new product Must; geo/i18n can be handled with edge redirect + SSG.
- **C - Frontend + headless CMS** - rejected for R1; overkill for a single owner curating via repo.
- Architecture Baseline v1.0 as above (A) - accepted.
