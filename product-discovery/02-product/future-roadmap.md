# Future Roadmap

> Status: **Draft v0.1** — peluang jangka panjang di luar R1–R3 inti. Belum Product Baseline (T-002.8).

Dokumen ini mencatat **arah dan peluang** website portofolio **rezisaktiva** setelah kerangka clarity + magnet ringan berjalan — tanpa mengunci jadwal atau mengubah positioning inti.

---

# Overview

Jangka panjang: situs tetap **aset brand** (product builder + fullstack + AI edge), destination resmi, dengan magnet konten yang dirawat proporsional.

Yang boleh tumbuh: kedalaman case, sinyal craft, tulisan proses, eksperimen sebagai satelit, dan (opsional) distribusi aktif — **hanya jika** tidak mengorbankan clarity dan soft inbound.

Yang tidak menjadi masa depan default: toko jasa, SaaS di situs, media empire, atau social hustle sebagai mesin utama (kecuali ADR baru).

---

# Long-Term Product Vision

Selaras `../01-business/product-vision.md`:

* Rumah digital yang dikenang: “Rezi = product builder (fullstack + AI edge)”
* Terus diperbarui dengan karya dan pembelajaran
* Referensi pertama saat evaluasi kolaborasi, opportunity, atau project
* Bilingual SEA-aware tetap pintu terbuka
* Job/client tetap jalur sekunder soft — brand tetap primer

Roadmap masa depan **memperkaya** visi itu, bukan mengganti menjadi designer agency, AI specialist murni, atau funnel penjualan.

---

# Future Opportunities

Peluang (belum komitmen R1–R3):

| Peluang | Nilai | Risiko jika dipaksa terlalu cepat |
| ------- | ----- | --------------------------------- |
| **M11 — Writing / notes** | Memperkuat cara berpikir; magnet sekunder | Jadi blog volume; geser fokus evaluasi |
| **M12 — Experiments / playground** | Craft edge; daya tarik peer | Panggung utama jadi spectacle tanpa outcome |
| **Lebih banyak case (M10)** | Bukti ship lebih kaya | Kualitas turun; maintenance berat |
| **Distribusi aktif (SEA/community)** | Perluas visibility (ADR-007 opsi C ditunda) | Effort tinggi; vanity traffic |
| **Form/booking matang (M8+)** | Memperhalus soft path | Terasa salesy jika copy agresif |
| **Analytics privacy-first** | Belajar perilaku dengan etis | Over-measure; noise vanity |
| **Ship-in-public ringan** | Transparansi proses | Jadi mesin utama → geser ICP fokus |

Tiap peluang naik ke rilis konkret hanya setelah evaluasi (section di bawah) + kapasitas Rezi.

---

# Product Expansion

## Di dalam arah ekspansi (aman)

* Memperdalam case/proses (lebih banyak M10 berkualitas)
* Poles presence & craft di atas fondasi R1–R2
* Tulisan singkat proses (M11) sebagai pelengkap, bukan bisnis media
* Playground/eksperimen (M12) sebagai **satelit** dari destination
* Ritme update konten proporsional (changelog ringan)

## Di luar ekspansi (tetap out of direction)

* Pricing publik, paket jasa, checkout (ADR-008)
* CMS/auth/member area sebagai “produk”
* E-commerce / SaaS publik sebagai inti situs
* Hard-sell funnel atau lead-magnet berat
* Mengganti positioning menjadi designer/agency atau AI specialist murni
* Menjadikan social automation syarat sukses brand

Ekspansi yang mengubah model nilai → ADR + revisi business/product baseline.

---

# Evaluation Principles

Sebelum memasukkan peluang future ke backlog rilis:

1. **Apakah memperkuat dual north star?** (recall + inbound berkualitas)
2. **Apakah menjaga brand primer + soft CTA?**
3. **Apakah proporsional** dengan waktu solo builder?
4. **Apakah clarity tetap unggul** dibanding craft/volume?
5. **Apakah ada prasyarat?** (mis. R1/R2 exit dulu)
6. **Apakah perlu ADR?** (model growth, audiens, atau batas produk berubah)

Jika “tidak” pada 1–4 → discard atau tunda. Jika “ya” pada 6 → buat ADR sebelum eksekusi.

---

# Current Status

| Item | Status |
| ---- | ------ |
| Visi jangka panjang | Selaras Business Baseline v1.0 |
| Rilis inti terencana | R1–R3 di `release-roadmap.md` |
| Future opportunities | Tercatat; belum dikomit ke nomor rilis |
| Distribusi aktif / ship-in-public mesin | Ditunda (ADR-007) |
| Product Baseline | Belum (T-002.8) |

---

# Success Criteria

Future roadmap dianggap cukup jika:

1. Peluang di luar R1–R3 tercatat tanpa mengaburkan MVP
2. Batas ekspansi vs out-of-direction jelas
3. Ada prinsip evaluasi sebelum naikkan peluang ke rilis
4. Selaras visi, ADR-002 / ADR-007 / ADR-010

---

# Decision Rules

* Memindahkan M11/M12 atau distribusi aktif ke Must rilis dekat → keputusan eksplisit (+ ADR bila mengubah growth model).
* Mengubah situs menjadi media/toko/SaaS → ADR wajib + revisi baseline.
* Future roadmap **bukan** janji delivery; itu backlog arah.
* Status progress tetap di `PROJECT_STATE.md`, bukan di README fase.

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `release-roadmap.md` — R1–R3
* `feature-modules.md` — M11/M12 dan magnet
* `product-scope.md` — batas produk
* `../01-business/product-vision.md` — visi jangka panjang
* `../01-business/business-model.md` — growth & prinsip
* `../../project-manager/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
