import nextI18NextConfig from "./next-i18next.config.js";

const nextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
  // Aumentar timeout para builds
  staticPageGenerationTimeout: 180,
};

export default nextConfig;
