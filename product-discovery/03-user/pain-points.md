# Pain Points

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendalami pain points pengunjung (dan current-state tanpa rumah digital) terkait evaluasi **rezisaktiva** sebagai product builder.

---

# Overview

Pain mengikuti rantai **visibility → narrative → evaluasi & kontak** (ADR-004). Fokus pada gesekan audiens saat menilai fit — bukan daftar keluhan generik internet.

---

# Purpose

* Menghubungkan masalah bisnis ke pengalaman user konkret
* Memprioritaskan pain yang R1 harus redakan
* Memberi input opportunity areas di journey (tanpa solusikan UI di sini)

---

# Scope

## In Scope

* Framework severity
* Tema pain inti + inventory
* Mapping pain per persona

## Out of Scope

* Solusi wireframe / copy final (→ UX)
* Pain infrastruktur hosting / SEO teknis detail
* Pain yang hanya relevan untuk produk SaaS multi-user

---

# Pain Point Framework

| Dimensi | Skala | Arti |
| ------- | ----- | ---- |
| **Severity** | High / Med / Low | Seberapa menghambat evaluasi & kontak |
| **Frequency** | Often / Sometimes / Rare | Seberapa sering muncul di konteks ICP |
| **R1 relevance** | Must ease / Later / Out | Apakah Hybrid lean harus meredakan |

---

# Core Pain Themes

1. **Fragmented proof** — bukti tersebar di GitHub, CV, chat
2. **Wrong default frame** — terbaca “developer” bukan product builder
3. **Slow fit judgment** — sulit jawab “cocok untuk ide/inisiatif saya?” cepat
4. **Contact friction** — tidak jelas bagaimana / kapan menghubungi tanpa awkward
5. **Tone mismatch risk** — terlalu generic global, terlalu lokal sempit, atau terlalu indie vs korporat
6. **Secondary evaluator gap** — hiring/klien kesulitan sinyal tanpa CV ATS / pricing (lebih rendah prioritas)

---

# Pain Points Inventory

| ID | Pain | Siapa | Severity | Freq | R1 |
| -- | ---- | ----- | -------- | ---- | --- |
| PP1 | Tidak ada satu URL yang merangkai cerita + bukti + kontak | P1–P4, Rezi | High | Often | Must ease |
| PP2 | Harus merakit narasi dari repo/CV sendiri | P1, P2 | High | Often | Must ease |
| PP3 | Positioning tidak langsung terbaca di permukaan | P1, P2 | High | Often | Must ease |
| PP4 | Outcome karya tidak terlihat tanpa menggali | P1, P2 | High | Often | Must ease (teaser) |
| PP5 | AI / stack diklaim tanpa konteks jujur → distrust | P1, P2 | Med | Sometimes | Must ease (Honest AI edge) |
| PP6 | Tidak tahu channel kontak yang “aman” / soft | P1, P2, P4 | High | Often | Must ease |
| PP7 | Bahasa default terasa salah untuk konteks geo | P1, P2, S6 | Med | Sometimes | Must ease (fondasi) |
| PP8 | Sinyal kolaborasi / profesionalisme lemah bagi PO | P2 | Med | Sometimes | Must ease (About) |
| PP9 | Hiring sulit lihat fit teknis+produk tanpa CV panjang | P3 | Med | Sometimes | Should (tipis) |
| PP10 | Tidak ada harga → ketidakpastian klien project | P4 | Low–Med | Sometimes | Out (ADR-008); soft path saja |
| PP11 | Case detail belum ada di R1 → rasa “kurang bukti” | P1, P2 | Med | Sometimes | Later (R2 magnet) |

---

# Severity Summary

* **Must ease di R1:** PP1–PP4, PP6; PP5/PP7/PP8 sebagai bagian clarity
* **Terima sementara / R2:** PP11 (teaser dulu; case kemudian)
* **Sadar tidak diselesaikan di situs:** PP10 (pricing N/A by design)
* **Secondary thin:** PP9

---

# Pain Points by Persona

| Persona | Pain dominan |
| ------- | ------------ |
| **P1** | PP2, PP3, PP4, PP6 — butuh kecepatan & ownership signal |
| **P2** | PP2, PP3, PP8, PP6 — butuh kredibilitas kolaborasi |
| **P3** | PP9, PP3 — butuh sinyal tanpa rebrand ke CV |
| **P4** | PP6, PP4, PP10 — kontak + bukti; harga tetap out |

---

# Expected Output

Inventory pain yang terhubung ke rantai masalah dan prioritas R1.

---

# Exit Criteria

* Tema inti + ID pain terdokumentasi
* Mapping R1 / Later / Out jelas
* Selaras ADR-004 tanpa menambah Must produk baru

---

# Related Documents

* `README.md`
* `user-goals.md`
* `jobs-to-be-done.md`
* `user-journey.md`
* `../01-business/problem-statement.md`
* `../../project-manager/decisions/ADR-004-problem-statement-dual-chain.md`
* `../../project-manager/decisions/ADR-013-user-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
