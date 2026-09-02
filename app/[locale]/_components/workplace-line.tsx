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
      className={cn("about-external-link", className)}
    >
      {children}
      <ExternalLink aria-hidden size={12} className="about-external-icon" />
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
      <span className="about-workplace-prefix">{copy.prefix}</span>
      <ExternalSiteLink href={PERSON.worksFor.url} newTabLabel={copy.newTab}>
        {PERSON.worksFor.name}
      </ExternalSiteLink>
    </span>
  );
}
