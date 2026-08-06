# Project Manager

Folder ini merupakan **Project Operating System (Project OS)** untuk project **rezisaktiva** (website portofolio pribadi).

Folder ini didedikasikan untuk mendokumentasikan **cara kerja**: proses kolaborasi antara Developer dan AI Assistant, aturan project, status dan progress, keputusan penting, riwayat perubahan, serta log diskusi dan brainstorming.

Dokumentasi tentang **produk** yang dibangun (business, product, user, UX, architecture, engineering) **tidak** berada di folder ini, melainkan di `../product-discovery/`.

> **Source of Truth:**
> * `project-manager/` — bagaimana project ini dikerjakan (proses, aturan, keputusan, status).
> * `../product-discovery/` — apa yang dibangun (pengetahuan produk).

---

# Purpose

* Menjadi pusat dokumentasi proses kerja project.
* Mencatat seluruh keputusan penting beserta alasannya (ADR).
* Melacak status, milestone, dan progress project secara real-time.
* Menjaga riwayat perubahan dan log percakapan penting antar sesi.
* Memudahkan kolaborasi antara Boss Rezi dan AI Assistant.
* Menjaga agar dokumentasi dan implementasi selalu sinkron.

---

# Scope

`project-manager/` mencakup:

* Aturan dan prinsip kerja project.
* Ringkasan dan gambaran umum project.
* Status, milestone, dan progress terkini.
* Keputusan penting (ADR) beserta alasan dan alternatif.
* Riwayat perubahan dokumentasi maupun implementasi.
* Log diskusi dan bank ide dari sesi kerja bersama AI.

`project-manager/` **tidak** mencakup:

* Dokumentasi detail business, product, user, UX, architecture, atau engineering — lihat `../product-discovery/README.md`.
* Implementasi kode.

---

# Folder Structure

```text
rezisaktiva/
├── project-manager/          → cara kerja, keputusan, status (folder ini)
│   ├── README.md
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE_OVERVIEW.md
│   ├── PROJECT_RULES.md
│   ├── PROJECT_STATE.md      → baca section "Snapshot" dulu
│   ├── TASKS.md              → indeks backlog
│   ├── tasks/                → detail task per release
│   ├── DECISIONS.md          → indeks ADR
│   ├── decisions/            → satu file per ADR
│   ├── DEVELOPER_WORKFLOW.md
│   ├── COMPLETE_TASK.md      → ⚠️ JANGAN dibaca AI kecuali diperintah
│   ├── CONVERSATIONS.md
│   └── BRAINSTORM.md
└── product-discovery/        → pengetahuan produk (business s/d engineering)
```

---

# Core Documents

| File | Description |
| ---- | ----------- |
| `PROJECT_OVERVIEW.md` | Gambaran umum project |
| `PROJECT_RULES.md` | Aturan, prinsip, klasifikasi dokumen |
| `PROJECT_STATE.md` | Living status (Snapshot di atas) |
| `TASKS.md` + `tasks/` | Backlog |
| `DECISIONS.md` + `decisions/` | ADR |
| `COMPLETE_TASK.md` | Append-only riwayat selesai |
| `CONVERSATIONS.md` | Log diskusi penting |
| `BRAINSTORM.md` | Bank ide |

---

# Working Principles

* Documentation First
* Business First
* UX Driven
* AI Friendly
* Maintainability over Complexity

Konvensi: **implementasi kode selalu mengikuti dokumentasi, bukan sebaliknya.**

---

# Related Documents

* `../product-discovery/README.md`
* `../AGENTS.md`
* `../.cursor/skills/project-os-navigator/SKILL.md`
