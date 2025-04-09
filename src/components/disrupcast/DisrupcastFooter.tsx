
import React from 'react';
import { ArrowUp } from 'lucide-react';

const DisrupcastFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">DISRUP<span className="text-blue-400">CAST</span></span>
            <p className="text-gray-400 mt-2 max-w-md">
              Transformando ideias em inovação. O podcast onde líderes disruptivos compartilham seus segredos.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="p-3 bg-blue-800 hover:bg-blue-700 rounded-full text-white transition-colors mb-4"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900/50 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DISRUPCAST. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default DisrupcastFooter;
