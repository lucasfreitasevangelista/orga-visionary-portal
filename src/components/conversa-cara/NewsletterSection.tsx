
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section id="contact" className="py-20 bg-conversa-darker relative">
      <div className="absolute inset-0 bg-gradient-to-b from-conversa-dark to-conversa-darker"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Não perca nenhum <span className="text-conversa-gold">episódio</span>
          </h2>
          <div className="w-24 h-1 bg-conversa-gold mx-auto my-6"></div>
          
          <p className="text-white/80 text-lg mb-8 font-serif">
            Assine nossa newsletter e receba os novos episódios, conteúdos exclusivos 
            e convites para eventos especiais diretamente no seu e-mail.
          </p>
          
          <form className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-conversa-dark/60 text-white border-conversa-gold/30 focus:border-conversa-gold focus:ring-conversa-gold/30 placeholder:text-white/50 flex-grow"
                required
              />
              <Button 
                type="submit"
                className="bg-conversa-gold hover:bg-conversa-gold/90 text-conversa-dark whitespace-nowrap"
              >
                Quero Receber
              </Button>
            </div>
            <p className="text-white/50 text-xs mt-3">
              Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
