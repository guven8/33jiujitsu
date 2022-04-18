const debug = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  },
  assetPrefix: !debug ? 'https://33jiujitsu.co.uk/' : ''
};

module.exports = nextConfig;
