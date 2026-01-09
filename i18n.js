import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Inicializa react-i18next
  .init({
    fallbackLng: 'es', // Idioma predeterminado
    supportedLngs: ['es', 'en'], // Idiomas soportados
    interpolation: {
      escapeValue: false, // React ya maneja la seguridad
    },
  });

export default i18n;