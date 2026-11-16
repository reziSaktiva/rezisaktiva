# Competitor Analysis

> Status: **Baseline v1.0** — established with Boss Rezi (2026-08-07). Material changes after this require a new ADR.

This document maps **references** (named inspirations) and **category competitors** (attention alternatives) for the personal portfolio website **rezisaktiva** — not a list of classic business rivals.

---

# Overview

Personal portfolios rarely have named “direct competitors.” What competes is the **attention of founders / product owners** when they evaluate whether Rezi fits as a product builder.

Analysis framework:

* **References** — seven named reference sites: 5 early craft & positioning references + 2 design references (karolinahess.com, mazurbartek.com — art direction then **R1 craft implementation**, ADR-025)
* **Competitors** — alternative categories (LinkedIn/GitHub, developer portfolios, designer/agency, productized freelance) — not yet named
* **Lesson priority (locked):** clarity → presence → craft (option D / ADR-006)

Goal: strengthen the differentiation of **product builder + fullstack + AI edge** (ADR-002) for SEA ICP (ADR-005), without chasing award-site or creative-dev spectacle as the main identity.

---

# Primary Competitors / References

## A. Named references (inspiration)

| # | Reference | Role for rezisaktiva | Take | Do not copy raw |
| - | --------- | -------------------- | ---- | --------------- |
| 1 | [bepatrickdavid.com](https://bepatrickdavid.com/) | Persona + case + memorable “available” | Brand presence; curated case; soft availability | Designer/agency framing; award-chase as goal |
| 2 | [dunks1980.com](https://dunks1980.com/) | Web as experience / strong first impression | Craft edge; “this site is different” feeling | Portfolio becomes WebGL demo without product story |
| 3 | [lauren-waller.com](https://lauren-waller.com/) | Clean IA + one credible claim + proof | Clarity: Work / About / Contact; concrete proof on the surface | Product designer / Framer shop identity as the core |
| 4 | [p5aholic.me](https://p5aholic.me/) | Web experiments as signature | Work curation; playground as satellite (not main stage) | Pure creative-dev without outcome for founder/PO |
| 5 | [cristianoronaldo.com](https://www.cristianoronaldo.com/) | One official URL = identity “world” | Career/highlight as narrative; single brand home | Product-line monetization; celebrity scale |
| 6 | [karolinahess.com](https://karolinahess.com/) | Typography craft + interaction (info tab/drawer, oversized type, numbered cards) | Quick Info pattern; display type rhythm; page overlay transitions. Offers “yang bisa saya bantu” + rest/active accordion **are not** the current About/Workflow surface (ADR-040 / ADR-042) | Cream/terracotta palette; excessive decorative density; pure playground without outcome |
| 7 | [mazurbartek.com](https://mazurbartek.com/) | Calm presence through large typography + whitespace + inertial scroll | Oversized type + whitespace; numbered services; inertial scroll; “let’s connect” ribbon integrated with footer | Too little proof/work as the only impression; too personal-blog; native `scroll-behavior: smooth` as substitute for inertia |

**Lesson priority order (D):**

1. **Clarity** (Lauren) — founder/PO understands within minutes
2. **Presence** (Patrick + Ronaldo-lite + Bartek) — feels like a brand home, not scattered CV
3. **Craft** (Dunks + p5aholic + Karolina) — edge that strengthens, not replaces, the story

In MVP: clarity + soft presence first; craft rises gradually. Karolina & Bartek were added on 2026-08-14/15 as art-direction references, then **implemented as a craft pass** (ADR-025, 2026-08-24): rhythm, type, interaction, Lenis, page overlay, Contact ribbon — **not** palette. Work proof on Home/Work remains the differentiation vs Mazur. The D order does not change (see Update in ADR-006).

## B. Category competitors (attention alternatives)

There is no named rival yet. What competes for the evaluation slot:

| Category | What it usually offers | Gap vs rezisaktiva |
| -------- | ---------------------- | ------------------ |
| **LinkedIn / CV** | Work history, headline, recommendations | Default job-seeker framing; rarely a curated product builder story + shipped proof |
| **GitHub profile** | Repos, commits, languages | Strong developer signal; weak narrative & outcome for founder/PO |
| **Developer-stack portfolio** | Tech list, technical projects | Feels like engineering CV; lacks product thinking |
| **Designer / agency portfolio** | Visual craft, design case | Strong aesthetics; often lacks fullstack foundation + end-to-end builder proof |
| **Productized freelance landing page** | Service packages, pricing, hard CTA | Clear “hire me”; weak as long-term brand asset |

---

# Market Observations

1. **The default home is still LinkedIn + GitHub** — many builders do not have their own site; those who do often imitate the “project list + stack” pattern.
2. **Award / experimental sites** stand out among creative peers, but founders/POs evaluate fit more than spectacle.
3. **Clarity and craft are rarely balanced** — clean sites often feel bland; wow sites often have unclear positioning.
4. **One-URL personal brand** is rarely taken seriously in the SEA product builder space; this is an opportunity for a coherent identity home (aligned with the ADR-004 chain).
5. **AI** is often claimed on the surface; few position it as an edge on top of an honest product + engineering foundation.

---

# Market Opportunity

* Become **one public source of truth** for Rezi: identity, proof, ways of thinking, contact — beating fragments from LinkedIn/GitHub/CV.
* Fill the gap between **developer portfolio** and **designer portfolio**: product builder with fullstack proof + AI edge.
* Relevant for **SEA founders/POs** (bilingual geo-aware) without feeling “global generic” or “agency shop.”
* Primary brand with soft opportunity/project path — not an aggressive service-sales funnel.

---

# Product Differentiation

| Dimension | rezisaktiva | Typical category |
| --------- | ----------- | ---------------- |
| **Story** | Product builder — idea → live product | Developer stack / designer craft / job CV |
| **Proof** | Fullstack ~6 years as foundation | Repo only, or visual only |
| **Edge** | AI as a way of working & new capability | AI claim without foundation, or no AI |
| **UX priority** | Clarity → presence → craft | Often craft-first or CV-first |
| **Value model** | Primary brand; job/client soft | Hard-sell freelance or passive CV |
| **Geo/language** | SEA-aware, bilingual | English-only global or narrowly local |

**Differentiation not pursued:** Awwwards as core KPI; designer/agency identity; pure creative-dev; productized pricing on the site surface.

---

# Competitive Risks

| Risk | Impact | Mitigation |
| ---- | ------ | ---------- |
| Chasing craft too much (Dunks/p5aholic/Karolina) | Misread as pure creative-dev/designer | Lock D order; craft as third layer; copy stays product builder |
| Too “Lauren-clean” without presence | Brand is not memorable; visibility remains weak | Case + persona + career/product highlights |
| Too “Patrick/agency” | Hire-designer framing, not product builder | Surface message stays ADR-002 |
| Relying only on GitHub | Developer narrative wins | Site = main stage; GitHub satellite |
| MVP scope expands (3 layers at once) | Slow ship | MVP: clarity + soft presence; craft gradually |
| Named competitor appears later | Analysis needs updating | Draft may add named set without changing the D framework |

---

# Success Criteria

Competitive/reference analysis is moving in the right direction if:

1. Every UX/content decision can be traced to the **clarity → presence → craft** order
2. References are used as **lessons**, not visual templates to copy
3. Differentiation remains readable: product builder + fullstack + AI — not designer, not stack-CV, not pure AI specialist
4. Founders/POs (both SEA archetypes) can assess fit faster than through LinkedIn/GitHub alone
5. Named rivals can be added later without breaking the category framework + D priority

Quantitative metric details → `success-metrics.md`.

---

# Related Documents

* `README.md` — documentation for this phase
* `product-vision.md` — vision and positioning
* `problem-statement.md` — visibility → narrative → evaluation chain
* `target-market.md` — SEA founder/PO ICP
* `../../project-os/decisions/ADR-006-competitor-reference-lens-clarity-presence-craft.md` — material decision
* `../../project-os/decisions/ADR-025-craft-motion-hess-mazur.md` — Hess/Mazur craft implementation
* `../../project-os/decisions/ADR-002-portfolio-vision-positioning-audience-language.md` — positioning baseline
* `../../project-os/decisions/ADR-005-target-market-icp-sea-tech.md` — ICP
* `../../project-os/PROJECT_STATE.md` — project status
* `../../project-os/DECISIONS.md` — ADR index
