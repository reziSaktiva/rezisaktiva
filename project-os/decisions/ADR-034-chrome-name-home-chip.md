# Decision ADR-034

### Title

Chrome: display name + job title; Home not in chip nav

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Left header identity** shows **name** (`PERSON_CHROME.name` = `REZI SAKTIVA`) with **display font in same family as page titles**, then **job title** (`PERSON_CHROME.jobTitle` = `Web Engineer`) beside it in body font. Not lowercase grotesk `rezisaktiva` wordmark (overrides T-040.1). Not `PERSON.name` / `PERSON.jobTitle` (those are About + Quick Info / JSON-LD).
2. **Only name links** to Home (`/[locale]/`). Job title is not a link and not part of name hit area.
3. **Page chip nav** = About + Workflow + Proyek / Projects. **No Home item** in desktop pill or hamburger. Home destination remains via name (aligned with `navigation-patterns.md` option: Home label may hide when brand = Home). **Update (ADR-035 / ADR-040):** About = Tentang / About (`/{locale}#about`); Workflow = Proses Kerja / How I Work (`/workflow`).
4. Breadcrumb JSON-LD still uses Home label in `NAV_LABELS` (not chip UI).

### Reason

- Boss Rezi (2026-09-07): change name font to match titles; show job title beside; remove Home from chip; Home click only on name.
- Avoids Home duplication (name + chip) after Home became one viewport (ADR-032).

### Alternatives Considered

- Keep `rezisaktiva` wordmark + Home chip — rejected.
- Whole name+job row as one link — rejected; job title must not be clickable.

### Impact / Follow-up

- Code: `site-header.tsx`, `lib/nav.ts` (`NAV_ITEMS` without home), `.site-brand*` in `globals.css`.
- Docs: `04-ux/` nav + IA + key screens; ADR-020 note. Task **T-040.7**.