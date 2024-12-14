import type { NextConfig } from "next";
import 'dotenv/config'

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  }
};

export default nextConfig;
