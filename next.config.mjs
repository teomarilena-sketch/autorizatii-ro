/** @type {import('next').NextConfig} */

// Domeniul canonic: autorizații.ro (punycode: xn--autorizaii-oyd.ro).
// Orice alt host (www, sau domeniul fără diacritice) redirecționează 301 aici.
const CANONICAL_HOST = "xn--autorizaii-oyd.ro";
const REDIRECT_HOSTS = [
  "www.xn--autorizaii-oyd.ro",
  "autorizatii.ro",
  "www.autorizatii.ro",
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return REDIRECT_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
