import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/teamCarousel.module.css";

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Empezamos en el primer slide

  // Datos del equipo
  const teamMembers = [
    {
      id: 1,
      name: "Susana Pallero",
      role: "CEO & Queen",
      image: "/images/team/member1.jpg", // Placeholder
    },
    {
      id: 2,
      name: "Susana Pallero",
      role: "CEO & Queen",
      image: "/images/team/member2.jpg", // Placeholder
    },
    {
      id: 3,
      name: "Susana Pallero",
      role: "CEO & Queen",
      image: "/images/team/member3.jpg", // Placeholder
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < teamMembers.length - 1 ? prev + 1 : prev));
  };

  // Obtener solo el slide actual para mobile
  const getVisibleSlides = () => {
    return [{ ...teamMembers[currentIndex], position: 0 }];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className={styles.teamSection}>
      <Container>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Nosotros</h2>
          <p className={styles.subtitle}>
            Somos un equipo con muchos años de experiencia en accesibilidad. Sabemos de estándares y
            cómo cumplirlos.
          </p>
        </div>

        {/* Grid para Desktop - muestra todas las tarjetas */}
        <div className={styles.gridWrapper}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.gridItem}>
              <div className={styles.teamCard}>
                <div className={styles.headshotWrapper}>
                  <div className={styles.headshotPlaceholder}>
                    <span>Foto</span>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.memberDetails}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                  <div className={styles.linkedinIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
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
              {visibleSlides.map((member) => (
                <div
                  key={member.id}
                  className={`${styles.slide} ${member.position === 0 ? styles.slideActive : ""}`}
                >
                  <div className={styles.teamCard}>
                    <div className={styles.headshotWrapper}>
                      <div className={styles.headshotPlaceholder}>
                        <span>Foto</span>
                      </div>
                    </div>
                    <div className={styles.cardFooter}>
                      <div className={styles.memberDetails}>
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <p className={styles.memberRole}>{member.role}</p>
                      </div>
                      <div className={styles.linkedinIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
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
