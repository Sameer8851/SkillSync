/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com", // ✅ Add Clerk domain
      }
    ]
  }
};

export default nextConfig;
