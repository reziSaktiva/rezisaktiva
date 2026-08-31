import type { MetadataRoute } from "next";
import { r1PageUrls } from "@/lib/site-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return r1PageUrls().map(({ url }) => ({ url }));
}
