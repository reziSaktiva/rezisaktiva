# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

**R1 sudah selesai.** Exit **T-018**. Ringkasan: [`R1_COMPLETE.md`](R1_COMPLETE.md). Checklist R1: [`tasks/r1.md`](tasks/r1.md).

**Berikutnya**

**T-059** form Contact → Resend (**ADR-047**). **T-059.1** ✅. Berikutnya **T-059.2** (DNS + secret) lalu Handler + UI. **T-058** ✅. Tile anonim Gamestalgia menunggu kunci judul/highlight.

**Baru selesai**

1. **T-059.1** — ADR-047 + amandemen baseline Contact/Resend.
2. **T-058.4** — tes + browser kedalaman case vs sheet.
3. **T-058.3** — halaman slug merender periode/stack/poin.
4. **T-058.2** — field `case` di katalog dari CV.
5. **T-058.1** — ADR-046.
6. **T-057.5** — verifikasi browser tile/sheet/case `backend-platform-sosial`.
7. **T-057.1** — ADR-045.

## Indeks fase

| Fase | File | Tasks | Status |
| ---- | ---- | ----- | ------ |
| Discovery | [`tasks/discovery.md`](tasks/discovery.md) | T-001 … T-007 | ✅ Done |
| Bootstrap | [`tasks/bootstrap.md`](tasks/bootstrap.md) | T-008 … T-012 | ✅ Done |
| R1 | [`tasks/r1.md`](tasks/r1.md) | T-013 … T-055 | ✅ Done (**T-023** ❌) |
| R2 | [`tasks/r2.md`](tasks/r2.md) | T-056 … | **T-056**–**T-058** Done; **T-059** 🟡 |

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
