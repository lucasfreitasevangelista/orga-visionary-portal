
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Compliance from '../components/Compliance';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Initialize animation observers
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      };
      
      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
      });
      
      const elements = document.querySelectorAll('.fade-up, .fade-in');
      elements.forEach(el => observer.observe(el));
      
      return () => {
        elements.forEach(el => observer.unobserve(el));
      };
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-intaw-navy flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-4">
            INTAW<span className="text-intaw-accent">PRO</span>
          </div>
          <div className="w-16 h-16 border-4 border-intaw-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutUs />
      <Compliance />
      <Services />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
