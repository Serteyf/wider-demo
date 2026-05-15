import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/footer.module.css";

const Footer = () => {
  const { locale } = useRouter();

  const content = {
    es: {
      offices: {
        title: "Oficinas",
        locations: "Barcelona · New York · Buenos Aires · México DF · Lima",
      },
      contact: {
        title: "Contacto",
      },
      services: {
        title: "Servicios",
        list: [
          "Auditorías de accesibilidad",
          "VPATs, ACRs e informes IRA",
          "Accessibility Assessments",
          "Consultoría de accesibilidad",
          "Formación en accesibilidad",
          "Soporte legal y compliance",
          "Estrategia de accesibilidad",
          "Declaraciones de accesibilidad",
        ],
      },
      legal: {
        title: "Legales",
        privacy: "Privacidad",
        accessibility: "Declaración de Accesibilidad",
      },
    },
    en: {
      offices: {
        title: "Markets",
        markets: "United States · Canada · Latin America · Europe · Asia",
        experienceTitle: "Experience across",
        experience: "Spain · Belgium · Germany · Sweden · Norway · France · Italy · Taiwan",
      },
      contact: {
        title: "Contact",
      },
      services: {
        title: "Services",
        list: [
          "Accessibility Audits",
          "VPATs, ACRs and IRA Reports",
          "Accessibility Assessments",
          "Accessibility Consulting",
          "Accessibility Training",
          "Legal and Compliance Support",
          "Accessibility Strategy",
          "Accessibility Statements",
        ],
      },
      legal: {
        title: "Legal",
        privacy: "Privacy",
        accessibility: "Accessibility Statement",
      },
    },
  };

  const text = content[locale] || content.es;

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footerRow}>
          {/* 1. Logo */}
          <Col className={styles.logoColumn}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo-footer.png"
                alt="Wider Logo"
                width={120}
                height={60}
                className={styles.logo}
              />
            </div>
          </Col>

          {/* 2. Oficinas / Markets */}
          <Col className={styles.officesColumn}>
            <h2 className={styles.heading}>{text.offices.title}</h2>
            {locale === "en" ? (
              <>
                <p className={styles.locations}>{text.offices.markets}</p>
                <h3 className={styles.subheading}>{text.offices.experienceTitle}</h3>
                <p className={styles.locations}>{text.offices.experience}</p>
              </>
            ) : (
              <p className={styles.locations}>{text.offices.locations}</p>
            )}
            <div className={styles.links}>
              <Link href="#" className={styles.link}>
                Copyright 2026
              </Link>
            </div>
          </Col>

          {/* 3. Contacto */}
          <Col className={styles.contactColumn}>
            <h2 className={styles.heading}>{text.contact.title}</h2>
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

          {/* 4. Servicios */}
          <Col className={styles.servicesColumn}>
            <h2 className={styles.heading}>{text.services.title}</h2>
            <ul className={styles.servicesList}>
              {text.services.list.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  {service}
                </li>
              ))}
            </ul>
          </Col>

          {/* 5. Legales */}
          <Col className={styles.legalColumn}>
            <h2 className={styles.heading}>{text.legal.title}</h2>
            <div className={styles.legalLinks}>
              <Link href="#" className={styles.legalLink}>
                {text.legal.privacy}
              </Link>
              <Link href="#" className={styles.legalLink}>
                {text.legal.accessibility}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
