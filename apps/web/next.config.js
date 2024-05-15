/** @type {import('next').NextConfig} */
require("dotenv").config({
  path: "../../.env",
})
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/api/:path*`,
      },
      {
        source: '/files/:path*',
        destination: `${process.env.API_URL}/files/:path*`,
      },
    ];
  },
  env: {
    API_URL: process.env.API_URL,
    WEB_URL: process.env.WEB_URL,
  },
};

