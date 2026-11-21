import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/locale";
import { contactHref } from "@/lib/site-url";
import { Magnetic } from "./home-motion";

/**
 * "Write to me" magnetic button (T-079.2). Links to the Contact page
 * (T-083.3; the modal is gone). The pull is `Magnetic` (Motion): off for
 * reduced motion and for touch / coarse pointers.
 */
export function SiteFooterCta({
  label,
  locale,
}: {
  label: string;
  locale: Locale;
}) {
  return (
    <Magnetic>
      <Button
        asChild
        variant="ghost"
        className="display h-36 w-36 rounded-full bg-paper px-0 text-2xl text-ink transition-transform duration-500 ease-monolith hover:scale-105 hover:bg-paper hover:text-ink active:translate-y-0 sm:h-44 sm:w-44 sm:text-3xl dark:hover:bg-paper"
      >
        <NextLink href={contactHref(locale)}>
          <span className="max-w-[7ch] text-balance text-center leading-[0.95]">
            {label}
          </span>
        </NextLink>
      </Button>
    </Magnetic>
  );
}
