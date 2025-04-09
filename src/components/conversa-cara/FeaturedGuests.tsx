
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedGuests = () => {
  const guests = [
    {
      name: "Cafu",
      image: "/guests/cafu.jpg",
      quote: "Liderança não é um título, é uma mentalidade e uma prática diária.",
    },
    {
      name: "Geraldo Rufino",
      image: "/guests/geraldo-rufino.jpg",
      quote: "Do lixo ao luxo: como a resiliência pode transformar sua jornada empresarial.",
    },
    {
      name: "Urubatan Helou",
      image: "/guests/urubatan-helou.jpg",
      quote: "Logística de sucesso é sobre pessoas, não apenas sobre pacotes.",
    },
    {
      name: "Roni Cunha",
      image: "/guests/roni-cunha.jpg",
      quote: "Investir em si mesmo traz o melhor ROI que você pode imaginar.",
    },
  ];

  return (
    <section id="episodes" className="py-20 bg-conversa-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Convidados em <span className="text-conversa-gold">Destaque</span>
          </h2>
          <div className="w-24 h-1 bg-conversa-gold mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Conversas com personalidades que inspiram e transformam mercados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guests.map((guest, index) => (
            <div key={index} className="relative group">
              <Card className="bg-transparent border-0 overflow-hidden h-80 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-conversa-dark to-transparent opacity-70 z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${guest.image})` }}
                ></div>
                <CardContent className="h-full flex flex-col justify-end p-6 relative z-20">
                  <h3 className="text-xl font-semibold text-white mb-2">{guest.name}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-white/90 text-sm font-serif italic mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      "{guest.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuests;
