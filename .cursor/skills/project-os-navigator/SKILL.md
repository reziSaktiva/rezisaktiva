---
name: project-os-navigator
description: >-
  Project OS navigator untuk project rezisaktiva (portofolio pribadi). Memandu AI
  memahami cara kerja, aturan dokumentasi, dan behavior per jenis interaksi —
  diskusi, brainstorm, planning change, pekerjaan baru, dan bug. Gunakan di awal
  setiap sesi kerja pada project ini, atau ketika context project dibutuhkan.
---

# Project OS Navigator — rezisaktiva

Skill ini mendefinisikan cara AI berperilaku saat bekerja pada project portofolio **rezisaktiva**.

## Langkah Pertama: Load Context (Cascade)

Jangan langsung baca semua dokumen `project-manager/` untuk setiap pesan. Eskalasi bertahap:

**Tingkat 1 — Status / progress / pertanyaan umum**

- Baca **section "Snapshot"** di paling atas `project-manager/PROJECT_STATE.md`. Jangan baca seluruh file kecuali perlu.
- Untuk pertanyaan task / rencana: baca `project-manager/TASKS.md`. Jangan buka `tasks/` kecuali butuh detail satu task.
- Untuk ADR spesifik: buka **hanya** `project-manager/decisions/ADR-XXX-*.md` (indeks di `DECISIONS.md`).

**Tingkat 2 — Task nyata** (Pekerjaan Baru, Planning Change, Bug): baca berurutan:

1. `project-manager/PROJECT_STATE.md` — Snapshot dulu, lalu detail bila perlu
2. `project-manager/TASKS.md` — temukan ID task/subtask (`T-XXX` / `T-XXX.N`)
3. `project-manager/tasks/vXX-*.md` — **hanya satu file** release; ikuti field **Baca dulu**
4. `project-manager/PROJECT_RULES.md` — bila menyentuh tata kelola dokumen
5. ADR spesifik yang relevan
6. `project-manager/PROJECT_OVERVIEW.md` — bila perlu gambaran umum

Kalau pekerjaan belum punya ID task/subtask: tanyakan ke Boss Rezi apakah perlu ditambahkan ke backlog.

Jika diskusi menyentuh domain spesifik, baca dokumen relevan dari:

- `product-discovery/01-business/`
- `product-discovery/02-product/`
- `product-discovery/03-user/`
- `product-discovery/04-ux/`
- `product-discovery/05-architecture/`
- `product-discovery/06-engineering/`

`product-discovery/` adalah **Source of Truth produk** dan sibling dari `project-manager/`.

### Proactive Consistency Check

Setiap kali membaca dokumen **Static Reference** (README, OVERVIEW, RULES, SKILL.md, baseline), periksa apakah memuat info yang seharusnya hanya di **Living Document** (`PROJECT_STATE.md`) — status ✅/🟡/⏳, progress %, phase aktif.

Jika ditemukan: **jangan diamkan**. Sebutkan ke user, lalu tawarkan perbaikan (behavior Bug / Inkonsistensi).

---

## Behavior per Jenis Interaksi

### 1. Diskusi / Tanya Jawab

1. Selaraskan jawaban dengan baseline yang sudah ada.
2. Jika konflik dengan keputusan sebelumnya, sebutkan ADR relevan.
3. Jangan sarankan solusi di luar scope phase aktif (`Active Conversation Mode` di PROJECT_STATE).
4. Insight penting → catat di `project-manager/CONVERSATIONS.md`.

**Format CONVERSATIONS.md:**

```
## [YYYY-MM-DD] — [Topik Singkat]
**Phase:** [phase aktif]
**Summary:** [2-3 kalimat]
**Key Decision/Insight:** [jika ada]
**Impact:** [dokumen yang perlu diupdate?]
```

---

### 2. Brainstorming

