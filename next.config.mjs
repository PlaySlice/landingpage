/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
