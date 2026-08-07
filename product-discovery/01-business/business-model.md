# Business Model

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menjelaskan bagaimana website portofolio **rezisaktiva** menciptakan dan menangkap nilai — sebagai **aset brand**, bukan bisnis SaaS atau toko jasa di situs.

---

# Overview

Model nilai situs: **Brand primer**; jalur **job opportunity** dan **client/project** sebagai sekunder dengan soft CTA (ADR-002).

Situs tidak menjual produk atau paket harga di permukaan. Nilainya: satu rumah digital yang membuat founder/PO (dan audiens sekunder) memahami siapa Rezi, melihat bukti, dan bisa menghubungi dengan percaya diri.

**Pertumbuhan (terkunci):** Destination + magnet ringan (opsi B / ADR-007) — rumah resmi + case/proses singkat di situs; bukan blog besar dan bukan social hustle sebagai mesin MVP.

---

# Value Creation

Situs menciptakan nilai dengan:

1. **Mengonsolidasikan identitas** — product builder + fullstack + AI edge dalam satu cerita (bukan potongan LinkedIn/GitHub/CV)
2. **Mempercepat evaluasi** — founder/PO menjawab “cocok atau tidak?” lebih cepat (selaras ADR-004)
3. **Membangun brand equity** — recognition & recall jangka panjang (“Rezi = product builder…”)
4. **Membuka pintu natural** — soft path ke kolaborasi, opportunity, atau project tanpa hard sell
5. **Magnet ringan** — case/proses singkat yang layak dibaca & dishare, memperkuat narrative tanpa jadi media

Nilai untuk Rezi: aset brand + inbound berkualitas.  
Nilai untuk pengunjung: kejelasan fit + bukti + kontak.

---

# Customer Segments

“Customer” di sini = orang yang mendapat nilai dari kunjungan / interaksi dengan situs (bukan pembeli produk).

---

## Primary Segment

**Founder / product owner** di digital product/tech, fokus SEA — dua archetipe setara (early founder/indie + PO perusahaan/startup). Lihat `target-market.md` + ADR-005.

Mereka “membayar” dengan perhatian dan (bila fit) outreach — bukan dengan harga di situs.

---

## Secondary Segments

| Segmen | Nilai yang mereka ambil | Nilai yang kembali ke Rezi |
| ------ | ----------------------- | -------------------------- |
| Hiring manager / tech lead | Sinyal fit role (soft) | Job opportunity inbound |
| Calon klien project | Karya + cara kerja sebelum hire | Client/project inbound |
| Peer / community | Apresiasi craft; share | Recognition & brand spread |
| Founder/PO luar SEA | Sama evaluasi, via bilingual | Opportunity sekunder |

---

# Revenue Model

**Tidak ada revenue langsung dari situs** pada arah v0.1.

| Jalur | Hubungan dengan situs | Catatan |
| ----- | --------------------- | ------- |
| **Brand equity** | Primer | Aset tidak berwujud; fondasi jangka panjang |
| **Job opportunity** | Sekunder, soft | Terjadi di luar situs (chat, interview); situs memicu evaluasi |
| **Client / project** | Sekunder, soft | Engagement dinegosiasi di luar situs; bukan checkout |
| **Produk / toko / SaaS di situs** | Out of scope | Lihat visi — bukan bisnis inti situs |
| **Pricing publik di situs** | Tidak | Detail → `pricing-strategy.md` (kemungkinan N/A untuk situs) |

Monetisasi nyata (gaji, fee project) adalah **hasil sampingan berkualitas** dari brand + soft inbound — bukan funnel penjualan di halaman.

---

# Pricing Philosophy

Untuk **situs** itu sendiri: **tidak ada harga yang ditampilkan**.

- Tidak ada paket jasa, rate card publik, atau “buy now”
- Nilai ditegaskan lewat cerita, bukti, dan soft CTA kontak
- Bila suatu saat ada diskusi fee/salary, itu terjadi **setelah** evaluasi manusia — di luar halaman portofolio

Filsafat harga engagement (project/job) bila relevan → dokumen `pricing-strategy.md` (boleh N/A untuk fase ini).

---

# Customer Value Proposition

Untuk founder / PO yang mencari builder:

| Janji | Bukti di situs |
| ----- | -------------- |
| Paham cepat siapa Rezi | Clarity-first (ADR-006) |
| Percaya bisa bawa ide → live | Cerita product builder + case/proses |
| Kredibel teknis | Fondasi fullstack |
| Relevan terkini | AI sebagai edge (jujur, bukan specialist murni) |
| Mudah langkah berikutnya | Soft CTA kontak; bilingual SEA-aware |

