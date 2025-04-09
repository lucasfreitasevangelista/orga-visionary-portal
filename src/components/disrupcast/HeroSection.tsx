
import React from 'react';
import { ArrowDown, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 mix-blend-multiply" />
      
      {/* Glitch overlay effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.7%22 numOctaves=%226%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')"}}></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in glitch-text">
            Transformando ideias em <span className="text-blue-500">inovação</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            O podcast onde líderes disruptivos compartilham seus segredos para revolucionar mercados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg group" onClick={() => window.open('https://open.spotify.com', '_blank')}>
              <Headphones size={20} className="mr-2 group-hover:animate-pulse" />
              Ouça Agora
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-blue-400 p-2 rounded-full border border-blue-400/30 hover:bg-blue-500/10 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-blue-700 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;
