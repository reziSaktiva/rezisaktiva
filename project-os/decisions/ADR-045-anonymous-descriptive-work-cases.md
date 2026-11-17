# Decision ADR-045

### Title

Public work may use descriptive titles without product/client brand

### Status

Accepted

Note ([ADR-054](ADR-054-s002-surface-decisions.md), 2026-11-17, at cutover): the "tile / sheet / case" wording is stale because the sheet is removed; the descriptive-title rule is unchanged.

### Date

2026-09-15

### Decision

1. **Work index + sheet + case page** may show work with **descriptive name, slug, and copy** (capability), not product or client brand.
2. **Surface behavior same** as named work (**ADR-027** + **ADR-044**): tile → sheet; “read more” → `/[locale]/projects/[slug]`.
3. **Not allowed** on public surface: brand name, live/repo/slug exposing real identity, or gallery with wordmark.
4. **`hiddenIds`** still for work not ready for any public exposure. Leaving `hiddenIds` = may have case route, with descriptive identity if brand withheld.
5. **Copy** locked Boss Rezi (title + feature skeleton). AI does not invent brand, metrics, or stack beyond lock.
6. First example: public title **backend platform sosial**, slug `backend-platform-sosial` (**T-057**). Other work (e.g. next anonymous tile) follows same pattern after copy/assets locked.

This **does not** supersede ADR-044. Only adds catalog identity pattern.

### Reason

- Boss Rezi wants hard work proof (difficult features) visible without stating brand plainly.
- Named catalog remains default; descriptive pattern only when brand withheld.

### Alternatives Considered

- Capability section on About/Workflow, not tile — rejected; Boss Rezi locked two anonymous tiles on Work index.
- Sheet only without `/projects/[slug]` — rejected; behavior must match named work.
- Un-hide branded tile — rejected; conflicts with anonymous goal.

### Impact / Follow-up

- `content/data/projects.json` — public descriptive item; `hiddenIds` only for still-withheld work
- Route/slug tests: withheld brand name must not become public slug
- `tickets/r2.md` **T-057**; `DECISIONS.md` index