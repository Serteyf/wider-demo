import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/testimonialsCarousel.module.css";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Empezamos en el slide del medio

  // Datos de testimoniales
  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "CEO - UK",
      image: "/images/testimonials/person1.jpg",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      position: "CEO - España",
      image: "/images/testimonials/person2.jpg",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Torres",
      position: "CEO - México",
      image: "/images/testimonials/person3.jpg",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
    },
    {
      id: 4,
      name: "Diego Silva",
      position: "CEO - Argentina",
      image: "/images/testimonials/person4.jpg",
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
    },
    {
      id: 5,
      name: "Laura Martínez",
      position: "CEO - Perú",
      image: "/images/testimonials/person5.jpg",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
      rating: 5,
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : prev));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Obtener los 3 slides visibles
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      const index = currentIndex + i;
      if (index >= 0 && index < testimonials.length) {
        slides.push({ ...testimonials[index], slidePosition: i });
      }
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className={styles.testimonialsSection}>
      <Container>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Lo que nuestros clientes dicen</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

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
              {visibleSlides.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`${styles.slide} ${
                    testimonial.slidePosition === 0 ? styles.slideActive : ""
                  }`}
                >
                  <div className={styles.slideContainer}>
                    <div className={styles.testimonialCard}>
                      <div className={styles.header}>
                        <div className={styles.avatarWrapper}>
                          <div className={styles.avatarPlaceholder}>
                            <span>{testimonial.name.charAt(0)}</span>
                          </div>
                        </div>
                        <div className={styles.personInfo}>
                          <h3 className={styles.personName}>{testimonial.name}</h3>
                          <p className={styles.personPosition}>{testimonial.position}</p>
                        </div>
                      </div>
                      <blockquote className={styles.quote}>
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className={styles.rating}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M10 1L12.9389 6.90983L19.5106 7.90983L14.7553 12.5902L15.8779 19.0902L10 16L4.12215 19.0902L5.24472 12.5902L0.489435 7.90983L7.06107 6.90983L10 1Z"
                              fill="#000000"
                            />
                          </svg>
                        ))}
                      </div>
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
            disabled={currentIndex === testimonials.length - 1}
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
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
