# TASKS

Indeks backlog project **rezisaktiva**. Detail task ada di `tasks/`.

## Fokus sekarang

1. **T-032 … T-037** — Migrasi Astryx → shadcn/ui + Tailwind v4 ⏳ **prioritas** (ADR-028). **T-032** ✅. **T-033.1–T-033.3** ✅; lanjut **T-033.4**. Detail: [`tasks/v14-shadcn-tailwind.md`](tasks/v14-shadcn-tailwind.md).
2. **T-031** — Metadata API: ikon, kartu share, identitas head ⏳ (T-031.1–T-031.5). **Antrian setelah T-037** (jangan paralel di `app/layout.tsx`). Detail: [`tasks/v13-metadata.md`](tasks/v13-metadata.md).
3. **T-023** — unduh CV/Portofolio di Contact modal ⏸️ **Deferred**, menunggu CV versi Inggris (ADR-023). Detail: [`tasks/v10-page-copy.md`](tasks/v10-page-copy.md).
4. **T-030** — SEO R1 (sitemap/robots/lang, CWV ukur, hygiene on-page, ops GSC) ✅ (T-030.1–T-030.4, 2026-08-31). Detail: [`tasks/v12-seo.md`](tasks/v12-seo.md).
5. **T-029** — JSON-LD schema.org dari `content/` ✅ (T-029.1–T-029.4, 2026-08-31). Detail: [`tasks/v11-structured-data.md`](tasks/v11-structured-data.md).
6. **T-028** — rapikan `app/` ✅ (T-028.1–T-028.4, 2026-08-31). Detail: [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md).
7. **T-018** — exit R1 ✅ (2026-08-31). Validation aktif. Detail: [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md).
8. **T-027** — playbook disiplin kode ✅. Detail: [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md).
9. **T-026** — project context sheet (M10) ✅. Detail: [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md).
10. **T-021** — copy R1 ✅. **T-022** ✅. **T-024** ✅. **T-025** ✅.
11. **KI-001 / KI-002** tertutup (tema `rezisaktiva` = mockup `shared.css`).

## Indeks release

| Release | File | Tasks | Status |
| ------- | ---- | ----- | ------ |
| v0.1 Product Discovery | [`tasks/v01-product-discovery.md`](tasks/v01-product-discovery.md) | T-001 … T-007 | ✅ Done |
| v0.2 Repository & Bootstrap | [`tasks/v02-bootstrap.md`](tasks/v02-bootstrap.md) | T-008 … T-012 | ✅ Done |
| v0.3 Development R1 | [`tasks/v03-development-r1.md`](tasks/v03-development-r1.md) | T-013 … T-020, T-022, T-024–T-028 | ✅ Done |
| v10 Page copy R1 | [`tasks/v10-page-copy.md`](tasks/v10-page-copy.md) | T-021, T-023 | ⏳ In Progress (**T-021** ✅; **T-023** ⏸️ Deferred) |
| v11 Structured data | [`tasks/v11-structured-data.md`](tasks/v11-structured-data.md) | T-029 | ✅ Done |
| v12 SEO | [`tasks/v12-seo.md`](tasks/v12-seo.md) | T-030 | ✅ Done |
| v13 Metadata API | [`tasks/v13-metadata.md`](tasks/v13-metadata.md) | T-031 | ⏳ Open (**antrian** setelah T-037) |
| v14 shadcn + Tailwind | [`tasks/v14-shadcn-tailwind.md`](tasks/v14-shadcn-tailwind.md) | T-032 … T-037 | ⏳ Open (**prioritas**; ADR-028) |

## Aturan

* ID task parent `T-XXX` global, tidak didaur ulang.
* ID subtask `T-XXX.N` (contoh: `T-001.1`, `T-001.2`) — nomor berurutan dalam parent; tidak didaur ulang setelah dipakai.
* Checklist detail per subtask hidup di file release `tasks/vXX-*.md`. `PROJECT_STATE.md` hanya menyimpan ringkasan Snapshot/Fokus (tidak menyalin detail checklist) — keduanya Living Document, beda level detail.
* Task yang ditunda: `⏸️ Deferred` + alasan, jangan dihapus.
* Referensi kerja (Fokus, Snapshot, COMPLETE_TASK) sebaiknya menyebut kode subtask bila menyentuh item checklist.

## Related Documents

* `PROJECT_STATE.md`
* `tasks/v01-product-discovery.md`
* `tasks/v02-bootstrap.md`
* `tasks/v03-development-r1.md`
* `tasks/v10-page-copy.md`
* `tasks/v11-structured-data.md`
* `tasks/v12-seo.md`
* `tasks/v13-metadata.md`
* `tasks/v14-shadcn-tailwind.md`
