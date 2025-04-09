
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SponsorshipSection = () => {
  return (
    <section id="sponsor" className="py-20 bg-conversa-darker relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('/sponsor-bg.jpg')" }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Apoie conversas que <span className="text-conversa-gold">transformam</span>
          </h2>
          <div className="w-24 h-1 bg-conversa-gold mx-auto my-6"></div>
          
          <p className="text-white/80 text-lg mb-8 font-serif">
            Associe sua marca a conteúdo premium e alcance uma audiência engajada de executivos, 
            empreendedores e formadores de opinião. Oferecemos diferentes formatos de parceria, 
            adaptados para restaurantes premium, marcas de lifestyle e empresas inovadoras.
          </p>
          
          <div className="flex justify-center mt-10">
            <Button className="bg-conversa-gold hover:bg-conversa-gold/90 text-conversa-dark py-6 px-8 rounded-md flex items-center gap-2 text-base">
              Quero Patrocinar
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-conversa-dark/60 backdrop-blur-sm p-6 rounded-lg border border-conversa-gold/20 text-center">
            <h3 className="text-xl font-semibold mb-3 text-conversa-gold">Patrocínio de Episódio</h3>
            <p className="text-white/70">Tenha sua marca destacada em um episódio completo com menções especiais.</p>
          </div>
          
          <div className="bg-conversa-dark/60 backdrop-blur-sm p-6 rounded-lg border border-conversa-gold/20 text-center">
            <h3 className="text-xl font-semibold mb-3 text-conversa-gold">Parceria de Temporada</h3>
            <p className="text-white/70">Presença consistente durante toda uma temporada com benefícios exclusivos.</p>
          </div>
          
          <div className="bg-conversa-dark/60 backdrop-blur-sm p-6 rounded-lg border border-conversa-gold/20 text-center">
            <h3 className="text-xl font-semibold mb-3 text-conversa-gold">Experiências Exclusivas</h3>
            <p className="text-white/70">Eventos presenciais e conteúdos personalizados com nossos convidados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
