
import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  // Mock data
  const testimonials = [{
    id: "1",
    name: "Sandra Oliveira",
    age: 52,
    content: "A plataforma MENOPAUSA 24H mudou minha vida. Finalmente encontrei médicos que me entendem e um atendimento acolhedor. As consultas online são práticas e os médicos muito atenciosos.",
    rating: 5,
    image: "/testimonials/user1.jpg",
    date: new Date("2023-10-15")
  }, {
    id: "2",
    name: "Regina Costa",
    age: 49,
    content: "Estava sofrendo com ondas de calor e insônia por meses. Graças à MENOPAUSA 24H, tive acesso a especialistas que realmente entenderam meus sintomas e me ajudaram a ter qualidade de vida novamente.",
    rating: 5,
    image: "/testimonials/user2.jpg",
    date: new Date("2023-09-20")
  }, {
    id: "3",
    name: "Márcia Andrade",
    age: 55,
    content: "O acompanhamento contínuo faz toda a diferença. Posso falar com minha médica quando preciso, sem precisar esperar meses por uma consulta. A equipe toda é muito atenciosa.",
    rating: 4,
    image: "/testimonials/user3.jpg",
    date: new Date("2023-11-05")
  }];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
            O que Nossas Pacientes Dizem
          </h2>
          <p className="text-menopausa-gray max-w-3xl mx-auto">
            Conheça as histórias de mulheres que encontraram apoio e cuidado especializado na MENOPAUSA 24H.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-menopausa-pink fill-menopausa-pink" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-menopausa-gray mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-menopausa-dark-pink">{testimonial.name}</h4>
                  <p className="text-sm text-menopausa-gray">{testimonial.age} anos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
