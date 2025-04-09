
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Zap } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // Here you would normally send the email to your API
      console.log('Subscribed email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Animated tech-inspired background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(0, 119, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%), radial-gradient(circle at 70% 50%, rgba(0, 119, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-blue-950/30 p-10 rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(0,119,255,0.15)]">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">
                Receba os melhores <span className="text-blue-400">insights</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Assine nossa newsletter e receba conteúdo exclusivo diretamente no seu e-mail. Sem spam, apenas conhecimento de alto valor.
              </p>
              <div className="flex items-center text-gray-400 mb-6">
                <Zap className="text-blue-500 mr-2" size={18} />
                <span className="text-sm">Enviamos apenas 2 emails por mês</span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="w-full py-3 pl-10 pr-4 bg-blue-950/50 border border-blue-500/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 h-12"
                  >
                    Quero Receber
                  </Button>
                </div>
                
                {isSubmitted && (
                  <div className="text-green-500 text-sm mt-2 animate-fade-in">
                    Inscrição realizada com sucesso! 🚀
                  </div>
                )}
                
                <p className="text-gray-500 text-xs mt-3">
                  Ao assinar, você concorda com nossa política de privacidade. Você pode cancelar sua inscrição a qualquer momento.
                </p>
              </form>
            </div>
            
            <div className="hidden md:block relative w-52 h-52">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Mail className="text-blue-500 animate-float" size={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
