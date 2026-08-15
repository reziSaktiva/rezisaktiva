# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

1. **T-012** selesai; v0.2 Repository & Bootstrap ✅ Done.
2. Backlog v0.3 Development R1 sudah disusun (`tasks/v03-development-r1.md`, T-013 … T-019).
3. **ADR-020** (2026-08-15): Work index (M9) naik jadi Must R1 + nav mobile pakai hamburger — override sebagian ADR-010/ADR-012 & `navigation-patterns.md`. Task baru **T-019** ditambahkan.
4. **T-013 selesai** (Site chrome R1 — nav Home/About/Karya + hamburger mobile + switcher + footer). Lanjut **T-014** (Home + work teaser).

## Indeks release

| Release | File | Tasks | Status |
| ------- | ---- | ----- | ------ |
| v0.1 Product Discovery | [`tasks/v01-product-discovery.md`](tasks/v01-product-discovery.md) | T-001 … T-007 | ✅ Done |
| v0.2 Repository & Bootstrap | [`tasks/v02-bootstrap.md`](tasks/v02-bootstrap.md) | T-008 … T-012 | ✅ Done |
| v0.3 Development R1 | [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md) | T-013 … T-019 | ⏳ Todo |

## Aturan

* ID task parent `T-XXX` global, tidak didaur ulang.
* ID subtask `T-XXX.N` (contoh: `T-001.1`, `T-001.2`) — nomor berurutan dalam parent; tidak didaur ulang setelah dipakai.
* Status task hidup di file release `tasks/vXX-*.md`, bukan di `PROJECT_STATE.md`.
* Task yang ditunda: `⏸️ Deferred` + alasan, jangan dihapus.
* Referensi kerja (Fokus, Snapshot, COMPLETE_TASK) sebaiknya menyebut kode subtask bila menyentuh item checklist.

## Related Documents

* `PROJECT_STATE.md`
* `tasks/v01-product-discovery.md`
* `tasks/v02-bootstrap.md`
* `tasks/v03-development-r1.md`
