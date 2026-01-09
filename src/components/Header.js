import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className="text-decoration-none">
            {/* Logo desktop */}
            <Image
              src="/images/Wider -9.png"
              width={160}
              height={67}
              alt="Wider - Ir a inicio"
              className={styles.logoDesktop}
            />
            {/* Logo mobile */}
            <Image
              src="/images/Wider -16.png"
              width={100}
              height={42}
              alt="Wider - Ir a inicio"
              className={styles.logoMobile}
            />
          </Link>
        </div>
        <Navigation />
        <div className={styles.languageSwitcherWrapper}>
          <LanguageSwitcher />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
