
import React from 'react';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      url: "https://instagram.com",
      color: "bg-gradient-to-br from-purple-600 to-pink-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      url: "https://linkedin.com",
      color: "bg-blue-700"
    },
    {
      name: "YouTube",
      icon: <Youtube size={32} />,
      url: "https://youtube.com",
      color: "bg-red-600"
    },
    {
      name: "Twitter",
      icon: <Twitter size={32} />,
      url: "https://twitter.com",
      color: "bg-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nos acompanhe nas <span className="text-blue-500">redes sociais</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Siga o DISRUPCAST e faça parte da revolução! Conteúdo exclusivo e atualizações em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} p-6 rounded-xl flex flex-col items-center justify-center text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="mb-3">{social.icon}</div>
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2">Tem uma pergunta ou sugestão?</p>
          <a 
            href="mailto:contato@disrupcast.com" 
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            contato@disrupcast.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
