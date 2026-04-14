import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/servicesGrid.module.css";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Auditoría",
      description:
        "Auditoría y mejora de productos digitales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Estrategia",
      description:
        "Creación de estrategias y políticas de accesibilidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Transformación",
      description:
        "Orientación en procesos de transformación tecnológica. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Legal",
      description:
        "Reducción del riesgo legal, económico y social. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <Container>
        <div className={styles.contentWrapper}>
          {/* Lado izquierdo - 40% */}
          <div className={styles.leftSection}>
            <div className={styles.headerContent}>
              <h2 className={styles.title}>Nuestros Servicios</h2>
              <p className={styles.subtitle}>
                Somos un equipo con muchos años de experiencia en accesibilidad. Sabemos de
                estándares y cómo cumplirlos.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.viewMoreButton}>Ver más</button>
            </div>
          </div>

          {/* Lado derecho - 60% */}
          <div className={styles.rightSection}>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`${styles.serviceCard} ${index === 0 ? styles.serviceCardHighlight : ""}`}
                >
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
