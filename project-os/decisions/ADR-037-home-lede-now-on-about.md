# Decision ADR-037

### Title

Now moves to About; Home = lede above h1, cluster does not cover wallpaper

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Employment status (Now)** no longer on Home. Workplace stays on **About** (kicker + link line, `#now`) and Quick Info. Home does not duplicate Now block.
2. **Home hero** = description (lede) **above** `h1`, then wrapping claim (ADR-036). Lede = Boss Rezi–locked copy (adaptability / AI agents). `h1` larger than lede.
3. **Layout:** one bottom-left cluster, limited width, `justify-end`. Stronger veil in text zone; top/right wallpaper more open.

This **overrides** ADR-032 point Home = claim + Now. **Update (ADR-038):** lede shape moves to **bottom floor** of first viewport; two-line display h1. Point 1 (Now on About) stands.

### Reason

- Boss Rezi (2026-09-07): move currently work to About; add description above h1; h1 larger; text readable without blocking wallpaper.

### Alternatives Considered

- Now stays on Home below claim — rejected.
- Lede below h1 — rejected; Boss Rezi wanted above.
- Full-width text + even veil — rejected; covers wallpaper.

### Impact / Follow-up

- Code: `home-page.tsx`, `content/home.ts`, `about-page.tsx`, hero veil/CSS. Task **T-047**.
- Docs: IA, M1/M2, key screens, flows, ADR-032 note.