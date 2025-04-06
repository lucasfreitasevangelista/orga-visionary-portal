
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-menopausa-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/about-image.jpg" alt="Médicos consultando paciente" className="rounded-lg shadow-soft" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
              Sobre a MENOPAUSA 24H
            </h2>
            <p className="text-menopausa-gray mb-4">
              A MENOPAUSA 24H nasceu da necessidade de oferecer um cuidado específico e acolhedor para mulheres que estão passando pela menopausa e climatério, fases que trazem desafios únicos para a saúde feminina.
            </p>
            <p className="text-menopausa-gray mb-4">
              Nossa missão é proporcionar acesso a especialistas qualificados que realmente entendem as necessidades específicas dessa fase, com atendimento humanizado e personalizado, disponível a qualquer hora.
            </p>
            <p className="text-menopausa-gray mb-6">
              Acreditamos que cada mulher merece ser ouvida, compreendida e receber o melhor tratamento para que possa viver essa fase com saúde, bem-estar e qualidade de vida.
            </p>
            <Link to="/sobre">
              <Button className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                Conheça Nossa História
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
