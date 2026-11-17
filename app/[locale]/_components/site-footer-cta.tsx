"use client";

import { useContactModal } from "@/app/_components/contact-modal-provider";
import { Button } from "@/components/ui/button";
import { Magnetic } from "./home-motion";

/**
 * "Write to me" magnetic button (T-079.2). Opens the same Contact modal as
 * before (ADR-025). The pull is `Magnetic` (Motion): off for reduced motion
 * and for touch / coarse pointers.
 */
export function SiteFooterCta({ label }: { label: string }) {
  const { open } = useContactModal();

  return (
    <Magnetic>
      <Button
        type="button"
        variant="ghost"
        onClick={open}
        className="display h-36 w-36 rounded-full bg-paper px-0 text-2xl text-ink transition-transform duration-500 ease-monolith hover:scale-105 hover:bg-paper hover:text-ink active:translate-y-0 sm:h-44 sm:w-44 sm:text-3xl dark:hover:bg-paper"
      >
        <span className="max-w-[7ch] text-balance text-center leading-[0.95]">
          {label}
        </span>
      </Button>
    </Magnetic>
  );
}
