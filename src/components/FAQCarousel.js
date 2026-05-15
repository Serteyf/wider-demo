import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/faqCarousel.module.css";

const FAQCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { locale } = useRouter();

  const faqsData = {
    es: [
      {
        id: 1,
        number: "#1",
        question: "¿Auditan solo sitios web?",
        answer:
          "No. Wider evalúa sitios web, aplicaciones móviles, plataformas digitales, documentos, sistemas internos, kioscos, cajeros automáticos, Smart TVs, flujos transaccionales, design systems, software y servicios digitales complejos.\n\nNuestro foco es la accesibilidad digital en toda la experiencia de producto o servicio, no solamente en sitios web tradicionales.",
      },
      {
        id: 2,
        number: "#2",
        question: "¿Preparan VPATs o Accessibility Conformance Reports?",
        answer:
          "Sí. Preparamos VPATs, Accessibility Conformance Reports, informes IRA, declaraciones de accesibilidad y documentación técnica para procurement, evaluación de proveedores, ventas enterprise, requisitos del sector público y procesos de compliance.\n\nAlineamos la documentación con el estándar, mercado, tipo de producto y expectativa de procurement correspondiente.",
      },
      {
        id: 3,
        number: "#3",
        question: "¿Qué es un accessibility assessment?",
        answer:
          "Un accessibility assessment permite conocer el estado actual de accesibilidad de una organización en productos, procesos, equipos, gobernanza, formación, herramientas, documentación y preparación para compliance.\n\nWider entrega un informe práctico con pasos priorizados para comenzar, mejorar o escalar la accesibilidad.",
      },
      {
        id: 4,
        number: "#4",
        question: "¿Pueden acompañar requisitos internacionales de accesibilidad?",
        answer:
          "Sí. Acompañamos a organizaciones que operan en Estados Unidos, Canadá, Latinoamérica, Europa y Asia.\n\nNuestro trabajo puede abordar WCAG, EN 301 549, Section 508, requisitos relacionados con ADA, la European Accessibility Act, expectativas de procurement y necesidades específicas de cada mercado.",
      },
      {
        id: 5,
        number: "#5",
        question: "¿Alcanza con usar herramientas automáticas de accesibilidad?",
        answer:
          "No. Las herramientas automáticas pueden identificar algunos problemas, pero no pueden evaluar por completo accesibilidad, usabilidad, calidad de interacción, comportamiento con tecnologías de asistencia, claridad de contenido, acceso por teclado o flujos reales de uso.\n\nUn trabajo confiable requiere pruebas manuales expertas, análisis contextual y documentación que los equipos puedan usar de forma efectiva.",
      },
      {
        id: 6,
        number: "#6",
        question: "¿Ofrecen formación en accesibilidad?",
        answer:
          "Sí. Wider ofrece formación en accesibilidad para equipos de diseño, desarrollo, QA, producto, contenido, liderazgo, legal y compliance.\n\nAlgunos programas de formación están certificados internacionalmente por IAAP, lo que permite a las organizaciones acceder a educación en accesibilidad basada en estándares y orientada al desarrollo de capacidad interna.",
      },
      {
        id: 7,
        number: "#7",
        question: "¿Pueden auditar kioscos, cajeros automáticos, Smart TVs o software no web?",
        answer:
          "Sí. Wider evalúa accesibilidad en productos y tecnologías digitales complejas, incluyendo kioscos, cajeros automáticos, Smart TVs, software interno, sistemas transaccionales y otras interfaces más allá de la web.\n\nEstos proyectos requieren definición específica de alcance, análisis técnico, revisión de flujos de uso y enfoques de prueba adaptados al producto, dispositivo, contexto de uso y requisitos aplicables.",
      },
    ],
    en: [
      {
        id: 1,
        number: "#1",
        question: "Do you only audit websites?",
        answer:
          "No. Wider evaluates websites, mobile apps, digital platforms, documents, internal systems, kiosks, ATMs, Smart TVs, transactional flows, design systems, software, and complex digital services.\n\nOur focus is digital accessibility across the full product and service experience, not only traditional websites.",
      },
      {
        id: 2,
        number: "#2",
        question: "Do you create VPATs or Accessibility Conformance Reports?",
        answer:
          "Yes. We prepare VPATs, Accessibility Conformance Reports, IRA reports, accessibility statements, and technical documentation for procurement, vendor evaluation, enterprise sales, public sector requirements, and compliance processes.\n\nWe align the documentation with the relevant standard, market, product type, and procurement expectation.",
      },
      {
        id: 3,
        number: "#3",
        question: "What is an accessibility assessment?",
        answer:
          "An accessibility assessment helps an organization understand its current accessibility status across products, processes, teams, governance, training, tooling, documentation, and compliance readiness.\n\nWider delivers a practical report with prioritized steps to begin, improve, or scale accessibility.",
      },
      {
        id: 4,
        number: "#4",
        question: "Can you support international accessibility requirements?",
        answer:
          "Yes. We support organizations operating in the United States, Canada, Latin America, Europe, and Asia.\n\nOur work can address WCAG, EN 301 549, Section 508, ADA-related accessibility requirements, the European Accessibility Act, procurement expectations, and market-specific accessibility needs.",
      },
      {
        id: 5,
        number: "#5",
        question: "Are automated accessibility tools enough?",
        answer:
          "No. Automated tools can identify some issues, but they cannot fully evaluate accessibility, usability, interaction quality, assistive technology behavior, content clarity, keyboard access, or real user flows.\n\nReliable accessibility work requires expert manual testing, contextual analysis, and documentation that teams can actually use.",
      },
      {
        id: 6,
        number: "#6",
        question: "Do you provide accessibility training?",
        answer:
          "Yes. Wider provides accessibility training for design, development, QA, product, content, leadership, legal, and compliance teams.\n\nSome of our training programs are internationally certified by IAAP, supporting organizations that need standards-based accessibility education and internal capability building.",
      },
      {
        id: 7,
        number: "#7",
        question: "Can you audit kiosks, ATMs, Smart TVs, or non-web software?",
        answer:
          "Yes. Wider evaluates accessibility across complex digital products and technologies, including kiosks, ATMs, Smart TVs, internal software, transactional systems, and other interfaces beyond the web.\n\nThese projects require specific scoping, technical analysis, user flow review, and testing approaches adapted to the product, device, context of use, and applicable requirements.",
      },
    ],
  };

  const faqs = faqsData[locale] || faqsData.es;

  const titleText = {
    es: "Preguntas frecuentes",
    en: "Frequently asked questions",
  };

  const title = titleText[locale] || titleText.es;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < faqs.length - 1 ? prev + 1 : prev));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Obtener solo el slide actual para mobile
  const getVisibleSlides = () => {
    return [{ ...faqs[currentIndex], slidePosition: 0 }];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className={styles.faqSection}>
      <Container>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        {/* Grid para Desktop - muestra todas las tarjetas */}
        <div className={styles.gridWrapper}>
          {faqs.map((faq, index) => (
            <div key={faq.id} className={styles.gridItem}>
              <div
                className={`${styles.slideContainer} ${index === 1 ? styles.slideContainerHighlight : ""}`}
              >
                <div className={styles.faqCard}>
                  <div className={styles.number}>{faq.number}</div>
                  <h3 className={styles.question}>{faq.question}</h3>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel para Mobile */}
        <div className={styles.carouselWrapper}>
          {/* Botón Previous */}
          <button
            className={styles.navButton}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Carousel */}
          <div className={styles.carouselContainer}>
            <div className={styles.slidesWrapper}>
              {visibleSlides.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.slide} ${faq.slidePosition === 0 ? styles.slideActive : ""}`}
                >
                  <div className={styles.slideContainer}>
                    <div className={styles.faqCard}>
                      <div className={styles.number}>{faq.number}</div>
                      <h3 className={styles.question}>{faq.question}</h3>
                      <p className={styles.answer}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Next */}
          <button
            className={styles.navButton}
            onClick={handleNext}
            disabled={currentIndex === faqs.length - 1}
            aria-label="Siguiente"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className={styles.dotsContainer}>
          {faqs.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir a la pregunta ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQCarousel;
