
import React from "react";
import { Mic, MessageCircle, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const manifestoPoints = [
    {
      icon: <Mic size={24} className="text-conversa-gold" />,
      title: "Conversas de Valor",
      description: "Conteúdo que transforma perspectivas e inspira ação.",
    },
    {
      icon: <MessageCircle size={24} className="text-conversa-gold" />,
      title: "Sem Filtro",
      description: "Diálogos autênticos com os maiores especialistas do mercado.",
    },
    {
      icon: <Award size={24} className="text-conversa-gold" />,
      title: "Experiência Premium",
      description: "Produção de alta qualidade em cada episódio.",
    },
    {
      icon: <Lightbulb size={24} className="text-conversa-gold" />,
      title: "Insights Práticos",
      description: "Conhecimento que você pode aplicar imediatamente.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-conversa-darker relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Sobre o <span className="text-conversa-gold">Conversa Cara</span>
          </h2>
          <div className="w-24 h-1 bg-conversa-gold mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed font-serif">
            O Conversa Cara nasceu para trazer conversas que realmente importam. 
            Entrevistamos líderes, empreendedores e especialistas que compartilham 
            não apenas suas histórias de sucesso, mas também os desafios e aprendizados 
            ao longo do caminho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {manifestoPoints.map((point, index) => (
            <Card key={index} className="bg-conversa-dark border border-conversa-gold/20 hover:border-conversa-gold/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-conversa-gold">
                  {point.title}
                </h3>
                <p className="text-white/70">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
