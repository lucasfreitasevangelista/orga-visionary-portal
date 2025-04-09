
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    "Entrevistas com CEOs, investidores e especialistas.",
    "Insights práticos sobre inovação e tecnologia.",
    "Conteúdo disponível no Spotify, YouTube e Apple Podcasts."
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Tech circuit background with low opacity */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-5 bg-no-repeat bg-cover"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-black to-blue-950 p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_25px_rgba(0,119,255,0.15)] transform hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Sobre o <span className="text-blue-500">DISRUPCAST</span>
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              O DISRUPCAST nasceu para provocar mudanças. Aqui, conversamos com os maiores empreendedores, inovadores e visionários que desafiam o status quo e criam o futuro dos negócios. Nosso objetivo é trazer insights reais, histórias inspiradoras e estratégias práticas para você aplicar no seu dia a dia.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-[0_0_30px_rgba(0,119,255,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Podcast Studio" 
                className="w-full h-auto rounded-3xl transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-semibold">Equipamento profissional para máxima qualidade de áudio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
