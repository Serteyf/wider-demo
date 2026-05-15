import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/statsOverlay.module.css";

const StatsOverlay = () => {
  const { locale } = useRouter();

  const headings = {
    es: "Experiencia comprobada en accesibilidad digital",
    en: "Proven accessibility experience across products, sectors, and markets",
  };

  const heading = headings[locale] || headings.es;

  const content = {
    es: [
      {
        number: "+370",
        text: "Auditorías de accesibilidad realizadas",
        highlight: false,
      },
      {
        number: "+2.000",
        text: "Profesionales capacitados",
        highlight: false,
      },
      {
        number: "+170",
        text: "Casos legales y de compliance acompañados",
        highlight: false,
      },
      {
        number: "+50",
        text: "Organizaciones acompañadas internacionalmente",
        highlight: true,
      },
    ],
    en: [
      {
        number: "+370",
        text: "Accessibility audits completed",
        highlight: false,
      },
      {
        number: "+2,000",
        text: "Professionals trained in accessibility",
        highlight: false,
      },
      {
        number: "+170",
        text: "Legal and compliance cases supported",
        highlight: false,
      },
      {
        number: "+50",
        text: "Organizations supported internationally",
        highlight: true,
      },
    ],
  };

  const stats = content[locale] || content.es;

  return (
    <div className={styles.statsOverlayWrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${styles.statCard} ${stat.highlight ? styles.statCardHighlight : ""}`}
          >
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statText}>{stat.text}</div>
            </div>
            {stat.highlight && (
              <div className={styles.arrowCircle}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverlay;
