# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

**R1 sudah selesai.** Exit **T-018**. Ringkasan: [`R1_COMPLETE.md`](R1_COMPLETE.md). Checklist R1: [`tasks/r1.md`](tasks/r1.md).

**Berikutnya**

Tidak ada task implementasi terbuka. **T-056** / magnet R2 (ADR-044) ✅. Fase aktif: Validation (bug/regresi R1–R2 bila muncul).

**Baru selesai**

1. **T-056.6** — verifikasi browser case hibrid (tile→sheet; tautan case; URL langsung ID/EN sebagai sibling; hiddenIds; Contact/QI; desktop + 375).
2. **T-056.4** — tautan “baca selengkapnya” di sheet → case.
3. **T-056.5** — title/description/canonical/OG per case (kartu situs).
4. **T-056.3** — route SSG `/[locale]/projects/[slug]`.
5. **T-056.2** — slug + copy case (pakai ulang slot sheet; label ID/EN dikunci).
6. **T-056.1** — ADR-044 + amandemen docs R2.

## Indeks fase

| Fase | File | Tasks | Status |
| ---- | ---- | ----- | ------ |
| Discovery | [`tasks/discovery.md`](tasks/discovery.md) | T-001 … T-007 | ✅ Done |
| Bootstrap | [`tasks/bootstrap.md`](tasks/bootstrap.md) | T-008 … T-012 | ✅ Done |
| R1 | [`tasks/r1.md`](tasks/r1.md) | T-013 … T-055 | ✅ Done (**T-023** ❌) |
| R2 | [`tasks/r2.md`](tasks/r2.md) | T-056 … | ✅ **T-056** Done |

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
