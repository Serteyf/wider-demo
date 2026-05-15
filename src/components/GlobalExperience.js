import React from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/globalExperience.module.css";

const GlobalExperience = () => {
  const { locale } = useRouter();

  const content = {
    es: {
      block1: {
        title: "Experiencia en mercados internacionales",
        paragraph1:
          "Acompañamos a organizaciones que operan en Estados Unidos, Canadá, Latinoamérica, Europa y Asia.",
        paragraph2:
          "Nuestra experiencia incluye proyectos vinculados con España, Bélgica, Alemania, Suecia, Noruega, Francia, Italia, Taiwán y otros mercados internacionales donde los requisitos de accesibilidad, las expectativas de procurement, los ecosistemas de producto y las necesidades de las personas usuarias varían según el contexto.",
      },
      block2: {
        title: "Organizaciones y equipos vinculados a nuestra experiencia",
        paragraph:
          "Trabajamos con empresas, instituciones, organismos públicos, universidades, equipos de tecnología, organizaciones financieras, agencias internacionales y equipos de producto digital que necesitan orientación clara, confiable y accionable en accesibilidad.",
      },
    },
    en: {
      block1: {
        title: "Accessibility experience across global markets",
        paragraph1:
          "We support organizations operating across the United States, Canada, Latin America, Europe, and Asia.",
        paragraph2:
          "Our experience includes projects connected to Spain, Belgium, Germany, Sweden, Norway, France, Italy, Taiwan, and other international markets where accessibility requirements, procurement expectations, product ecosystems, and user needs vary by context.",
      },
      block2: {
        title: "Organizations and teams connected to our experience",
        paragraph:
          "We work with companies, institutions, public sector organizations, universities, technology teams, financial organizations, international agencies, and digital product teams that need clear, reliable, and actionable accessibility expertise.",
      },
    },
  };

  const text = content[locale] || content.es;

  return (
    <section className={styles.globalExperienceSection}>
      <Container>
        {/* Bloque: Organizaciones y equipos */}
        <div className={styles.contentBlock}>
          <h2 className={styles.title}>{text.block2.title}</h2>
          <p className={styles.paragraph}>{text.block2.paragraph}</p>
        </div>
      </Container>
    </section>
  );
};

export default GlobalExperience;
