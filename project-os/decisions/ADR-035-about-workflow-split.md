# Decision ADR-035

### Title

Split personal About and Workflow; route `/workflow`

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Personal About (M2) is section `#about` on Home** (ADR-040). Content: Now, greeting, lead, artwork + caption (ADR-039). **Not** a route. Chrome chip: **Tentang** (`id`) / **About** (`en`) → `/{locale}#about`. `/[locale]/about` redirects to that hash. **No** `#proof`.
2. **Working-style content moves to new route `/[locale]/workflow` (M14, Must R1).** Page content: **ADR-042** (hero + comparison tab, five principles, Human vs AI pipeline, ADR Vault). Chrome label: **Proses Kerja** (`id`) / **How I Work** (`en`) — label previously on `/about`.
3. **Chip nav** = Tentang / About · Proses Kerja / How I Work · Proyek / Projects. Still no Home chip (ADR-034). Contact remains modal button.
4. **T-021 copy not rewritten** for About vs Workflow split (2026-09-07). **`/workflow` content later superseded ADR-042** (2026-09-08). R1 content pages: Home (including `#about`), Workflow, Work index. Overlays unchanged.

This **overrides** Hybrid lean “three content pages” (ADR-010 / IA) and chrome label About = How I Work (ADR-020 point 3) for route `/about`.

### Reason

- Boss Rezi (2026-09-07): existing About page becomes Workflow; new About for personal self; working-style section must not mix with personal narrative.
- Single `/about` URL no longer forces visitors through Discover→Ship pipeline to know Rezi.

### Alternatives Considered

- Keep one `/about` page with two headings — rejected; Boss Rezi wanted separate routes.
- Redirect `/about` → `/workflow` then About elsewhere — rejected then. **Later ADR-040:** `/about` redirects to `#about` on Home (not profile page destination).

### Impact / Follow-up

- Code: `app/[locale]/workflow/`, `content/workflow.ts`, `lib/nav.ts`, meta/JSON-LD/sitemap.
- Task **T-045**. **T-042.2** About = Home section (ADR-040); skin/lead copy ADR-039. **T-042.4** Workflow (ADR-042).