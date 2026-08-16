# AGENTS.md — rezisaktiva

Pintu masuk untuk AI coding agent di Cursor. Baca file ini dulu di setiap sesi kerja pada repo ini.

## Purpose

Dokumen ini **bukan** Source of Truth produk. Ia mengarahkan agent ke dokumen yang benar dan menegakkan aturan keras.

**Source of Truth:**

| Area | Lokasi |
| ---- | ------ |
| Status, phase, milestone, issue | `project-manager/PROJECT_STATE.md` |
| Backlog task | `project-manager/TASKS.md` + `project-manager/tasks/` |
| Aturan kerja & governance | `project-manager/PROJECT_RULES.md` |
| Keputusan (ADR) | `project-manager/DECISIONS.md` + `project-manager/decisions/` |
| Produk & engineering | `product-discovery/` |
| Orientasi arsitektur (ringkas) | `project-manager/ARCHITECTURE_OVERVIEW.md` |
| Alur kerja developer | `project-manager/DEVELOPER_WORKFLOW.md` |
| Mockup UI/UX | `design-mockups/` (gate wajib — lihat `.cursor/rules/ui-ux-mockup-check.mdc`) |

## Wajib di awal sesi

1. Baca **Snapshot** di `project-manager/PROJECT_STATE.md`.
2. Kalau akan mengerjakan task: buka `project-manager/TASKS.md`, lalu **hanya** file `project-manager/tasks/vXX-*.md` yang memuat task/subtask itu (`T-XXX` / `T-XXX.N`). Ikuti field **Baca dulu**.
3. Ikuti skill: `.cursor/skills/project-os-navigator/SKILL.md`.
4. Untuk keputusan yang belum ada di baseline: `.cursor/skills/proactive-clarification/SKILL.md`.
5. Setelah pekerjaan selesai: `.cursor/skills/work-report-simple/SKILL.md`.
6. Untuk task yang menyentuh UI/UX: `.cursor/rules/ui-ux-mockup-check.mdc` (cek/buat mockup dulu) dan `.cursor/rules/xds.mdc` (konvensi Astryx saat coding).

## Skills (`.cursor/skills/`)

Satu-satunya folder skill project ini:

```
.cursor/skills/
├── project-os-navigator/
├── proactive-clarification/
└── work-report-simple/
```

Tidak ada `.claude/skills/` atau `CLAUDE.md` — project ini Cursor-first (ADR-001).

## Rules (`.cursor/rules/`)

Rule aktif (`alwaysApply: true`), semua berlaku sejak Development:

```
.cursor/rules/
├── no-ai-attribution-git.mdc   → tanpa atribusi AI di commit/branch/PR
├── xds.mdc                     → konvensi wajib Astryx design system
└── ui-ux-mockup-check.mdc      → wajib cek/buat mockup di design-mockups/ sebelum kode UI
```

## Stack & layout (saat ini)

Next.js (App Router) + TypeScript + pnpm di root — single-app (ADR-016). Styling: Astryx design system, bukan Tailwind (ADR-018). Docs tetap di `product-discovery/` + `project-manager/`. Mockup HTML acuan visual: `design-mockups/`. Detail stack: `product-discovery/06-engineering/`.

## Aturan keras

* **Boss Rezi** adalah pemilik keputusan akhir.
* **Documentation First** — dokumentasi acuan sebelum kode.
* **Implementasi kode mengikuti `Active Conversation Mode`** di `project-manager/PROJECT_STATE.md` (kecuali diminta eksplisit di luar mode itu).
* Status/progress hanya di `PROJECT_STATE.md` / `TASKS.md` — bukan di README Static Reference. ID: parent `T-XXX`, subtask `T-XXX.N`.
* `COMPLETE_TASK.md`: append saja; jangan dibaca penuh kecuali diperintah (rewrite sejarah hanya jika Boss Rezi memerintahkan eksplisit).
* Saat selesai checklist: sebut kode subtask `T-XXX.N` di COMPLETE_TASK / Fokus.
* Jangan berasumsi pada fork keputusan — tanya dulu.
* Proteksi secret: `.cursorignore`.

## Setelah mengubah sesuatu

1. Update `project-manager/tasks/vXX-*.md` + `project-manager/TASKS.md` bila relevan.
2. Update `PROJECT_STATE.md` hanya jika phase/milestone/fokus/blocker berubah.
3. Append `COMPLETE_TASK.md`.
4. Buat ADR bila keputusan material.
5. Laporkan dengan `work-report-simple`.

## Related

* `project-manager/README.md`
* `product-discovery/README.md`
* `.cursor/skills/project-os-navigator/SKILL.md`
