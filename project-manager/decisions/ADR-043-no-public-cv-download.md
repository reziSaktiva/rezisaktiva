# Decision ADR-043

### Title

Tidak ada tautan unduh CV/Portofolio publik di situs

### Status

Accepted

### Date

2026-09-14

### Decision

1. **Situs tidak menyediakan unduhan CV/Portofolio** (PDF atau file sejenis) di Contact modal, Quick Info, footer, route baru, atau permukaan R1 lain.
2. **ADR-023 superseded.** Keputusan penempatan tautan unduh di Contact modal **tidak lagi berlaku**; fitur itu tidak akan di-ship.
3. **T-023 ❌ Cancelled.** ID tidak didaur ulang. Alasan semula (paritas ID/EN / menunggu CV Inggris) tidak lagi relevan.
4. **Jalur inbound tetap** email + tautan satelit di Contact modal (**ADR-019**). Bukti karya tetap di Work index + sheet, bukan lewat file CV publik.
5. File CV tetap di luar permukaan publik (folder `private/` / kirim manual). **Jangan** menaruh PDF CV di `public/` atau repo yang dilayani situs.
6. **Fix kontras Contact modal** yang dicatat di ADR-023 **tetap dipakai** — itu bug UI terpisah, bukan bagian fitur unduh.

### Reason

- Boss Rezi membatalkan T-023 karena khawatir file CV publik disalahgunakan oleh pihak yang tidak bertanggung jawab.
- Repo dan destinasi R1 bersifat publik (ADR-003). Tautan unduh di situs = file bisa diambil siapa saja, tanpa konteks percakapan.
- Soft inbound sudah cukup lewat email; CV boleh dikirim setelah ada permintaan, bukan sebagai aset terbuka.

### Alternatives Considered

- Tetap deferred sampai CV Inggris siap (status T-023 sebelumnya) — ditolak; risiko penyalahgunaan tidak hilang dengan versi bahasa kedua.
- Gate unduhan (form, captcha, email-gated) — ditolak; di luar Hybrid lean R1 (auth/backend bukan scope).
- Route `/cv` tersembunyi / URL tidak tertaut — ditolak; file di `public/` tetap bisa di-crawl atau tersebar.

### Impact / Follow-up

- `product-discovery/02-product/feature-modules.md` — M3: cabut tautan unduh dari isi inti; catat superseded ADR-023.
- `project-manager/tasks/v10-page-copy.md` — **T-023** ❌ Cancelled; v10 Done.
- `TASKS.md`, `PROJECT_STATE.md`, indeks `DECISIONS.md`, `COMPLETE_TASK.md`, `CONVERSATIONS.md`.
- Tidak ada perubahan kode produksi **untuk T-023**: implementasi unduh sudah di-revert dari PR T-021.4. Kulit debu/footer Workflow = **T-054.4**, bukan keputusan ini.
