
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
