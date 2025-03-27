
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 1,
    name: "ESSENCIAL",
    price: "R$ 5.900",
    description: "Ideal para pequenas empresas que buscam adequação à NR-1 e desenvolvimento inicial.",
    features: [
      "Diagnóstico Organizacional completo",
      "Relatório de adequação à NR-1",
      "1 Palestra sobre Inteligência Emocional",
      "Suporte por 30 dias",
      "Certificado de Participação"
    ]
  },
  {
    id: 2,
    name: "PREMIUM",
    price: "R$ 9.700",
    description: "Perfeito para empresas médias que buscam transformação organizacional abrangente.",
    features: [
      "Tudo do plano ESSENCIAL",
      "Workshop DISC para liderança",
      "2 Palestras adicionais",
      "Mapeamento de perfil da equipe",
      "Consultoria de implementação",
      "Suporte por 60 dias"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "AVANÇADO",
    price: "R$ 15.300",
    description: "Solução completa para grandes empresas que buscam excelência organizacional.",
    features: [
      "Tudo do plano PREMIUM",
      "Programa de desenvolvimento de liderança",
      "Acompanhamento trimestral",
      "Consultoria estratégica exclusiva",
      "Treinamento para RH",
      "Relatórios de progresso",
      "Suporte prioritário por 90 dias"
    ]
  }
];

const Pricing = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  
  return (
    <section id="pricing" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto fade-up">Planos e Investimento</h2>
          <div className="h-1 w-20 bg-intaw-accent mx-auto mt-4 mb-8 fade-up" style={{ transitionDelay: '0.1s' }}></div>
          <p className="max-w-3xl mx-auto text-intaw-gray fade-up" style={{ transitionDelay: '0.2s' }}>
            Escolha o plano que melhor atende às necessidades da sua empresa. 
            Todos os nossos planos incluem diagnóstico organizacional e adequação à NR-1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`premium-card relative p-8 flex flex-col h-full fade-up ${plan.isPopular ? 'ring-2 ring-[#52dbb2]' : ''}`}
              style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#52dbb2] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MAIS POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-intaw-blue mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#52dbb2] mb-2">{plan.price}</div>
                <p className="text-intaw-gray text-sm">{plan.description}</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-[#52dbb2] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-intaw-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full transition-all duration-300 ${
                    plan.isPopular 
                      ? 'bg-[#52dbb2] text-white hover:shadow-lg hover:shadow-[#52dbb2]/20' 
                      : 'bg-white text-[#000000] border border-[#000000] hover:bg-[#000000] hover:text-white'
                  }`}
                >
                  Contratar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-up" style={{ transitionDelay: '0.6s' }}>
          <p className="text-intaw-gray mb-6">
            Precisando de um plano personalizado para sua empresa?
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            Solicitar Proposta Personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
