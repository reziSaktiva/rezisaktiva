# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

**R1 sudah selesai.** Exit **T-018**. Ringkasan: [`R1_COMPLETE.md`](R1_COMPLETE.md). Checklist R1: [`tasks/r1.md`](tasks/r1.md).

**Berikutnya**

**T-056.4** — tautan “baca selengkapnya” di sheet → case (ADR-044). Detail: [`tasks/r2.md`](tasks/r2.md).

**Baru selesai**

1. **T-056.2** — slug + copy case (pakai ulang slot sheet; label ID/EN dikunci).
2. **T-056.3** — route SSG `/[locale]/projects/[slug]`.
3. **T-056.1** — ADR-044 + amandemen docs R2.
4. Folder `tasks/` dirapikan: 15 file `vXX` → 4 file fase (`discovery`, `bootstrap`, `r1`, `r2`).
5. R1 T-001 … T-055 tertutup (**T-023** ❌ ADR-043).

## Indeks fase

| Fase | File | Tasks | Status |
| ---- | ---- | ----- | ------ |
| Discovery | [`tasks/discovery.md`](tasks/discovery.md) | T-001 … T-007 | ✅ Done |
| Bootstrap | [`tasks/bootstrap.md`](tasks/bootstrap.md) | T-008 … T-012 | ✅ Done |
| R1 | [`tasks/r1.md`](tasks/r1.md) | T-013 … T-055 | ✅ Done (**T-023** ❌) |
| R2 | [`tasks/r2.md`](tasks/r2.md) | T-056 … | ⏳ **T-056.1–T-056.3** ✅; lanjut **T-056.4** |

Peta file: [`tasks/README.md`](tasks/README.md).

## Aturan

* ID task parent `T-XXX` global, tidak didaur ulang.
* ID subtask `T-XXX.N` (contoh: `T-001.1`, `T-001.2`) — nomor berurutan dalam parent; tidak didaur ulang setelah dipakai.
* Checklist detail hidup di `tasks/` (satu file per fase). `PROJECT_STATE.md` hanya ringkasan Snapshot/Fokus.
* Task yang ditunda: `⏸️ Deferred` + alasan, jangan dihapus.
* Task yang dibatalkan: `❌ Cancelled` + alasan, jangan dihapus; ID tidak didaur ulang.
* Referensi kerja (Fokus, Snapshot, COMPLETE_TASK) sebaiknya menyebut kode subtask bila menyentuh item checklist.

## Related Documents

* `PROJECT_STATE.md`
* `R1_COMPLETE.md`
* `tasks/README.md`
