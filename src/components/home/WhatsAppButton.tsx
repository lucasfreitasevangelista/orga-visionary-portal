
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text=Olá!%20Quero%20saber%20mais%20sobre%20o%20CONVERSA%20CARA!%20🎙️&type=phone_number&app_absent=0";

  return (
    <a 
      href={whatsappLink}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-conversa-gold hover:bg-conversa-gold/90 text-conversa-dark p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
