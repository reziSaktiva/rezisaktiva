# Decision ADR-042

### Title

Halaman Workflow = decision-driven (bukan offers / values / accordion T-021.3)

### Status

Accepted

### Date

2026-09-08

### Decision

1. **Rute, label chrome, dan job halaman tidak berubah.** `/[locale]/workflow` tetap M14 (ADR-035). Label: **Proses Kerja** / **How I Work**. Soft CTA Contact tetap pita footer (ADR-041)—bukan section Contact baru.
2. **Struktur S2b dikunci ulang** menjadi lima blok, bilingual di `content/workflow.ts`:
   1. Hero — klaim dua baris + lede + tab perbandingan *Chat Chaos* vs *Decision-Driven Way* (`Tabs` + `AnimatePresence`)
   2. Lima prinsip (bento / kartu) — Doc-First, Honest MVP, Decision Logs, Human Lead + AI Orchestration, Production Truth
   3. Pipeline Discover → Design → Build → Ship dengan peran **Human Lead** vs **AI Orchestration** di setiap langkah
   4. ADR Vault — widget baca 3 sampel nyata (ADR-001, ADR-012, ADR-024): Status, Context, Decision, Alternatives
   5. Penutup ringkas; Contact = footer yang sudah ada
3. **Copy T-021.3 di rute Workflow di-supersede** (bukan dihapus dari sejarah). Offers “yang bisa saya bantu”, approach/values quote, dan accordion rest/active proses **tidak lagi** permukaan `/workflow`.
4. **Pola rest/active (ADR-025) tidak dipakai di Workflow.** Interaksi baru = tab perbandingan, hover kartu prinsip, pipeline selalu terbaca, vault klik-untuk-detail. Reduced-motion tetap dihormati.
5. **Komponen `about-offer-grid` / `about-process` dicabut** bersama permukaan lama. Island baru di `app/[locale]/_components/workflow-*.tsx`. Stack tetap shadcn + Tailwind + `motion/react` (ADR-028 / ADR-017).

Ini **override** ADR-035 poin 4 (copy T-021 tidak ditulis ulang) **hanya untuk isi `/workflow`**. Pemisahan About pribadi vs Workflow **tetap**. Ini juga **override** ADR-025 / ADR-039 sepanjang merujuk rest/active offers-values-proses di Workflow.

### Reason

- Boss Rezi (2026-09-08) meminta halaman How I Work menjelaskan metode kerja secara utuh: kendali manusia + eksekusi AI paralel + keputusan terkunci di ADR, bukan vibe coding di memori chat.
- Permukaan lama (offers / values / accordion) tidak membawa perbandingan, prinsip, pembagian peran, atau bukti ADR yang diminta.
- Menulis ulang copy Workflow adalah perubahan material; ADR baru mensupersede kunci T-021.3 di rute ini tanpa membuka tulis ulang copy Home/About.

### Alternatives Considered

- Hanya restyle kulit T-042.4 dengan copy T-021.3 tetap — ditolak; arahan baru adalah kerangka narasi dan layout halaman.
- Tetap menampilkan offers Product / Fullstack / AI di bawah lima section baru — ditolak; lima section adalah keseluruhan permukaan; offers pindah ke Quick Info / About bila masih dibutuhkan di tempat lain.
- CTA Contact sebagai section kelima menggantikan footer — ditolak; Boss Rezi minta pakai footer yang sudah ada (ADR-041).
- ADR Vault memakai ID fiktif (mis. “ADR-009 = MoSCoW”) yang tidak cocok rekaman nyata — ditolak; sampel = ADR-001 / ADR-012 / ADR-024 agar widget membuktikan filosofi, bukan mendekorasinya.

### Impact / Follow-up

- Kode: `content/workflow.ts`, `workflow-page.tsx` + island, `app/globals.css` (`.wf-*`), primitf `Tabs` / `ScrollArea` / `Tooltip`.
- Docs: S2b `key-screen-patterns.md`, M14, IA, MVP, `feature-priority`, `product-scope`, `domain-model`. Task **T-042.4**.
