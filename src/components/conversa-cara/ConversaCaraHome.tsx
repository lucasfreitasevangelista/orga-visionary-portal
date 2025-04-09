
import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FeaturedGuests from "./FeaturedGuests";
import SponsorshipSection from "./SponsorshipSection";
import ShortVideosSection from "./ShortVideosSection";
import NewsletterSection from "./NewsletterSection";
import ConversaCaraNavbar from "./ConversaCaraNavbar";
import ConversaCaraFooter from "./ConversaCaraFooter";
import { ScrollArea } from "@/components/ui/scroll-area";

const ConversaCaraHome = () => {
  return (
    <div className="min-h-screen bg-conversa-dark text-white">
      <ConversaCaraNavbar />
      <ScrollArea className="h-screen">
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturedGuests />
          <SponsorshipSection />
          <ShortVideosSection />
          <NewsletterSection />
        </main>
        <ConversaCaraFooter />
      </ScrollArea>
    </div>
  );
};

export default ConversaCaraHome;
