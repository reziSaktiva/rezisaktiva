# Decision ADR-047

### Title

Contact form delivers messages via Resend; pages stay SSG

### Status

Accepted

### Date

2026-09-15

### Decision

1. **Submit in Contact modal sends real email** to inbox (`CONTACT_EMAIL` / `content/data/email.json`). “Kirim” / “Terkirim” labels must no longer be local-only feedback.
2. **Vendor = Resend** (free tier enough for portfolio volume). Not Formspree, Web3Forms, EmailJS, or Gmail SMTP on Vercel.
3. **Technical shape:** `POST` Route Handler (e.g. `app/api/contact/route.ts`) calls Resend with server key. **Not** Server Action in `page.tsx`. **Not** `NEXT_PUBLIC_` for API key. **Not** CMS, DB, or `/contact` route.
4. **Sender (From)** = verified address on `rezisaktiva.space` domain (`RESEND_FROM`). Resend does not send as `@gmail.com`. **Recipient (To)** = Gmail in content. **Reply-To** = visitor email from form.
5. **Locale pages stay SSG** (ADR-015). Contact endpoint is narrow runtime exception, not business/domain API.
6. **Fallback remains:** `mailto:` link + copy address (ADR-019 / ADR-014). If Resend fails or JS off, visitor can still reach via visible address.
7. **Still forbidden in Contact:** calendar, WA, Instagram, pricing, public CV download (ADR-043).
8. **Spam:** server validation (email + message length) + honeypot. Captcha only if real spam. Do not log message body in Vercel.
9. Implementation = **T-059**.
10. **Inbox subject** stays Indonesian (`CONTACT_EMAIL_SUBJECT` = `Pesan dari situs rezisaktiva`) for operational sorting/filtering. Visitor-facing Contact UI copy remains bilingual in `content/`.

This **does not** supersede ADR-019 for modal/form UI. It locks message *delivery*. M8 (form portion) rises from Could to Must; booking/calendar stays Could.

### Amendment (T-083, 2026-11-21)

Applies from the S-002 cutover (**T-086**); production keeps the modal until then.

- **Contact page replaces the modal** (ADR-052 point 5): the form lives on `/[locale]/contact`. This lifts the "not a `/contact` route" part of point 3 and replaces the modal wording in point 1. Header, mobile menu, footer and Workflow CTA link to the page.
- **Payload:** name, email, optional company or website, need (one of `product`, `build`, `ai`, `other`), details, honeypot. Point 8 server validation now covers every field (required name, valid email, known need, length limits).
- **Inbox text** lists the fields with Indonesian labels, then the message, like the Indonesian subject in point 10.
- **Unchanged:** Resend through the Route Handler, server-only key, Reply-To = visitor, "sent" only after `ok: true`, visible `mailto:` fallback. The copy-email button is gone; the address stays visible as a `mailto:` link.

### Reason

- Form saying “Terkirim” without delivering misleads (inbound friction).
- Boss Rezi chose API path; Resend free (daily/monthly quota far above portfolio inbound) and key stays on server.
- Route Handler keeps `page.tsx` without `"use server"` and does not change static-first shape for content.

### Alternatives Considered

- **mailto compose** (submit opens email client) — rejected; depends on visitor mail app.
- **Web3Forms / Formspree** — rejected; Boss Rezi chose API; public access key (Web3Forms) or tighter Formspree free quota.
- **Server Action on page** — rejected; code discipline: Action not on page route.
- **Gmail SMTP from Vercel** — rejected; fragile auth, easy to block.

### Impact / Follow-up

- Secrets: `RESEND_API_KEY`, `RESEND_FROM` in `.env.local` + Vercel (Preview/Production). Resend domain DNS on `rezisaktiva.space` (Boss Rezi option).
- `contact-modal.tsx` — POST + send/fail state; `mailto:` still primary visual.
- `product-discovery/` 02 / 04 / 05 / 06; `.cursor/rules/code-discipline.mdc`
- `tickets/r2.md` **T-059**; `DECISIONS.md` index