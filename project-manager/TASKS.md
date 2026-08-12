# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

1. Eksekusi **T-009.1** — ESLint + Prettier + `eslint-config-prettier`; script `lint` / `format` / `format:check`
2. Lanjut T-009.2 … T-012 sesuai `tasks/v02-bootstrap.md`

## Indeks release

| Release | File | Tasks | Status |
| ------- | ---- | ----- | ------ |
| v0.1 Product Discovery | [`tasks/v01-product-discovery.md`](tasks/v01-product-discovery.md) | T-001 … T-007 | ✅ Done |
| v0.2 Repository & Bootstrap | [`tasks/v02-bootstrap.md`](tasks/v02-bootstrap.md) | T-008 … T-012 | ⏳ Todo |

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
