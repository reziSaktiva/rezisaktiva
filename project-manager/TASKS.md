# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

1. Susun backlog **Repository & Bootstrap** (release berikutnya) sesuai Engineering Baseline ADR-016
2. Scaffold Next.js single-app + pnpm + Vercel sesuai `06-engineering/`

## Indeks release

| Release | File | Tasks | Status |
| ------- | ---- | ----- | ------ |
| v0.1 Product Discovery | [`tasks/v01-product-discovery.md`](tasks/v01-product-discovery.md) | T-001 … T-007 | ✅ Done |

## Aturan

* ID task parent `T-XXX` global, tidak didaur ulang.
* ID subtask `T-XXX.N` (contoh: `T-001.1`, `T-001.2`) — nomor berurutan dalam parent; tidak didaur ulang setelah dipakai.
* Status task hidup di file release `tasks/vXX-*.md`, bukan di `PROJECT_STATE.md`.
* Task yang ditunda: `⏸️ Deferred` + alasan, jangan dihapus.
* Referensi kerja (Fokus, Snapshot, COMPLETE_TASK) sebaiknya menyebut kode subtask bila menyentuh item checklist.

## Related Documents

* `PROJECT_STATE.md`
* `tasks/v01-product-discovery.md`
