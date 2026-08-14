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
};

export default nextConfig;
