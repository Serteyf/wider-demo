import { useRouter } from 'next/router';
import styles from '../styles/languageSwitcher.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageSwitcher}
      aria-label={locale === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
    >
      <span
        className={`${locale === 'es' ? styles.active : ''} fs-6 fs-md-5 fs-lg-4`} // Tamaños más moderados
      >
        ESPAÑOL
      </span>
      <span className={styles.separator}> / </span>
      <span
        className={`${locale === 'en' ? styles.active : ''} fs-6 fs-md-5 fs-lg-4`} // Tamaños más moderados
      >
        ENGLISH
      </span>
    </button>
  );
};

export default LanguageSwitcher;
