# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

1. **T-009** selesai (T-009.1 ESLint+Prettier, T-009.2 superseded, T-009.3 Dependabot, T-009.4 migrasi styling ke Astryx — ADR-018).
2. **T-010** selesai (T-010.1 App Router `/[locale]` untuk `id`/`en`, T-010.2 `proxy.ts` redirect `/`, T-010.3 stub switcher).
3. **T-011** selesai (T-011.1 CI Actions, T-011.2 project Vercel terhubung + deploy berhasil, T-011.3 `.env.example`).
4. Lanjut **T-012** (Exit Bootstrap → siap Development).

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
