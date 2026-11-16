# Decision ADR-002

### Title

Portfolio vision: brand first, product builder positioning, founder/PO audience, geo-aware bilingual experience

### Status

Accepted

### Date

2026-08-06

### Decision

1. **Site value model:** Brand first; job opportunity and client/project opportunity are secondary with a soft CTA (hybrid Model A).
2. **Layered positioning:**
   - Brand story: **product builder**
   - Proof: **fullstack** (~6 years)
   - Edge: **AI** (not a pure AI specialist; design is not the main identity)
3. **Primary audience:** Founder / product owner. Secondary: hiring manager/tech lead, prospective project client, peer/community.
4. **Language:** Geo-aware bilingual experience - default ID in Indonesia, default EN outside Indonesia; language switcher always available. Detection/URL implementation is deferred to UX/Engineering.

### Reason

- An equal hybrid (brand = job = client) makes the message blurry; a brand-first hierarchy keeps clarity.
- Product builder reflects the aspiration and outcome; fullstack + AI keeps credibility honest.
- Founder/PO is the audience best suited to evaluate "can take an idea live".
- Geo-aware bilingual support adapts to the regional context without locking the site into one language.

### Alternatives Considered

- Job magnet or client acquisition as primary - rejected; Boss Rezi chose brand as the core.
- AI-forward or fullstack-only as the main story - combined instead: product builder on the surface, fullstack+AI as proof/edge.
- Single language (EN only or ID only) - rejected for regional + global reach.
- Browser-language-only detection - deferred; the current product decision is geo-aware + switcher.
