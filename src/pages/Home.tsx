
import React from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import SpecialistsSection from "@/components/home/SpecialistsSection";
import Pricing from "@/components/Pricing";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import FaqPreviewSection from "@/components/home/FaqPreviewSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Home = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <SpecialistsSection />
      <Pricing />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqPreviewSection />
      <NewsletterSection />
    </PublicLayout>
  );
};

export default Home;
