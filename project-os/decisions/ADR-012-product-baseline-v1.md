# Decision ADR-012

### Title

Product Baseline v1.0: lock `02-product/` (Hybrid lean + MoSCoW + R1-R3)

### Status

Accepted

### Date

2026-08-07

### Decision

1. **Product Baseline v1.0 is established** for all documents in `product-discovery/02-product/` (including `roles-permissions.md` as N/A).
2. Product package locked with this baseline:
   - **MVP surface** = Hybrid lean - Home + About + Contact; Work teaser on Home (ADR-010)
   - **Modules** = M1-M12 in `feature-modules.md`; Must R1 = M1-M7
   - **Priority** = MoSCoW for the MVP clarity release (`feature-priority.md`)
   - **Releases** = R1 Clarity -> R2 Light magnet (M9/M10) -> R3 Presence/craft (`release-roadmap.md`); no speculative dates
   - **Future** = M11/M12 & distribution opportunities in `future-roadmap.md`, not near-term Must
   - **Roles & permissions** = N/A for the public site (ADR-011)
3. Material changes to the product baseline after this -> **new ADR** + revision to affected documents.

Accepted decision package tied here: ADR-010, ADR-011 (+ ADR-002, ADR-006, ADR-007, ADR-008, ADR-009 as business context).

### Reason

- All `02-product/` documents have been filled and agreed (T-002.1-T-002.7); Product phase exit criteria are met.
- Locking Hybrid lean + the R1-R3 sequence prevents the User/UX phases from shifting MVP scope or adding full cases to Must.
- Keeps the gradual magnet (ADR-007) without overbuilding a Work catalog in the first ship.

### Alternatives Considered

- Delay baseline until UX wireframes are ready - rejected; product scope is enough to enter User Discovery.
- Lock full hybrid (option D, case required in MVP) - rejected; already deferred in ADR-010.
- Baseline without locking the R2 magnet sequence - rejected; would blur the light magnet commitment in ADR-007.
- Product Baseline v1.0 as above - accepted.

### Update - 2026-09-07 (ADR-020 / ADR-027 / ADR-032 / ADR-035)

Live surface: Home (hero + `#about`, ADR-040), Workflow (`/workflow`, M14, content ADR-042), Work index (M9). Contact = modal (ADR-019). M4 Home teaser retired. M10 = overlay sheet Must R1. Must modules include M9, M10, M13, M14. `02-product/` documents have been amended to follow those ADRs.
