# AGENTS.md — rezisaktiva

Pintu masuk untuk AI coding agent di Cursor. Baca file ini dulu di setiap sesi kerja pada repo ini.

## Purpose

Dokumen ini **bukan** Source of Truth produk. Ia mengarahkan agent ke dokumen yang benar dan menegakkan aturan keras.

**Source of Truth:**

| Area | Lokasi |
| ---- | ------ |
| Status, phase, milestone, issue | `project-manager/PROJECT_STATE.md` |
| Backlog task | `project-manager/TASKS.md` + `tasks/` |
| Aturan kerja & governance | `project-manager/PROJECT_RULES.md` |
| Keputusan (ADR) | `project-manager/DECISIONS.md` + `decisions/` |
| Produk & engineering | `product-discovery/` |
| Orientasi arsitektur (ringkas) | `project-manager/ARCHITECTURE_OVERVIEW.md` |
| Alur kerja developer | `project-manager/DEVELOPER_WORKFLOW.md` |

## Wajib di awal sesi

1. Baca **Snapshot** di `project-manager/PROJECT_STATE.md`.
2. Kalau akan mengerjakan task: buka `TASKS.md`, lalu **hanya** file `tasks/vXX-*.md` yang memuat task itu. Ikuti field **Baca dulu**.
3. Ikuti skill: `.cursor/skills/project-os-navigator/SKILL.md`.
4. Untuk keputusan yang belum ada di baseline: `.cursor/skills/proactive-clarification/SKILL.md`.
5. Setelah pekerjaan selesai: `.cursor/skills/work-report-simple/SKILL.md`.

## Skills (`.cursor/skills/`)

Satu-satunya folder skill project ini:

```
.cursor/skills/
├── project-os-navigator/
├── proactive-clarification/
└── work-report-simple/
```

Tidak ada `.claude/skills/` atau `CLAUDE.md` — project ini Cursor-first (ADR-001).

## Stack & layout (saat ini)

Docs-only. Belum ada app framework. Stack akan dikunci di `product-discovery/06-engineering/`.

## Aturan keras

* **Boss Rezi** adalah pemilik keputusan akhir.
* **Documentation First** — dokumentasi acuan sebelum kode.
* **Tidak ada implementasi kode** selama Active Mode = Product Discovery (kecuali diminta eksplisit).
* Status/progress hanya di `PROJECT_STATE.md` / `TASKS.md` — bukan di README Static Reference.
* `COMPLETE_TASK.md`: append saja; jangan dibaca penuh kecuali diperintah.
* Jangan berasumsi pada fork keputusan — tanya dulu.
* Proteksi secret: `.cursorignore`.

## Setelah mengubah sesuatu

1. Update `tasks/vXX-*.md` + `TASKS.md` bila relevan.
2. Update `PROJECT_STATE.md` hanya jika phase/milestone/fokus/blocker berubah.
3. Append `COMPLETE_TASK.md`.
4. Buat ADR bila keputusan material.
5. Laporkan dengan `work-report-simple`.

## Related

* `project-manager/README.md`
* `product-discovery/README.md`
* `.cursor/skills/project-os-navigator/SKILL.md`
