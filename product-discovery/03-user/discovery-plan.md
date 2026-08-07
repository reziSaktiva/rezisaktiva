# Discovery Plan

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini merencanakan bagaimana User Discovery untuk website portofolio pribadi **rezisaktiva** dijalankan dan dibatasi.

---

# Overview

User Discovery fase ini **assumption-led**: sintesis dari Business Baseline (ADR-002, ADR-004, ADR-005, ADR-009) dan Product Baseline (ADR-010–012), divalidasi oleh Boss Rezi. Ditambah **rencana riset ringan opsional** yang tidak memblokir Baseline User v1.0.

Bukan riset formal wajib (interview/survei sebagai gerbang baseline).

---

# Purpose

* Menetapkan tujuan, pertanyaan, asumsi, sumber, dan metode discovery user.
* Menjaga kejujuran evidence: apa yang diasumsikan vs apa yang akan divalidasi kemudian.
* Menghubungkan output user ke UX (fase berikutnya) tanpa menggeser scope Hybrid lean.

---

# Scope

## In Scope

* Inventaris asumsi tentang pengunjung primer & sekunder
* Sintesis segments, personas, goals, pains, JTBD, scenarios, journey (R1 + sekunder tipis)
* Rencana validasi ringan opsional pasca-baseline
* Confidence level dan aturan evidence

## Out of Scope

* Interview/survei wajib sebelum kunci baseline
* Analytics produksi / instrumentasi kuantitatif penuh (nanti di Engineering)
* Riset untuk audiens di luar ICP yang sudah dikunci ADR-005
* Redesign scope produk (sudah terkunci ADR-010–012)

---

# Discovery Objectives

1. Memperdalam (bukan mengganti) ICP dual founder/PO dari `target-market.md`
2. Menjelaskan jobs & friction pengunjung saat mengevaluasi Rezi sebagai product builder
3. Memetakan journey R1 Clarity (Home → About/teaser → Contact) plus jalur sekunder tipis
4. Menghasilkan insight yang actionable untuk UX tanpa menambah Must MVP
5. Mencatat asumsi berisiko tinggi dan cara validasi ringan opsional

---

# Discovery Questions

| # | Pertanyaan | Dipakai di |
| - | ---------- | ---------- |
| Q1 | Siapa yang datang, dan apa intent mereka dalam 1–3 menit pertama? | segments, personas, goals |
| Q2 | Apa yang harus mereka pahami agar merasa “ini relevan untuk saya”? | goals, JTBD, journey |
| Q3 | Di mana gesekan evaluasi & kontak terjadi hari ini (tanpa situs milik sendiri)? | pain-points, current-state journey |
| Q4 | Job mana yang wajib dilayani R1 vs boleh menunggu R2 magnet? | JTBD priority, scenarios |
| Q5 | Apa yang hiring manager / calon klien butuhkan tanpa menggeser pesan brand? | secondary journey |
| Q6 | Asumsi mana yang paling berisiko jika salah? | assumption inventory, open questions |

---

# Assumption Inventory

| ID | Asumsi | Risiko jika salah | Mitigasi |
| -- | ------ | ----------------- | -------- |
| A1 | Dua archetipe primer setara (early founder & PO) membaca lapisan pesan yang sama | Pesan terlalu “indie” atau terlalu “korporat” | Salinan netral product-builder; teaser outcome, bukan tone tunggal |
| A2 | Kunjungan singkat cukup untuk clarity jika Home + About + Contact koheren | Pengunjung tetap bingung tanpa case detail | Teaser karya di Home; magnet case di R2 (bukan blocker R1) |
| A3 | Soft CTA (email/tautan) cukup untuk inbound berkualitas di R1 | Opportunity hilang karena friction form/booking | Could Have form/calendar di product; validasi setelah live |
| A4 | Hiring manager / klien project terlayani oleh sinyal sekunder di permukaan yang sama | Mereka bounce karena “bukan CV developer” | Secondary journey tipis: sinyal fullstack + cara kerja tanpa rebrand |
| A5 | Bilingual geo-aware mengurangi alienasi SEA vs non-SEA | Default bahasa salah → bounce | Detail di UX/Engineering; switcher selalu ada (ADR-002) |
| A6 | Validasi peer/chat singkat setelah live cukup memperbaiki salinan | Asumsi ICP meleset material | Rencana riset ringan di bawah; ADR baru bila ICP berubah |

---

# Discovery Sources

