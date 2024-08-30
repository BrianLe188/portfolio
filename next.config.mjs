/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "http://127.0.0.1:5328/api",
      },
    ];
  },
};

export default nextConfig;
