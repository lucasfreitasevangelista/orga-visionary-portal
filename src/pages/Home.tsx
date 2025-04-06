import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import { CalendarCheck, Clock, ShieldCheck, HeartPulse, Users, Sparkles, CheckCircle, MessageCircle, Star } from "lucide-react";
import Pricing from "@/components/Pricing";

const Home = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";

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

  return <PublicLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-menopausa-light-pink to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-menopausa-dark-pink mb-4">
                Cuidado especializado para sua menopausa
              </h1>
              <p className="text-lg text-menopausa-gray mb-8">
                Atendimento 24h com especialistas em saúde da mulher no climatério e menopausa. Consultas online com médicos e psicólogos para seu conforto e bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                    Agende sua Consulta
                  </Button>
                </a>
                <Link to="/sobre">
                  <Button size="lg" variant="outline" className="border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img alt="Mulher sorrindo" className="rounded-lg shadow-soft max-w-full h-auto" src="https://drleonardomartinspires.com.br/wp-content/uploads/2022/10/menopausa-mulher-sentada-no-sofa-sorrindo-e-com-os-pes-para-cima.webp" />
            </div>
          </div>
        </div>
        
        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,192,56.44,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
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

      {/* About Section */}
      <section className="py-16 bg-menopausa-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/about-image.jpg" alt="Médicos consultando paciente" className="rounded-lg shadow-soft" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
                Sobre a MENOPAUSA 24H
              </h2>
              <p className="text-menopausa-gray mb-4">
                A MENOPAUSA 24H nasceu da necessidade de oferecer um cuidado específico e acolhedor para mulheres que estão passando pela menopausa e climatério, fases que trazem desafios únicos para a saúde feminina.
              </p>
              <p className="text-menopausa-gray mb-4">
                Nossa missão é proporcionar acesso a especialistas qualificados que realmente entendem as necessidades específicas dessa fase, com atendimento humanizado e personalizado, disponível a qualquer hora.
              </p>
              <p className="text-menopausa-gray mb-6">
                Acreditamos que cada mulher merece ser ouvida, compreendida e receber o melhor tratamento para que possa viver essa fase com saúde, bem-estar e qualidade de vida.
              </p>
              <Link to="/sobre">
                <Button className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                  Conheça Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
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
            {specialists.map(specialist => <div key={specialist.id} className="bg-white rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300 overflow-hidden">
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
              </div>)}
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

      {/* Pricing Section */}
      <Pricing />

      {/* How It Works Section */}
      <section className="py-16 bg-menopausa-light-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
              Como Funciona
            </h2>
            <p className="text-menopausa-gray max-w-3xl mx-auto">
              Em apenas 3 passos simples, você pode acessar o melhor atendimento especializado para a menopausa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-menopausa-pink rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-medium text-menopausa-dark-pink mb-4">Cadastre-se</h3>
              <p className="text-menopausa-gray mb-4">
                Crie sua conta em poucos minutos, preenchendo informações básicas sobre você e sua saúde.
              </p>
              <Link to="/register">
                <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  Criar Conta →
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-menopausa-pink rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-medium text-menopausa-dark-pink mb-4">Escolha um Especialista</h3>
              <p className="text-menopausa-gray mb-4">
                Selecione o profissional que melhor atende às suas necessidades e escolha um horário disponível.
              </p>
              <Link to="/especialistas">
                <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  Ver Especialistas →
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-menopausa-pink rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-medium text-menopausa-dark-pink mb-4">Realize sua Consulta</h3>
              <p className="text-menopausa-gray mb-4">
                Conecte-se com seu médico via vídeo no horário marcado, receba orientações e acompanhamento personalizado.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  Agendar Agora →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({
                length: 5
              }).map((_, i) => <Star key={i} size={18} className={i < testimonial.rating ? "text-menopausa-pink fill-menopausa-pink" : "text-gray-300"} />)}
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
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-menopausa-light-pink to-menopausa-lavender">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
              Agora é o momento de cuidar da sua saúde!
            </h2>
            <p className="text-menopausa-gray mb-8 text-lg">
              Junte-se a milhares de mulheres que encontraram qualidade de vida e bem-estar com a MENOPAUSA 24H. Nossos especialistas estão prontos para te ajudar.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                <MessageCircle className="mr-2" size={20} />
                Agende sua Consulta Agora
              </Button>
            </a>
            <p className="mt-4 text-sm text-menopausa-gray">
              Atendimento disponível 24 horas por dia, 7 dias por semana.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-menopausa-dark-pink mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-menopausa-gray max-w-3xl mx-auto">
              Respostas para as perguntas mais comuns sobre menopausa, climatério e nossa plataforma.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-lg font-medium text-menopausa-dark-pink mb-2">O que é menopausa e climatério?</h3>
                <p className="text-menopausa-gray">
                  A menopausa marca o fim do período reprodutivo da mulher, quando os ovários param de produzir óvulos e há redução na produção de hormônios. O climatério é a fase de transição entre o período reprodutivo e não reprodutivo, que pode durar anos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-lg font-medium text-menopausa-dark-pink mb-2">Quais são os sintomas comuns da menopausa?</h3>
                <p className="text-menopausa-gray">
                  Os sintomas podem incluir ondas de calor, suores noturnos, alterações de humor, insônia, ressecamento vaginal, diminuição da libido, ganho de peso e mudanças na pele e cabelos. Cada mulher pode experimentar sintomas diferentes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-lg font-medium text-menopausa-dark-pink mb-2">Como funciona a consulta online na MENOPAUSA 24H?</h3>
                <p className="text-menopausa-gray">
                  Após o agendamento, você receberá um link para acessar a consulta por vídeo. Nossos especialistas irão ouvir suas queixas, fazer perguntas relevantes e oferecer orientações personalizadas. Se necessário, podem solicitar exames ou prescrever medicamentos.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/faq">
                <Button variant="outline" className="border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
                  Ver Todas as Dúvidas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-menopausa-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-menopausa-dark-pink mb-4">
              Receba Dicas e Novidades
            </h2>
            <p className="text-menopausa-gray mb-6">
              Inscreva-se em nossa newsletter e receba conteúdos exclusivos sobre saúde da mulher no climatério e menopausa.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input type="email" placeholder="Seu e-mail" className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-menopausa-pink" required />
              <Button type="submit" className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                Inscrever-se
              </Button>
            </form>
            <p className="mt-4 text-xs text-menopausa-gray">
              Ao se inscrever, você concorda com nossa <Link to="/privacidade" className="underline hover:text-menopausa-pink">Política de Privacidade</Link>.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>;
};
export default Home;
