# rezisaktiva

Personal portfolio site for **Rezi Saktiva**.

This project is managed with a **Project Operating System**:

| Folder | Role |
| ------ | ---- |
| [`product-discovery/`](product-discovery/) | **What** is built — business → engineering |
| [`project-os/`](project-os/) | **How** work is done — rules, status, ADRs, tickets |
| [`.cursor/skills/`](.cursor/skills/) | Cursor agent skills for navigating Project OS |

## Current status

See the Snapshot in [`project-os/PROJECT_STATE.md`](project-os/PROJECT_STATE.md).

## Start here

1. Read [`AGENTS.md`](AGENTS.md) (AI agent entry door).
2. Fill discovery together starting from [`product-discovery/01-business/product-vision.md`](product-discovery/01-business/product-vision.md).

## App structure (Bootstrap)

| Folder | Role |
| ------ | ---- |
| `app/` | Next.js App Router |
| `content/` | Site content Source of Truth (MD/MDX or equivalent modules) |
| `public/` | Static assets |
| `private/` | Sensitive material (not bundled) |

## Notes

The Next.js + pnpm app is already scaffolded at the repo root (Bootstrap). Status and work focus: see the Snapshot in [`project-os/PROJECT_STATE.md`](project-os/PROJECT_STATE.md).
