# User Flows

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan alur pengguna website portofolio **rezisaktiva** untuk R1 Clarity (+ cabang sekunder tipis).

---

# Overview

Flows diterjemahkan dari skenario SC1–SC6 dan journey R1. Fokus: evaluasi singkat → soft next step. Bukan flow CMS, auth, atau halaman case `/work/[slug]`.

> **Update (2026-08-26, ADR-027):** F7 = buka **project sheet** (overlay dari bawah) dari tile Work index. Route `/work/[slug]` tetap di luar R1.

---

# Purpose

* Menghubungkan User Discovery ke pola layar & navigasi
* Menjadi acceptance “happy path” sebelum implementasi
* Menjaga secondary path tanpa pohon navigasi baru

---

# Flow Inventory

| ID | Nama | Persona | Prioritas |
| -- | ---- | ------- | --------- |
| F1 | Evaluasi fit cepat (founder) | P1 | Primer |
| F2 | Evaluasi kolaborasi (PO) | P2 | Primer |
| F3 | Ganti bahasa lalu lanjut | P1/P2 | Primer (lintas) |
| F4 | Cek sinyal hiring | P3 | Sekunder tipis |
| F5 | Soft outreach klien | P4 | Sekunder tipis |
| F6 | Share URL ke tim | P1/P2 | Primer sosial |
| F7 | Buka project sheet | P1/P2 | Primer (M10 overlay, ADR-027) |

---

# Primary Flows

### F1 — Evaluasi fit cepat (SC1)

1. Masuk via URL (locale default atau link ber-locale)
2. **Home** — baca first viewport (positioning)
3. Skim **status pekerjaan (Now)** + **credibility line** (1 klaim non-kartu) + **work teaser** (1–3 kartu karya)
4. Opsional: buka **About** atau **Work index** (`/projects`, M9) bila butuh detail lebih
5. Di Work index: klik tile → **project sheet** (F7, ADR-027); live/repo hanya dari dalam sheet
6. Buka **Contact modal** (tombol di chrome, ADR-019) → kirim Email **atau** simpan URL / lanjut satelit bila perlu
7. Sukses: paham “Rezi = product builder…”; soft next step terjadi atau URL disimpan

**Failure modes:** Home = daftar stack; Contact tersembunyi; tidak ada Email jelas.

---

### F2 — Evaluasi kolaborasi (SC2)

1. Masuk Home (clarity)
2. Ke **About** — cara berpikir / kolaborasi / AI edge jujur
3. Kembali atau lanjut cek **teaser** outcome di Home / **Work index** (tile membuka sheet, F7)
4. **Contact modal** — Email primer (ADR-019)
5. Sukses: cukup sinyal profesional + product thinking untuk outreach soft

**Failure modes:** About tidak menambah trust; tone terlalu kosong atau terlalu “dev for hire”.

---

### F3 — Ganti bahasa (SC3)

1. User merasa default bahasa kurang pas
2. Pakai **language switcher** di chrome
3. Land di path sibling (`/id/...` ↔ `/en/...`) halaman yang sama
4. Lanjut F1 atau F2 tanpa mengulang pencarian URL
5. Sukses: evaluasi berlanjut; makna salinan setara

**Failure modes:** switcher hilang; redirect ke Home selalu; salinan tidak setara.

---

### F6 — Share ke tim (SC6)

1. User menyalin URL ber-locale (disarankan)
2. Rekan membuka URL yang sama
3. Rekan menjalankan F1/F2 singkat
4. Sukses: satu destination cukup untuk align

---

### F7 — Buka project sheet (ADR-027)

1. User di **Work index** (`/[locale]/projects`) **atau** di teaser Home
2. Klik **tile karya** (bukan URL live/repo; tautan “Semua proyek” tetap ke index)
3. **Sheet dari bawah** terbuka: preview live (iframe) atau galeri, services, location or company, year, description
4. Opsional: tautan live/repo **di dalam sheet** (tab baru); tutup sheet (Escape / scrim / kontrol tutup)
5. Sukses: paham proyek apa dan bagaimana dikerjakan tanpa meninggalkan situs lebih dulu

**Failure modes:** tile langsung keluar ke GitHub/live; sheet kosong/dikarang; Quick Info hilang dari Work index.

---

# Secondary Flows

### F4 — Hiring sinyal (SC4)

1. Home positioning → About
2. Ikuti GitHub (satelit) bila perlu bukti teknis
3. Putuskan lanjut/skip **tanpa** mengubah situs jadi CV ATS
4. Sukses: cukup sinyal; brand tetap product builder

### F5 — Klien soft (SC5)

1. Home / teaser → Contact modal
2. Email (tanpa mencari harga)
3. Sukses: outreach terkirim; ekspektasi diskusi
4. Failure diterima: mencari pricing — salinan Contact mengarahkan ke percakapan (ADR-008)

---

# Out of Scope Flows (R1)

* Halaman case `/work/[slug]` (bukan overlay F7)
* Calendar booking
* Chat WA / DM Instagram sebagai jalur Contact
* Login, CMS, personalisasi akun

---

# Success Criteria

* F1–F3, F6, dan **F7** (project sheet) terdokumentasi sebagai primer
* F4–F5 tipis pada permukaan yang sama
* Route `/work/[slug]` eksplisit di luar R1
* Failure modes mengunci anti-pattern di key screens

---

# Current Status

| Item | Status |
| ---- | ------ |
| User Flows | **Baseline v1.0** (dokumen ini) |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `information-architecture.md`
* `navigation-patterns.md`
* `key-screen-patterns.md`
* `../03-user/user-scenarios.md`
* `../03-user/user-journey.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-manager/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
