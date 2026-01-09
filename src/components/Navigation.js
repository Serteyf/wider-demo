import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const NavItem = ({ href, label, ariaLabel }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li className={isActive ? styles.active : ""}>
      <Link
        className={`${styles.pNav} ${isActive ? styles.activeLink : ""}`}
        href={href}
        aria-label={ariaLabel || label}
      >
        {label}
      </Link>
    </li>
  );
};

const Navigation = () => (
  <nav aria-label="Principal" className={styles.nav}>
    <ul className={styles.navList}>
      <NavItem href="/" label="Inicio" />
      <NavItem href="/about" label="Sobre nosotros" ariaLabel="Conocer más sobre Wider" />
      <NavItem href="/services" label="Servicios" />
      <NavItem href="/contact" label="Contacto" />
    </ul>
  </nav>
);

export default Navigation;
