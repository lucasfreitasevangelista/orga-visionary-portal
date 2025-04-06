
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 1,
    name: "PLANO BÁSICO",
    price: "R$ 99,90",
    description: "Ideal para mulheres que estão iniciando o tratamento para menopausa e climatério.",
    features: [
      "Consulta mensal com ginecologista",
      "Acesso ao chat de suporte 24h",
      "Receitas médicas digitais",
      "Material educativo sobre menopausa"
    ]
  },
  {
    id: 2,
    name: "PLANO COMPLETO",
    price: "R$ 199,90",
    description: "Perfeito para mulheres que buscam um acompanhamento mais abrangente no climatério e menopausa.",
    features: [
      "Tudo do plano BÁSICO",
      "Consultas com especialistas (endocrinologista e nutricionista)",
      "Acompanhamento psicológico mensal",
      "Exames laboratoriais com desconto",
      "Acesso a grupos de apoio online"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "PLANO PREMIUM",
    price: "R$ 349,90",
    description: "Solução completa para mulheres que necessitam de acompanhamento intensivo durante a menopausa.",
    features: [
      "Tudo do plano COMPLETO",
      "Atendimento prioritário 24h",
      "Consultas ilimitadas com todos os especialistas",
      "Visitas domiciliares (conforme disponibilidade)",
      "Programa personalizado de bem-estar",
      "Desconto em medicamentos parceiros"
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
          <div className="h-1 w-20 bg-menopausa-pink mx-auto mt-4 mb-8 fade-up" style={{ transitionDelay: '0.1s' }}></div>
          <p className="max-w-3xl mx-auto text-menopausa-gray fade-up" style={{ transitionDelay: '0.2s' }}>
            Escolha o plano que melhor atende às suas necessidades. 
            Todos incluem atendimento especializado e suporte 24h para mulheres na menopausa e climatério.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`premium-card relative p-8 flex flex-col h-full fade-up ${plan.isPopular ? 'ring-2 ring-menopausa-pink' : ''}`}
              style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-menopausa-pink text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MAIS POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-menopausa-dark-pink mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-menopausa-pink mb-2">{plan.price}</div>
                <p className="text-menopausa-gray text-sm">{plan.description}</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-menopausa-pink mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-menopausa-gray text-sm">{feature}</span>
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
                      ? 'bg-menopausa-pink text-white hover:shadow-lg hover:shadow-menopausa-pink/20' 
                      : 'bg-white text-menopausa-dark-pink border border-menopausa-dark-pink hover:bg-menopausa-dark-pink hover:text-white'
                  }`}
                >
                  Contratar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-up" style={{ transitionDelay: '0.6s' }}>
          <p className="text-menopausa-gray mb-6">
            Precisando de um plano personalizado para suas necessidades específicas?
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-secondary bg-white text-menopausa-dark-pink border border-menopausa-dark-pink hover:bg-menopausa-dark-pink hover:text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Solicitar Proposta Personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
