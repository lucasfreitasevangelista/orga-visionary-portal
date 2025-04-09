
import React from "react";

const ShortVideosSection = () => {
  // Simulando IDs de shorts/reels do YouTube
  const shortVideoIds = [
    "dQw4w9WgXcQ", // Placeholder - replace with actual short video IDs
    "9bZkp7q19f0",
    "2Z4m4lnjxkY",
    "jNQXAC9IVRw",
  ];

  return (
    <section className="py-20 bg-conversa-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Cortes em <span className="text-conversa-gold">Destaque</span>
          </h2>
          <div className="w-24 h-1 bg-conversa-gold mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Os momentos mais impactantes de nossas conversas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shortVideoIds.map((videoId, index) => (
            <div key={index} className="aspect-[9/16] bg-conversa-darker rounded-lg overflow-hidden border border-conversa-gold/20 hover:border-conversa-gold/50 transition-all duration-300">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Short Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortVideosSection;
