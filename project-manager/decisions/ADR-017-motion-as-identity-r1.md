# Decision ADR-017

### Title
Motion sebagai bagian identitas visual R1 (bukan sekadar Could minimal)

### Status
Accepted

### Date
2026-08-12

### Decision

Motion di R1 **naik peran** dari "Could, minimal, 2–3 gerakan sengaja" (posisi awal `design-tokens.md`) menjadi **bagian dari identitas visual** situs — dengan clarity tetap prioritas tertinggi dan tanpa mengubah urutan pelajaran referensi **clarity → presence → craft** (ADR-006).

Referensi visual dipertajam:

* **bepatrickdavid.com** — presence & cara menyampaikan identitas/highlight sebagai "satu rumah brand" *(diperbarui 2026-08-12, sebelumnya cristianoronaldo.com — lihat Update di bawah)*
* **p5aholic.me** — **hanya** teknik interaksi & gerak (scroll-triggered motion, cursor-aware micro-interaction, easing/timing halus) — **bukan** struktur playground/generative-art-nya

Batas yang tetap berlaku (tidak berubah dari `design-tokens.md` / `ux-principles.md`):

* First viewport tetap satu komposisi yang menang dalam ≤5 detik (UX1)
* Tidak ada parallax berat, loop noise, atau motion yang mengorbankan clarity
* `prefers-reduced-motion` tetap dihormati
* Motion memperkuat hierarchy pesan ("product builder"), tidak menggantikannya

### Reason

* Boss Rezi ingin visual R1 terasa "hidup" (mendekati pengalaman referensi bepatrickdavid → digeser ke p5aholic untuk aspek gerak) sebelum masuk fase mockup Home
* p5aholic secara eksplisit berada di tier **craft** (`competitor-analysis.md` #4) — pengambilan harus selektif (teknik gerak saja) agar tidak menggeser diferensiasi ke arah "creative-dev murni" (risiko yang sudah dipetakan di baris Competitive Risks)
* Keputusan ini perlu jejak formal karena mengubah nilai yang sudah dikunci di baseline Engineering (ADR-016 → `design-tokens.md` §Motion)

### Alternatives Considered

* **Motion tetap minimal (Option A)** — paling aman & selaras baseline lama, tapi tidak menjawab keinginan Boss Rezi untuk visual yang lebih hidup
* **Full craft/motion spectacle ala p5aholic & dunks1980 (Option C)** — ditolak; bertentangan langsung dengan urutan D (clarity → presence → craft) dan risiko "salah baca sebagai creative-dev" (`competitor-analysis.md` baris 95)
* **Motion sebagai identitas dengan batas clarity-first (Option B — dipilih)** — menyeimbangkan keinginan visual hidup dengan disiplin baseline UX

### Impact

* `product-discovery/06-engineering/design-tokens.md` — §Motion diperbarui: dari "Could minimal" menjadi "bagian identitas visual, dengan batas clarity-first"
* Mockup Home (langkah berikutnya) menggunakan arah motion ini sebagai acuan
* Tidak mengubah `ux-principles.md` Core Principles (UX1–UX7) — motion tetap tunduk padanya, hanya "kadar"-nya yang naik

### Update — 2026-08-12

Referensi presence dikoreksi dari **cristianoronaldo.com** menjadi **bepatrickdavid.com** atas permintaan Boss Rezi saat sesi mockup berlangsung. Ini sekaligus menyelaraskan referensi kembali ke pasangan asli di `competitor-analysis.md` (bepatrickdavid = tier presence, p5aholic = tier craft/motion), tanpa mengubah keputusan inti ADR ini (motion tetap naik peran sebagai identitas, batas clarity-first tetap berlaku).

### Update — 2026-08-24

**ADR-025** memperluas kadar craft dan mengizinkan dua teknik yang belum disebut di sini: smooth-scroll inertia (Lenis) dan overlay transisi halaman. Batas clarity-first, tanpa parallax berat, dan `prefers-reduced-motion` **tetap berlaku**. Referensi gerak tambahan: ritme Hess/Mazur (bukan palet). Detail keputusan: `ADR-025-craft-motion-hess-mazur.md`.
