# Decision ADR-009

### Title

Business Baseline v1.0: lock `01-business/` + dual north star success metrics

### Status

Accepted

### Date

2026-08-07

### Decision

1. **Business Baseline v1.0 is established** for all documents in `product-discovery/01-business/` (including `pricing-strategy.md` as N/A).
2. **Success metrics** use equal **dual north stars**:
   - **NS-1** - brand recall / clarity ("Rezi = product builder (fullstack + AI edge)")
   - **NS-2** - quality inbound (collaboration / opportunity / project) without hard sell
3. Traffic, engagement, and light analytics are **health checks**, not primary KPIs / vanity north stars.
4. Strict numeric targets are **not** locked yet; they are added after the site is live and there is Traction data.
5. Material changes to the business baseline after this -> **new ADR** + revision to affected documents.

The decision package locked with this baseline (previously Accepted): ADR-002, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008 (+ ADR-003 for repo privacy).

### Reason

- All `01-business/` documents have been filled and agreed (T-001.1-T-001.7); Business phase exit criteria are met.
- Dual north stars preserve the brand-first + soft inbound model (ADR-002 / ADR-007) without sacrificing clarity for contact volume, or the reverse.
- Avoiding vanity metrics aligns with the clarity -> presence -> craft competitor lens (ADR-006) and anti-follower-KPI target market stance (ADR-005).

### Alternatives Considered

- Brand clarity only as the north star - rejected; not enough signal that the door is open for soft inbound.
- Quality inbound only as the north star - rejected; risk of chasing contact volume and blurring identity.
- Vanity-heavy scorecard (pageview / award) - rejected; conflicts with the site's value model.
- Dual north star - accepted.
- Delay baseline until hard numbers exist - rejected; speculative numbers are premature; the direction is enough to enter Product phase.
