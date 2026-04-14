import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroBanner from "@/components/HeroBanner";
import StatsOverlay from "@/components/StatsOverlay";
import TeamCarousel from "@/components/TeamCarousel";
import StatsSection from "@/components/StatsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import LogosBanner from "@/components/LogosBanner";
import FAQCarousel from "@/components/FAQCarousel";
import CTABanner from "@/components/CTABanner";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "accessibilityStatement",
        "privacyPolicy",
      ])),
    },
  };
}

export default function Index() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />
      {/* Stats Overlay - Estadísticas superpuestas */}
      <StatsOverlay />
      {/* Team Carousel - Sobre nosotros */}
      <TeamCarousel />
      {/* Stats Section - Estadísticas */}
      {/* <StatsSection /> */}
      {/* Testimonials Carousel - Lo que nuestros clientes dicen */}
      <TestimonialsCarousel />
      {/* Services Grid - Nuestros servicios */}
      <ServicesGrid />
      {/* Logos Banner - Clientes */}
      <LogosBanner />
      {/* FAQ Carousel - Preguntas frecuentes */}
      <FAQCarousel />
      {/* CTA Banner - Solicita una cita */}
      <CTABanner />
    </>
  );
}
