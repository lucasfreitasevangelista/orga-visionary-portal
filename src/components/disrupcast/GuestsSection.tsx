
import React from 'react';
import { ExternalLink } from 'lucide-react';

const GuestsSection = () => {
  const guests = [
    {
      id: 1,
      name: "Andressa Fernandes",
      role: "CEO da Quantum Tech",
      quote: "Inovação é sobre conectar pontos que ninguém mais vê.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Eduardo Martins",
      role: "Founder da BlockFuture",
      quote: "Tecnologia não é o futuro, é o presente amplificado.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Carla Mendes",
      role: "Diretora de Inovação",
      quote: "Disrupção começa quando você questiona o que é dado como certo.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Ricardo Zhang",
      role: "Investidor Anjo",
      quote: "Capital é combustível, mas a visão é o que direciona o foguete.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "#"
    }
  ];

  return (
    <section id="guests" className="py-20 bg-black relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill=%220077FF%22 fill-opacity=%220.3%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Convidados de <span className="text-blue-500">Destaque</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Conhecimento e experiência de líderes que estão moldando o futuro da tecnologia e dos negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guests.map((guest) => (
            <div key={guest.id} className="bg-blue-950/30 rounded-xl overflow-hidden border border-blue-500/20 group hover:border-blue-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-blue-300 italic text-sm mb-3">"{guest.quote}"</p>
                  <a 
                    href={guest.linkedin} 
                    className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{guest.name}</h3>
                <p className="text-blue-400 text-sm">{guest.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
