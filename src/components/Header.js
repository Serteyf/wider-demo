import { useState } from "react";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.container}>
            {/* Botón Hamburguesa */}
            <button
              className={styles.hamburger}
              onClick={toggleMobileMenu}
              aria-label="Menú"
              aria-expanded={mobileMenuOpen}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>

            <div className={styles.logo}>
              <Link href="/" className="text-decoration-none">
                {/* Logo desktop */}
                <Image
                  src="/images/logo-header.png"
                  width={160}
                  height={67}
                  alt="Wider - Ir a inicio"
                  className={styles.logoDesktop}
                />
                {/* Logo mobile */}
                <Image
                  src="/images/logo-header.png"
                  width={100}
                  height={42}
                  alt="Wider - inicio"
                  className={styles.logoMobile}
                />
              </Link>
            </div>

            <div className={`${styles.navWrapper} ${mobileMenuOpen ? styles.navWrapperOpen : ""}`}>
              <Navigation />
              <div className={styles.languageSwitcherWrapper}>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Overlay para cerrar el menú */}
      {mobileMenuOpen && <div className={styles.overlay} onClick={toggleMobileMenu}></div>}
    </>
  );
};

export default Header;
