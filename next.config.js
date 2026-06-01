/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // static export — works perfectly on Cloudflare Pages
  trailingSlash: true,
  images: {
    unoptimized: true  // required for static export
  }
}

module.exports = nextConfig
