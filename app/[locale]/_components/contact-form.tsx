"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import {
  CONTACT_COPY,
  CONTACT_EMAIL,
  CONTACT_NEED_IDS,
} from "@/content/contact";
import {
  CONTACT_COMPANY_MAX,
  CONTACT_EMAIL_MAX,
  CONTACT_HONEYPOT_FIELD,
  CONTACT_MESSAGE_MAX,
  CONTACT_NAME_MAX,
  isContactEmail,
  isContactNeed,
} from "@/lib/contact-mail";
import type { Locale } from "@/lib/locale";

type FieldName = "name" | "email" | "company" | "need" | "message";
type Values = Record<FieldName, string>;
type RequiredField = Exclude<FieldName, "company">;
type Errors = Partial<Record<RequiredField, true>>;
type Status = "idle" | "sending" | "sent" | "failed";

const EMPTY: Values = { name: "", email: "", company: "", need: "", message: "" };
const FIELD_ORDER: readonly RequiredField[] = ["name", "email", "need", "message"];

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = true;
  if (!isContactEmail(values.email.trim())) errors.email = true;
  if (!isContactNeed(values.need)) errors.need = true;
  if (!values.message.trim()) errors.message = true;
  return errors;
}

/**
 * Contact page form (T-083.2, ADR-047). Client validation mirrors the server;
 * errors show after the first submit and clear as each field is fixed. "Sent"
 * shows only after the Route Handler answers `ok: true`; on failure the
 * mailto fallback stays one click away.
 */
export function ContactForm({ locale }: { locale: Locale }) {
  const copy = CONTACT_COPY[locale];
  const baseId = useId();
  const id = (field: FieldName) => `${baseId}-${field}`;
  const [values, setValues] = useState<Values>(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLDivElement>(null);
  // State updates land after the next render; a ref blocks a second submit
  // fired in the same frame (double Enter or double click).
  const sendingRef = useRef(false);

  useEffect(() => {
    if (status === "sent") {
      successRef.current?.focus();
    }
  }, [status]);

  const update = (field: FieldName, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (submitted) {
      setErrors(validate(next));
    }
    if (status === "failed") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sendingRef.current) {
      return;
    }
    setSubmitted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(id(firstInvalid))?.focus();
      return;
    }

    sendingRef.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company,
          need: values.need,
          message: values.message,
          [CONTACT_HONEYPOT_FIELD]: honeypot,
        }),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;
      if (response.ok && data?.ok === true) {
        setValues(EMPTY);
        setSubmitted(false);
        setStatus("sent");
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    } finally {
      sendingRef.current = false;
    }
  };

  if (status === "sent") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="contact-form contact-sent on-ink flex flex-col gap-4"
      >
        <p className="display contact-sent-title">{copy.sentTitle}</p>
        <p className="copy">{copy.sentBody}</p>
      </div>
    );
  }

  const errorId = (field: RequiredField) => `${id(field)}-error`;
  const invalidProps = (field: RequiredField) =>
    errors[field]
      ? { "aria-invalid": true as const, "aria-describedby": errorId(field) }
      : {};

  return (
    <form
      className="contact-form flex flex-col"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="contact-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        name={CONTACT_HONEYPOT_FIELD}
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />

      <Field className="contact-field" data-invalid={errors.name || undefined}>
        <FieldLabel htmlFor={id("name")} className="contact-label">
          {copy.name.label}
        </FieldLabel>
        <Input
          id={id("name")}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={CONTACT_NAME_MAX}
          placeholder={copy.name.placeholder}
          className="contact-input"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          {...invalidProps("name")}
        />
        {errors.name ? (
          <p id={errorId("name")} className="contact-error">
            {copy.name.error}
          </p>
        ) : null}
      </Field>

      <Field className="contact-field" data-invalid={errors.email || undefined}>
        <FieldLabel htmlFor={id("email")} className="contact-label">
          {copy.email.label}
        </FieldLabel>
        <Input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={CONTACT_EMAIL_MAX}
          placeholder={copy.email.placeholder}
          className="contact-input"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          {...invalidProps("email")}
        />
        {errors.email ? (
          <p id={errorId("email")} className="contact-error">
            {copy.email.error}
          </p>
        ) : null}
      </Field>

      <Field className="contact-field">
        <FieldLabel htmlFor={id("company")} className="contact-label">
          {copy.company.label}{" "}
          <span className="contact-optional">{copy.optional}</span>
        </FieldLabel>
        <Input
          id={id("company")}
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={CONTACT_COMPANY_MAX}
          placeholder={copy.company.placeholder}
          className="contact-input"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </Field>

      <Field className="contact-field" data-invalid={errors.need || undefined}>
        <FieldLabel htmlFor={id("need")} className="contact-label">
          {copy.need.label}
        </FieldLabel>
        <NativeSelect
          id={id("need")}
          name="need"
          required
          className="contact-select w-full"
          value={values.need}
          data-empty={values.need ? undefined : ""}
          onChange={(event) => update("need", event.target.value)}
          {...invalidProps("need")}
        >
          <NativeSelectOption value="" disabled>
            {copy.need.placeholder}
          </NativeSelectOption>
          {CONTACT_NEED_IDS.map((need) => (
            <NativeSelectOption key={need} value={need}>
              {copy.needs[need]}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        {errors.need ? (
          <p id={errorId("need")} className="contact-error">
            {copy.need.error}
          </p>
        ) : null}
      </Field>

      <Field
        className="contact-field"
        data-invalid={errors.message || undefined}
      >
        <FieldLabel htmlFor={id("message")} className="contact-label">
          {copy.details.label}
        </FieldLabel>
        <Textarea
          id={id("message")}
          name="message"
          required
          maxLength={CONTACT_MESSAGE_MAX}
          placeholder={copy.details.placeholder}
          className="contact-input contact-textarea"
          data-lenis-prevent=""
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          {...invalidProps("message")}
        />
        {errors.message ? (
          <p id={errorId("message")} className="contact-error">
            {copy.details.error}
          </p>
        ) : null}
      </Field>

      <Button
        type="submit"
        className="contact-send"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
      >
        <span>{status === "sending" ? copy.sending : copy.submit}</span>
        <span aria-hidden="true">→</span>
      </Button>

      {status === "failed" ? (
        <p className="contact-note" role="alert">
          {copy.failed}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-note-link">
            {copy.failedFallback}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
