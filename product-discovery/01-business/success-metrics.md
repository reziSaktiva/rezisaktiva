# Success Metrics

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07): **dual north star** (brand recall + inbound berkualitas). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan cara mengukur keberhasilan website portofolio pribadi **rezisaktiva** — sebagai aset brand dengan soft inbound, bukan produk SaaS atau funnel penjualan.

---

# Overview

Keberhasilan diukur dengan **dua north star setara** (dual):

| North star | Pertanyaan inti | Bukan |
| ---------- | --------------- | ----- |
| **Brand recall / clarity** | Setelah kunjungan singkat, orang bisa merangkum: “Rezi = product builder (fullstack + AI edge)”? | Vanity craft / award chase |
| **Inbound berkualitas** | Muncul outreach relevan (kolaborasi / opportunity / project) tanpa hard sell? | Volume DM / lead random |

Traffic, engagement, dan tooling analytics adalah **health check** — situs hidup dan dipakai — bukan definisi sukses.

Selaras: visi Success Definition (`product-vision.md`), growth “bukan vanity traffic” (`business-model.md` / ADR-007), brand primer + soft CTA (ADR-002).

---

# Measurement Principles

1. **Dual, bukan singular** — brand dan inbound sama pentingnya; jangan korbankan satu demi yang lain.
2. **Kualitas > volume** — satu outreach yang fit lebih berharga daripada banyak kontak irrelevant.
3. **Arah dulu, angka keras belakangan** — sebelum situs live & punya baseline, fokus sinyal arah + indikator leading; target numerik ketat ditambahkan setelah ada data nyata.
4. **Analytics ringan** — ukur yang perlu untuk belajar; proporsional dengan biaya waktu/uang (`business-model.md`).
5. **Privacy-aware** — tidak memaksa tracking berat demi dashboard; detail tool diputuskan di Engineering.
6. **Vanity diabaikan sebagai KPI** — pageview mentah, bounce rate sebagai “skor”, follower social, Awwwards — bukan north star.
7. **Inbound diukur di luar funnel situs** — soft CTA memicu; kualitas dinilai dari konteks chat/email (bukan conversion rate checkout).
8. **Angka sensitif** — detail personal (nama outreach, nominal opportunity) tidak masuk dokumen discovery publik; ringkas di sini, detail di `private/` atau di luar repo bila perlu (ADR-003).

---

# Dual North Star — Detail

## NS-1 — Brand recall / clarity

**Definisi sukses:** pengunjung (idealnya ICP founder/PO) memahami positioning setelah kunjungan singkat.

| Sinyal | Cara mengukur (praktis) | Catatan |
| ------ | ----------------------- | ------- |
| Recall spontan | Feedback teman/peer/ICP: “Rezi itu apa?” setelah lihat situs | Kualitatif; cukup 3–5 orang relevan di fase awal |
| Clarity self-check | Rezi + reviewer: apakah homepage + about menjawab siapa / bukti / next step dalam ~1 kunjungan | Checklist singkat, bukan survei berat |
| Konsistensi pesan | Pesan di situs selaras dengan cara Rezi bicara di luar (chat, interview) | Selaras Success Definition visi |

**Leading (sebelum banyak traffic):** struktur clarity hidup (siapa, bukti, soft CTA); bahasa bilingual geo-aware sesuai ADR-002 (detail UX/Engineering).

## NS-2 — Inbound berkualitas

**Definisi sukses:** muncul kontak yang relevan dengan intent kolaborasi, job opportunity, atau client/project — tanpa CTA agresif.

| Sinyal | Cara mengukur (praktis) | Catatan |
| ------ | ----------------------- | ------- |
| Outreach relevan | Hitung kontak yang jelas terkait evaluasi builder / role / project | Bukan “hi” kosong atau spam |
| Sumber | Dari mana mereka datang (URL situs, CV→situs, GitHub→situs, share magnet) | Membuktikan situs sebagai destination |
| Soft path | Kontak terjadi lewat jalur yang disediakan (tanpa hard sell / pricing publik) | Selaras ADR-008 |

**Kualitas (rubrik ringan):** relevan ke ICP atau sekunder yang sah; ada konteks (project/role); bukan volume untuk volume.

---

# Phase 1 — Validation

**Tujuan:** buktikan arah brand + soft inbound sebelum mengejar growth.

| Metrik / sinyal | Target arah | Bukti |
| --------------- | ----------- | ----- |
| Clarity kerangka | Homepage (+ inti) menjawab siapa / bukti / kontak | Review internal + 1–2 ICP/peer |
| Recall mini | ≥ sebagian besar reviewer singkat bisa merangkum positioning | Catatan feedback singkat |
| Soft CTA hidup | Ada jalur kontak yang jelas, tidak agresif | Checklist UX/konten |
| Inbound (opsional awal) | 0 wajib; bila ada, catat kualitas | Log pribadi (boleh `private/`) |
| Health | Situs online, URL layak jadi “link utama” | Smoke check |

**Exit Validation:** dual north star terasa masuk akal di praktik (clarity terbukti; path inbound siap) — belum wajib ada volume outreach.

---

# Phase 2 — Traction

