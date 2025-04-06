
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SpecialistsSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  
  // Mock data
  const specialists = [{
    id: "1",
    name: "Dra. Ana Beatriz",
    specialty: "Ginecologia",
    image: "/specialists/doctor1.jpg",
    description: "Especialista em saúde da mulher com foco em climatério e menopausa."
  }, {
    id: "2",
    name: "Dr. Ricardo Mendes",
    specialty: "Endocrinologia",
    image: "/specialists/doctor2.jpg",
    description: "Especialista em distúrbios hormonais e tratamentos para menopausa."
  }, {
    id: "3",
    name: "Dra. Camila Santos",
    specialty: "Psicologia",
    image: "/specialists/doctor3.jpg",
    description: "Especializada em saúde mental feminina durante as fases de transição hormonal."
  }];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            Conheça Nossos Especialistas
          </h2>
          <p className="text-menopausa-gray max-w-3xl mx-auto">
            Nossa equipe é formada por profissionais dedicados e especializados em saúde da mulher durante o climatério e menopausa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map(specialist => (
            <div key={specialist.id} className="bg-white rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={specialist.image} alt={specialist.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-menopausa-dark-pink mb-1">{specialist.name}</h3>
                <p className="text-menopausa-pink mb-3">{specialist.specialty}</p>
                <p className="text-menopausa-gray mb-4">{specialist.description}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
                    Agendar Consulta
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/especialistas">
            <Button variant="outline" className="border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
              Ver Todos os Especialistas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
