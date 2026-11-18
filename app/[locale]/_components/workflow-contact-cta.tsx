"use client";

import { useContactModal } from "@/app/_components/contact-modal-provider";

/**
 * Workflow closing call to action (T-082.4). Opens the existing Contact modal
 * until the Contact page lands (T-083.3 swaps this for a link).
 */
export function WorkflowContactCta({ label }: { label: string }) {
  const { open } = useContactModal();

  return (
    <button type="button" onClick={open} className="workflow-pill">
      <span>
        {label} <span aria-hidden="true">→</span>
      </span>
    </button>
  );
}
