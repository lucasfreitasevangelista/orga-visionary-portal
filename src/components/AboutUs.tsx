
import { useEffect } from 'react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Gyovana Camargo",
    role: "Especialista em Liderança e Desenvolvimento de Equipes",
    bio: "Especialista em desenvolver líderes eficazes e equipes de alta performance, com ampla experiência em treinamentos corporativos.",
    image: "/team-member-1.jpg"
  },
  {
    id: 2,
    name: "Ingrid Oliveira",
    role: "Consultora em Segurança do Trabalho e NR-1",
    bio: "Especializada em garantir que empresas estejam em conformidade com as normas regulatórias, especialmente a NR-1, reduzindo riscos e passivos trabalhistas.",
    image: "/team-member-2.jpg"
  },
  {
    id: 3,
    name: "Jaqueline Campos",
    role: "Especialista em Inteligência Emocional",
    bio: "Focada em potencializar o equilíbrio emocional dos colaboradores, aumentando produtividade e reduzindo conflitos no ambiente de trabalho.",
    image: "/team-member-3.jpg"
  }
];

const AboutUs = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    const fadeElements = document.querySelectorAll('.fade-up, .fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="about" className="section bg-intaw-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto fade-up">Quem Somos</h2>
          <div className="h-1 w-20 bg-intaw-accent mx-auto mt-4 mb-8 fade-up" style={{ transitionDelay: '0.2s' }}></div>
          <p className="max-w-3xl mx-auto text-intaw-gray fade-up" style={{ transitionDelay: '0.3s' }}>
            A INTAW PRO é especializada em transformar organizações através do desenvolvimento humano e adequação às normas regulatórias. 
            Nossa missão é desbloquear o potencial das empresas, criando ambientes de trabalho mais seguros, produtivos e emocionalmente equilibrados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="premium-card p-6 fade-up"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-60 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-intaw-blue mb-2">{member.name}</h3>
              <p className="text-intaw-accent font-medium mb-3">{member.role}</p>
              <p className="text-intaw-gray">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
