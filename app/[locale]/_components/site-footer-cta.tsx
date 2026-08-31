"use client";

import { Button } from "@astryxdesign/core/Button";
import { Icon } from "@astryxdesign/core/Icon";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import { Magnetic } from "./home-motion";
import { ArrowRightIcon } from "./overlay-icons";

export function SiteFooterCta({ label }: { label: string }) {
  const { open } = useContactModal();

  return (
    <Magnetic>
      <Button
        label={label}
        variant="primary"
        size="lg"
        onClick={open}
        endContent={<Icon icon={ArrowRightIcon} />}
        className="home-contact-cta"
      />
    </Magnetic>
  );
}
