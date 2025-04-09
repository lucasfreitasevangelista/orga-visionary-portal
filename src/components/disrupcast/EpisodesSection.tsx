
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight } from 'lucide-react';

const EpisodesSection = () => {
  const episodes = [
    {
      id: 1,
      title: "Inovação disruptiva em mercados tradicionais",
      guest: "Ana Martinez, CEO da TechRevolution",
      description: "Como transformar empresas tradicionais usando tecnologia de ponta.",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "57 min",
      platform: "Spotify"
    },
    {
      id: 2,
      title: "Metaverso e o futuro dos negócios digitais",
      guest: "Carlos Silva, Futurista Digital",
      description: "Explorando as oportunidades do metaverso para empresas.",
      thumbnail: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "63 min",
      platform: "YouTube"
    },
    {
      id: 3,
      title: "Startups resilientes: sobrevivendo às crises",
      guest: "Joana Peres, Venture Capitalist",
      description: "Estratégias para manter startups saudáveis em cenários adversos.",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "42 min",
      platform: "Apple Podcasts"
    }
  ];

  return (
    <section id="episodes" className="py-20 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden">
      {/* Abstract tech lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22%3E%3Cdefs%3E%3Cpattern id=%22p%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22 patternTransform=%22rotate(45)%22%3E%3Cpath d=%22M-10,30 l60,-60%22 stroke=%22%230070FF%22 stroke-width=%220.5%22 stroke-opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23000%22/%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23p)%22/%3E%3C/svg%3E')] opacity-30 bg-no-repeat bg-cover"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Últimos <span className="text-blue-500">Episódios</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Conversas profundas com os maiores inovadores do momento. Explore nossos episódios mais recentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-blue-950/30 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,119,255,0.2)] group">
              <div className="relative overflow-hidden">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {episode.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-500 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 text-xs text-white px-2 py-1 rounded-full">
                  {episode.platform}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {episode.title}
                </h3>
                <p className="text-blue-400 font-medium mb-3 text-sm">
                  {episode.guest}
                </p>
                <p className="text-gray-400 mb-4 text-sm">
                  {episode.description}
                </p>
                <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  Ouvir episódio
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Ver Todos os Episódios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
