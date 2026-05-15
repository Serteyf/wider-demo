import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/ctaBanner.module.css";

const CTABanner = ({ reverse = false }) => {
  const { locale } = useRouter();

  const content = {
    es: {
      title: "Hablemos de tu próximo paso en accesibilidad digital",
      description:
        "Cuéntanos qué estás construyendo, auditando, documentando, corrigiendo o preparando. Te ayudamos a entender el alcance adecuado, los estándares relevantes y el camino más efectivo para avanzar.",
      button: "Contáctanos",
    },
    en: {
      title: "Let's define your next step in digital accessibility",
      description:
        "Tell us what you are building, auditing, documenting, fixing, or preparing for. We will help you understand the right scope, the relevant standards, and the most effective path forward.",
      button: "Contact us",
    },
  };

  const text = content[locale] || content.es;

  return (
    <section className={styles.ctaBanner}>
      <div className={`${styles.container} ${reverse ? styles.containerReverse : ""}`}>
        {/* Lado izquierdo - Imagen */}
        <div className={styles.imageSection}>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImagePlaceholder}>
              <Image src="/images/footer.png" alt="" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* Lado derecho - Texto y botón */}
        <div className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>{text.title}</h2>
            <p className={styles.description}>{text.description}</p>
            <a href="/contact" className={styles.ctaButton}>
              {text.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
