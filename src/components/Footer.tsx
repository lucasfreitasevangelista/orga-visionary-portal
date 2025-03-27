
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-intaw-navy text-white pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">INTAW<span className="text-intaw-accent">PRO</span></h3>
            <p className="text-white/80 mb-6">
              Transformamos organizações através do desenvolvimento humano e adequação às normas regulatórias.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#compliance" className="text-white/80 hover:text-white transition-colors">NR-1</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Diagnóstico Organizacional</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Inteligência Emocional</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Workshop DISC</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Desenvolvimento de Liderança</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Planos Empresariais</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Receba nossas novidades e conteúdos exclusivos sobre desenvolvimento organizacional.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-intaw-accent"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-intaw-accent text-white rounded-lg hover:bg-intaw-accent/90 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} INTAW PRO. Todos os direitos reservados.
          </p>
          
          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-3 bg-intaw-blue rounded-full text-white hover:bg-intaw-accent transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
