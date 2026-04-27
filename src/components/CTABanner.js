import React from "react";
import Image from "next/image";
import styles from "../styles/ctaBanner.module.css";

const CTABanner = () => {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.container}>
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
            <h2 className={styles.title}>
              Si quieres saber más, solicita una cita con nuestros profesionales
            </h2>
            <a href="/contact" className={styles.ctaButton}>
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
