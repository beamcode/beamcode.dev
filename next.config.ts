import withMDX from "@next/mdx"
import type { NextConfig } from "next"

const baseConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

const mdxConfig = {
  extension: /\.mdx?$/,
}

export default withMDX(mdxConfig)(baseConfig)
