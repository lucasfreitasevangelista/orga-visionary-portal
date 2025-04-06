
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";

  return (
    <section className="py-16 bg-menopausa-light-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            Como Funciona
          </h2>
          <p className="text-menopausa-gray max-w-3xl mx-auto">
            Em apenas 3 passos simples, você pode acessar o melhor atendimento especializado para a menopausa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-card text-center">
            <div className="w-16 h-16 bg-menopausa-pink rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-medium text-menopausa-dark-pink mb-4">Cadastre-se</h3>
            <p className="text-menopausa-gray mb-4">
              Crie sua conta em poucos minutos, preenchendo informações básicas sobre você e sua saúde.
            </p>
            <Link to="/register">
              <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                Criar Conta →
              </Button>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-card text-center">
            <div className="w-16 h-16 bg-menopausa-pink rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-medium text-menopausa-dark-pink mb-4">Escolha um Especialista</h3>
            <p className="text-menopausa-gray mb-4">
              Selecione o profissional que melhor atende às suas necessidades e escolha um horário disponível.
            </p>
            <Link to="/especialistas">
              <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                Ver Especialistas →
              </Button>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-card text-center">
            <div className="w-16 h-16 bg-menopausa-pink rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-medium text-menopausa-dark-pink mb-4">Realize sua Consulta</h3>
            <p className="text-menopausa-gray mb-4">
              Conecte-se com seu médico via vídeo no horário marcado, receba orientações e acompanhamento personalizado.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                Agendar Agora →
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
