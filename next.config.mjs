/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.searchstax.com",
      },
    ],
  },
};

export default nextConfig;
