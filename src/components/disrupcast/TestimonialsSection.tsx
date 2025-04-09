
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "O DISRUPCAST mudou minha visão sobre inovação. Implementei várias ideias que ouvi aqui e minha startup cresceu 300% em 6 meses!",
      name: "Mariana Costa",
      position: "Fundadora da TechGrow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    },
    {
      id: 2,
      text: "Conteúdo de altíssima qualidade. As entrevistas são profundas e os insights compartilhados são aplicáveis imediatamente nos negócios.",
      name: "Felipe Brandão",
      position: "CTO da DataFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    },
    {
      id: 3,
      text: "Ouço todos os episódios durante meu trajeto para o trabalho. É como ter uma pós-graduação em inovação no meu bolso!",
      name: "Luísa Mendonça",
      position: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-950/20"></div>
      
      {/* Radial light effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
        <div className="w-full h-full rounded-full bg-blue-500 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que dizem sobre <span className="text-blue-500">nós</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Impactando carreiras e negócios através de conteúdo de qualidade.
          </p>
          
          <div className="flex items-center justify-center mt-6 gap-1">
            <Star className="fill-yellow-400 text-yellow-400" size={24} />
            <Star className="fill-yellow-400 text-yellow-400" size={24} />
            <Star className="fill-yellow-400 text-yellow-400" size={24} />
            <Star className="fill-yellow-400 text-yellow-400" size={24} />
            <Star className="fill-yellow-400 text-yellow-400" size={24} />
            <span className="ml-2 text-white font-medium">5.0 no Spotify</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blue-950/30 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,119,255,0.2)] relative transform hover:-translate-y-1"
            >
              <Quote className="absolute top-4 right-4 text-blue-500/30" size={24} />
              
              <p className="text-gray-300 mb-6 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-500/50"
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-blue-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
