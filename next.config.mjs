/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:id.png',
        destination: '/images/:id.png',
      },
      {
        source: '/:id.json',
        destination: '/metadata/:id.json',
      },
    ];
  },
};

export default nextConfig;
