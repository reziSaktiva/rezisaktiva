import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { PERSON, PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function ExternalSiteLink({
  href,
  children,
  newTabLabel,
  className,
}: {
  href: string;
  children: ReactNode;
  newTabLabel: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 underline-offset-4 hover:underline focus-visible:underline",
        className,
      )}
    >
      {children}
      <ExternalLink aria-hidden size={12} />
      <span className="sr-only">{newTabLabel}</span>
    </a>
  );
}

export function WorkplaceLine({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const copy = PERSON_WORKPLACE_COPY[locale];

  return (
    <span className={cn("flex flex-wrap items-center gap-2", className)}>
      <span>{copy.prefix}</span>
      <ExternalSiteLink href={PERSON.worksFor.url} newTabLabel={copy.newTab}>
        {PERSON.worksFor.name}
      </ExternalSiteLink>
    </span>
  );
}
