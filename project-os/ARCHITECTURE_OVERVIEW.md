# ARCHITECTURE OVERVIEW

> Static Reference — a high-level visual summary for orientation. The architecture Source of Truth remains `../product-discovery/05-architecture/` (Architecture Baseline v1.0, ADR-015).

## Summary

* **Pattern:** Static-first SSG (Next.js App Router) + content stored in the repo (`content/`) — not a dynamic CMS/DB.
* **Single-app:** one `package.json` at the root, not a monorepo workspace (ADR-016).
* **Intentional N/A:** database, background jobs, realtime, and private-area auth are **not needed** at this portfolio's scale (ADR-011, ADR-015) — documented as decisions, not gaps.
* **Styling:** shadcn/ui + Tailwind CSS v4 (ADR-028). ADR-018 (Astryx) superseded.
* Layer details: `../product-discovery/05-architecture/application-layer.md`, `domain-model.md`, `database-strategy.md`, `integration-layer.md`.

## Status

The architecture baseline is locked (ADR-015, ADR-016). Material changes require a new ADR. Active-phase implementation status/progress lives in `PROJECT_STATE.md`, not here.

## Related Documents

* `../product-discovery/05-architecture/README.md`
* `PROJECT_STATE.md`
