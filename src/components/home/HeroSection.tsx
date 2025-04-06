import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  return <section className="relative py-20 md:py-32 bg-gradient-to-r from-menopausa-light-pink to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-menopausa-dark-pink leading-tight animate-fade-in">
              Cuidado integral para você viver essa fase com leveza e apoio 24h.
            </h1>
            <p className="mt-4 text-lg text-menopausa-gray animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              A primeira plataforma de telemedicina 100% dedicada à saúde da mulher no climatério e menopausa.
            </p>
            <div className="mt-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white px-8 py-6 text-lg">
                  Agende sua consulta
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <img alt="Mulher madura sorrindo" className="w-full h-auto rounded-xl shadow-premium" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fbr%2Ffotos%2Fmulher-feliz&psig=AOvVaw3fGN7W8kAwohFj8zBEiDZk&ust=1744069712135000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCZ7pHMxIwDFQAAAAAdAAAAABAE" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-menopausa-light-pink rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-menopausa-lavender rounded-full opacity-40 blur-xl"></div>
    </section>;
};
export default HeroSection;