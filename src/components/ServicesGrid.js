import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/servicesGrid.module.css";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Auditoría",
      description: "Auditoría y mejora de productos digitales.",
      image: "/images/services/auditoria.jpg",
    },
    {
      id: 2,
      title: "Estrategia",
      description: "Creación de estrategias y políticas de accesibilidad.",
      image: "/images/services/estrategia.jpg",
    },
    {
      id: 3,
      title: "Transformación",
      description: "Orientación en procesos de transformación tecnológica.",
      image: "/images/services/transformacion.jpg",
    },
    {
      id: 4,
      title: "Legal",
      description: "Reducción del riesgo legal, económico y social.",
      image: "/images/services/legal.jpg",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <Container>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Nuestros servicios</h2>
        </div>

        <Row className={styles.servicesGrid}>
          {services.map((service) => (
            <Col key={service.id} xs={12} md={6} className={styles.serviceCol}>
              <div className={styles.serviceCard}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                    <span>{service.title.charAt(0)}</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className={styles.buttonWrapper}>
          <button className={styles.viewMoreButton}>Ver más</button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