Bukan janji: “hire designer”, “AI agency”, atau “paket fixed-price di website”.

---

# Cost Considerations

Biaya untuk menjaga model ini (bukan COGS produk):

| Jenis | Contoh | Catatan |
| ----- | ------ | ------- |
| **Waktu** | Menulis case/proses, update karya, rawat narasi | Biaya utama; magnet ringan butuh ritme update |
| **Hosting / domain / tool** | Domain, hosting, analytics ringan | Harus proporsional; jangan over-engineer di discovery |
| **Opportunity cost** | Waktu yang tidak dipakai ke project lain | MVP: clarity + soft presence dulu; craft bertahap |
| **Distribusi aktif** | Social/community hustle | **Bukan** biaya MVP (bukan opsi C); bisa menyusul |

Prinsip: investasi cukup agar rumah brand hidup; hindari biaya yang hanya untuk spektakel atau funnel berat.

---

# Growth Strategy

**Terkunci: Destination + magnet ringan (B / ADR-007).**

| Lapisan | Apa artinya | MVP? |
| ------- | ----------- | ---- |
| **Destination** | Satu URL resmi; orang diarahkan ke sini dari CV, chat, GitHub, dsb. | Ya — inti |
| **Magnet ringan** | Case study / proses singkat di situs; layak dibaca & dishare | Ya — bertahap setelah kerangka clarity |
| **Distribusi aktif** (C) | Posting social / community SEA secara sistematis | Belum — opsional belakangan |
| **Ship-in-public sebagai mesin** (D) | Build di depan publik sebagai growth utama | Tidak — risiko geser fokus evaluasi founder/PO |

Implikasi:

* Situs harus layak dijadikan “link utama”
* Konten magnet mendukung narrative (ADR-004), bukan mengejar volume blog
* Growth diukur dari brand recall + inbound berkualitas, bukan vanity traffic saja → `success-metrics.md`

---

# Business Principles

1. **Brand dulu** — jangan korbankan kejelasan identitas demi CTA agresif
2. **Soft inbound** — job/client welcome; situs bukan sales page
3. **Satu rumah** — GitHub/LinkedIn satelit; situs panggung utama
4. **Clarity → presence → craft** — urutan investasi UX/konten (ADR-006)
5. **Magnet tanpa media empire** — case/proses singkat; bukan blog sebagai bisnis
6. **Jujur di klaim** — AI edge di atas fondasi product/engineering; tidak overclaim
7. **SEA-aware, pintu terbuka** — bilingual; fokus ICP tanpa menutup luar SEA

---

# Assumptions

* Founder/PO akan mengklik satu URL jika dipercaya sebagai sumber kebenaran
* Soft CTA cukup untuk memicu outreach yang relevan (tanpa pricing publik)
* Case/proses singkat menambah kepercayaan lebih dari daftar tech stack
* Waktu Rezi cukup untuk merawat destination + magnet ringan secara berkelanjutan
* Distribusi aktif belum wajib untuk validasi arah brand di fase awal
* Tidak ada kebutuhan monetisasi langsung di situs untuk “bisnis model berhasil”

---

# Success Criteria

Business model dianggap mengarah benar jika:

1. Situs terasa **aset brand**, bukan toko jasa atau CV online semata
2. Inbound job/client muncul sebagai **efek samping berkualitas**, tanpa hard sell
3. Magnet ringan (case/proses) ada dan mendukung evaluasi founder/PO
4. Biaya waktu/uang tetap proporsional; MVP tidak macet di craft atau distribusi
5. Keputusan konten/CTA bisa ditelusuri ke prinsip di dokumen ini + ADR-002 / ADR-007

Metrik kuantitatif → `success-metrics.md`.

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-vision.md` — visi dan model nilai situs
* `problem-statement.md` — rantai masalah yang dijawab
* `target-market.md` — segmen & ICP
* `competitor-analysis.md` — referensi & diferensiasi
* `pricing-strategy.md` — harga (boleh N/A untuk situs)
* `success-metrics.md` — KPI
* `../../project-manager/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md` — keputusan material
* `../../project-manager/decisions/ADR-002-portfolio-vision-positioning-audience-language.md` — brand primer
* `../../project-manager/PROJECT_STATE.md` — status project
* `../../project-manager/DECISIONS.md` — indeks ADR
