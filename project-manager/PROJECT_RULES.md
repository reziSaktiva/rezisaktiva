# PROJECT RULES

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-21 |

---

# Purpose

Dokumen ini berisi aturan, prinsip, dan standar yang harus diikuti selama perencanaan dan pengembangan project **rezisaktiva**.

---

# Scope

Dokumen ini mengatur:

* Prinsip dasar pengembangan.
* Klasifikasi dan tata kelola dokumen.
* Aturan kolaborasi dengan AI Assistant.
* Aturan pencatatan keputusan.
* Alur kerja project secara keseluruhan.

Dokumen ini **tidak** mengatur:

* Status, progress, atau fase aktif — lihat `PROJECT_STATE.md`.
* Detail keputusan teknis atau bisnis — lihat `DECISIONS.md`.
* Detail scope tiap fase discovery — lihat `README.md` pada masing-masing folder `../product-discovery/`.

---

# Core Principles

* Documentation First
* Business First
* User-Centered Design
* AI Friendly Development
* Simplicity over Premature Optimization
* Maintainability over Complexity

Aturan arsitektur spesifik sudah dikunci di `../product-discovery/05-architecture/` + ADR-015 (Architecture Baseline v1.0) dan ADR-016 (Engineering Baseline v1.0, single-app). Perubahan material memerlukan ADR baru.

---

# Documentation Governance

## Documentation Rules

* Semua keputusan penting harus didokumentasikan.
* Dokumentasi selalu menjadi acuan utama sebelum implementasi.
* Dokumentasi harus diperbarui jika ada perubahan requirement, arsitektur, atau workflow.
* Hindari dokumentasi yang duplikat atau saling bertentangan.

## Document Type Classification

**Static Reference**

Dokumen struktur/tujuan/aturan. Tidak boleh berisi status, progress %, atau phase aktif yang berubah-ubah.

Hanya diubah jika terjadi perubahan **struktural**, dan perubahan wajib dicatat di `COMPLETE_TASK.md`.

Termasuk:

* Semua `README.md`
* `PROJECT_OVERVIEW.md`
* `ARCHITECTURE_OVERVIEW.md`
* `PROJECT_RULES.md`
* `DEVELOPER_WORKFLOW.md`
* `.cursor/skills/*/SKILL.md`
* `.cursor/rules/*.mdc`
* Dokumen baseline di `product-discovery/` (setelah ditetapkan)

**Living Document**

Diperbarui setiap sesi kerja relevan.

* `PROJECT_STATE.md`
* `TASKS.md` + `tasks/`

Konvensi ID backlog (detail di `TASKS.md`):

* Parent: `T-XXX` (global, tidak didaur ulang)
* Subtask: `T-XXX.N` (contoh `T-001.1`; tidak didaur ulang setelah dipakai)
* Referensi kerja (Fokus, Snapshot, COMPLETE_TASK, Impact di CONVERSATIONS) menyebut kode subtask bila menyentuh checklist

**Append-Only**

Hanya boleh ditambah entri baru di bagian atas; jangan rewrite sejarah — **kecuali Boss Rezi memerintahkan secara eksplisit** (contoh: retrofit kode subtask di riwayat).

* `DECISIONS.md` (indeks) + `decisions/ADR-*.md`
* `COMPLETE_TASK.md`
* `CONVERSATIONS.md`
* `BRAINSTORM.md`

⚠️ AI **tidak** boleh membaca seluruh `COMPLETE_TASK.md` kecuali Boss Rezi memerintahkan secara eksplisit. Default: **append** entri baru di bagian atas.

---

# AI Collaboration Rules

* Ikuti `.cursor/skills/project-os-navigator/SKILL.md` di awal sesi yang membutuhkan konteks project.
* Cek kelengkapan task + dokumen acuan dulu (untuk UI: kode produksi yang ada, bukan mockup HTML). **Tanya Boss Rezi hanya jika urgent** (gap, salah dokumen, atau hal di luar rencana) — bukan tanya ritual, bukan “tidak yakin” yang bisa diselesaikan dengan membaca. Jangan berasumsi/mengarang/lanjut diam-diam pada yang unplanned. `.cursor/rules/ask-before-assuming.mdc` + `.cursor/skills/proactive-clarification/SKILL.md` (cara bertanya saat memang wajib).
* Setelah pekerjaan selesai, laporkan dengan `.cursor/skills/work-report-simple/SKILL.md`.
* Audit dokumentasi menyeluruh **hanya jika diminta eksplisit**: `.cursor/skills/docs-consistency-audit/SKILL.md` (report-only; jangan trigger otomatis).
* Implementasi kode mengikuti `Active Conversation Mode` di `PROJECT_STATE.md` (misal: kode R1 diizinkan saat Active Mode = Development), kecuali Boss Rezi meminta eksplisit di luar mode itu.
* Jangan memperbaiki inkonsistensi dokumen secara diam-diam — sebutkan ke user dulu.
* **Task UI/UX wajib ikuti `.cursor/rules/ui-ux-mockup-check.mdc`** — acuan visual = kode produksi + arahan Boss Rezi (**ADR-024**). `design-mockups/` arsip, bukan kontrak. Verifikasi terhadap implementasi + arahan yang dikunci, bukan terhadap HTML mockup. Desain yang menabrak baseline UX / dua interpretasi belum dikunci = urgent, tanya Boss Rezi dulu.

---

# Decision Recording (ADR)

Keputusan material dicatat sebagai:

1. File baru `decisions/ADR-NNN-slug.md`
2. Satu baris indeks di bagian atas tabel `DECISIONS.md`

Format ADR: Title / Status / Date / Decision / Reason / Alternatives Considered.

---

# Workflow Overview

```text
Product Discovery (01→06)
        ↓
Repository & Bootstrap
        ↓
Development
```

---

# Related Documents

* `README.md`
* `PROJECT_STATE.md`
* `DECISIONS.md`
* `../AGENTS.md`
