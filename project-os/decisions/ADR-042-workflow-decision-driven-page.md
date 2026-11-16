# Decision ADR-042

### Title

Workflow page = decision-driven (not offers / values / T-021.3 accordion)

### Status

Accepted

### Date

2026-09-08

### Decision

1. **Route, chrome label, and page job unchanged.** `/[locale]/workflow` remains M14 (ADR-035). Label: **Proses Kerja** / **How I Work**. Soft Contact CTA remains footer strip (ADR-041)—not new Contact section.
2. **S2b structure re-locked** as five blocks, bilingual in `content/workflow.ts`:
   1. Hero — two-line claim + lede + *Chat Chaos* vs *Decision-Driven Way* comparison tab (`Tabs` + `AnimatePresence`)
   2. Five principles (bento / cards) — Doc-First, Honest MVP, Decision Logs, Human Lead + AI Orchestration, Production Truth
   3. Discover → Design → Build → Ship pipeline with **Human Lead** vs **AI Orchestration** role at each step
   4. ADR Vault — widget reading 3 real samples (ADR-001, ADR-012, ADR-024): Status, Context, Decision, Alternatives
   5. Short close; Contact = existing footer
3. **T-021.3 copy on Workflow route superseded** (not erased from history). Offers “what I can help with”, approach/values quote, and rest/active process accordion **no longer** on `/workflow`.
4. **Rest/active pattern (ADR-025) not used on Workflow.** New interaction = comparison tab, principle card hover, always-readable pipeline, click-for-detail vault. Reduced-motion respected.
5. **`about-offer-grid` / `about-process` components removed** with old surface. New islands in `app/[locale]/_components/workflow-*.tsx`. Stack remains shadcn + Tailwind + `motion/react` (ADR-028 / ADR-017).

This **overrides** ADR-035 point 4 (T-021 not rewritten) **for `/workflow` content only**. Personal About vs Workflow split **stands**. Also **overrides** ADR-025 / ADR-039 wherever they referred to rest/active offers-values-process on Workflow.

### Reason

- Boss Rezi (2026-09-08) wanted How I Work page to explain full working method: human control + parallel AI execution + decisions locked in ADR, not vibe coding in chat memory.
- Old surface (offers / values / accordion) did not carry comparison, principles, role split, or ADR proof requested.
- Rewriting Workflow copy is material change; new ADR supersedes T-021.3 lock on this route without reopening Home/About copy rewrite.

### Alternatives Considered

- T-042.4 skin-only restyle keeping T-021.3 — rejected; new direction is page narrative frame and layout.
- Keep Product / Fullstack / AI offers below five new sections — rejected; five sections are whole surface; offers elsewhere if still needed (Quick Info / About).
- Contact CTA as fifth section replacing footer — rejected; Boss Rezi wanted existing footer (ADR-041).
- ADR Vault with fictitious IDs (e.g. “ADR-009 = MoSCoW”) not matching real records — rejected; samples = ADR-001 / ADR-012 / ADR-024 so widget proves philosophy, not decoration.

### Impact / Follow-up

- Code: `content/workflow.ts`, `workflow-page.tsx` + islands, `app/globals.css` (`.wf-*`), `Tabs` / `ScrollArea` / `Tooltip` primitives.
- Docs: S2b `key-screen-patterns.md`, M14, IA, MVP, `feature-priority`, `product-scope`, `domain-model`. Task **T-042.4**.