**Tujuan:** dual star mulai “bergerak” setelah destination + magnet ringan awal ada.

| Metrik / sinyal | Target arah | Bukti |
| --------------- | ----------- | ----- |
| Brand recall | Feedback berulang dari ICP/sekunder yang konsisten dengan positioning | Catatan / retrospektif berkala |
| Inbound berkualitas | Muncul outreach relevan (frekuensi rendah pun OK) | Log kualitas, bukan vanity count |
| Magnet ringan | ≥1 case/proses singkat live yang mendukung evaluasi founder/PO | Konten di situs |
| Health | Traffic/engagement stabil cukup untuk belajar (bukan target vanity) | Analytics ringan |

**Exit Traction:** ada bukti bahwa situs dipakai sebagai referensi evaluasi **dan** setidaknya mulai memicu inbound relevan (meski jarang).

---

# Phase 3 — Growth

**Tujuan:** perkuat aset brand jangka panjang tanpa mengubah model (bukan media empire / social hustle sebagai mesin utama).

| Metrik / sinyal | Target arah | Bukti |
| --------------- | ----------- | ----- |
| Brand equity | Recall “Rezi = product builder…” semakin natural di konteks yang relevan | Observasi kualitatif + pola inbound |
| Inbound berkelanjutan | Ritme outreach berkualitas yang tidak bergantung hard sell | Log berkala |
| Magnet | Ritme update case/proses proporsional (bukan blog volume) | Kalender ringan / changelog konten |
| Distribusi aktif (opsional) | Hanya jika diputuskan belakangan (bukan syarat MVP growth) | ADR baru bila jadi strategi |

Angka numerik ketat (mis. “N inquiry / bulan”) **ditambahkan di sini setelah** ada data Traction — jangan diisi spekulatif di Baseline v1.0.

---

# Product Health Metrics

Indikator pendukung — **bukan** north star:

| Area | Contoh | Penggunaan |
| ---- | ------ | ---------- |
| Availability | Uptime, URL benar, performa wajar | Pastikan destination bisa diandalkan |
| Usage ringan | Kunjungan, page utama yang dibaca | Belajar perilaku; waspadai vanity |
| Konten | Case/proses ter-update vs basi | Magnet ringan tetap hidup |
| Bahasa | Switcher / geo-default berfungsi | Selaras bilingual ADR-002 |
| CTA path | Klik/reach ke kontak (bila diukur) | Diagnostik soft path, bukan skor sukses |

Tool analytics konkret → fase Engineering; prinsip: ringan & privacy-aware.

---

# Success Definition

Portofolio **mengarah benar** jika:

1. **NS-1** — setelah kunjungan singkat, orang relevan bisa merangkum positioning product builder (fullstack + AI edge)
2. **NS-2** — soft inbound berkualitas muncul atau jelas dimungkinkan tanpa hard sell / harga publik
3. Health metrics menunjukkan situs layak sebagai destination, tanpa dijadikan KPI utama
4. Keputusan konten/CTA tetap bisa ditelusuri ke visi, business model, dan ADR terkait

Portofolio **belum** dianggap sukses hanya karena traffic tinggi, craft spektakuler, atau banyak kontak tidak relevan.

---

# Current Status

| Item | Status |
| ---- | ------ |
| North star | **Dual** — brand recall + inbound berkualitas (Baseline v1.0 / ADR-009) |
| Angka keras / kuota | Belum — tunggu live + baseline Traction |
| Analytics tool | Belum dipilih (Engineering) |
| Baseline Business v1.0 | **Ditetapkan** (2026-08-07) — ADR-009 |
| Ekspektasi pengukuran | Pre-Validation sampai situs live — bukan status project; lihat `PROJECT_STATE.md` untuk phase aktif |

---

# Future Considerations

* Menambah target numerik setelah ada data Traction
* Memilih analytics (privacy-first) di Engineering
* Evaluasi ulang dual star bila model nilai situs berubah (perlu ADR)
* Distribusi aktif / ship-in-public sebagai mesin growth — hanya dengan keputusan eksplisit (saat ini bukan MVP)
* Dashboard internal di `private/` bila log inbound terlalu sensitif untuk repo publik

---

# Decision Rules

* Perubahan **north star** atau filosofi ukur → ADR baru + revisi dokumen ini.
* Menambah vanity metric sebagai KPI inti → ditolak kecuali ADR mengubah model bisnis.
* Angka sensitif (detail opportunity) → bukan di discovery publik.
* Jangan mengunci target numerik spekulatif sebelum situs punya baseline nyata.
* Status progress fase dicatat di `PROJECT_STATE.md`, bukan di README fase.

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-vision.md` — Success Definition kualitatif
* `problem-statement.md` — kriteria masalah terjawab
* `target-market.md` — ICP & out-of-scope audiens KPI
* `competitor-analysis.md` — clarity → presence → craft (bukan award KPI)
* `business-model.md` — growth destination + magnet; anti-vanity
* `pricing-strategy.md` — N/A; tanpa funnel harga
* `../../project-manager/decisions/ADR-002-portfolio-vision-positioning-audience-language.md`
* `../../project-manager/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md`
* `../../project-manager/decisions/ADR-009-business-baseline-v1-dual-north-star.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
