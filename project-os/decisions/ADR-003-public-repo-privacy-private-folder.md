# Decision ADR-003

### Title

Public repo with open `product-discovery/` and a `private/` folder for sensitive material

### Status

Accepted

### Date

2026-08-06

### Decision

1. The GitHub repository is **public** - the project may be seen by many people.
2. `product-discovery/` **stays tracked** (not in `.gitignore`) - tidy discovery documents are part of product builder credibility.
3. Sensitive material is stored in a local `private/` folder ignored by Git (`/private/*`, except `private/README.md`).
4. Technical secrets (`.env`, credentials, pem files) stay in `.gitignore` / `.cursorignore`.
5. Do not put sensitive personal data in public documents (`product-discovery/`, `project-os/`).

### Reason

- A documented portfolio and thinking process strengthens the brand when the repo is open.
- Ignoring all of `product-discovery/` sacrifices public backup and transparency without proportional privacy benefit.
- Separating `private/` gives a safe place for drafts/sensitive data without creating two repositories.

### Alternatives Considered

- Ignore all of `product-discovery/` - rejected; Boss Rezi chose the public + selective privacy proposal.
- Two repositories (public vs private) - rejected for now because it is more complex for the discovery phase.
- Private repo - rejected because the goal is for the project to be visible to many people.
