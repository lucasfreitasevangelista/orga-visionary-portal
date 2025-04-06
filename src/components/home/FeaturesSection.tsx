
import React from "react";
import { Clock, Users, ShieldCheck, HeartPulse } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            Por que escolher a MENOPAUSA 24H?
          </h2>
          <p className="text-menopausa-gray max-w-3xl mx-auto">
            Nossa plataforma foi desenvolvida especialmente para mulheres que estão passando pela menopausa ou climatério, oferecendo atendimento personalizado e acolhedor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
            <div className="w-12 h-12 bg-menopausa-light-pink rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Clock className="text-menopausa-dark-pink" size={24} />
            </div>
            <h3 className="text-xl font-medium text-menopausa-dark-pink mb-2 text-center md:text-left">Atendimento 24h</h3>
            <p className="text-menopausa-gray text-center md:text-left">
              Acesso a especialistas a qualquer hora do dia ou da noite, quando você mais precisar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
            <div className="w-12 h-12 bg-menopausa-light-pink rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Users className="text-menopausa-dark-pink" size={24} />
            </div>
            <h3 className="text-xl font-medium text-menopausa-dark-pink mb-2 text-center md:text-left">Especialistas Dedicados</h3>
            <p className="text-menopausa-gray text-center md:text-left">
              Profissionais especializados em saúde feminina durante o climatério e menopausa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
            <div className="w-12 h-12 bg-menopausa-light-pink rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
              <ShieldCheck className="text-menopausa-dark-pink" size={24} />
            </div>
            <h3 className="text-xl font-medium text-menopausa-dark-pink mb-2 text-center md:text-left">Privacidade e Segurança</h3>
            <p className="text-menopausa-gray text-center md:text-left">
              Seus dados e informações médicas são protegidos com os mais altos padrões de segurança.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
            <div className="w-12 h-12 bg-menopausa-light-pink rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
              <HeartPulse className="text-menopausa-dark-pink" size={24} />
            </div>
            <h3 className="text-xl font-medium text-menopausa-dark-pink mb-2 text-center md:text-left">Cuidado Integrado</h3>
            <p className="text-menopausa-gray text-center md:text-left">
              Abordagem multidisciplinar que cuida de todos os aspectos da sua saúde física e emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
