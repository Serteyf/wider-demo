import nextI18NextConfig from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale, // Idioma predeterminado
    locales: nextI18NextConfig.i18n.locales, // Idiomas disponibles
  },
  webpack: (config, { isServer }) => {
    // Configuraciones adicionales de Webpack
    return config;
  },
};

export default nextConfig;