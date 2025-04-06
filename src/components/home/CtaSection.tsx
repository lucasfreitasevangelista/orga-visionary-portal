
import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";

  return (
    <section className="py-16 bg-gradient-to-r from-menopausa-light-pink to-menopausa-lavender">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            Agora é o momento de cuidar da sua saúde!
          </h2>
          <p className="text-menopausa-gray mb-8 text-lg">
            Junte-se a milhares de mulheres que encontraram qualidade de vida e bem-estar com a MENOPAUSA 24H. Nossos especialistas estão prontos para te ajudar.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
              <MessageCircle className="mr-2" size={20} />
              Agende sua Consulta Agora
            </Button>
          </a>
          <p className="mt-4 text-sm text-menopausa-gray">
            Atendimento disponível 24 horas por dia, 7 dias por semana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
