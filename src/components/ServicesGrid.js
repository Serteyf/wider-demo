import React from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/servicesGrid.module.css";

const ServicesGrid = () => {
  const { locale } = useRouter();

  const content = {
    es: {
      title:
        "Servicios de accesibilidad digital para productos complejos y compliance internacional",
      subtitle1:
        "Ayudamos a organizaciones a evaluar, documentar, mejorar y escalar la accesibilidad de productos, servicios, software y tecnologías digitales.",
      subtitle2:
        "Nuestros servicios acompañan a organizaciones que necesitan accesibilidad para mejorar la calidad del producto, incluir a más personas usuarias, responder a procurement, reducir riesgo legal, apoyar cumplimiento regulatorio, acceder a mercados y desarrollar madurez organizacional.",
      ctaButton: "Ver todos los servicios",
    },
    en: {
      title: "Digital accessibility services for complex products and international compliance",
      subtitle1:
        "We help organizations evaluate, document, improve, and scale accessibility across digital products, services, software, and technologies.",
      subtitle2:
        "Our services support organizations that need accessibility for product quality, user inclusion, procurement, legal risk reduction, regulatory compliance, market access, and long-term organizational maturity.",
      ctaButton: "View all services",
    },
  };

  const t = content[locale] || content.es;

  const servicesData = {
    es: [
      {
        id: 1,
        title: "Auditorías de accesibilidad",
        description:
          "Evaluamos sitios web, aplicaciones móviles, plataformas, documentos, sistemas internos, kioscos, cajeros automáticos, Smart TVs y software complejo según WCAG, EN 301 549, Section 508 y otros requisitos de accesibilidad aplicables.\n\nNuestras auditorías combinan pruebas manuales expertas, navegación con teclado, evaluación con tecnologías de asistencia, validaciones automáticas, análisis técnico y documentación accionable para equipos de producto, diseño, desarrollo, QA, legal y compliance.",
      },
      {
        id: 2,
        title: "VPATs, ACRs e informes IRA",
        description:
          "Preparamos documentación de accesibilidad para procesos de procurement, evaluación de proveedores, ventas enterprise, requisitos del sector público y conversaciones de cumplimiento.\n\nNuestro trabajo incluye VPATs, Accessibility Conformance Reports, informes IRA, hallazgos basados en evidencia, declaraciones de accesibilidad y documentación alineada con los estándares y expectativas del mercado correspondiente.",
      },
      {
        id: 3,
        title: "Accessibility Assessments",
        description:
          "Ayudamos a las organizaciones a comprender su estado actual de accesibilidad y definir pasos claros para avanzar.\n\nNuestros accessibility assessments identifican brechas en productos, procesos, equipos, gobernanza, herramientas, formación, documentación y preparación para compliance. El resultado es un informe práctico con recomendaciones priorizadas para comenzar, mejorar o escalar la accesibilidad.",
      },
      {
        id: 4,
        title: "Formación y capacitación de equipos",
        description:
          "Brindamos formación práctica en accesibilidad para equipos de diseño, desarrollo, QA, producto, contenido, liderazgo, legal y compliance.\n\nAlgunos de nuestros programas de formación están certificados internacionalmente por IAAP, lo que permite a las organizaciones acceder a capacitación confiable, basada en estándares y orientada a desarrollar capacidad interna.",
      },
      {
        id: 5,
        title: "Estrategia y madurez en accesibilidad",
        description:
          "Ayudamos a las organizaciones a construir programas sostenibles de accesibilidad, roadmaps, modelos de gobernanza, políticas internas, criterios de procurement, prácticas para design systems y procesos de calidad.\n\nNuestro trabajo estratégico acompaña a equipos que necesitan pasar de la remediación aislada a prácticas escalables integradas en el ciclo de vida del producto digital.",
      },
      {
        id: 6,
        title: "Soporte legal, compliance y procurement",
        description:
          "Brindamos análisis técnico y documentación especializada para procesos legales, regulatorios, contractuales y de procurement relacionados con accesibilidad digital.\n\nNuestro trabajo puede apoyar respuestas a reclamos, análisis de casos legales, planes de remediación, declaraciones de accesibilidad, revisión de proveedores, requisitos de acceso a mercados y conversaciones de cumplimiento vinculadas con WCAG, EN 301 549, Section 508, requisitos relacionados con ADA y la European Accessibility Act.",
      },
    ],
    en: [
      {
        id: 1,
        title: "Accessibility Audits",
        description:
          "We evaluate websites, mobile apps, platforms, documents, internal systems, kiosks, ATMs, Smart TVs, and complex software against WCAG, EN 301 549, Section 508, and applicable accessibility requirements.\n\nOur audits combine expert manual testing, keyboard navigation, assistive technology evaluation, automated checks, technical analysis, and actionable documentation for product, design, development, QA, legal, and compliance teams.",
      },
      {
        id: 2,
        title: "VPATs, ACRs and IRA Reports",
        description:
          "We prepare accessibility documentation for procurement, vendor evaluation, enterprise sales, public sector requirements, and compliance conversations.\n\nOur work includes VPATs, Accessibility Conformance Reports, IRA reports, evidence-based findings, accessibility statements, and documentation aligned with relevant standards and market expectations.",
      },
      {
        id: 3,
        title: "Accessibility Assessments",
        description:
          "We help organizations understand their current accessibility status and define clear next steps.\n\nOur accessibility assessments identify gaps across products, processes, teams, governance, tooling, training, documentation, and compliance readiness. The result is a practical report with prioritized recommendations to start, improve, or scale accessibility.",
      },
      {
        id: 4,
        title: "Training and Team Enablement",
        description:
          "We provide practical accessibility training for design, development, QA, product, content, leadership, legal, and compliance teams.\n\nSome of our training programs are internationally certified by IAAP, supporting organizations that need reliable, standards-based accessibility education to build internal capability.",
      },
      {
        id: 5,
        title: "Accessibility Strategy and Maturity",
        description:
          "We help organizations build sustainable accessibility programs, roadmaps, governance models, internal policies, procurement criteria, design system practices, and quality processes.\n\nOur strategy work supports teams moving from isolated remediation to scalable accessibility practices embedded into the digital product lifecycle.",
      },
      {
        id: 6,
        title: "Legal, Compliance and Procurement Support",
        description:
          "We provide technical accessibility analysis and documentation for legal, regulatory, contractual, and procurement-related processes.\n\nOur work can support demand responses, legal case analysis, remediation plans, accessibility statements, vendor reviews, market access requirements, and compliance discussions involving WCAG, EN 301 549, Section 508, ADA-related requirements, and the European Accessibility Act.",
      },
    ],
  };

  const services = servicesData[locale] || servicesData.es;

  const icons = [
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>,
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>,
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
    </svg>,
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>,
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>,
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>,
  ];

  return (
    <section className={styles.servicesSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.subtitle}>{t.subtitle1}</p>
            <p className={styles.subtitle}>{t.subtitle2}</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>{icons[index]}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <a href="/services" className={styles.ctaButton}>
              {t.ctaButton}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
