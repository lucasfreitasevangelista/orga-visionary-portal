
import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      // Redirect to WhatsApp after form submission
      window.open(whatsappLink, '_blank');

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-intaw-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto fade-up">Fale Conosco</h2>
          <div className="h-1 w-20 bg-intaw-accent mx-auto mt-4 mb-8 fade-up" style={{
            transitionDelay: '0.1s'
          }}></div>
          <p className="max-w-3xl mx-auto text-intaw-gray fade-up" style={{
            transitionDelay: '0.2s'
          }}>
            Agora é o momento de transformar sua equipe! Entre em contato conosco para uma consultoria inicial gratuita
            e descubra como podemos ajudar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 fade-up" style={{
            transitionDelay: '0.3s'
          }}>
            <div className="premium-card p-8">
              <h3 className="text-2xl font-semibold text-intaw-blue mb-6">Envie-nos uma mensagem</h3>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-center">
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-sm mt-1">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-intaw-gray text-sm mb-2">Nome completo</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-intaw-blue focus:ring-1 focus:ring-intaw-blue outline-none transition-all" placeholder="Seu nome" required />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-intaw-gray text-sm mb-2">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-intaw-blue focus:ring-1 focus:ring-intaw-blue outline-none transition-all" placeholder="seu.email@empresa.com" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-intaw-gray text-sm mb-2">Telefone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-intaw-blue focus:ring-1 focus:ring-intaw-blue outline-none transition-all" placeholder="(00) 00000-0000" />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-intaw-gray text-sm mb-2">Empresa</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-intaw-blue focus:ring-1 focus:ring-intaw-blue outline-none transition-all" placeholder="Nome da sua empresa" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-intaw-gray text-sm mb-2">Mensagem</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-intaw-blue focus:ring-1 focus:ring-intaw-blue outline-none transition-all" placeholder="Como podemos ajudar sua empresa?" required></textarea>
                  </div>

                  <button type="submit" className="btn-primary flex items-center justify-center w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="fade-up" style={{
            transitionDelay: '0.4s'
          }}>
            <div className="premium-card p-8 h-full">
              <h3 className="text-2xl font-semibold text-intaw-blue mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-intaw-blue text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-intaw-blue">Email</h4>
                    <a href="mailto:contato@intawpro.com.br" className="text-intaw-gray hover:text-intaw-blue transition-colors">
                      contato@intawpro.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-intaw-blue text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-intaw-blue">Telefone</h4>
                    <a href="tel:+5511959321999" className="text-intaw-gray hover:text-intaw-blue transition-colors">(11) 95932-1999</a>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-200">
                  <h4 className="font-medium text-intaw-blue mb-4">Horário de Atendimento</h4>
                  <p className="text-intaw-gray mb-2">Segunda à Sexta: 9h às 18h</p>
                  <p className="text-intaw-gray">Sábado: 9h às 12h</p>
                </div>

                <div className="mt-6">
                  <a 
                    href={whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-accent w-full flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    Fale pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
