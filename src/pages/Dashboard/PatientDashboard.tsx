
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  BookOpen, 
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";

// Dados fictícios para demonstração
const upcomingAppointments = [
  {
    id: 1,
    doctorName: "Dra. Ana Beatriz",
    specialty: "Ginecologia",
    date: new Date("2023-12-10T15:30:00"),
    status: "confirmed"
  },
  {
    id: 2,
    doctorName: "Dr. Ricardo Mendes",
    specialty: "Endocrinologia",
    date: new Date("2023-12-17T14:00:00"),
    status: "confirmed"
  }
];

const recentPrescriptions = [
  {
    id: 1,
    doctorName: "Dra. Ana Beatriz",
    specialty: "Ginecologia",
    date: new Date("2023-11-25"),
    medications: ["Estradiol 1mg", "Progesterona 100mg"],
  },
  {
    id: 2,
    doctorName: "Dr. Ricardo Mendes",
    specialty: "Endocrinologia",
    date: new Date("2023-11-20"),
    medications: ["Levotiroxina 50mcg"],
  }
];

const articles = [
  {
    id: 1,
    title: "Como lidar com as ondas de calor na menopausa",
    excerpt: "Dicas práticas para gerenciar um dos sintomas mais comuns da menopausa.",
    image: "/articles/hot-flashes.jpg",
    date: new Date("2023-11-15"),
    readTime: 5
  },
  {
    id: 2,
    title: "Alimentação e menopausa: o que você precisa saber",
    excerpt: "Descubra como a dieta pode ajudar a aliviar os sintomas da menopausa.",
    image: "/articles/diet.jpg",
    date: new Date("2023-11-08"),
    readTime: 7
  },
  {
    id: 3,
    title: "Terapia de reposição hormonal: mitos e verdades",
    excerpt: "Entenda os prós e contras da TRH e quando ela pode ser indicada.",
    image: "/articles/hormone.jpg",
    date: new Date("2023-10-30"),
    readTime: 6
  }
];

const PatientDashboard = () => {
  const { user } = useAuth();
  const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5511959321999&text&type=phone_number&app_absent=0";

  // Função para formatar a data
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  // Função para formatar hora
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-bold text-menopausa-dark-pink mb-2">
          Olá, {user?.name?.split(' ')[0]}
        </h1>
        <p className="text-menopausa-gray">
          Bem-vinda ao seu painel de controle. Aqui você pode gerenciar suas consultas, visualizar receitas e mais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-menopausa-dark-pink flex items-center">
              <Calendar className="mr-2 text-menopausa-pink" size={20} />
              Próximas Consultas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-3 bg-menopausa-light-pink bg-opacity-30 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-menopausa-dark-pink">{appointment.doctorName}</h4>
                        <p className="text-sm text-menopausa-gray">{appointment.specialty}</p>
                      </div>
                      {appointment.status === "confirmed" ? (
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full flex items-center">
                          <CheckCircle size={12} className="mr-1" /> Confirmada
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full flex items-center">
                          <AlertCircle size={12} className="mr-1" /> Pendente
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-menopausa-gray">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-3">{formatDate(appointment.date)}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{formatTime(appointment.date)}</span>
                    </div>
                  </div>
                ))}

                <Link to="/dashboard/appointments">
                  <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink p-0 h-auto">
                    Ver todas as consultas <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-menopausa-gray mb-4">Você não tem consultas agendadas</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                    Agendar Consulta
                  </Button>
                </a>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-menopausa-dark-pink flex items-center">
              <BookOpen className="mr-2 text-menopausa-pink" size={20} />
              Receitas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentPrescriptions.length > 0 ? (
              <div className="space-y-4">
                {recentPrescriptions.map((prescription) => (
                  <div key={prescription.id} className="p-3 bg-menopausa-light-pink bg-opacity-30 rounded-md">
                    <div className="mb-2">
                      <h4 className="font-medium text-menopausa-dark-pink">{prescription.doctorName}</h4>
                      <p className="text-sm text-menopausa-gray">
                        {prescription.specialty} - {formatDate(prescription.date)}
                      </p>
                    </div>
                    <div className="text-sm text-menopausa-gray">
                      {prescription.medications.map((med, index) => (
                        <span key={index} className="inline-block mr-2 mb-1 px-2 py-1 bg-white rounded-full">
                          {med}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                <Link to="/dashboard/prescriptions">
                  <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink p-0 h-auto">
                    Ver todas as receitas <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-menopausa-gray">Você ainda não tem receitas</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-menopausa-dark-pink flex items-center">
              <MessageCircle className="mr-2 text-menopausa-pink" size={20} />
              Suporte 24h
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <p className="text-menopausa-gray mb-4">
                Tem alguma dúvida ou precisa de ajuda? Nosso suporte está disponível 24 horas por dia.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                  Falar com o Suporte
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-serif font-bold text-menopausa-dark-pink">
            Artigos Recomendados
          </h2>
          <Link to="/blog">
            <Button variant="outline" className="border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
              Ver Todos
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-card overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-menopausa-dark-pink mb-2">{article.title}</h3>
                <p className="text-sm text-menopausa-gray mb-3">{article.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-menopausa-gray">
                  <span>{formatDate(article.date)}</span>
                  <span>{article.readTime} min de leitura</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-menopausa-light-pink to-menopausa-lavender p-6 rounded-lg shadow-sm">
        <div className="md:flex items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h2 className="text-xl font-serif font-bold text-menopausa-dark-pink mb-2">
              Agende sua próxima consulta
            </h2>
            <p className="text-menopausa-gray">
              Mantenha seus cuidados de saúde em dia. Nossa equipe de especialistas está pronta para te atender.
            </p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white w-full md:w-auto">
              Agendar Agora
            </Button>
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
