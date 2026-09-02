"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import { Magnetic } from "./home-motion";
import { ArrowRightIcon } from "./overlay-icons";

export function SiteFooterCta({ label }: { label: string }) {
  const { open } = useContactModal();

  return (
    <Magnetic>
      <Button
        type="button"
        size="lg"
        onClick={open}
        className="home-contact-cta"
      >
        {label}
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </Magnetic>
  );
}
