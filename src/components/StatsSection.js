import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/statsSection.module.css";

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <Container>
        <Row>
          {/* Stat 1: +10 mil */}
          <div className="col-12 col-md-4 mb-4">
            <div className="text-center">
              <div className={styles.imageContainer}>
                <div className={styles.imagesOverlay}>
                  {[1, 2, 3, 4, 5].map((num, index) => (
                    <div
                      key={index}
                      className={styles.circleImage}
                      style={{ left: `${index * 24}px` }}
                    >
                      <div className={styles.imagePlaceholder}>
                        <span>P{num}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="numbers-home" style={{ color: "var(--color-violet)" }}>
                +10 mil
              </p>
              <p className="roboto" style={{ color: "var(--color-violet)" }}>
                Personas capacitadas
              </p>
            </div>
          </div>

          {/* Stat 2: +30 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="text-center">
              <div className={styles.imageContainer}>
                <div className={styles.imagesOverlay}>
                  {[1, 2, 3, 4, 5].map((num, index) => (
                    <div
                      key={index}
                      className={styles.circleImage}
                      style={{ left: `${index * 24}px` }}
                    >
                      <div className={styles.imagePlaceholder}>
                        <span>B{num}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="numbers-home" style={{ color: "var(--color-violet)" }}>
                +30
              </p>
              <p className="roboto" style={{ color: "var(--color-violet)" }}>
                Países
              </p>
            </div>
          </div>

          {/* Stat 3: +200 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="text-center">
              <div className={styles.imageContainer}></div>
              <p className="numbers-home" style={{ color: "var(--color-violet)" }}>
                +200
              </p>
              <p className="roboto" style={{ color: "var(--color-violet)" }}>
                Demandas revisadas
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
