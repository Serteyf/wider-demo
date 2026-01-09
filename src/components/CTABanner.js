import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/ctaBanner.module.css";

const CTABanner = () => {
  return (
    <section className={styles.ctaBanner}>
      <Container>
        <Row className={styles.bannerRow}>
          {/* Lado izquierdo - Texto y botón */}
          <Col lg={6} className={styles.leftColumn}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Si quieres saber más,
                <br />
                solicita una cita
                <br />
                con nuestros
                <br />
                profesionales
              </h2>
              <Button className={styles.ctaButton}>Ver más</Button>
            </div>
          </Col>

          {/* Lado derecho - Contenedor de imagen */}
          <Col lg={6} className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              {/* La imagen se agregará aquí */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTABanner;

