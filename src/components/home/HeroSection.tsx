
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";

  return (
    <section className="relative bg-gradient-to-b from-menopausa-light-pink to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-menopausa-dark-pink mb-4">
              Cuidado especializado para sua menopausa
            </h1>
            <p className="text-lg text-menopausa-gray mb-8">
              Atendimento 24h com especialistas em saúde da mulher no climatério e menopausa. Consultas online com médicos e psicólogos para seu conforto e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                  Agende sua Consulta
                </Button>
              </a>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img alt="Mulher sorrindo" className="rounded-lg shadow-soft max-w-full h-auto" src="https://drleonardomartinspires.com.br/wp-content/uploads/2022/10/menopausa-mulher-sentada-no-sofa-sorrindo-e-com-os-pes-para-cima.webp" />
          </div>
        </div>
      </div>
      
      {/* Curved separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,192,56.44,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
