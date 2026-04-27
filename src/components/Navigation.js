import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/header.module.css";

const NavItem = ({ href, label }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li className={isActive ? styles.active : ""}>
      <Link className={`${styles.pNav} ${isActive ? styles.activeLink : ""}`} href={href}>
        {label.toUpperCase()}
      </Link>
    </li>
  );
};

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isActive = router.pathname === "/services";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`${styles.dropdownContainer} ${isActive ? styles.active : ""}`}>
      <button
        className={`${styles.pNav} ${styles.dropdownButton} ${isActive ? styles.activeLink : ""}`}
        aria-expanded={isOpen}
        aria-controls="servicios-dropdown"
        onClick={toggleDropdown}
      >
        SERVICIOS
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={styles.caretIcon}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu} id="servicios-dropdown">
          <li>
            <Link href="/services/option1" className={styles.dropdownItem}>
              Opción 1
            </Link>
          </li>
          <li>
            <Link href="/services/option2" className={styles.dropdownItem}>
              Opción 2
            </Link>
          </li>
          <li>
            <Link href="/services/option3" className={styles.dropdownItem}>
              Opción 3
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

const Navigation = () => {
  const { locale } = useRouter();
  const navLabel = locale === "es" ? "Principal" : "Main";

  return (
    <nav aria-label={navLabel} className={styles.nav}>
      <ul className={styles.navList}>
        <NavItem href="/" label="Inicio" />
        <NavItem href="/about" label="Sobre nosotros" />
        <ServicesDropdown />
        <NavItem href="/contact" label="Contacto" />
      </ul>
    </nav>
  );
};

export default Navigation;
