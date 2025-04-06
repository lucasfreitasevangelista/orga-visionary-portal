
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FaqPreviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-menopausa-gray max-w-3xl mx-auto">
            Respostas para as perguntas mais comuns sobre menopausa, climatério e nossa plataforma.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-lg font-medium text-menopausa-dark-pink mb-2">O que é menopausa e climatério?</h3>
              <p className="text-menopausa-gray">
                A menopausa marca o fim do período reprodutivo da mulher, quando os ovários param de produzir óvulos e há redução na produção de hormônios. O climatério é a fase de transição entre o período reprodutivo e não reprodutivo, que pode durar anos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-lg font-medium text-menopausa-dark-pink mb-2">Quais são os sintomas comuns da menopausa?</h3>
              <p className="text-menopausa-gray">
                Os sintomas podem incluir ondas de calor, suores noturnos, alterações de humor, insônia, ressecamento vaginal, diminuição da libido, ganho de peso e mudanças na pele e cabelos. Cada mulher pode experimentar sintomas diferentes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-lg font-medium text-menopausa-dark-pink mb-2">Como funciona a consulta online na MENOPAUSA 24H?</h3>
              <p className="text-menopausa-gray">
                Após o agendamento, você receberá um link para acessar a consulta por vídeo. Nossos especialistas irão ouvir suas queixas, fazer perguntas relevantes e oferecer orientações personalizadas. Se necessário, podem solicitar exames ou prescrever medicamentos.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" className="border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
                Ver Todas as Dúvidas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPreviewSection;
