# Insights

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mensintesis insight User Discovery untuk website portofolio **rezisaktiva**.

---

# Overview

Insight digabung dari assumption-led discovery (metode B) yang diselaraskan dengan Business & Product Baseline. Riset ringan opsional dicatat sebagai langkah berikutnya — tidak menunda kunci fase ini.

---

# Purpose

* Menutup fase User dengan keputusan yang actionable
* Mereview asumsi (A1–A6)
* Menyerahkan implikasi jelas ke UX / Architecture

---

# Scope

## In Scope

* Observasi kunci, insight, assumption review
* Implikasi produk (tanpa mengubah baseline terkunci kecuali ADR)
* Open questions & decision gate

## Out of Scope

* Spesifikasi UI/visual
* Keputusan stack engineering
* Mengubah MVP surface tanpa ADR baru

---

# Key Observations

1. ICP dual founder/PO sudah terkunci — User phase memperdalam, bukan mengganti.
2. Gesekan terbesar hari ini ada di **merakit narasi** dan **menilai fit cepat**, bukan di ketiadaan akun sosial.
3. Hybrid lean (Home/About/Contact + teaser) cukup untuk job Must R1 bila clarity & soft CTA kuat.
4. Hiring/klien butuh jalur, tetapi **bukan** brand kedua.
5. Case detail adalah desire (PP11/J6), bukan blocker clarity — selaras ADR-010 (R2).
6. Evidence baseline = asumsi + validasi Boss Rezi; confidence journey live masih sedang sampai ada draft/live + riset ringan.

---

# Insights

| ID | Insight | Konsekuensi |
| -- | ------- | ----------- |
| I1 | **Clarity is the product of the first visit** — pengunjung membayar dengan perhatian singkat | UX harus memenangkan Orient dalam viewport awal |
| I2 | **Satu lapisan pesan, dua penekanan evaluasi** — P1 ↔ P2 beda pertanyaan, sama brand | Jangan split Home jadi dua mode; bedakan lewat About/teaser emphasis |
| I3 | **Teaser mengantar trust; case memperdalam** — memaksa case di R1 menunda destination | Pertahankan teaser Must; case Should/Later |
| I4 | **Soft path menentukan NS-2** — tanpa Contact yang tenang, clarity tidak jadi inbound | Contact = first-class surface, bukan footer afterthought |
| I5 | **Secondary success = signal, not conversion UI** — P3/P4 sukses jika menemukan bukti/kontak | Jangan tambah job board / pricing untuk “melayani” mereka |
| I6 | **Bahasa adalah bagian journey, bukan chrome kosmetik** — J7 memengaruhi bounce early | Geo-default + switcher masuk acceptance UX R1 |
| I7 | **Current-state pain = fragmented proof** — situs menang jika jadi assembler cerita | Kurasi sadar > meniru layout GitHub |

---

# Assumption Review

| ID | Status saat baseline | Catatan |
| -- | -------------------- | ------- |
| A1 Dual primer setara | Accepted (ADR-005) | Tetap; pantau tone bias di salinan |
| A2 Clarity tanpa case penuh | Accepted untuk R1 | Validasi setelah teaser live; PP11 known |
| A3 Soft CTA cukup | Provisional | Riset ringan / observasi inbound setelah R1 |
| A4 Secondary thin cukup | Accepted untuk fase ini | Jika hiring jadi sumber utama opportunity → ADR |
| A5 Bilingual mengurangi alienasi | Accepted arah (ADR-002) | Detail deteksi geo di UX/Eng |
| A6 Riset ringan pasca-baseline | Planned | 3–5 chat; tidak memblokir ADR-013 |

---

# Product Implications

* **Tidak ada perubahan Must** terhadap ADR-010–012 dari temuan User.
* Perkuat penekanan: Home clarity, teaser berkualitas, About risk-reducer, Contact soft.
* Could Have (form/calendar) hanya jika A3 terbukti lemah setelah live.
* R2 magnet tetap jawaban untuk J6 — jangan naikkan ke Must diam-diam.

---

# Implications for Next Phases

## For UX Discovery

* Susun IA & flows dari SC1–SC5 dan target journey R1
* Prioritaskan first-screen messaging, teaser pattern, About structure, Contact soft
* Rancang secondary path tanpa nav/IA terpisah untuk hiring
* Spec bilingual geo-aware + switcher sebagai acceptance
* Pakai opportunity areas di `user-journey.md` sebagai backlog pertanyaan desain

## For Architecture Discovery

* Publik read-only site; tidak ada auth/RBAC (ADR-011)
* Butuh fondasi i18n dan destination hygiene (meta, URL stabil)
* Integrasi Contact = mailto/tautan dulu; form hanya jika diputuskan nanti
* Analytics ringan privacy-aware sebagai pendukung validasi A3 — bukan SoT persona

---

# Open Questions

| # | Pertanyaan | Kapan dijawab |
| - | ---------- | ------------- |
| OQ1 | Apakah teaser 1–3 item cukup tanpa case untuk P2 yang risk-averse? | Setelah draft/live + riset ringan |
| OQ2 | Soft CTA mana yang paling natural (email vs LinkedIn vs keduanya)? | UX + preferensi Boss Rezi |
| OQ3 | Seberapa agresif availability line tanpa terasa sales? | UX copy |
| OQ4 | Apakah hiring inbound cukup besar sehingga secondary path perlu diperkuat? | Observasi pasca-R1 |
| OQ5 | Aturan default bahasa di edge cases (VPN, bahasa browser)? | UX + Engineering |

---

# Decision Gate

Baseline User v1.0 **siap dikunci** jika Boss Rezi menyetujui:

1. Metode assumption-led + riset ringan opsional
2. Journey R1 primer + sekunder tipis
3. Insight I1–I7 sebagai acuan UX
4. Tidak ada Must produk baru dari fase ini

→ Dikunci lewat **ADR-013**.

---

# Expected Output

Sintesis yang menutup T-003 dan membuka T-004 (UX) tanpa menebak ICP ulang.

---

# Exit Criteria

* Insight & assumption review lengkap
* Implikasi UX/Architecture tertulis
* Open questions tidak disembunyikan
* ADR Baseline User Accepted

---

# Related Documents

* `README.md`
* `discovery-plan.md`
* `user-journey.md`
* `../02-product/mvp-definition.md`
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
