import type { NextConfig } from "next";
import SemiPlugin from "@douyinfe/semi-webpack-plugin";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@douyinfe/semi-ui"],
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new SemiPlugin({
        cssLayer: true,
      }),
    ];
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
