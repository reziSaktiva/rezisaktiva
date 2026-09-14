import type { MetadataRoute } from "next";
import { projectCaseUrls, r1PageUrls } from "@/lib/site-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...r1PageUrls().map(({ url }) => ({ url })),
    ...projectCaseUrls().map(({ url }) => ({ url })),
  ];
}
