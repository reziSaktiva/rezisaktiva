# Decision ADR-017

### Title

Motion as part of the R1 visual identity (not merely minimal Could)

### Status

Accepted

### Date

2026-08-12

### Decision

Motion in R1 **increases its role** from "Could, minimal, 2-3 intentional movements" (initial `design-tokens.md` position) to **part of the site's visual identity** - with clarity still the highest priority and without changing the reference learning order **clarity -> presence -> craft** (ADR-006).

Visual references are sharpened:

* **bepatrickdavid.com** - presence & how to communicate identity/highlight as "one brand home" *(updated 2026-08-12, previously cristianoronaldo.com - see Update below)*
* **p5aholic.me** - **only** interaction & motion techniques (scroll-triggered motion, cursor-aware micro-interaction, smooth easing/timing) - **not** its playground/generative-art structure

Boundaries that still apply (unchanged from `design-tokens.md` / `ux-principles.md`):

* The first viewport remains one composition that wins in <=5 seconds (UX1)
* No heavy parallax, loop noise, or motion that sacrifices clarity
* `prefers-reduced-motion` remains respected
* Motion strengthens the message hierarchy ("product builder"), it does not replace it

### Reason

* Boss Rezi wants R1 visuals to feel "alive" (close to the bepatrickdavid reference experience -> shifted toward p5aholic for motion aspects) before entering the Home mockup phase
* p5aholic is explicitly in the **craft** tier (`competitor-analysis.md` #4) - borrowing must be selective (motion technique only) so differentiation does not shift toward "pure creative-dev" (a risk already mapped in Competitive Risks)
* This decision needs a formal trail because it changes a value already locked in the Engineering baseline (ADR-016 -> `design-tokens.md` §Motion)

### Alternatives Considered

* **Keep motion minimal (Option A)** - safest and aligned with the old baseline, but does not answer Boss Rezi's desire for a more alive visual experience
* **Full craft/motion spectacle like p5aholic & dunks1980 (Option C)** - rejected; directly conflicts with order D (clarity -> presence -> craft) and the risk of being misread as creative-dev (`competitor-analysis.md` line 95)
* **Motion as identity with clarity-first boundaries (Option B - chosen)** - balances the desire for living visuals with UX baseline discipline

### Impact

* `product-discovery/06-engineering/design-tokens.md` - §Motion updated from "Could minimal" to "part of the visual identity, with clarity-first boundaries"
* Home mockup (next step) uses this motion direction as a reference
* Does not change `ux-principles.md` Core Principles (UX1-UX7) - motion still obeys them; only its degree increases

### Update - 2026-08-12

Presence reference corrected from **cristianoronaldo.com** to **bepatrickdavid.com** at Boss Rezi's request during the mockup session. This also realigns references with the original pair in `competitor-analysis.md` (bepatrickdavid = presence tier, p5aholic = craft/motion tier), without changing this ADR's core decision (motion still increases as identity, clarity-first boundaries still apply).

### Update - 2026-08-24

**ADR-025** expands the degree of craft and allows two techniques not mentioned here: smooth-scroll inertia (Lenis) and page transition overlay. Clarity-first boundaries, no heavy parallax, and `prefers-reduced-motion` **still apply**. Additional motion references: Hess/Mazur rhythm (not palette). Decision details: `ADR-025-craft-motion-hess-mazur.md`.
