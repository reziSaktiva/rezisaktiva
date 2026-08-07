# User Personas

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendalami persona pengunjung website portofolio pribadi **rezisaktiva**.

---

# Overview

Dua persona primer setara (archetype, bukan nama fiksi wajib) diturunkan dari segmen S1/S2. Persona sekunder ringkas untuk hiring manager dan calon klien — mendukung journey sekunder tipis tanpa menggeser brand.

---

# Purpose

* Memberi wajah konkret untuk goals, pains, scenarios, dan journey
* Menjaga penekanan evaluasi berbeda tanpa dua brand
* Menjadi acuan salinan UX (tone, bukti, CTA)

---

# Scope

## In Scope

* 2 persona primer (setara)
* 2 persona sekunder ringkas (hiring / klien project)
* Prinsip pemakaian persona di fase berikutnya

## Out of Scope

* Persona konsumen massal / follower social sebagai driver
* Persona “Rezi sebagai user aplikasi” (pemilik brand bukan visitor role sistem)
* Detail UI preference spekulatif

---

# Persona Principles

1. **Archetype over fiction** — label peran + konteks; nama fiksi opsional, bukan syarat
2. **Satu brand, dua penekanan** — lapisan pesan sama; pertanyaan di kepala boleh beda
3. **Job > demografi** — usia/gender tidak jadi poros; konteks produk & keputusan yang diutamakan
4. **Evidence jujur** — AI edge sebagai lapisan, bukan klaim specialist murni
5. **Soft next step** — sukses persona = paham + cukup percaya untuk kontak, bukan “closing”

---

# Primary Personas

### P1 — Early founder / indie builder (SEA)

| Field | Detail |
| ----- | ------ |
| **Segmen** | S1 |
| **Konteks** | Ide atau produk awal; lean; sering jadi decision maker tunggal |
| **Motivasi kunjungan** | “Apa dia bisa bantu saya ship?” |
| **Pertanyaan di kepala** | Pernah nge-ship apa? Bisa ngomong product, bukan cuma kode? Cara hubungi gampang? |
| **Bukti yang dicari** | Outcome singkat, end-to-end ownership, narasi builder (bukan list stack) |
| **Kekhawatiran** | Terjebak hire yang hanya coding tanpa ownership produk |
| **Sukses kunjungan** | Dalam hitungan menit: paham positioning; simpan URL atau soft outreach |
| **Bahasa** | Nyaman ID; EN sebagai cadangan / konteks regional |
| **Risiko salah pesan** | Situs terasa CV developer / tech bingo |

### P2 — Product owner di perusahaan / startup (SEA)

| Field | Detail |
| ----- | ------ |
| **Segmen** | S2 |
| **Konteks** | Ada produk/roadmap; butuh builder untuk inisiatif; sering kolaborasi dengan tim |
| **Motivasi kunjungan** | “Apa dia fit untuk inisiatif kami — dan enak diajak kerja?” |
| **Pertanyaan di kepala** | Thinking-nya product-kah? Kredibel di konteks digital product? Bisa kolaborasi? |
| **Bukti yang dicari** | Cara berpikir, ship history, sinyal komunikasi profesional |
| **Kekhawatiran** | Builder yang “cowboy” atau tidak bisa selaras proses tim |
| **Sukses kunjungan** | Cukup sinyal kolaborasi + outcome; kontak tanpa pressure sales |
| **Bahasa** | ID/EN tergantung konteks kerja; switcher penting |
| **Risiko salah pesan** | Terlalu indie hustle / personal brand kosong tanpa substansi |

**Hubungan P1 ↔ P2:** sama-sama mengevaluasi fit product builder; P1 lebih sensitif ke kecepatan & ownership end-to-end; P2 lebih sensitif ke kolaborasi & kredibilitas profesional.

---

# Secondary Personas

### P3 — Hiring manager / tech lead (ringkas)

* **Segmen:** S3
* **Job singkat:** Cek apakah Rezi masuk akal untuk role atau kolaborasi teknis/produk
* **Yang dibutuhkan dari situs:** Sinyal fullstack + product thinking; About yang koheren; tautan bukti (GitHub sebagai satelit)
* **Bukan yang dicari:** CV ATS panjang atau positioning “developer for hire” sebagai brand utama
* **Implikasi:** Secondary journey tipis — jangan redesign Home jadi job board

### P4 — Calon klien project / freelance (ringkas)

* **Segmen:** S4
* **Job singkat:** Putuskan apakah worth soft outreach untuk engagement terbatas
* **Yang dibutuhkan:** Kejelasan siapa Rezi, contoh outcome, Contact mudah
* **Bukan yang dicari:** Pricing publik, paket paket, hard funnel (ADR-008)
* **Implikasi:** Soft CTA cukup di R1; form/booking = Could Have

Peer (S5) dan founder luar SEA (S6) tidak dibuatkan persona penuh — cukup di segments; kebutuhan mereka tertutup clarity + bilingual.

---

# Expected Output

Persona primer & sekunder yang konsisten dengan ADR-005 dan siap dipakai di goals/JTBD/journey.

---

# Exit Criteria

* P1 & P2 setara dan terdokumentasi
* P3 & P4 cukup untuk secondary journey
* Prinsip “satu brand, dua penekanan” jelas

---

# Related Documents

* `README.md`
* `user-segments.md`
* `user-goals.md`
* `user-scenarios.md`
* `../01-business/target-market.md`
* `../../project-manager/decisions/ADR-005-target-market-icp-sea-tech.md`
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
