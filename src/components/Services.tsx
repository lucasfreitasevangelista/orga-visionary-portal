
import { Service } from '../types';
import { FileSearch, Brain, Users } from 'lucide-react';

const services: Service[] = [
  {
    id: 1,
    phase: "Fase 1",
    title: "Diagnóstico Organizacional (NR-1)",
    description: "Mapeamento completo da empresa para adequação às normas regulatórias, identificando riscos psicossociais e oportunidades de melhoria.",
    icon: "search"
  },
  {
    id: 2,
    phase: "Fase 2",
    title: "Inteligência Emocional e Alta Performance",
    description: "Palestras dinâmicas para potencializar a produtividade, reduzir conflitos e criar um ambiente de trabalho mais saudável e colaborativo.",
    icon: "brain"
  },
  {
    id: 3,
    phase: "Fase 3",
    title: "Perfil Comportamental e Liderança Estratégica",
    description: "Workshop DISC para líderes e RH, desenvolvendo habilidades de gestão estratégica e mapeamento de perfis comportamentais.",
    icon: "users"
  }
];

const Services = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <FileSearch size={48} className="text-intaw-blue" />;
      case 'brain':
        return <Brain size={48} className="text-intaw-blue" />;
      case 'users':
        return <Users size={48} className="text-intaw-blue" />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="section relative bg-gradient-to-b from-white to-intaw-light-gray">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 opacity-10 h-64 w-64 rounded-full bg-intaw-accent -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 opacity-10 h-48 w-48 rounded-full bg-intaw-blue -ml-10 -mb-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto fade-up">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-intaw-accent mx-auto mt-4 mb-8 fade-up" style={{ transitionDelay: '0.1s' }}></div>
          <p className="max-w-3xl mx-auto text-intaw-gray fade-up" style={{ transitionDelay: '0.2s' }}>
            Nossa metodologia é estruturada em três fases complementares, criando um caminho completo 
            para a transformação organizacional e adequação às normas regulatórias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="premium-card p-8 text-center card-hover fade-up"
              style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-intaw-light-gray">
                {renderIcon(service.icon)}
              </div>
              
              <div className="inline-block px-4 py-1 rounded-full bg-intaw-blue/10 text-intaw-blue text-sm font-medium mb-4">
                {service.phase}
              </div>
              
              <h3 className="text-xl font-semibold text-intaw-blue mb-4">{service.title}</h3>
              
              <p className="text-intaw-gray mb-6">{service.description}</p>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-intaw-blue font-medium hover:text-intaw-accent transition-colors"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-up" style={{ transitionDelay: '0.6s' }}>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver Nossos Planos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
