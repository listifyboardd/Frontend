import type { NextConfig } from "next";
import 'dotenv/config'

const nextConfig: NextConfig = {
  images: {
    domains: ['listifyboard.com'],
  },
  
  env: {
    BASE_URL: process.env.BASE_URL,
  }
};

export default nextConfig;
