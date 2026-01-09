import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/teamCarousel.module.css";

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Empezamos en el slide del medio

  // Datos del equipo (puedes expandir esto más adelante)
  const teamMembers = [
    {
      id: 1,
      name: "María González",
      role: "Frontend Developer",
      image: "/images/team/member1.jpg", // Placeholder
    },
    {
      id: 2,
      name: "Ana Torres",
      role: "Ux - UI Designer",
      image: "/images/team/member2.jpg", // Placeholder
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      role: "Backend Developer",
      image: "/images/team/member3.jpg", // Placeholder
    },
    {
      id: 4,
      name: "Laura Martínez",
      role: "Product Manager",
      image: "/images/team/member4.jpg", // Placeholder
    },
    {
      id: 5,
      name: "Diego Silva",
      role: "QA Engineer",
      image: "/images/team/member5.jpg", // Placeholder
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < teamMembers.length - 1 ? prev + 1 : prev));
  };

  // Obtener los 3 slides visibles
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      const index = currentIndex + i;
      if (index >= 0 && index < teamMembers.length) {
        slides.push({ ...teamMembers[index], position: i });
      }
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className={styles.teamSection}>
      <Container>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Sobre nosotros</h2>
          <p className={styles.subtitle}>
            Somos un equipo que sabemos estándares y cómo cumplirlos, desde un enfoque más amplio.
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
              {visibleSlides.map((member) => (
                <div
                  key={member.id}
                  className={`${styles.slide} ${member.position === 0 ? styles.slideActive : ""}`}
                >
                  <div className={styles.slideContainer}>
                    <div className={styles.imageWrapper}>
                      {/* Placeholder para la imagen */}
                      <div className={styles.imagePlaceholder}>
                        <span>Foto</span>
                      </div>
                    </div>

                    {member.position === 0 && (
                      <div className={styles.memberInfo}>
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <p className={styles.memberRole}>{member.role}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Next */}
          <button
            className={styles.navButton}
            onClick={handleNext}
            disabled={currentIndex === teamMembers.length - 1}
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

        {/* Botón Ver más */}
        <div className={styles.buttonWrapper}>
          <button className={styles.viewMoreButton}>Ver más</button>
        </div>
      </Container>
    </section>
  );
};

export default TeamCarousel;
