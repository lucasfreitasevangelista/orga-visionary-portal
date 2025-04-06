
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-menopausa-dark-pink font-serif text-2xl font-bold">MENOPAUSA<span className="text-menopausa-pink">24H</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-menopausa-gray hover:text-menopausa-pink transition duration-200">
              Início
            </Link>
            <Link to="/sobre" className="text-menopausa-gray hover:text-menopausa-pink transition duration-200">
              Sobre Nós
            </Link>
            <Link to="/especialistas" className="text-menopausa-gray hover:text-menopausa-pink transition duration-200">
              Especialistas
            </Link>
            <Link to="/blog" className="text-menopausa-gray hover:text-menopausa-pink transition duration-200">
              Blog
            </Link>
            <Link to="/faq" className="text-menopausa-gray hover:text-menopausa-pink transition duration-200">
              Dúvidas
            </Link>
            <Link to="/contato" className="text-menopausa-gray hover:text-menopausa-pink transition duration-200">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink hover:text-menopausa-dark-pink">
                Entrar
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-menopausa-pink text-white hover:bg-menopausa-dark-pink">
                Cadastre-se
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-menopausa-gray hover:text-menopausa-pink"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <Link 
                to="/" 
                className="py-2 text-menopausa-gray hover:text-menopausa-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="py-2 text-menopausa-gray hover:text-menopausa-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/especialistas" 
                className="py-2 text-menopausa-gray hover:text-menopausa-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                Especialistas
              </Link>
              <Link 
                to="/blog" 
                className="py-2 text-menopausa-gray hover:text-menopausa-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/faq" 
                className="py-2 text-menopausa-gray hover:text-menopausa-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                Dúvidas
              </Link>
              <Link 
                to="/contato" 
                className="py-2 text-menopausa-gray hover:text-menopausa-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink hover:text-menopausa-dark-pink">
                    Entrar
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-menopausa-pink text-white hover:bg-menopausa-dark-pink">
                    Cadastre-se
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-menopausa-light-gray">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-menopausa-dark-pink font-serif text-xl font-bold mb-4">MENOPAUSA<span className="text-menopausa-pink">24H</span></h3>
              <p className="text-menopausa-gray mb-4">Plataforma de telemedicina especializada para mulheres na menopausa e climatério.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-menopausa-gray mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-menopausa-gray hover:text-menopausa-pink">Início</Link></li>
                <li><Link to="/sobre" className="text-menopausa-gray hover:text-menopausa-pink">Sobre Nós</Link></li>
                <li><Link to="/especialistas" className="text-menopausa-gray hover:text-menopausa-pink">Especialistas</Link></li>
                <li><Link to="/faq" className="text-menopausa-gray hover:text-menopausa-pink">Dúvidas Frequentes</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-menopausa-gray mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-menopausa-gray hover:text-menopausa-pink">Artigos</Link></li>
                <li><Link to="/faq" className="text-menopausa-gray hover:text-menopausa-pink">FAQ</Link></li>
                <li><Link to="/contato" className="text-menopausa-gray hover:text-menopausa-pink">Contato</Link></li>
                <li><Link to="#" className="text-menopausa-gray hover:text-menopausa-pink">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-menopausa-gray mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-menopausa-pink"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-menopausa-gray hover:text-menopausa-pink">+55 (11) 95932-1999</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-menopausa-pink"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span className="text-menopausa-gray">contato@menopausa24h.com.br</span>
                </li>
              </ul>
              <div className="mt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-menopausa-pink text-white hover:bg-menopausa-dark-pink">
                    Agende sua Consulta
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-menopausa-gray">
            <p>© {new Date().getFullYear()} MENOPAUSA24H. Todos os direitos reservados.</p>
            <div className="mt-2 space-x-4">
              <Link to="/privacidade" className="hover:text-menopausa-pink">Política de Privacidade</Link>
              <Link to="/termos" className="hover:text-menopausa-pink">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
