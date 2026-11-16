# Decision ADR-046

### Title

Case page `/projects/[slug]` deeper than sheet; facts from CV + locked copy

### Status

Accepted

### Date

2026-09-15

### Decision

1. **M10 sheet stays skim** (services, location, year, short description, media, live/repo secondary) — **ADR-027**.
2. **Case page** reuses sheet meta **plus** depth that does not fit overlay: period, stack, and structured work bullets.
3. **Case fact source** = `private/Resume_rezi_updated_agustus_2026.md` and Boss Rezi–locked copy in chat. **AI does not invent** metrics, brands, or stack beyond that.
4. Descriptive work without brand (**ADR-045**) still has no live/repo/brand slug on case, even if CV has original URL.
5. T-056.2 lock “case content = sheet slots only” **replaced** by this decision. ADR-044 point 7 (narrative if copy locked) stands; depth copy now locked via CV + chat.
6. Implementation = **T-058**.

This **does not** supersede ADR-044 for route/hybrid. Overlay not removed.

### Reason

- Boss Rezi: slug page must give more information than sheet, for all work.
- Sheet is overlay; URL magnet deserves stack and bullets from CV.

### Alternatives Considered

- Lengthen sheet description to CV parity — rejected; overlay is not full case home.
- Free narrative on case without CV — rejected; AI does not invent (ADR-044).

### Impact / Follow-up

- `content/data/projects.json` — `case` field (period, stack, sections)
- `app/[locale]/_components/work-case-page.tsx`
- `product-discovery/04-ux/key-screen-patterns.md` S5
- `tickets/r2.md` **T-058**; `DECISIONS.md` index