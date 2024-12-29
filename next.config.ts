import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
};

export default nextConfig;
