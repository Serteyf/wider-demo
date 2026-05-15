import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroBanner from "@/components/HeroBanner";
import StatsOverlay from "@/components/StatsOverlay";
import TeamCarousel from "@/components/TeamCarousel";
import InternationalExperience from "@/components/InternationalExperience";
import StatsSection from "@/components/StatsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import GlobalExperience from "@/components/GlobalExperience";
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
      {/* Team Carousel - Sobre nosotros - OCULTO TEMPORALMENTE */}
      {/* <TeamCarousel /> */}
      {/* International Experience - Experiencia en mercados internacionales */}
      <InternationalExperience />
      {/* Stats Section - Estadísticas */}
      {/* <StatsSection /> */}
      {/* Testimonials Carousel - Lo que nuestros clientes dicen - OCULTO TEMPORALMENTE */}
      {/* <TestimonialsCarousel /> */}
      {/* Services Grid - Nuestros servicios */}
      <ServicesGrid />
      {/* Global Experience - Experiencia en mercados internacionales */}
      <GlobalExperience />
      {/* Logos Banner - Clientes */}
      <LogosBanner />
      {/* FAQ Carousel - Preguntas frecuentes */}
      <FAQCarousel />
      {/* CTA Banner - Hablemos de tu próximo paso */}
      <CTABanner />
    </>
  );
}
