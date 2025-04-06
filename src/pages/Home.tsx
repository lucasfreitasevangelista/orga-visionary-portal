
import React from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import SpecialistsSection from "@/components/home/SpecialistsSection";
import PricingSection from "@/components/home/PricingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import FaqPreviewSection from "@/components/home/FaqPreviewSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import WhatsAppButton from "@/components/home/WhatsAppButton";

const Home = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <SpecialistsSection />
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqPreviewSection />
      <NewsletterSection />
      <WhatsAppButton />
    </PublicLayout>
  );
};

export default Home;
