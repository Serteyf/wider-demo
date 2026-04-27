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
              <Image
                src="/images/footer.png"
                alt="CTA Banner"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Lado derecho - Texto y botón */}
        <div className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>
              Si quieres saber más, solicita una cita con nuestros profesionales
            </h2>
            <button className={styles.ctaButton}>Contacto</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
