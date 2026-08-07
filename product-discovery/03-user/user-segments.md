# User Segments

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini memetakan segmen pengunjung website portofolio pribadi **rezisaktiva**.

---

# Overview

Segmen diturunkan dari ICP hybrid di `target-market.md` (ADR-005): dua segmen primer setara (early founder / indie builder dan product owner), plus segmen sekunder yang dilayani tanpa menggeser pesan brand.

Ini segmen **pengunjung situs**, bukan role aplikasi (auth/RBAC N/A — ADR-011).

---

# Purpose

* Memisahkan siapa yang dioptimasi vs siapa yang tetap welcome
* Menjadi input personas, goals, JTBD, dan journey
* Menjaga dual north star: clarity untuk primer + inbound berkualitas (termasuk jalur sekunder tipis)

---

# Scope

## In Scope

* Segmen primer & sekunder pengunjung
* Prioritas optimasi konten & journey
* Intent kunjungan per segmen

## Out of Scope

* Segmentasi demografi massal / consumer social
* Buyer persona enterprise procurement
* Role sistem / permission matrix

---

# Segment Overview

| Segmen | Prioritas | Intent inti |
| ------ | --------- | ----------- |
| S1 Early founder / indie builder (SEA) | Primer (setara S2) | Cari builder yang bisa bawa ide → live |
| S2 Product owner di perusahaan / startup (SEA) | Primer (setara S1) | Cari builder untuk inisiatif / fitur berorientasi outcome |
| S3 Hiring manager / tech lead | Sekunder | Nilai fit untuk role / kolaborasi tim |
| S4 Calon klien project / freelance | Sekunder | Nilai cocok untuk engagement terbatas |
| S5 Peer / community builder | Sekunder | Apresiasi craft & recognition |
| S6 Founder / PO luar SEA | Sekunder geo | Sama evaluasi; konteks bahasa/geo berbeda |

---

# Primary Segments

### S1 — Early founder / indie builder (SEA)

* **Siapa:** Punya ide atau produk awal; tim kecil / solo; resource terbatas
* **Konteks domain:** Digital product / tech (SaaS, app, platform, tools)
* **Apa yang dicari:** Bukti eksekusi end-to-end; thinking product; kontak natural
* **Sukses kunjungan:** Paham siapa Rezi cepat; cukup percaya diri untuk soft outreach
* **Risiko bounce:** Terasa seperti daftar tech stack / CV developer tanpa outcome

### S2 — Product owner di perusahaan / startup (SEA)

* **Siapa:** Sudah punya produk atau roadmap; butuh builder untuk fitur / rebuild / inisiatif
* **Konteks domain:** Sama — digital product / tech
* **Apa yang dicari:** Kredibilitas ship & kolaborasi; sinyal product thinking; komunikasi mulus
* **Sukses kunjungan:** Melihat bukti + cara kerja relevan; merasa aman menghubungi
* **Risiko bounce:** Terlalu “indie hustle” tanpa sinyal profesionalisme kolaborasi

Kedua segmen primer **setara** — tidak ada “persona utama tunggal”. Lapisan pesan sama: product builder → fullstack → AI edge; penekanan evaluasi boleh beda.

---

# Secondary Segments

| Segmen | Peran terhadap situs | Dilayani bagaimana |
| ------ | -------------------- | ------------------ |
| **S3 Hiring manager / tech lead** | Evaluasi peluang role / kolaborasi | Sinyal fullstack + cara kerja di About/teaser; pesan tetap product builder |
| **S4 Calon klien project** | Evaluasi hire per engagement | Soft path Contact; tanpa pricing / hard sell (ADR-008) |
| **S5 Peer / community** | Recognition jangka panjang | Craft & kejelasan narasi; bukan driver CTA |
| **S6 Founder/PO luar SEA** | Evaluasi sama, geo berbeda | Bilingual geo-aware; bukan fokus optimasi konten utama |

---

# Segment Prioritization

| Prioritas | Segmen | Implikasi |
| --------- | ------ | --------- |
| P0 — optimasi utama | S1, S2 | Salinan, bukti, journey R1 dirancang untuk mereka |
| P1 — dilayani tipis | S3, S4 | Secondary journey: temukan sinyal & kontak tanpa rebrand |
| P2 — didukung pasif | S5, S6 | Jangan dioptimasi sebagai KPI; jangan dikorbankan total |

**Bukan segmen target optimasi:** pure design-agency shoppers, AI specialist murni tanpa fondasi product/engineering, funnel vendor berpricing agresif, mass consumer social.

---

# Expected Output

Pemetaan segmen yang selaras ADR-005 dan siap diterjemahkan ke personas + journey.

---

# Exit Criteria

* Primer vs sekunder jelas
* Dual primer setara terdokumentasi
* Prioritas P0/P1/P2 disepakati

---

# Related Documents

* `README.md`
* `user-personas.md`
* `discovery-plan.md`
* `../01-business/target-market.md`
* `../../project-manager/decisions/ADR-005-target-market-icp-sea-tech.md`
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
