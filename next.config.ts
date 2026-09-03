import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Lock the workspace to this repo. Otherwise Turbopack walks up to
    // ~/package-lock.json and warns that it is outside the Git root.
    root: projectRoot,
  },
  // Browser tools / HMR often hit 127.0.0.1 while `next dev` is bound to localhost.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    // `workPhotoProps` and Unsplash `quality={90}` (default allowlist is only 75).
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:locale(id|en)/work",
        destination: "/:locale/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
