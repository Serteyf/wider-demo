import React from "react";
import Image from "next/image";
import styles from "../styles/logosBanner.module.css";

const LogosBanner = () => {
  const topRowLogos = [
    { src: "/images/smartecarte.svg", alt: "Smartecarte", width: 150, height: 80 },
    { src: "/images/volvo.svg", alt: "Volvo", width: 150, height: 80 },
    { src: "/images/bid.svg", alt: "BID", width: 150, height: 80 },
    { src: "/images/modo.svg", alt: "Modo", width: 150, height: 80 },
    { src: "/images/rga.svg", alt: "RGA", width: 150, height: 80 },
  ];

  const bottomRowLogos = [
    { src: "/images/eafit.svg", alt: "Universidad EAFIT", width: 150, height: 80 },
    { src: "/images/unibarcelona.svg", alt: "Universidad de Barcelona", width: 150, height: 80 },
    { src: "/images/bcp.svg", alt: "BCP", width: 150, height: 80 },
    { src: "/images/itx.svg", alt: "ITX", width: 80, height: 80 },
  ];

  return (
    <section className={styles.logosBanner}>
      <div className={styles.topRow}>
        {topRowLogos.map((logo, index) => (
          <div key={index} className={styles.logoWrapper}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
      <div className={styles.bottomRow}>
        {bottomRowLogos.map((logo, index) => (
          <div key={index} className={styles.logoWrapper}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogosBanner;

