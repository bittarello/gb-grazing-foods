import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site totalmente estático em /out, compatível com GitHub Pages.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
