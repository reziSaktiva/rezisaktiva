# Decision ADR-011

### Title

Roles & permissions: N/A for the public portfolio website (file remains)

### Status

Accepted

### Date

2026-08-07

### Decision

1. **`roles-permissions.md` is N/A** - there is no in-app role/permission model for the rezisaktiva site in v0.1.
2. **The file is not deleted** - it is filled as an intentional decision so it does not look "forgotten" (same pattern as ADR-008).
3. The site = public read-only content for visitors; there is no login, RBAC, or member area as a product feature.
4. Owner authoring/deploy happens outside the product permission model (repo/hosting). Sensitive material remains via `private/` (ADR-003), not a role on the site.

### Reason

- Aligned with Hybrid lean (ADR-010) and product scope: no auth/CMS/member in the MVP.
- Subtask **T-002.7** (parent T-002) already allows N/A when not relevant.
- Deleting the file removes the trail; explicit N/A is safer for the next agent/human session.

### Alternatives Considered

- Delete `roles-permissions.md` - rejected; decision trail would be lost.
- Define formal Admin/Public roles even though there is no auth - rejected; noise without benefit.
- N/A file (intentional decision content) - accepted.
