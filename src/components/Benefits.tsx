
import { Benefit } from '../types';
import { ShieldCheck, TrendingUp, UserCheck, Target } from 'lucide-react';

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Conformidade com a NR-1",
    description: "Atendimento às exigências de segurança e saúde no trabalho, evitando multas e processos trabalhistas.",
    icon: "shield"
  },
  {
    id: 2,
    title: "Aumento da produtividade",
    description: "Funcionários emocionalmente equilibrados entregam melhores resultados e são mais engajados com os objetivos da empresa.",
    icon: "trending"
  },
  {
    id: 3,
    title: "Redução do absenteísmo",
    description: "Menos faltas e maior engajamento da equipe, resultando em processos mais eficientes e consistentes.",
    icon: "user"
  },
  {
    id: 4,
    title: "Liderança estratégica e assertiva",
    description: "Times mais alinhados e produtivos, com líderes capacitados para potencializar talentos e resolver conflitos.",
    icon: "target"
  }
];

const Benefits = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheck size={40} className="text-white" />;
      case 'trending':
        return <TrendingUp size={40} className="text-white" />;
      case 'user':
        return <UserCheck size={40} className="text-white" />;
      case 'target':
        return <Target size={40} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <section id="benefits" className="section relative bg-intaw-blue text-white">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: "url('/pattern.svg')",
        backgroundSize: "cover"
      }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto text-white fade-up">Benefícios para sua Empresa</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-4 mb-8 fade-up" style={{ transitionDelay: '0.1s' }}></div>
          <p className="max-w-3xl mx-auto text-white/80 fade-up" style={{ transitionDelay: '0.2s' }}>
            Ao investir em nossos serviços, sua empresa não apenas se adequa às exigências legais, 
            mas também potencializa resultados através do desenvolvimento humano e organizacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-card card-hover fade-up"
              style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-intaw-accent mr-4">
                  {renderIcon(benefit.icon)}
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl fade-up" style={{ transitionDelay: '0.7s' }}>
            <h3 className="text-2xl font-semibold mb-4">Resultados Comprovados</h3>
            <p className="mb-6 text-white/80">
              Nossas metodologias têm demonstrado resultados significativos em empresas de diversos segmentos:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">92%</div>
                <p className="text-sm text-white/70">Redução em não conformidades regulatórias</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">78%</div>
                <p className="text-sm text-white/70">Aumento na produtividade das equipes</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">65%</div>
                <p className="text-sm text-white/70">Diminuição em conflitos internos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
