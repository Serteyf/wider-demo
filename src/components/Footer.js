import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footerRow}>
          {/* 1. Logo - 15% */}
          <Col className={styles.logoColumn}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/Wider -16.png"
                alt="Wider Logo"
                width={120}
                height={60}
                className={styles.logo}
              />
            </div>
          </Col>

          {/* 2. Oficinas - 40% */}
          <Col className={styles.officesColumn}>
            <h3 className={styles.heading}>Oficinas</h3>
            <p className={styles.countries}>EEUU - España - Argentina - México</p>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>
                Copyright 2026
              </Link>
            </div>
          </Col>

          {/* 3. Contacto - 15% */}
          <Col className={styles.contactColumn}>
            <h3 className={styles.heading}>Contacto</h3>
            <a href="mailto:info@wider.global" className={styles.email}>
              info@wider.global
            </a>
            <div className={styles.linkedinWrapper}>
              <div className={styles.linkedinIcon}>
                <span>in</span>
              </div>
              <a
                href="https://linkedin.com/company/wider-global"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
              >
                wider.global
              </a>
            </div>
          </Col>

          {/* 4. Legales - 20% */}
          <Col className={styles.socialColumn}>
            <h3 className={styles.heading}>Legales</h3>
            <div className={styles.legalLinks}>
              <Link href="#" className={styles.legalLink}>
                Privacidad
              </Link>
              <Link href="#" className={styles.legalLink}>
                Declaración de Accesibilidad
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
