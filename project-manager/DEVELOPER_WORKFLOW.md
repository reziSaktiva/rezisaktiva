# DEVELOPER WORKFLOW

> Static Reference — alur kerja umum. Fase/progress aktif ada di `PROJECT_STATE.md`, bukan di sini.

## Alur kerja Development (fase aktif saat ini)

1. Baca Snapshot di `PROJECT_STATE.md`.
2. Lihat `TASKS.md` → buka **hanya** file `project-manager/tasks/vXX-*.md` yang relevan (`T-XXX` / `T-XXX.N`).
3. Cek mockup terkait di `design-mockups/` (`.cursor/rules/ui-ux-mockup-check.mdc`) sebelum menyentuh UI/UX.
4. Implementasikan sesuai baseline `product-discovery/` + Astryx (`.cursor/rules/xds.mdc`, ADR-018).
5. Catat keputusan material sebagai ADR bila belum terdokumentasi.
6. Update TASKS / STATE / COMPLETE_TASK (sebut kode subtask bila relevan).
7. Laporkan dengan skill `work-report-simple`.

## Alur kerja fase sebelumnya (historis)

* **Product Discovery** — isi/revisi dokumen di `product-discovery/` per folder 01–06, catat ADR, update TASKS/STATE. Sudah selesai (lihat `tasks/v01-product-discovery.md`).
* **Repository & Bootstrap** — scaffold repo, tooling, dependency baseline. Sudah selesai (lihat `tasks/v02-bootstrap.md`).

## Related Documents

* `PROJECT_RULES.md`
* `../AGENTS.md`
* `../.cursor/skills/project-os-navigator/SKILL.md`
