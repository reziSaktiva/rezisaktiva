# User Scenarios

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menggambarkan skenario penggunaan konkret untuk pengunjung website portofolio **rezisaktiva**.

---

# Overview

Skenario berfokus pada **R1 Clarity** (primer) plus **jalur sekunder tipis** untuk hiring manager dan calon klien. Bukan skenario R2 case detail sebagai Must.

---

# Purpose

* Menguji apakah permukaan Hybrid lean menyelesaikan job Must
* Memberi narasi siap pakai untuk journey map & UX flows
* Menjaga secondary path tetap tipis

---

# Scope

## In Scope

* Format skenario + core scenarios P1–P4
* Happy path R1 dan variasi sekunder

## Out of Scope

* Script usability test formal
* Skenario CMS/auth
* Skenario blog/social engine

---

# Scenario Format

Setiap skenario memuat: ID, persona, trigger, langkah ringkas, job terkait, hasil sukses, failure mode.

---

# Core Scenarios

### SC1 — Founder menilai fit cepat (P1, primer)

* **Trigger:** Dapat link rezisaktiva dari peer / bio / chat
* **Langkah:** Buka Home → baca positioning & teaser → skim About bila perlu → Contact (email/LinkedIn)
* **Jobs:** J1, J2, J3
* **Sukses:** Bisa bilang “Rezi = product builder…”; outreach soft terkirim atau URL disimpan
* **Failure:** Home terasa tech-stack list; tidak ada jalur kontak jelas

### SC2 — PO evaluasi kolaborasi (P2, primer)

* **Trigger:** Cari builder untuk inisiatif roadmap; buka situs dari referral/search
* **Langkah:** Home clarity → About (cara berpikir/kolaborasi) → teaser outcome → Contact
* **Jobs:** J1, J2, J4, J3
* **Sukses:** Cukup sinyal profesional + product thinking; soft outreach
* **Failure:** Tone terlalu indie kosong; About tidak menambah kepercayaan

### SC3 — Ganti bahasa lalu lanjut evaluasi (P1/P2)

* **Trigger:** Default bahasa terasa kurang pas
* **Langkah:** Pakai switcher → lanjut SC1/SC2
* **Jobs:** J7 (+ J1–J3)
* **Sukses:** Evaluasi berlanjut tanpa bounce karena bahasa
* **Failure:** Switcher hilang / salinan ID–EN tidak setara makna

### SC4 — Hiring manager cek sinyal (P3, sekunder tipis)

* **Trigger:** Screening kandidat / potensi kolaborasi; buka URL portofolio
* **Langkah:** Home positioning → About → ikuti tautan bukti satelit (GitHub) bila perlu → putuskan lanjut/skip
* **Jobs:** J5, J1
* **Sukses:** Cukup sinyal untuk next step hiring **tanpa** situs berubah jadi CV ATS
* **Failure:** Tidak ada sinyal teknis sama sekali; atau brand tergeser jadi “developer for hire” only

### SC5 — Calon klien soft outreach (P4, sekunder tipis)

* **Trigger:** Butuh bantuan project terbatas; evaluasi cepat
* **Langkah:** Home/teaser → Contact (tanpa cari harga)
* **Jobs:** J3, J2
* **Sukses:** Outreach terkirim; ekspektasi: diskusi dulu, bukan checkout
* **Failure:** Mencari pricing page dan frustrasi — diterima sebagai non-goal (ADR-008); salinan Contact harus mengarahkan ke percakapan

### SC6 — Share satu URL ke tim (P1/P2, social)

* **Trigger:** Mau align dengan cofounder/tim sebelum kontak
* **Langkah:** Buka situs → share URL → rekan melakukan SC1/SC2 singkat
* **Jobs:** SJ1, J1
* **Sukses:** Rekan paham positioning dari URL yang sama
* **Failure:** Halaman tidak layak dishare (meta/clarity lemah)

### SC7 — (Later) Baca case singkat (bukan R1 Must)

* **Trigger:** Setelah kerangka live; ingin detail proses
* **Jobs:** J6
* **Catatan:** Ditunda ke R2 magnet; di R1 diganti teaser di Home

---

# Expected Output

Set skenario yang menutup job Must R1 dan jalur sekunder tipis.

---

# Exit Criteria

* SC primer (SC1–SC3) + sekunder (SC4–SC5) terdokumentasi
* SC7 eksplisit Later
* Failure modes mengunci anti-pattern UX

---

# Related Documents

* `README.md`
* `jobs-to-be-done.md`
* `user-journey.md`
* `user-personas.md`
* `../02-product/mvp-definition.md`
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
