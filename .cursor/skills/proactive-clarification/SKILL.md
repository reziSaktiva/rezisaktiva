---
name: proactive-clarification
description: >-
  Cara menyusun pertanyaan ke Boss Rezi saat kondisi urgent (gap, salah
  dokumen, atau hal di luar rencana). Bukan untuk tanya ritual sebelum setiap
  tugas. Gunakan bersama rule ask-before-assuming.
---

# Proactive Clarification

Cek dulu kelengkapan task, mockup (jika UI), dan dokumen acuan. Jika lengkap dan selaras rencana: **kerja**, jangan tanya.

Tanya hanya jika **urgent** — lihat `.cursor/rules/ask-before-assuming.mdc`. Skill ini mengatur **cara** bertanya, bukan kewajiban tanya di setiap tugas.

---

## Prinsip Dasar

**Cek sendiri dulu. Tanya hanya jika urgent.** Berlaku untuk semua jenis tugas, tapi tanya **bukan** langkah pembuka default.

Urgent:

- **Gap** — tidak lengkap / tidak konsisten / bolong antar task, mockup, kode, keputusan
- **Salah dokumen** — kesalahan tulis yang mengarahkan kerja ke rencana yang salah
- **Tidak direncanakan** — yang dibutuhkan untuk lanjut tidak ada di task/ADR/baseline, termasuk dua interpretasi valid yang belum dikunci

Bukan urgent (jangan tanya):

- Keputusan sudah ada di ADR / `DECISIONS.md` / Baca dulu / mockup yang ada dan selaras
- Detail eksekusi yang tidak mengubah rencana
- Ketidakyakinan yang bisa diselesaikan dengan membaca dokumen, kode, atau CLI

Jangan berasumsi pada yang urgent lalu jalan terus. Jangan mengarang. Jangan diam-diam memilih opsi unplanned.

---

## Kapan Harus Bertanya

Hanya jika kondisi urgent di atas. Fork keputusan yang **sudah** dikunci di baseline: pakai baseline, jangan tanya ulang.

Contoh yang **bukan** tanya (rencana sudah ada): framework Next.js (ADR), mockup Home sudah ada untuk T-014, locale ID/EN sudah dikunci.

Contoh yang **wajib** tanya: task merujuk mockup yang tidak ada; mockup bentrok dengan ADR dan dokumen harus diubah; scope di luar R1 yang belum ada tasknya.

---

## Cara Bertanya

### 1. Identifikasi yang urgent

- Apa yang bolong / salah / di luar rencana?
- Apa dampaknya terhadap output?
- Apa saja opsi terbaik yang relevan?

### 2. Sajikan Pilihan Terbaik

Maks 4–5 pilihan terbaik di kelasnya, dengan konteks singkat. Pakai `AskQuestion`.

**Format:**

```
Saya berhenti karena ini di luar rencana / ada gap:

**[Apa yang bolong atau konflik]**

Pilihan:
- **[Opsi A]** — [mengapa menarik, kapan cocok]
- **[Opsi B]** — [mengapa menarik, kapan cocok]
- **[Opsi C]** — [mengapa menarik, kapan cocok]
```

### 3. Satu Topik per Pertanyaan

Jangan tumpuk semua pertanyaan sekaligus. Tanyakan yang paling berdampak dulu.

---

## Kualitas Pilihan

- **Relevan** — sesuai konteks project (fase, skala portofolio)
- **Terbaik di kelasnya** — proven, aktif dipakai
- **Dikurasi** — buang yang outdated / tidak relevan
- **Berisi konteks** — satu kalimat mengapa menarik

---

## Setelah Mendapat Jawaban

1. Konfirmasi pilihan dalam satu kalimat.
2. Jika keputusan material, catat ADR sesuai `PROJECT_RULES.md` — jangan tanya ritual “perlu ADR?”.
3. Lanjutkan eksekusi.

---

## Aturan Kritis

- Jangan skip tanya jika benar-benar gap / salah dokumen / unplanned.
- Jangan tanya ritual atau hal trivial yang tidak mengubah rencana.
- Jangan listing opsi outdated / tidak relevan.
- Jika user bilang "terserah" — pilihkan opsi terbaik dengan alasan, konfirmasi, lalu jalan.
