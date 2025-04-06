
import React from "react";
import { Heart, Video, FileText, BookOpen } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="w-12 h-12 text-menopausa-pink" />,
      title: "Especialistas dedicados",
      description: "Atendimento com ginecologistas, psicólogas e nutricionistas especializados em menopausa e climatério."
    },
    {
      icon: <Video className="w-12 h-12 text-menopausa-pink" />,
      title: "Telemedicina humanizada",
      description: "Acompanhamento humanizado por telemedicina no conforto da sua casa, quando você precisar."
    },
    {
      icon: <FileText className="w-12 h-12 text-menopausa-pink" />,
      title: "Documentação 100% online",
      description: "Receituário, atestados e orientações médicas disponíveis digitalmente na sua área de usuária."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-menopausa-pink" />,
      title: "Conteúdo exclusivo",
      description: "Acesso a artigos, vídeos e conteúdos exclusivos sobre bem-estar e saúde na menopausa."
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-menopausa-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            Benefícios da nossa plataforma
          </h2>
          <p className="text-menopausa-gray max-w-2xl mx-auto">
            Criamos um ambiente acolhedor e completo para que você tenha todo suporte necessário durante essa fase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-menopausa-dark-pink mb-3">
                {feature.title}
              </h3>
              <p className="text-menopausa-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
