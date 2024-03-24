/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"], // ここに信頼できる画像ソースのドメインを追加
  },
};

module.exports = nextConfig;
