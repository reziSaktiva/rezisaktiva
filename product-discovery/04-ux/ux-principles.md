# UX Principles

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan prinsip UX website portofolio pribadi **rezisaktiva**.

---

# Overview

UX R1 melayani **clarity dalam kunjungan singkat** dan **jalur soft inbound** — bukan katalog karya, bukan funnel penjualan. Prinsip di bawah mengikat IA, flows, navigasi, dan pola layar.

---

# Purpose

* Menjadi filter keputusan UX sebelum visual/token (06) dan implementasi
* Menjaga selaras ADR-002, ADR-010–013
* Mencegah anti-pattern: stack-list Home, hard sell, dual brand, over-chrome

---

# Core Principles

| ID | Prinsip | Implikasi |
| -- | ------- | --------- |
| **UX1** | **Clarity first** | First viewport menjawab “siapa & untuk siapa”; tidak menunda positioning ke bawah fold |
| **UX2** | **Satu brand, dua penekanan** | Founder & PO memakai permukaan yang sama; beda kebutuhan lewat About/teaser, bukan mode Home terpisah |
| **UX3** | **Lean surface** | Hanya Home / About / Work index sebagai *halaman*; jangan menambah halaman untuk “melayani” hiring. Overlay (Contact modal ADR-019, Quick info ADR-022) **bukan** halaman baru |
| **UX4** | **Presence tanpa katalog** | Teaser 1–3 item cukup untuk trust R1; case detail = Later R2 |
| **UX5** | **Soft path** | Contact first-class (modal, ADR-019); Email primer; LinkedIn & GitHub satelit; tanpa harga, WA/IG di R1; form singkat opsional (bukan syarat wajib) |
| **UX6** | **Bahasa adalah journey** | Geo-default + path prefix `/id` & `/en` + switcher selalu ada; makna ID/EN setara |
| **UX7** | **Kurasi > kelengkapan** | Lebih baik sedikit bukti tajam daripada meniru layout GitHub |

---

# Content Principles

1. **Hierarchy pesan:** product builder → fullstack sebagai bukti → AI sebagai edge jujur.
2. **Salinan singkat:** cukup untuk evaluasi cepat; About memperdalam, bukan essay panjang.
3. **Teaser actionable:** nama + peran/outcome + tautan bukti eksternal bila ada; bukan stub kosong. Credibility line di Home = 1 klaim non-kartu — **bukan** daftar project kedua.
4. **Contact tenang:** ajakan soft + konteks kapan relevan; ekspektasi = percakapan, bukan checkout.
5. **Availability (Should):** satu kalimat soft opsional; jangan hard “hire me now”.
6. **Secondary tipis:** hiring/klien menemukan sinyal di permukaan yang sama — tanpa job board / pricing.

---

# Interaction Principles

1. **Navigasi + switcher selalu terlihat di desktop**; di mobile (<1024px) nav halaman + switcher boleh di hamburger (ADR-020). Contact tidak dikubur. **Toggle tema** selalu di chrome (Must R1, ADR-021) dan **tidak mengubah default light-ship**.
2. **Switcher bahasa** mengganti locale dengan URL path yang shareable; preferensi user (setelah switch) hanya memengaruhi redirect `/` / URL tanpa locale — tidak menulis ulang path `/id/...` atau `/en/...` yang dibuka langsung.
3. **Primary CTA di Contact** = mulai email; satelit tidak bersaing visual dengan Email.
4. **Tidak ada dead end:** dari Home selalu ada jalur jelas ke About dan Contact.
5. **Share hygiene:** meta & URL locale stabil agar SC6 (share ke tim) berhasil.
6. **Gerakan (Could):** hanya jika memperkuat hierarchy; jangan mengorbankan clarity.
7. **Quick info (M13)** adalah overlay glanceable — bukan destinasi/route. Tidak menggantikan Contact inbound (ADR-019) dan tidak dihitung sebagai halaman baru (selaras UX3, ADR-022).

---

# Accessibility Principles

1. Hierarki heading logis per halaman.
2. Kontras teks/latar wajar; fokus keyboard terlihat pada nav, switcher, tautan Contact.
3. Target sentuh memadai di mobile (nav di dalam hamburger, switcher, Contact, toggle tema). Chrome luar hamburger (tema + Contact) harus tetap mudah diketuk di lebar 320px.
4. Teks tautan deskriptif (hindari “klik di sini”); Email/mailto dapat diakses keyboard.
5. Bahasa dokumen (`lang`) mengikuti locale aktif (`id` / `en`).

Detail token/visual final tetap di fase Engineering / design execution — bukan di dokumen ini.

---

# Success Criteria

* Reviewer ICP paham positioning dari first viewport Home (selaras I1, NS-1).
* Soft CTA Email jelas; satelit LinkedIn/GitHub tidak mengaburkan primer.
* Switcher + path locale memungkinkan lanjut evaluasi tanpa bounce bahasa (J7, SC3).
* Tidak ada permukaan terpisah untuk P3/P4; tidak ada WA/IG sebagai CTA Contact R1.
* Prinsip ini cukup menjadi acceptance untuk IA, flows, nav, dan key screens.

---

# Decision Rules

* Menambah halaman Work/case ke R1 → Work index (M9) sudah masuk via ADR-020; case detail (M10) tetap butuh ADR baru.
* Overlay Quick info **bukan** “halaman baru” (UX3) — formalisasi M13 via **ADR-022**; jangan jadikan route `/info`.
* Toggle tema Must R1 via **ADR-021**; default tetap light — mengubah default ship ke dark butuh ADR terpisah.
* Mengangkat form/calendar/WA/IG ke Must Contact → keputusan Boss Rezi + ADR bila material.
* Mengubah skema bahasa dari path prefix → ADR baru.
* Perubahan material prinsip setelah Baseline UX → ADR baru.

---

# Current Status

| Item | Status |
| ---- | ------ |
| UX Principles | **Baseline v1.0** (dokumen ini) |
| UX Baseline | **v1.0** — ADR-014 |

---

# Related Documents

* `README.md`
* `information-architecture.md`
* `user-flows.md`
* `navigation-patterns.md`
* `key-screen-patterns.md`
* `../03-user/insights.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
