
import React from "react";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" 
      style={{
        background: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url('/hero-texture-dark.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-conversa-dark/50" />
      
      <div className="container mx-auto px-6 z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-white leading-tight animate-fade-in opacity-0" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Existem conversas que valem mais do que um MBA.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mt-6 mb-12 font-serif animate-fade-in opacity-0" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Aqui, o papo é reto, o convidado é 'o cara', e o conteúdo vale cada segundo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" 
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <Button className="bg-conversa-gold hover:bg-conversa-gold/90 text-conversa-dark font-medium py-6 px-8 rounded-md flex items-center gap-2 text-base">
              <Headphones size={20} />
              Ouça Agora
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-conversa-gold/5 blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-conversa-gold/5 blur-3xl animate-pulse-subtle" 
        style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