| Sumber | Peran | Catatan |
| ------ | ----- | ------- |
| `01-business/` Baseline v1.0 | Sumber primer asumsi audiens & masalah | ADR-002, 004, 005, 009 |
| `02-product/` Baseline v1.0 | Batas surface & journey yang relevan | Hybrid lean; R1–R3 |
| Pengalaman Boss Rezi | Validasi framing & prioritas | Decision owner |
| Satelit publik (GitHub, LinkedIn, CV) | Bukti current-state friction | Bukan panggung utama |
| Peer / chat singkat (opsional) | Validasi salinan & clarity pasca-draft/live | Tidak memblokir baseline |
| Analytics ringan (nanti) | Arah perilaku, bukan SoT persona | Privacy-aware; fase Engineering |

---

# Discovery Method

**Metode terkunci: Assumption-led + rencana riset ringan (opsi B).**

1. **Sintesis desk** — turunkan segments/personas/goals/pains/JTBD/scenarios/journey dari baseline bisnis+produk.
2. **Review Boss Rezi** — kunci Baseline User v1.0 via ADR.
3. **Riset ringan opsional (tidak memblokir baseline):**
   - 3–5 percakapan singkat dengan founder/PO / peer di jaringan SEA
   - Minta mereka buka draft/live situs (atau deskripsi permukaan R1) dan jawab: “Siapa Rezi? Cocok untuk apa? Mau kontak?”
   - Catat mismatch salinan / bukti / CTA; revisi dokumen atau salinan UX bila material → ADR bila mengubah ICP/journey inti
4. **Tidak dilakukan di fase ini:** survei massal, usability lab formal, paid panel.

---

# Evidence Rules

* Baseline User boleh dikunci dari **asumsi terdokumentasi + validasi Boss Rezi**.
* Klaim “user selalu / tidak pernah…” tanpa sumber → tandai sebagai asumsi (A#).
* Temuan riset opsional yang bertentangan dengan ICP terkunci → eskalasi ADR, jangan diam-diam mengganti.
* Insight untuk UX harus mengacu job/pain yang ada di dokumen fase ini.

---

# Confidence Level

| Area | Confidence | Alasan |
| ---- | ---------- | ------ |
| ICP & segments primer | Tinggi | Terkunci ADR-005 + `target-market.md` |
| Goals & pains inti (rantai evaluasi) | Tinggi | Selaras ADR-004 / problem-statement |
| Journey R1 primer | Sedang–tinggi | Diturunkan dari Hybrid lean; belum diuji live |
| Kebutuhan sekunder (hiring / klien) | Sedang | Dilayani tipis; bukan optimasi utama |
| Soft CTA cukup vs form/booking | Sedang | Asumsi A3; validasi setelah R1 live |
| Detail emosional per persona | Sedang | Sintesis; riset ringan bisa mempertajam |

---

# Quality Criteria for Insights

Insight layak masuk `insights.md` jika:

1. Menjelaskan perilaku atau keputusan pengunjung (bukan preferensi desain spekulatif)
2. Mengait ke dual north star (clarity dan/atau inbound berkualitas)
3. Tidak mendorong fitur di luar Product Baseline tanpa menandai “post-R1 / ADR”
4. Bisa diterjemahkan ke pertanyaan UX (hierarki, salinan, CTA, bukti)

---

# Discovery Risks

| Risiko | Dampak | Respons |
| ------ | ------ | ------- |
| Overfit ke satu archetipe | Alienasi archetipe setara lainnya | Jaga dual primer setara (ADR-005) |
| Mengisi gap dengan case wajib di R1 | Scope creep vs ADR-010 | Teaser only; case di R2 |
| Menunda baseline menunggu interview | Discovery macet | Riset opsional eksplisit non-blocking |
| Secondary journey menggeser brand ke “CV hire” | NS-1 lemah | Pesan tetap product builder; sinyal sekunder di lapisan bukti |

---

# Expected Output

* Seluruh dokumen `03-user/` terisi dan saling rujuk
* Asumsi ber-ID (A1–A6) dan pertanyaan terbuka terdokumentasi
* Rencana riset ringan opsional tertulis (tidak wajib selesai sebelum baseline)
* Baseline User v1.0 + ADR

---

# Success Criteria

1. Boss Rezi menyetujui metode assumption-led + riset ringan opsional
2. Journey R1 + sekunder tipis tercermin di scenarios/journey/insights
3. Tidak ada Must baru yang bertentangan dengan ADR-010–012
4. UX phase bisa mulai dari insight tanpa menebak ICP ulang

---

# Exit Criteria

* Dokumen fase ini terisi (bukan TBD)
* ADR Baseline User Accepted
* Open questions material tercatat (bukan disembunyikan)

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `user-segments.md` / `user-personas.md` — siapa pengunjung
* `insights.md` — sintesis & assumption review
* `../01-business/target-market.md` — ICP bisnis
* `../02-product/mvp-definition.md` — permukaan R1
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md` — kunci fase User
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
