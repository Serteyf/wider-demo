const path = require('path');

const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'es', // Idioma predeterminado
    locales: ['es', 'en'], // Idiomas disponibles
    localePath: path.resolve('./public/locales'), // Ruta de los archivos de traducción
  },
  react: {
    useSuspense: false,
  },
};

module.exports = nextI18NextConfig;