/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ["picsum.photos", "fakestoreapi.com"],
  },
};

export default withNextIntl(nextConfig);
