import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/faqCarousel.module.css";

const FAQCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Empezamos en el primer slide

  // Datos de preguntas frecuentes
  const faqs = [
    {
      id: 1,
      number: "#1",
      question: "¿Puedo aplicar la accesibilidad en mi oficina?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      number: "#2",
      question: "¿Puedo aplicar la accesibilidad en mi oficina?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      number: "#3",
      question: "¿Puedo aplicar la accesibilidad en mi oficina?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      number: "#4",
      question: "¿Puedo aplicar la accesibilidad en mi oficina?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      number: "#5",
      question: "¿Puedo aplicar la accesibilidad en mi oficina?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

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
          <h2 className={styles.title}>Preguntas frecuentes</h2>
        </div>

        {/* Grid para Desktop - muestra todas las tarjetas */}
        <div className={styles.gridWrapper}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.gridItem}>
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

        {/* Carousel para Mobile */}
        <div className={styles.carouselWrapper}>
          {/* Botón Previous */}
          <button
            className={styles.navButton}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
