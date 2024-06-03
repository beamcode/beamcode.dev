import withMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    mdxRs: false,
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

export default withMDX(mdxConfig)(nextConfig)
