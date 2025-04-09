
import React from 'react';
import { ArrowDown } from 'lucide-react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EpisodesSection from './EpisodesSection';
import GuestsSection from './GuestsSection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';
import SocialSection from './SocialSection';
import DisrupcastNavbar from './DisrupcastNavbar';
import DisrupcastFooter from './DisrupcastFooter';

const DisrupcastHome = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <DisrupcastNavbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EpisodesSection />
        <GuestsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <SocialSection />
      </main>
      
      <DisrupcastFooter />
    </div>
  );
};

export default DisrupcastHome;
