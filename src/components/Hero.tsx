
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-intaw-navy/80 to-intaw-blue/70 mix-blend-multiply" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white font-bold animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Transformação que gera resultados
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mt-6 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            A INTAW PRO desbloqueia o potencial humano e organizacional, elevando empresas para um novo nível de alta performance.
          </p>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block animate-fade-in opacity-0"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            Saiba Mais
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white p-2 rounded-full">
          <ArrowDown size={24} />
        </a>
      </div>
      
      {/* Subtle Animated Shapes */}
      <div className="absolute top-20 left-20 opacity-20 animate-float">
        <div className="w-20 h-20 rounded-full bg-intaw-accent"></div>
      </div>
      
      <div className="absolute bottom-40 right-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-32 h-32 rounded-full bg-intaw-blue"></div>
      </div>
    </section>
  );
};

export default Hero;
