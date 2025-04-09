
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ConversaCaraNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Episódios", href: "#episodes" },
    { name: "Seja Patrocinador", href: "#sponsor" },
    { name: "Contato", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-conversa-dark/90 backdrop-blur-md border-b border-conversa-gold/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-serif font-bold text-white">
              <span className="text-conversa-gold">Conversa</span> Cara
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-conversa-gold transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-conversa-dark/95 backdrop-blur-md border-b border-conversa-gold/10 transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="text-white/80 hover:text-conversa-gold transition-colors py-2 text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ConversaCaraNavbar;
