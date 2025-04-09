
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Building2, Clock, PhoneCall, LineChart, Users, Lightbulb } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MadisBPO = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  const onSubmit = () => {
    window.open("https://forms.gle/ZYbFe7Y1sq42QbVLA", "_blank");
    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#0F3C68]">MADIS</a>
          <div className="hidden md:flex space-x-8">
            <a href="#what-is-bpo" className="text-gray-600 hover:text-[#0F3C68] transition-colors">O que é BPO</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#0F3C68] transition-colors">Benefícios</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#0F3C68] transition-colors">Depoimentos</a>
            <a href="#contact" className="text-gray-600 hover:text-[#0F3C68] transition-colors">Contato</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0F3C68] to-[#1A5BA0] text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              BPO Madis: A Terceirização Inteligente da Gestão de Ponto
            </h1>
            <p className="text-lg opacity-90">
              Otimize seu tempo com um serviço completo de tratamento de ponto, monitoramento, suporte e relatórios.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block bg-white text-[#0F3C68] font-semibold px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Solicite uma Cotação
              </a>
            </div>
          </div>
          <div className="relative bg-white/10 p-6 rounded-2xl shadow-xl">
            <AspectRatio ratio={16 / 9} className="bg-white/5 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Equipe de suporte BPO Madis" 
                className="object-cover w-full h-full" 
              />
            </AspectRatio>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What is BPO Section */}
      <section id="what-is-bpo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F3C68] mb-6">O que é Business Process Outsourcing?</h2>
            <p className="text-lg text-gray-700">
              A terceirização dos processos de ponto da sua empresa para um time especializado, garantindo segurança, conformidade e foco no que realmente importa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F5F5F5] p-8 rounded-xl text-center">
              <div className="bg-[#0F3C68]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#0F3C68] w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Processamento</h3>
              <p className="text-gray-600">Tratamento completo dos registros de ponto</p>
            </div>
            
            <div className="bg-[#F5F5F5] p-8 rounded-xl text-center">
              <div className="bg-[#0F3C68]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="text-[#0F3C68] w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-gray-600">Assistência técnica especializada</p>
            </div>
            
            <div className="bg-[#F5F5F5] p-8 rounded-xl text-center">
              <div className="bg-[#0F3C68]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <LineChart className="text-[#0F3C68] w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Relatórios</h3>
              <p className="text-gray-600">Dados e insights para gestão eficiente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F3C68] text-center mb-16">Benefícios do Serviço</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0F3C68]/10 p-3 rounded-full mr-4">
                    <Lightbulb className="text-[#0F3C68] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Assistência e Configuração Personalizada</h3>
                </div>
                <p className="text-gray-600">Suporte técnico especializado para configurar o sistema de acordo com as necessidades da sua empresa.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0F3C68]/10 p-3 rounded-full mr-4">
                    <Building2 className="text-[#0F3C68] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Monitoramento de Equipamentos</h3>
                </div>
                <p className="text-gray-600">Acompanhamento contínuo do funcionamento dos equipamentos de ponto, garantindo disponibilidade e precisão.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0F3C68]/10 p-3 rounded-full mr-4">
                    <PhoneCall className="text-[#0F3C68] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Suporte Ágil via Telefone e Google Chat</h3>
                </div>
                <p className="text-gray-600">Canais de comunicação rápidos e eficientes para solucionar dúvidas e problemas.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0F3C68]/10 p-3 rounded-full mr-4">
                    <Users className="text-[#0F3C68] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Treinamentos Personalizados</h3>
                </div>
                <p className="text-gray-600">Capacitação para equipes internas para melhor utilização do sistema e suas funcionalidades.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0F3C68]/10 p-3 rounded-full mr-4">
                    <LineChart className="text-[#0F3C68] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Relatórios e Fechamento de Períodos</h3>
                </div>
                <p className="text-gray-600">Geração automática de relatórios e apoio no fechamento de períodos para folha de pagamento.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F5F5F5] p-8 md:p-12 rounded-2xl relative">
              <svg className="absolute top-8 left-8 text-[#0F3C68] opacity-20 w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-700 mb-6 md:ml-10">
                  "Desde que implementamos o BPO Madis, ganhamos tempo e confiança nos nossos processos."
                </p>
                <div className="md:ml-10">
                  <p className="font-semibold text-[#0F3C68]">Roberto Silva</p>
                  <p className="text-gray-500">Diretor de RH, Empresa XYZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#0F3C68] to-[#1A5BA0] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quer saber quanto custa para sua empresa?</h2>
            <p className="text-lg opacity-90">Preencha o formulário e receba uma proposta personalizada.</p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl p-8">
            {isFormSubmitted ? (
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Obrigado pelo seu interesse!</h3>
                <p className="text-gray-600 mb-6">Você será redirecionado para o formulário completo.</p>
                <a 
                  href="https://forms.gle/ZYbFe7Y1sq42QbVLA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0F3C68] text-white font-semibold px-6 py-2 rounded-md"
                >
                  Abrir formulário
                </a>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Nome</FormLabel>
                          <FormControl>
                            <input
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C68]"
                              placeholder="Seu nome"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">E-mail</FormLabel>
                          <FormControl>
                            <input
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C68]"
                              placeholder="seuemail@empresa.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Empresa</FormLabel>
                          <FormControl>
                            <input
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C68]"
                              placeholder="Nome da empresa"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Telefone</FormLabel>
                          <FormControl>
                            <input
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C68]"
                              placeholder="(00) 00000-0000"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#0F3C68] hover:bg-[#0F3C68]/90 text-white font-semibold py-3 rounded-md"
                    >
                      Quero receber a proposta
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://forms.gle/ZYbFe7Y1sq42QbVLA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline hover:text-white/80"
            >
              Prefere acessar o formulário diretamente? Clique aqui
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3C68] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MADIS</h3>
              <p className="text-white/80">
                Soluções completas para gestão de ponto e acesso.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Institucionais</h4>
              <ul className="space-y-2">
                <li><a href="https://www.madis.com.br" className="text-white/80 hover:text-white">Site Principal</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Suporte</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Contato</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} MADIS. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-white/70 text-sm hover:text-white mr-6">Termos de Uso</a>
              <a href="#" className="text-white/70 text-sm hover:text-white">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MadisBPO;
