
import { Check, Shield } from 'lucide-react';

const Compliance = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  
  return (
    <section id="compliance" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-intaw-blue fade-up">Adequação à NR-1</h2>
            <div style={{
            transitionDelay: '0.1s'
          }} className="bg-slate-50"></div>
            
            <div className="space-y-6">
              <p className="text-intaw-gray fade-up" style={{
              transitionDelay: '0.2s'
            }}>
                A Norma Regulamentadora nº 1 (NR-1) exige das empresas a implementação do 
                <strong> Programa de Gerenciamento de Riscos (PGR)</strong> e 
                <strong> Laudo Técnico das Condições Ambientais do Trabalho (LTCAT)</strong>.
              </p>
              
              <p className="text-intaw-gray fade-up" style={{
              transitionDelay: '0.3s'
            }}>
                O não cumprimento pode resultar em multas significativas, interdições e processos trabalhistas, 
                comprometendo a saúde financeira e reputacional da sua empresa.
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-intaw-blue mb-6 fade-up" style={{
              transitionDelay: '0.4s'
            }}>
                Como podemos ajudar sua empresa?
              </h3>
              
              <ul className="space-y-4">
                {["Identificamos riscos psicossociais e de segurança no trabalho", "Elaboramos um relatório detalhado com insights e soluções personalizadas", "Garantimos conformidade com a legislação trabalhista", "Reduzimos significativamente passivos trabalhistas", "Desenvolvemos uma cultura organizacional de bem-estar e segurança"].map((item, index) => <li key={index} className="flex items-start fade-up" style={{
                transitionDelay: `${0.5 + index * 0.1}s`
              }}>
                    <Check className="text-intaw-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-intaw-gray">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="premium-card p-8 shadow-premium fade-up" style={{
            transitionDelay: '0.6s'
          }}>
              <div className="absolute -top-10 -left-10 bg-intaw-blue text-white p-4 rounded-lg shadow-lg fade-up" style={{
              transitionDelay: '0.7s'
            }}>
                <Shield size={32} />
              </div>
              
              <h3 className="text-2xl font-semibold text-intaw-blue mb-6">
                Diagnóstico Organizacional
              </h3>
              
              <p className="text-intaw-gray mb-8">
                Nosso Diagnóstico Organizacional é o primeiro passo para garantir que sua empresa 
                esteja em conformidade com a NR-1 e, ao mesmo tempo, crie um ambiente de trabalho 
                saudável e produtivo.
              </p>
              
              <div className="space-y-6">
                <div className="p-5 bg-intaw-light-gray rounded-lg border-l-4 border-intaw-accent">
                  <h4 className="font-medium text-intaw-blue mb-2">Análise Completa</h4>
                  <p className="text-sm text-intaw-gray">
                    Avaliamos todos os aspectos da sua organização para identificar riscos e oportunidades de melhoria.
                  </p>
                </div>
                
                <div className="p-5 bg-intaw-light-gray rounded-lg border-l-4 border-intaw-accent">
                  <h4 className="font-medium text-intaw-blue mb-2">Relatório Personalizado</h4>
                  <p className="text-sm text-intaw-gray">
                    Você receberá um relatório detalhado com recomendações específicas para sua empresa.
                  </p>
                </div>
                
                <div className="p-5 bg-intaw-light-gray rounded-lg border-l-4 border-intaw-accent">
                  <h4 className="font-medium text-intaw-blue mb-2">Plano de Ação</h4>
                  <p className="text-sm text-intaw-gray">
                    Desenvolvemos um plano de implementação passo a passo para adequação às normas e melhoria organizacional.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Solicitar Diagnóstico
                </a>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-intaw-accent w-24 h-24 rounded-full opacity-20 fade-up" style={{
            transitionDelay: '0.8s'
          }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
