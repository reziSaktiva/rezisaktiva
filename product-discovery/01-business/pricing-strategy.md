# Pricing Strategy

> Status: **N/A (Draft v0.1)** — disepakati bersama Boss Rezi (2026-08-07). Pricing tidak relevan sebagai strategi untuk website portofolio **rezisaktiva**.

Dokumen ini **sengaja diisi sebagai N/A** agar keputusan tercatat (bukan dokumen yang terlupa). File tidak dihapus — lihat ADR-008.

---

# Overview

Website **rezisaktiva** adalah aset **brand** dengan soft inbound (job/client). Tidak ada produk, paket jasa, rate card, atau checkout di situs.

Oleh karena itu **tidak ada pricing strategy untuk situs** pada fase Business Discovery / arah v0.1.

---

# Current Status

| Aspek | Status |
| ----- | ------ |
| Harga di situs | Tidak ada / tidak akan ditampilkan |
| Paket jasa publik | Out of scope |
| Rate card / fee publik | Tidak |
| Monetisasi langsung situs | Tidak (ADR-007) |
| Dokumen ini | **N/A — keputusan sadar** |

Diskusi fee, salary, atau terms engagement — bila terjadi — dilakukan **setelah** evaluasi manusia (chat/call), di luar halaman portofolio.

---

# Pricing Philosophy

Untuk **situs**:

1. **Tidak menampilkan harga** — menjaga model brand primer + soft CTA
2. **Tidak productize jasa di halaman** — bukan landing freelance dengan paket
3. **Nilai ditegaskan lewat cerita & bukti**, bukan lewat angka

Untuk **engagement di luar situs** (job/project): filosofi detail dan angka **tidak ditetapkan di discovery ini** — di luar scope dokumen pricing situs.

---

# Future Monetization

Bukan rencana aktif v0.1. Jika suatu saat dipertimbangkan (misalnya template, tulisan berbayar, atau offering lain), itu memerlukan:

* Perubahan visi / business model (ADR baru)
* Revisi dokumen ini dari N/A menjadi strategi nyata

Sampai itu terjadi, asumsi tetap: **situs ≠ kanal penjualan berharga**.

---

# Assumptions

* Soft inbound cukup tanpa harga publik
* Menampilkan harga akan menggeser persepsi ke “jasa/toko” dan melemahkan brand primer
* Fee/salary bersifat kontekstual per opportunity — tidak cocok sebagai konten tetap di portofolio
* Menyimpan file N/A lebih aman untuk jejak keputusan daripada menghapus file

---

# Future Considerations

* Bila Boss Rezi ingin mencatat kisaran fee secara privat → `private/` (bukan dokumen publik ini)
* Bila model nilai situs berubah ke productized offering → buka kembali dokumen ini + ADR
* `pricing-strategy.md` tetap ada di struktur `01-business/` sebagai penanda “sudah diputuskan N/A”

---

# Success Criteria

Dokumen pricing dianggap selesai (N/A) jika:

1. Jelas bahwa **tidak ada harga di situs** dan itu disengaja
2. Tidak ada angka fee/salary prematur di repo discovery publik
3. Rujukan ke ADR-002 / ADR-007 / ADR-008 konsisten
4. Subtask T-001 untuk file ini bisa dicentang sebagai **N/A completed**

---

# Decision Rules

* Jangan menambah rate card atau paket harga ke situs tanpa ADR yang mengubah model nilai
* Jangan menghapus file ini hanya karena N/A — jejak keputusan penting bagi sesi/agent berikutnya
* Angka engagement sensitif → `private/` atau saluran non-repo, bukan di sini

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `business-model.md` — model nilai & revenue (tanpa harga situs)
* `product-vision.md` — brand primer; out of scope hard sell
* `../../project-manager/decisions/ADR-008-pricing-strategy-na-for-portfolio-site.md` — keputusan material
* `../../project-manager/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md`
* `../../project-manager/decisions/ADR-002-portfolio-vision-positioning-audience-language.md`
* `../../project-manager/PROJECT_STATE.md` — status project
* `../../project-manager/DECISIONS.md` — indeks ADR
