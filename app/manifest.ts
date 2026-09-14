import type { MetadataRoute } from "next";
import { siteManifest } from "@/lib/site-manifest";

export default function manifest(): MetadataRoute.Manifest {
  return siteManifest();
}
