# Product Discovery

Product Discovery adalah fase untuk memahami **apa yang akan dibangun, mengapa harus dibangun, dan bagaimana solusi tersebut memberikan nilai** — dalam konteks website portofolio pribadi **rezisaktiva**.

Pada fase ini **tidak ada implementasi kode**. Seluruh fokus diarahkan pada riset, perencanaan, dokumentasi, dan pengambilan keputusan agar proses pengembangan berjalan lebih cepat dan meminimalkan perubahan besar di kemudian hari.

---

# Objectives

Tujuan utama Product Discovery adalah:

* Memahami tujuan dan positioning portofolio.
* Menentukan audiens yang ingin dijangkau.
* Mendefinisikan ruang lingkup website (halaman, konten, interaksi).
* Menyusun prioritas untuk MVP.
* Merancang pengalaman pengguna (UX).
* Menentukan arsitektur yang sesuai (bila diperlukan).
* Mendokumentasikan keputusan teknis sebelum implementasi.
* Menyediakan dokumentasi sebagai acuan implementasi.

---

# Workflow

```text
Business
    ↓
Product
    ↓
User
    ↓
UX
    ↓
Architecture
    ↓
Engineering
```

Setiap tahap harus diselesaikan terlebih dahulu sebelum melanjutkan ke tahap berikutnya.

---

# Folder Structure

```text
product-discovery/
├── README.md
├── 01-business/
├── 02-product/
├── 03-user/
├── 04-ux/
├── 05-architecture/
└── 06-engineering/
```

---

# Discovery Stages

## 01 — Business

Fokus pada tujuan, positioning, dan arah portofolio sebagai “produk”.

## 02 — Product

Fokus pada definisi scope website, MVP, dan prioritas fitur/halaman.

## 03 — User

Fokus pada siapa yang mengunjungi/menggunakan portofolio.

## 04 — UX

Fokus pada information architecture, navigasi, dan pola layar.

## 05 — Architecture

Fokus pada arsitektur sistem secara konseptual (sesuai kompleksitas yang dipilih).

## 06 — Engineering

Fokus pada keputusan teknis sebelum implementasi dimulai.

---

# Documentation Rules

* Setiap keputusan penting dicatat pada `../project-manager/PROJECT_STATE.md` dan `../project-manager/DECISIONS.md` sesuai kebutuhan.
* Hindari implementasi kode sebelum dokumentasi utama selesai.
* Semua perubahan melalui diskusi dan keputusan yang jelas.
* Dokumentasi menjadi Source of Truth sebelum implementasi dimulai.
* README fase **tidak** memuat status ✅/⏳/progress % — itu milik `PROJECT_STATE.md`.

---

# Exit Criteria

Fase Product Discovery dianggap selesai apabila:

* Business Baseline v1.0 ditetapkan.
* Product Baseline v1.0 ditetapkan.
* User Baseline v1.0 ditetapkan.
* UX Baseline v1.0 ditetapkan.
* Architecture Baseline v1.0 ditetapkan (jika relevan).
* Engineering Planning Baseline v1.0 ditetapkan.
* Keputusan penting tercatat di `DECISIONS.md`.
* Dokumentasi siap menjadi acuan implementasi.

---

# Next Phase

Setelah Exit Criteria terpenuhi: **Repository & Bootstrap** (inisialisasi stack sesuai Engineering Planning), lalu Development.

---

# Related Documents

* `../project-manager/README.md`
* `../project-manager/PROJECT_OVERVIEW.md`
* `../project-manager/PROJECT_RULES.md`
* `../project-manager/PROJECT_STATE.md`
* `../project-manager/DECISIONS.md`
