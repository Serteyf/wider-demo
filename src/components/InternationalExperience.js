import React from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/internationalExperience.module.css";

const InternationalExperience = () => {
  const { locale } = useRouter();

  const content = {
    es: {
      title: "Experiencia en mercados internacionales",
      description:
        "Acompañamos a organizaciones en Estados Unidos, Canadá, Latinoamérica, Europa y Asia con auditorías de accesibilidad, VPATs, ACRs, informes IRA, accessibility assessments, formación, soporte en compliance y estrategia a largo plazo.",
    },
    en: {
      title: "Accessibility expertise across global markets",
      description:
        "We support organizations across the United States, Canada, Latin America, Europe, and Asia with accessibility audits, VPATs, ACRs, IRA reports, accessibility assessments, training, compliance support, and long-term strategy.",
    },
  };

  const t = content[locale] || content.es;

  return (
    <section className={styles.internationalSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>
        </div>
      </Container>
    </section>
  );
};

export default InternationalExperience;
