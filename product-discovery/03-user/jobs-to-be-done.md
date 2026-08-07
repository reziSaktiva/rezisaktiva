# Jobs To Be Done

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini merumuskan jobs-to-be-done pengunjung website portofolio pribadi **rezisaktiva**.

---

# Overview

JTBD di sini adalah pekerjaan yang ingin “selesai” saat seseorang mengevaluasi Rezi lewat situs — functional, emotional, dan social — dengan prioritas untuk permukaan R1 Hybrid lean.

---

# Purpose

* Menyatakan job dalam format yang bisa diuji di scenarios/journey
* Memisahkan job Must R1 vs job yang menunggu magnet R2
* Mengarahkan UX pada progress job, bukan dekorasi

---

# Scope

## In Scope

* Format JTBD + core / emotional / social jobs
* Prioritas job untuk MVP (R1)

## Out of Scope

* Job pemilik brand sebagai operator CMS (N/A R1)
* Job growth/social posting sebagai mesin utama
* Job “bandingkan harga vendor”

---

# JTBD Format

**When** [situasi], **I want to** [motivasi], **so I can** [hasil].

Setiap job punya: ID, persona utama, prioritas R1 (Must / Should / Later).

---

# Core Jobs

| ID | Job statement | Persona | R1 |
| -- | ------------- | ------- | --- |
| J1 | When saya menemukan Rezi (referral/search/link), I want to paham siapa dia dalam hitungan menit, so I can putuskan apakah relevan untuk saya | P1, P2 | Must |
| J2 | When saya menilai builder untuk ide/inisiatif, I want to lihat bukti ship & cara berpikir, so I can kurangi risiko outreach | P1, P2 | Must |
| J3 | When saya sudah cukup tertarik, I want to menghubungi dengan jalur soft yang jelas, so I can mulai percakapan tanpa awkward sales | P1, P2, P4 | Must |
| J4 | When saya butuh konteks lebih dalam dari Home, I want to baca narasi About yang koheren, so I can percaya framing product builder | P1, P2 | Must |
| J5 | When saya hiring / menilai kolaborasi, I want to temukan sinyal fullstack + product tanpa CV ATS, so I can lanjut atau skip proses | P3 | Should (tipis) |
| J6 | When saya ingin melihat detail proses/case, I want to baca cerita karya yang lebih dalam, so I can yakin pada craft & ownership | P1, P2 | Later (R2) |
| J7 | When bahasa default terasa asing, I want to ganti bahasa dengan mudah, so I can lanjut evaluasi nyaman | P1–P4, S6 | Must (fondasi) |

---

# Emotional Jobs

| ID | Job | Catatan |
| -- | --- | ------- |
| E1 | Merasa tidak “mengganggu” saat outreach | Soft CTA, availability line opsional |
| E2 | Merasa evaluasi fair — tidak di-hype AI / stack kosong | Honest AI edge; bukti proporsional |
| E3 | Merasa Rezi “untuk orang seperti saya” (founder/PO SEA) | Relevansi lokal tanpa menutup pintu |
| E4 | Mengurangi takut salah hire / salah ajak kolaborasi | Teaser outcome + About |

---

# Social Jobs

| ID | Job | Catatan |
| -- | --- | ------- |
| S1 | Bisa menunjuk satu URL ke cofounder / tim (“ini orangnya”) | Destination hygiene |
| S2 | Terlihat profesional saat share ke hiring chain | Clarity > gimmick |
| S3 | Peer recognition (opsional) | Bukan driver CTA R1 |

---

# Job Priority for MVP

| Prioritas | Jobs | Surface utama |
| --------- | ---- | ------------- |
| **Must R1** | J1, J2, J3, J4, J7 + E1–E4 pendukung | Home, About, Contact, teaser, i18n |
| **Should tipis** | J5 | About + tautan satelit |
| **Later R2** | J6 | Case/proses singkat (magnet) |
| **Out** | Banding harga, login app, feed sosial sebagai job inti | — |

---

# Expected Output

Set JTBD yang selaras dual north star dan Product Baseline.

---

# Exit Criteria

* Core/emotional/social jobs terdokumentasi
* Must vs Later jelas terhadap ADR-010
* Siap dipakai di scenarios & journey

---

# Related Documents

* `README.md`
* `user-goals.md`
* `pain-points.md`
* `user-scenarios.md`
* `../02-product/mvp-definition.md`
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
