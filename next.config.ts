import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/vs/foster-global',
        destination: '/404',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
