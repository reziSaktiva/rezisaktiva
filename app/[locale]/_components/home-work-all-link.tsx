"use client";

import NextLink from "next/link";
import { Link } from "@astryxdesign/core/Link";
import { Magnetic } from "./home-motion";

export function HomeWorkAllLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Magnetic>
      <Link
        as={NextLink}
        href={href}
        color="secondary"
        className="home-cta-underline"
      >
        {label}
      </Link>
    </Magnetic>
  );
}
