
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Você receberá nossos conteúdos exclusivos sobre menopausa.",
      });
      setName("");
      setEmail("");
      setAge("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-menopausa-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-card p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-menopausa-dark-pink mb-4">
              Quer receber dicas e conteúdos gratuitos sobre menopausa?
            </h2>
            <p className="text-menopausa-gray">
              Inscreva-se em nossa newsletter e receba conteúdos exclusivos sobre saúde da mulher no climatério e menopausa.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-menopausa-gray mb-1">
                Nome completo
              </label>
              <Input 
                id="name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome" 
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-menopausa-gray mb-1">
                E-mail
              </label>
              <Input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com" 
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-menopausa-gray mb-1">
                Idade
              </label>
              <Input 
                id="age"
                type="number" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Sua idade" 
                required
                min="18"
                max="100"
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-menopausa-pink hover:bg-menopausa-dark-pink text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Quero receber!"}
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-center text-menopausa-gray">
            Ao se inscrever, você concorda com nossa Política de Privacidade. 
            Seus dados estão seguros conosco.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
