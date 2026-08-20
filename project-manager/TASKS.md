# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

1. Copy teks di **v10** (`tasks/v10-page-copy.md`, **T-021**) — berikutnya **T-021.2** (Home).
2. **T-018** (exit R1) **ditunda** sampai T-021.1–T-021.7 terkunci (kontrak v10).
3. **T-022** — penyesuaian desain mobile (paritas mockup → kode) ✅ Done. Detail: [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md).
4. **KI-001 / KI-002** tertutup (tema `rezisaktiva` = mockup `shared.css`).

## Indeks release

| Release | File | Tasks | Status |
| ------- | ---- | ----- | ------ |
| v0.1 Product Discovery | [`tasks/v01-product-discovery.md`](tasks/v01-product-discovery.md) | T-001 … T-007 | ✅ Done |
| v0.2 Repository & Bootstrap | [`tasks/v02-bootstrap.md`](tasks/v02-bootstrap.md) | T-008 … T-012 | ✅ Done |
| v0.3 Development R1 | [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md) | T-013 … T-020, T-022 | ⏳ In Progress (T-013…T-017 ✅, T-019 ✅, T-020 ✅, **T-022** ✅; T-018 ⏳ menunggu T-021) |
| v10 Page copy R1 | [`tasks/v10-page-copy.md`](tasks/v10-page-copy.md) | T-021 | ⏳ Todo |

## Aturan

* ID task parent `T-XXX` global, tidak didaur ulang.
* ID subtask `T-XXX.N` (contoh: `T-001.1`, `T-001.2`) — nomor berurutan dalam parent; tidak didaur ulang setelah dipakai.
* Checklist detail per subtask hidup di file release `tasks/vXX-*.md`. `PROJECT_STATE.md` hanya menyimpan ringkasan Snapshot/Fokus (tidak menyalin detail checklist) — keduanya Living Document, beda level detail.
* Task yang ditunda: `⏸️ Deferred` + alasan, jangan dihapus.
* Referensi kerja (Fokus, Snapshot, COMPLETE_TASK) sebaiknya menyebut kode subtask bila menyentuh item checklist.

## Related Documents

* `PROJECT_STATE.md`
* `tasks/v01-product-discovery.md`
* `tasks/v02-bootstrap.md`
* `tasks/v03-development-r1.md`
* `tasks/v10-page-copy.md`
