# Decision ADR-043

### Title

No public CV/Portfolio download link on the site

### Status

Accepted

### Date

2026-09-14

### Decision

1. **Site does not offer CV/Portfolio download** (PDF or similar) in Contact modal, Quick Info, footer, new route, or other R1 surface.
2. **ADR-023 superseded.** Contact modal download link placement decision **no longer applies**; that feature will not ship.
3. **T-023 ❌ Cancelled.** ID not recycled. Original reason (ID/EN parity / waiting for English CV) no longer relevant.
4. **Inbound path remains** email + satellite links in Contact modal (**ADR-019**). Work proof stays on Work index + sheet, not via public CV file.
5. CV files stay off public surface (`private/` folder / manual send). **Do not** put CV PDF in `public/` or repo served by site.
6. **Contact modal contrast fix** noted in ADR-023 **still applied** — separate UI bug, not part of download feature.

### Reason

- Boss Rezi cancelled T-023 over concern public CV could be misused by irresponsible parties.
- Repo and R1 destination are public (ADR-003). Download link on site = file fetchable by anyone, without conversation context.
- Soft inbound enough via email; CV may be sent on request, not as open asset.

### Alternatives Considered

- Stay deferred until English CV ready (prior T-023 status) — rejected; misuse risk does not go away with second language version.
- Gated download (form, captcha, email-gated) — rejected; outside R1 Hybrid lean (auth/backend not in scope).
- Hidden `/cv` route / unlinked URL — rejected; file in `public/` still crawlable or spread.

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` — M3: remove download link from core content; note ADR-023 superseded.
- `project-os/tickets/r1.md` — **T-023** ❌ Cancelled.
- `AVAILABLE_TICKETS.md`, `PROJECT_STATE.md`, `DECISIONS.md` index, `COMPLETE_TASK.md`, `CONVERSATIONS.md`.
- No production code change **for T-023**: download implementation already reverted from T-021.4 PR. Workflow dust/footer skin = **T-054.4**, not this decision.