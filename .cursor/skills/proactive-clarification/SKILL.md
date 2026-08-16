---
name: proactive-clarification
description: >-
  Memandu AI untuk secara proaktif mengidentifikasi keputusan yang belum ditentukan
  sebelum mengeksekusi tugas apapun — dokumentasi, fitur, arsitektur, konfigurasi,
  atau interaksi lain. AI harus bertanya terlebih dahulu dengan pilihan-pilihan
  terbaik di kelasnya, bukan langsung berasumsi. Gunakan skill ini sebelum
  mengerjakan tugas apapun yang memiliki fork keputusan yang belum jelas.
---

# Proactive Clarification

Sebelum mengerjakan tugas apapun, AI harus mengidentifikasi apakah ada keputusan penting yang belum ditentukan — yang kalau diasumsikan bisa menghasilkan output yang salah arah. Jika ada, tanya dulu. Baru kerjakan.

---

## Prinsip Dasar

**Jangan berasumsi, tanya dulu** — berlaku untuk SEMUA jenis tugas:

- Membuat atau merevisi dokumentasi
- Membangun fitur atau komponen
- Memilih library, tool, atau service
- Merancang arsitektur atau flow
- Konfigurasi environment atau infrastruktur
- Keputusan desain UX/UI

Ini juga berlaku bukan cuma untuk "fork keputusan" (pilihan valid setara) — lihat `.cursor/rules/ask-before-assuming.mdc` (aturan keras, always-applied) untuk cakupan lebih luas: **gap** (bagian tidak lengkap/tidak konsisten), **belum terdokumentasi** (butuh konteks yang belum ada di baseline manapun), dan **tidak diketahui/tidak yakin** (AI sendiri tidak tahu jawaban yang benar). Di semua kasus itu: berhenti dan tanya, jangan menebak atau diam-diam melanjutkan.

**Pengecualian:** Jika keputusan sudah terdokumentasi di baseline project (ADR, `DECISIONS.md`, atau dokumen baseline yang relevan), gunakan keputusan tersebut — jangan tanya ulang.

---

## Kapan Harus Bertanya

Tanya sebelum eksekusi jika ada **fork keputusan** yang:

1. **Belum ada di baseline project** — tidak ada di `DECISIONS.md`, ADR, atau dokumen yang relevan
2. **Berdampak signifikan pada output** — pilihan berbeda menghasilkan dokumen/kode/struktur berbeda secara substansial
3. **Memiliki opsi-opsi valid yang setara** — tidak ada satu jawaban yang "jelas benar"

### Contoh Fork (portofolio)

| Konteks | Contoh pertanyaan |
| ------- | ----------------- |
| Site type | Static marketing site vs site + CMS vs full app |
| Framework | Next.js, Astro, Nuxt, dll. |
| Hosting | Vercel, Netlify, Cloudflare Pages, custom |
| Content | Markdown/MDX di repo vs headless CMS |
| Bahasa UI | Indonesia, English, bilingual |
| UX pattern | Single-page scroll vs multi-page |

---

## Cara Bertanya

### 1. Identifikasi Fork-nya

- Apa yang belum jelas?
- Apa dampaknya terhadap output?
- Apa saja opsi terbaik yang relevan?

### 2. Sajikan Pilihan Terbaik

Maks 4–5 pilihan terbaik di kelasnya, dengan konteks singkat.

**Format conversational:**

```
Sebelum saya mulai, ada satu keputusan yang perlu kamu tentukan dulu:

**[Aspek yang perlu diputuskan]**

Pilihan terbaik:
- **[Opsi A]** — [mengapa menarik, kapan cocok]
- **[Opsi B]** — [mengapa menarik, kapan cocok]
- **[Opsi C]** — [mengapa menarik, kapan cocok]

Mana yang ingin kamu gunakan?
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
2. Jika berpengaruh pada keputusan project, tanyakan apakah perlu ADR di `DECISIONS.md`.
3. Lanjutkan eksekusi.

---

## Aturan Kritis

- Jangan skip pertanyaan meski merasa sudah tahu — kecuali sudah ada di baseline.
- Jangan tanya hal trivial yang tidak mempengaruhi output secara substansial.
- Jangan listing opsi outdated / tidak relevan.
- Jika user bilang "terserah" — pilihkan opsi terbaik dengan alasan, konfirmasi, lalu jalan.
