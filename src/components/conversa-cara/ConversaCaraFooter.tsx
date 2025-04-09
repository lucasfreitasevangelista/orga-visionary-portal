
import React from "react";
import { Instagram, Twitter, Linkedin, Youtube, Spotify, Rss } from "lucide-react";

const ConversaCaraFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ];

  const streamingLinks = [
    { icon: <Spotify size={20} />, href: "#", label: "Spotify" },
    { icon: <Rss size={20} />, href: "#", label: "Apple Podcasts" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    { icon: <Rss size={20} />, href: "#", label: "Google Podcasts" },
  ];

  return (
    <footer className="bg-conversa-darker border-t border-conversa-gold/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-serif font-bold text-white">
              <span className="text-conversa-gold">Conversa</span> Cara
            </a>
            <p className="text-white/60 mt-2 max-w-md">
              Conversas que transformam perspectivas e inspiram ação.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex justify-center md:justify-end">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-white/70 hover:text-conversa-gold transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="flex space-x-4">
                {streamingLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-white/70 hover:text-conversa-gold transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-conversa-gold/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Conversa Cara Podcast. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-conversa-gold text-sm transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-conversa-gold text-sm transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConversaCaraFooter;
