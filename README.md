# rezisaktiva

Website portofolio pribadi **Rezi Saktiva**.

Project ini dikelola dengan **Project Operating System**:

| Folder | Peran |
| ------ | ----- |
| [`product-discovery/`](product-discovery/) | **Apa** yang dibangun — business → engineering |
| [`project-manager/`](project-manager/) | **Bagaimana** dikerjakan — aturan, status, ADR, task |
| [`.cursor/skills/`](.cursor/skills/) | Skills agent Cursor untuk navigasi Project OS |

## Status saat ini

Lihat Snapshot di [`project-manager/PROJECT_STATE.md`](project-manager/PROJECT_STATE.md).

## Mulai di sini

1. Baca [`AGENTS.md`](AGENTS.md) (pintu masuk AI agent).
2. Isi discovery bersama mulai dari [`product-discovery/01-business/product-vision.md`](product-discovery/01-business/product-vision.md).

## Struktur app (Bootstrap)

| Folder | Peran |
| ------ | ----- |
| `app/` | Next.js App Router |
| `content/` | SoT konten situs (MD/MDX) |
| `public/` | Aset statis |
| `private/` | Materi sensitif (tidak di-bundle) |

## Catatan

App Next.js + pnpm sudah di-scaffold di root (Bootstrap). Status & fokus kerja: lihat Snapshot di [`project-manager/PROJECT_STATE.md`](project-manager/PROJECT_STATE.md).
