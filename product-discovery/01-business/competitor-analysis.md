# Competitor Analysis

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini memetakan **referensi** (inspirasi bernama) dan **pesaing kategori** (alternatif perhatian) untuk website portofolio pribadi **rezisaktiva** — bukan daftar rival bisnis klasik.

---

# Overview

Portofolio pribadi jarang punya “kompetitor langsung” bernama. Yang bersaing adalah **perhatian founder / product owner** saat mereka menilai apakah Rezi cocok sebagai product builder.

Kerangka analisis:

* **Referensi** — tujuh situs acuan bernama: 5 acuan craft & positioning awal + 2 referensi desain tambahan (karolinahess.com, mazurbartek.com — arah seni mockup, ditambahkan 2026-08-14/15)
* **Pesaing** — kategori alternatif (LinkedIn/GitHub, portofolio developer, designer/agency, freelance productized) — belum named
* **Prioritas pelajaran (terkunci):** clarity → presence → craft (opsi D / ADR-006)

Tujuan: memperkuat diferensiasi **product builder + fullstack + AI edge** (ADR-002) untuk ICP SEA (ADR-005), tanpa mengejar award-site atau creative-dev spectacle sebagai identitas utama.

---

# Primary Competitors / References

## A. Named references (inspirasi)

| # | Referensi | Peran terhadap rezisaktiva | Ambil | Jangan dibawa mentah |
| - | --------- | -------------------------- | ----- | -------------------- |
| 1 | [bepatrickdavid.com](https://bepatrickdavid.com/) | Persona + case + “available” yang memorable | Presence brand; case terkurasi; soft availability | Framing designer/agency; award-chase sebagai tujuan |
| 2 | [dunks1980.com](https://dunks1980.com/) | Web sebagai pengalaman / first impression kuat | Craft edge; rasa “situs ini beda” | Portofolio jadi demo WebGL tanpa cerita product |
| 3 | [lauren-waller.com](https://lauren-waller.com/) | IA bersih + satu klaim kredibel + bukti | Clarity: Work / About / Contact; bukti konkret di permukaan | Identitas product designer / Framer shop sebagai inti |
| 4 | [p5aholic.me](https://p5aholic.me/) | Eksperimen web sebagai signature | Kurasi karya; playground sebagai satelit (bukan panggung utama) | Pure creative-dev tanpa outcome untuk founder/PO |
| 5 | [cristianoronaldo.com](https://www.cristianoronaldo.com/) | Satu URL resmi = “dunia” identitas | Career/highlight sebagai narasi; rumah brand tunggal | Monetisasi line produk; skala selebritas |
| 6 | [karolinahess.com](https://karolinahess.com/) | Craft tipografi + interaksi (tab/drawer info, type oversized menumpuk foto) | Pola Quick info (tab tepi kanan → drawer); ritme copy About singkat “yang bisa saya bantu” | Densitas dekorasi berlebih; playground murni tanpa outcome |
| 7 | [mazurbartek.com](https://mazurbartek.com/) | Presence tenang lewat tipografi besar + whitespace | Layout About (sapaan + foto potret); ketenangan komposisi Home (type + whitespace) | Minim bukti/karya sebagai satu-satunya kesan; terlalu personal-blog |

**Urutan prioritas pelajaran (D):**

1. **Clarity** (Lauren) — founder/PO paham dalam hitungan menit
2. **Presence** (Patrick + Ronaldo-lite + Bartek) — terasa rumah brand, bukan CV tersebar
3. **Craft** (Dunks + p5aholic + Karolina) — edge yang memperkuat, bukan menggantikan cerita

Di MVP: clarity + soft presence dulu; craft naik bertahap. Karolina & Bartek ditambahkan 2026-08-14/15 sebagai referensi arah seni mockup (tipografi, layout, interaksi) — melengkapi pasangan presence/craft yang sudah ada, bukan mengubah urutan D (lihat Update di ADR-006).

## B. Category competitors (alternatif perhatian)

Belum ada named rival. Yang bersaing untuk slot evaluasi:

| Kategori | Apa yang biasanya ditawarkan | Celah vs rezisaktiva |
| -------- | ---------------------------- | -------------------- |
| **LinkedIn / CV** | Riwayat kerja, headline, rekomendasi | Framing default job-seeker; jarang cerita product builder + bukti ship terkurasi |
| **GitHub profile** | Repo, commit, bahasa | Sinyal developer kuat; lemah di narrative & outcome untuk founder/PO |
| **Portofolio developer-stack** | Daftar tech, project teknis | Terasa CV engineering; kurang product thinking |
| **Portofolio designer / agency** | Visual craft, case desain | Kuat estetika; sering kurang fondasi fullstack + builder end-to-end |
| **Landing freelance productized** | Paket jasa, pricing, hard CTA | Jelas “hire me”; lemah sebagai aset brand jangka panjang |

---

# Market Observations

1. **Rumah default masih LinkedIn + GitHub** — banyak builder tidak punya situs sendiri; yang punya sering meniru pola “list project + stack”.
2. **Award / experimental sites** menonjol di kalangan peer creative, tetapi founder/PO menilai fit lebih dari spektakel.
3. **Clarity dan craft jarang seimbang** — situs rapi sering hambar; situs wow sering kabur posisinya.
4. **Personal brand “satu URL”** jarang diterapkan serius di ruang product builder SEA; peluang untuk rumah identitas yang koheren (selaras rantai ADR-004).
5. **AI** banyak diklaim di permukaan; sedikit yang menempatkannya sebagai edge di atas fondasi product + engineering yang jujur.

---

# Market Opportunity

* Menjadi **satu sumber kebenaran publik** untuk Rezi: identitas, bukti, cara berpikir, kontak — mengalahkan potongan LinkedIn/GitHub/CV.
* Mengisi celah antara **developer portfolio** dan **designer portfolio**: product builder dengan bukti fullstack + AI edge.
* Relevan untuk **founder/PO SEA** (bilingual geo-aware) tanpa terasa “global generic” atau “agency shop”.
* Brand primer dengan soft path opportunity/project — bukan funnel jual jasa agresif.

---

# Product Differentiation

| Dimensi | rezisaktiva | Kategori tipikal |
| ------- | ----------- | ---------------- |
| **Cerita** | Product builder — ide → produk live | Developer stack / designer craft / job CV |
| **Bukti** | Fullstack ~6 tahun sebagai fondasi | Repo saja, atau visual saja |
| **Edge** | AI sebagai cara kerja & kapabilitas baru | Klaim AI tanpa fondasi, atau tanpa AI |
| **UX prioritas** | Clarity → presence → craft | Sering craft-first atau CV-first |
| **Model nilai** | Brand primer; job/client soft | Hard-sell freelance atau passive CV |
| **Geo/bahasa** | SEA-aware, bilingual | English-only global atau lokal sempit |

**Bukan diferensiasi yang dikejar:** Awwwards sebagai KPI inti; identity designer/agency; creative-dev murni; productized pricing di permukaan situs.

---

# Competitive Risks

| Risiko | Dampak | Mitigasi |
| ------ | ------ | -------- |
| Terlalu mengejar craft (Dunks/p5aholic/Karolina) | Salah baca sebagai creative-dev/desainer murni | Kunci urutan D; craft sebagai lapisan ketiga; copy tetap product builder |
| Terlalu “Lauren-clean” tanpa presence | Brand tidak memorable; visibility tetap lemah | Case + persona + highlight karier/product |
| Terlalu “Patrick/agency” | Framing hire-designer, bukan product builder | Pesan permukaan tetap ADR-002 |
| Hanya mengandalkan GitHub | Narrative developer menang | Situs = panggung utama; GitHub satelit |
| Scope MVP membengkak (3 lapisan sekaligus) | Lambat ship | MVP: clarity + soft presence; craft bertahap |
| Named competitor muncul belakangan | Analisis perlu diperbarui | Draft boleh ditambah named set tanpa mengubah kerangka D |

---

# Success Criteria

Analisis kompetitif / referensi dianggap mengarah benar jika:

1. Setiap keputusan UX/konten bisa ditelusuri ke urutan **clarity → presence → craft**
2. Referensi dipakai sebagai **pelajaran**, bukan template visual yang ditiru
3. Diferensiasi tetap terbaca: product builder + fullstack + AI — bukan designer, bukan stack-CV, bukan AI specialist murni
4. Founder/PO (kedua archetipe SEA) bisa menilai fit lebih cepat daripada lewat LinkedIn/GitHub saja
5. Named rival boleh ditambah nanti tanpa merusak kerangka kategori + prioritas D

Detail metrik kuantitatif → `success-metrics.md`.

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-vision.md` — visi dan positioning
* `problem-statement.md` — rantai visibility → narrative → evaluasi
* `target-market.md` — ICP founder/PO SEA
* `../../project-manager/decisions/ADR-006-competitor-reference-lens-clarity-presence-craft.md` — keputusan material
* `../../project-manager/decisions/ADR-002-portfolio-vision-positioning-audience-language.md` — positioning baseline
* `../../project-manager/decisions/ADR-005-target-market-icp-sea-tech.md` — ICP
* `../../project-manager/PROJECT_STATE.md` — status project
* `../../project-manager/DECISIONS.md` — indeks ADR
