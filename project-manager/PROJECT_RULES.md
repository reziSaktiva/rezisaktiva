# PROJECT RULES

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-06 |

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

Aturan arsitektur spesifik (DDD, Modular Monolith, dll.) **belum** dikunci — akan ditetapkan saat Architecture / Engineering baseline.

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
* `SKILL.md`
* Dokumen baseline di `product-discovery/` (setelah ditetapkan)

**Living Document**

Diperbarui setiap sesi kerja relevan.

* `PROJECT_STATE.md`
* `TASKS.md` + `tasks/`

**Append-Only**

Hanya boleh ditambah entri baru di bagian atas; jangan rewrite sejarah.

* `DECISIONS.md` (indeks) + `decisions/ADR-*.md`
* `COMPLETE_TASK.md`
* `CONVERSATIONS.md`
* `BRAINSTORM.md`

⚠️ AI **tidak** boleh membaca seluruh `COMPLETE_TASK.md` kecuali Boss Rezi memerintahkan secara eksplisit. AI tetap wajib **append** entri baru di bagian atas.

---

# AI Collaboration Rules

* Ikuti `.cursor/skills/project-os-navigator/SKILL.md` di awal sesi yang membutuhkan konteks project.
* Ikuti `.cursor/skills/proactive-clarification/SKILL.md` sebelum asumsi pada fork keputusan.
* Setelah pekerjaan selesai, laporkan dengan `.cursor/skills/work-report-simple/SKILL.md`.
* Jangan mengimplementasikan kode sebelum Product Discovery selesai (kecuali Boss Rezi meminta eksplisit).
* Jangan memperbaiki inkonsistensi dokumen secara diam-diam — sebutkan ke user dulu.

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
