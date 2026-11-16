# Decision ADR-013

### Title

User Baseline v1.0: lock `03-user/` (assumption-led + primary R1 and thin secondary paths)

### Status

Accepted

### Date

2026-08-07

### Decision

1. **User Baseline v1.0 is established** for all documents in `product-discovery/03-user/`.
2. Package locked with this baseline:
   - **Discovery method** = Assumption-led synthesis from Business & Product Baseline, validated by Boss Rezi, plus an **optional light research plan** (3-5 chats/peer reviews) that **does not block** the baseline lock
   - **Segments / personas** = Equal dual primary P1 early founder & P2 product owner (SEA); secondary P3 hiring & P4 project client (thin) - aligned with ADR-005
   - **Journey scope** = R1 Clarity as the axis (Home -> About/teaser -> Contact); thin secondary branches for P3/P4 on the same surface; case detail = Later R2
   - **JTBD Must R1** = J1-J4, J7 (clarity, proof, About, soft contact, language); J5 thin Should; J6 Later
   - **Core insights** = I1-I7 in `insights.md` (clarity first visit; one brand with two emphases; teaser vs case; soft path; secondary = signal; i18n as journey; site as story assembler)
3. **No Must changes** to the Product Baseline (ADR-010-012) from User findings.
4. Material changes to the user baseline after this -> **new ADR** + revision to affected documents.

### Reason

- All `03-user/` documents have been filled and agreed (T-003.1); User phase exit criteria are met.
- A personal portfolio does not require mandatory interviews before baseline; light research is still planned so assumptions (especially soft CTA and teaser sufficiency) can be tested after draft/live.
- Thin secondary journeys keep hiring/clients served without shifting the product builder brand or adding MVP surface.

### Alternatives Considered

- Pure assumption-led with no research plan - rejected; loses a cheap validation path for A3/PP11.
- Mandatory research (interviews) before baseline - rejected; delays UX out of proportion for a solo site.
- R1-only journey with no secondary branch - rejected; hiring/clients remain relevant as soft inbound.
- Full R1+R2 journey in the Must map - rejected; overlaps Product R2 and risks case scope creep in MVP.
- User Baseline v1.0 as above - accepted.
