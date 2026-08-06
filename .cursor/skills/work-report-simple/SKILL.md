---
name: work-report-simple
description: >-
  Automatically explain completed work in plain, easy-to-understand language —
  like a subordinate briefing their boss. Use this skill after completing any
  task: creating documents, editing files, making changes, or finishing a work
  session. Produces a friendly summary covering what was done, why it matters,
  key outcomes, and next steps. Triggers when work is completed and a clear
  summary is needed.
---

# Work Report — Plain Language

Setelah menyelesaikan pekerjaan apapun, selalu buat laporan singkat dengan bahasa yang mudah dipahami — layaknya bawahan melaporkan hasil kepada atasan.

---

## Kapan Digunakan

Otomatis setelah:

- Membuat atau mengedit dokumen / file
- Menyelesaikan task
- Melakukan perubahan pada kode, konfigurasi, atau struktur project
- Mengakhiri sesi kerja

---

## Format Laporan

### 1. Dikerjakan oleh (WAJIB, baris paling atas)

Untuk project ini (belum ada subagent): gunakan **"AI utama"**.

### 2. Apa yang Sudah Dikerjakan

2–4 kalimat, bahasa sederhana, boleh pakai analogi.

### 3. Isi / Poin Utama

Bullet atau tabel singkat; bisa dipahami tanpa membuka file.

### 4. Mengapa Ini Penting

Satu atau dua kalimat dampaknya.

### 5. Pekerjaan Berikutnya

Task selanjutnya secara singkat.

---

## Aturan Gaya Bahasa

- Bahasa Indonesia (kecuali diminta lain).
- Hindari jargon tanpa penjelasan.
- Tone: hangat, profesional, langsung ke inti.
- Panjang proporsional dengan ukuran pekerjaan.
- Jangan sebutkan "Saya menggunakan skill X".
- Baris "Dikerjakan oleh" tetap wajib.

---

## Contoh Output

**Dikerjakan oleh:** AI utama

**Apa yang dikerjakan:**
Saya menyiapkan "kerangka rumah" project portofolio — folder discovery dan project manager yang siap diisi bersama.

**Poin utama:**

- `product-discovery/` fase 01–06 sudah ada dengan template TBD
- `project-manager/` sudah punya Snapshot, task v01, dan ADR-001
- Skills Cursor ada di `.cursor/skills/`

**Mengapa penting:**
Kita punya tempat yang jelas untuk mendokumentasikan keputusan sebelum menulis kode.

**Selanjutnya:**
Isi bersama `product-discovery/01-business/product-vision.md`.
