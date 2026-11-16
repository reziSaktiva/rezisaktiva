# Decision ADR-039

### Title

About hero: full lead, no availability, viewport artwork + caption

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Availability badge removed** from About hero. Availability signal stays in Contact modal (Contact copy unchanged).
2. **Lead always visible** as one paragraph. Rest/active pattern (carousel expand) **not used** on About hero. Workflow rest/active **removed ADR-042**.
3. **Lead copy locked** (replaces two T-021.3 blocks `lead1`/`lead2`):
   - EN: *Rather than just typing lines of code… every feature I build.*
   - ID: *Fokus saya bukan sekadar menulis baris kode… setiap fitur yang saya bangun.*
4. **Hero image** = local artwork `public/media/about-hero.jpg` (not Unsplash, not Rezi photo). Height follows user viewport; ratio follows asset (currently 634×1024); `object-fit: contain`. Caption below, locale-invariant: **This is not me**, plus arrow to image. `Person.image` JSON-LD **still not filled**.
5. **About title scale** follows Home h1 clamp (ADR-038 / T-049): desktop `clamp(2.75rem, 9.25vw, 6.75rem)`; mobile `clamp(1.85rem, 8.7vw, 2.75rem)`. **Update (ADR-040):** this element = `h2` in Home section (single `h1` remains on hero).

This **overrides** availability badge + rest/active lead on About (ADR-025 / key screens S2) and “only self photo R1” (About IA).

### Reason

- Boss Rezi locked five points in chat (2026-09-07) during **T-042.2** Q&A.
- Caption “This is not me” makes the asset gothic juxtaposition, not a face identity claim.

### Alternatives Considered

- Keep rest/active two T-021.3 paragraphs — rejected; Boss Rezi wanted one full description.
- 4:5 frame + grayscale Unsplash — rejected; new asset + viewport sizing.
- Fill `Person.image` with artwork — rejected; Google: do not markup image that is not the person.

### Impact / Follow-up

- Code: `content/about.ts`, `about-page.tsx`, `app/globals.css`, `public/media/about-hero.jpg`. Task **T-042.2**.
- Docs: IA / key screens / ADR-035 hero block list.