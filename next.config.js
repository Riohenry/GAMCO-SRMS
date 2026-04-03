/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
