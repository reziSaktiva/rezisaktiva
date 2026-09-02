"use client";

import NextLink from "next/link";
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
      <NextLink href={href} className="home-cta-underline">
        {label}
      </NextLink>
    </Magnetic>
  );
}
