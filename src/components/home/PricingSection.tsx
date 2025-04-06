
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  
  const plans = [
    {
      name: "Essencial",
      price: "149,90",
      billing: "por mês",
      description: "Para quem busca acompanhamento básico para o climatério.",
      features: [
        "1 consulta por mês",
        "Acesso a conteúdo exclusivo",
        "Receituário online",
        "Email para dúvidas",
      ],
      highlight: false,
      cta: "Quero esse plano",
    },
    {
      name: "Premium",
      price: "249,90",
      billing: "por mês",
      description: "O plano mais completo para seu bem-estar integral.",
      features: [
        "2 consultas por mês",
        "Suporte via WhatsApp",
        "Conteúdo exclusivo ilimitado",
        "Prioridade no agendamento",
        "Acesso a webinários mensais",
      ],
      highlight: true,
      cta: "Assinar agora",
    },
    {
      name: "Completo",
      price: "349,90",
      billing: "por mês",
      description: "Acesso ilimitado a todo suporte que você precisa.",
      features: [
        "Consultas ilimitadas",
        "Grupo de apoio exclusivo",
        "Mentoria com especialistas",
        "Conteúdo exclusivo ilimitado",
        "Suporte 24h via WhatsApp",
      ],
      highlight: false,
      cta: "Quero esse plano",
    },
  ];

  return (
    <section id="planos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            Planos e Preços
          </h2>
          <p className="text-menopausa-gray max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades e comece a cuidar da sua saúde hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-menopausa-light-pink to-white border-2 border-menopausa-pink shadow-premium transform hover:-translate-y-2"
                  : "bg-white border border-gray-200 shadow-card hover:shadow-hover"
              }`}
            >
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-2 ${
                  plan.highlight ? "text-menopausa-dark-pink" : "text-menopausa-gray"
                }`}>
                  Plano {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-3xl font-bold text-menopausa-dark-pink">R${plan.price}</span>
                  <span className="text-sm text-menopausa-gray">{plan.billing}</span>
                </div>
                <p className="text-menopausa-gray text-sm mb-6">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-menopausa-pink flex-shrink-0" />
                    <span className="text-sm text-menopausa-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? "bg-menopausa-pink hover:bg-menopausa-dark-pink text-white" 
                      : "bg-white border border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink"
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-menopausa-gray">
          <p>Todos os planos incluem acesso ao aplicativo e área exclusiva do paciente.</p>
          <p className="mt-2">Consulte condições para empresas e convênios.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
