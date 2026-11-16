# Decision ADR-006

### Title

Competitor / reference lens: clarity -> presence -> craft (named references + category competitors hybrid)

### Status

Accepted

### Date

2026-08-07

### Decision

1. Portfolio competitive analysis uses a **hybrid**:
   - **Named references** as inspiration (not rivals): bepatrickdavid.com, dunks1980.com, lauren-waller.com, p5aholic.me, cristianoronaldo.com
   - **Category-level competitors** (not yet named): LinkedIn/CV, GitHub profile, developer-stack portfolio, designer/agency, productized freelance landing page
2. **Locked learning priority from references (option D):**
   1. Clarity (Lauren-waller pattern)
   2. Presence (Patrick + Ronaldo-lite: brand home)
   3. Craft (Dunks + p5aholic as edge, not the main identity)
3. The MVP prioritizes clarity + soft presence; craft increases gradually.

### Reason

- Aligned with ADR-002 (brand first + founder/PO evaluation) and ADR-004 (visibility -> narrative -> evaluation): the site needs both clarity and a brand home, not only one of them.
- Experimental craft is relevant as a technical/AI edge differentiator, but risks misframing the site as creative-dev if it becomes the first priority.
- Named rivals have not been decided by Boss Rezi; categories are enough for v0.1 positioning.

### Alternatives Considered

- A Clarity first only - rejected; risk that the brand is not memorable.
- B Presence first only - rejected; risk of spectacle without evaluation fit.
- C Craft edge first - rejected; risk of moving away from product builder / founder-PO ICP.
- Hybrid with priority D - accepted.

### Update - 2026-08-15

**karolinahess.com** (craft tier - typography & interaction: Quick info tab/drawer pattern, About copy rhythm) and **mazurbartek.com** (presence tier - large typography + whitespace: About greeting+photo layout, calm Home composition) were added to the named reference set in `competitor-analysis.md`, after being used repeatedly as art-direction references during the 2026-08-14/15 mockup session (Home, About, Quick info drawer).

This uses the path already allowed inside that document (Competitive Risks: "Named competitor appears later -> Draft may add named set without changing framework D"; Success Criteria #5) - not a framework change. The priority order **clarity -> presence -> craft** does not change; the two new references fill existing presence/craft slots rather than adding a new layer.

### Update - 2026-08-24

R1 craft implementation (ADR-025) uses Hess/Mazur as references for **rhythm, oversized type, inertia scroll, and the "let's connect" ribbon** - not palette, not Framer spectacle. Rest/active accordion interaction is **not** a Workflow/About surface anymore (ADR-042 / ADR-039). Work index proof remains the differentiator vs Mazur. Framework D does not change.