1. Explore bebas; tandai spekulatif vs selaras baseline.
2. Evaluasi hasil terhadap baseline.
3. Ide layak → `project-manager/BRAINSTORM.md`.

**Format BRAINSTORM.md:**

```
## [YYYY-MM-DD] — [Topik Brainstorm]
**Phase:** [phase aktif]
**Context:** [...]
**Ideas:**
- ...
**Evaluation:** [selaras / bertentangan / perlu ADR / perlu validasi]
**Next Action:** [discard / simpan / buat ADR / validasi]
```

---

### 3. Pekerjaan Baru / Pembuatan Dokumen

1. Cek `PROJECT_STATE.md` — sesuai phase aktif.
2. Cek `Active Conversation Mode`.
3. Baca baseline relevan sebelum menulis.
4. Setelah selesai, update:
   - `project-manager/tasks/vXX-*.md` — centang subtask ber-ID (`T-XXX.N`) + status parent
   - `project-manager/TASKS.md` — indeks + Fokus sekarang (sebut kode subtask bila relevan)
   - `PROJECT_STATE.md` — hanya jika phase/milestone/KI/fokus berubah (jangan salin detail task)
   - `COMPLETE_TASK.md` — append entri baru di atas (jangan baca riwayat lama); sebut `T-XXX.N`

**Format COMPLETE_TASK.md:**

```
## [YYYY-MM-DD]
### Added
- ...
### Changed
- ...
### Fixed
- ...
```

---

### 4. Planning Change / Perubahan Keputusan

1. Identifikasi dampak dokumen.
2. Evaluasi kebutuhan ADR baru.

**Wajib ADR:** target audience, problem statement, vision/scope, MVP, arsitektur, tech stack, repository strategy.

3. Buat `decisions/ADR-NNN-slug.md` + baris indeks di atas `DECISIONS.md`.
4. Update dokumen terdampak + Snapshot bila relevan + COMPLETE_TASK.

**Format ADR:**

```
## Decision ADR-[NNN]

### Title
...
### Status
Accepted
### Date
YYYY-MM-DD
### Decision
...
### Reason
- ...
### Alternatives Considered
- ...
```

---

### 5. Bug / Inkonsistensi Dokumen

1. Identifikasi konflik dan Source of Truth.
2. Perbaiki agar selaras.
3. Catat di COMPLETE_TASK (`### Fixed`).
4. Jika keputusan belum terdokumentasi → buat ADR.

---

## Aturan Context (Jangan Dilanggar)

- Jangan menyarankan implementasi kode jika belum di phase Development (kecuali diminta eksplisit).
- Jangan mengubah baseline tanpa ADR.
- Jangan membuat dokumen di luar scope phase aktif.
- Jangan perbaiki inkonsistensi diam-diam.
- Jangan salin detail task ke `PROJECT_STATE.md`.
- Jangan daur ulang ID task/subtask (`T-XXX` / `T-XXX.N`); deferred = `⏸️` + alasan.
- Skills resmi project hanya di `.cursor/skills/`.

---

## File Map

```
rezisaktiva/
├── project-manager/         → Cara kerja
│   ├── PROJECT_STATE.md     → Snapshot dulu
│   ├── TASKS.md + tasks/    → Backlog
│   ├── DECISIONS.md + decisions/
│   ├── COMPLETE_TASK.md     → append only; jangan dibaca kecuali diperintah
│   ├── CONVERSATIONS.md
│   └── BRAINSTORM.md
├── product-discovery/       → SoT produk 01–06
├── design-mockups/          → Mockup HTML acuan visual (gate wajib untuk task UI/UX)
├── app/                     → Kode Next.js (App Router)
├── AGENTS.md
├── .cursor/skills/          → Process skills Cursor
└── .cursor/rules/           → Rule aktif (Astryx, mockup gate, no-AI-attribution)
```

---

## Additional Resources

- `project-manager/PROJECT_RULES.md`
- `product-discovery/README.md`
- `AGENTS.md`
