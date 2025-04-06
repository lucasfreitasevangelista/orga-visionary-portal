
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  ArrowRight,
  ClipboardCheck,
  UserPlus,
  Search,
  Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Appointment, Patient } from "@/types/user";

// Dados fictícios para demonstração
const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientId: "p1",
    doctorId: "d1",
    patientName: "Maria Silva",
    doctorName: "Dra. Ana Beatriz",
    startTime: new Date("2023-12-10T15:30:00"),
    endTime: new Date("2023-12-10T16:00:00"),
    status: "scheduled"
  },
  {
    id: "2",
    patientId: "p2",
    doctorId: "d1",
    patientName: "Joana Pereira",
    doctorName: "Dra. Ana Beatriz",
    startTime: new Date("2023-12-10T16:30:00"),
    endTime: new Date("2023-12-10T17:00:00"),
    status: "scheduled"
  },
  {
    id: "3",
    patientId: "p3",
    doctorId: "d1",
    patientName: "Claudia Santos",
    doctorName: "Dra. Ana Beatriz",
    startTime: new Date("2023-12-11T10:00:00"),
    endTime: new Date("2023-12-11T10:30:00"),
    status: "scheduled"
  }
];

const mockPatients: Patient[] = [
  {
    id: "p1",
    name: "Maria Silva",
    email: "maria@example.com",
    phone: "(11) 99999-8888",
    birthDate: "1968-05-15",
    role: "patient",
    createdAt: new Date("2023-01-15"),
    avatar: "/avatars/patient-1.jpg",
  },
  {
    id: "p2",
    name: "Joana Pereira",
    email: "joana@example.com",
    phone: "(11) 98888-7777",
    birthDate: "1970-03-20",
    role: "patient",
    createdAt: new Date("2023-02-10"),
    avatar: "/avatars/patient-2.jpg",
  },
  {
    id: "p3",
    name: "Claudia Santos",
    email: "claudia@example.com",
    phone: "(11) 97777-6666",
    birthDate: "1965-11-08",
    role: "patient",
    createdAt: new Date("2023-03-05"),
    avatar: "/avatars/patient-3.jpg",
  },
  {
    id: "p4",
    name: "Teresa Oliveira",
    email: "teresa@example.com",
    phone: "(11) 96666-5555",
    birthDate: "1963-09-12",
    role: "patient",
    createdAt: new Date("2023-04-20"),
    avatar: "/avatars/patient-4.jpg",
  },
  {
    id: "p5",
    name: "Regina Costa",
    email: "regina@example.com",
    phone: "(11) 95555-4444",
    birthDate: "1969-07-25",
    role: "patient",
    createdAt: new Date("2023-05-15"),
    avatar: "/avatars/patient-5.jpg",
  }
];

const DoctorDashboard = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filtro de pacientes baseado na busca
  const filteredPatients = mockPatients.filter(
    patient => patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  // Obter consultas de hoje
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayAppointments = mockAppointments.filter(appointment => {
    const appointmentDate = new Date(appointment.startTime);
    appointmentDate.setHours(0, 0, 0, 0);
    return appointmentDate.getTime() === today.getTime();
  });

  // Obter consultas futuras
  const futureAppointments = mockAppointments.filter(appointment => {
    const appointmentDate = new Date(appointment.startTime);
    appointmentDate.setHours(0, 0, 0, 0);
    return appointmentDate.getTime() > today.getTime();
  });

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-bold text-menopausa-dark-pink mb-2">
          Olá, {user?.name?.split(' ')[0]}
        </h1>
        <p className="text-menopausa-gray">
          Bem-vindo(a) ao seu painel médico. Aqui você pode gerenciar suas consultas, pacientes e prontuários.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-menopausa-light-pink rounded-full flex items-center justify-center">
                <Calendar className="text-menopausa-dark-pink" size={24} />
              </div>
              <span className="text-3xl font-bold text-menopausa-dark-pink">
                {todayAppointments.length}
              </span>
            </div>
            <h3 className="text-lg font-medium text-menopausa-dark-pink mb-1">Consultas Hoje</h3>
            <p className="text-sm text-menopausa-gray">
              {todayAppointments.length === 0 ? 'Nenhuma consulta para hoje' : 
                todayAppointments.length === 1 ? '1 paciente agendado' : 
                `${todayAppointments.length} pacientes agendados`}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-menopausa-light-pink rounded-full flex items-center justify-center">
                <Users className="text-menopausa-dark-pink" size={24} />
              </div>
              <span className="text-3xl font-bold text-menopausa-dark-pink">
                {mockPatients.length}
              </span>
            </div>
            <h3 className="text-lg font-medium text-menopausa-dark-pink mb-1">Total de Pacientes</h3>
            <p className="text-sm text-menopausa-gray">
              {mockPatients.length === 0 ? 'Nenhum paciente cadastrado' : 
                mockPatients.length === 1 ? '1 paciente em acompanhamento' : 
                `${mockPatients.length} pacientes em acompanhamento`}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-menopausa-light-pink rounded-full flex items-center justify-center">
                <ClipboardCheck className="text-menopausa-dark-pink" size={24} />
              </div>
              <span className="text-3xl font-bold text-menopausa-dark-pink">
                {futureAppointments.length}
              </span>
            </div>
            <h3 className="text-lg font-medium text-menopausa-dark-pink mb-1">Próximas Consultas</h3>
            <p className="text-sm text-menopausa-gray">
              {futureAppointments.length === 0 ? 'Nenhuma consulta agendada' : 
                futureAppointments.length === 1 ? '1 consulta agendada' : 
                `${futureAppointments.length} consultas agendadas`}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-medium text-menopausa-dark-pink mb-1">Adicionar Paciente</h3>
              <p className="text-sm text-menopausa-gray mb-4">
                Cadastre um novo paciente em sua lista
              </p>
            </div>
            <Button className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white w-full">
              <UserPlus size={18} className="mr-2" />
              Novo Paciente
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Consultas de Hoje */}
        <Card className="bg-white lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-menopausa-dark-pink flex items-center">
              <Calendar className="mr-2 text-menopausa-pink" size={20} />
              Consultas de Hoje
            </CardTitle>
            <CardDescription>
              {formatDate(new Date())}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {todayAppointments.length > 0 ? (
              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-3 bg-menopausa-light-pink bg-opacity-30 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-menopausa-dark-pink">{appointment.patientName}</h4>
                        <div className="flex items-center text-sm text-menopausa-gray">
                          <Clock size={14} className="mr-1" />
                          <span>{formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}</span>
                        </div>
                      </div>
                      {appointment.status === "scheduled" ? (
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full flex items-center">
                          <CheckCircle size={12} className="mr-1" /> Confirmada
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full flex items-center">
                          <AlertCircle size={12} className="mr-1" /> Pendente
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button variant="outline" size="sm" className="text-xs border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink flex-1">
                        Ver Prontuário
                      </Button>
                      <Button size="sm" className="text-xs bg-menopausa-pink hover:bg-menopausa-dark-pink text-white flex-1">
                        Iniciar Consulta
                      </Button>
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
              <div className="text-center py-8">
                <Calendar className="mx-auto text-menopausa-pink opacity-20" size={48} />
                <p className="text-menopausa-gray mt-4">Você não tem consultas agendadas para hoje</p>
                <Link to="/dashboard/appointments">
                  <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink mt-2">
                    Ver agenda completa
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Lembretes e Tarefas */}
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-menopausa-dark-pink flex items-center">
              <Bookmark className="mr-2 text-menopausa-pink" size={20} />
              Lembretes e Tarefas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 rounded-md">
                <h4 className="font-medium text-yellow-700 mb-1">Revisar exames</h4>
                <p className="text-sm text-yellow-600 mb-2">
                  Revisar resultados de exames da paciente Maria Silva
                </p>
                <div className="flex justify-between text-xs text-yellow-500">
                  <span>Prioridade: Alta</span>
                  <span>Até: Hoje</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-md">
                <h4 className="font-medium text-blue-700 mb-1">Preparar relatório</h4>
                <p className="text-sm text-blue-600 mb-2">
                  Finalizar relatório de acompanhamento trimestral
                </p>
                <div className="flex justify-between text-xs text-blue-500">
                  <span>Prioridade: Média</span>
                  <span>Até: Amanhã</span>
                </div>
              </div>

              <div className="p-3 bg-green-50 rounded-md">
                <h4 className="font-medium text-green-700 mb-1">Atualizar prontuários</h4>
                <p className="text-sm text-green-600 mb-2">
                  Atualizar informações nos prontuários de 3 pacientes
                </p>
                <div className="flex justify-between text-xs text-green-500">
                  <span>Prioridade: Baixa</span>
                  <span>Até: 12/12</span>
                </div>
              </div>

              <Button className="w-full bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                Adicionar Lembrete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pacientes Recentes */}
      <Card className="bg-white mb-8">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <CardTitle className="text-lg font-medium text-menopausa-dark-pink flex items-center">
              <Users className="mr-2 text-menopausa-pink" size={20} />
              Meus Pacientes
            </CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-menopausa-gray" size={16} />
              <input
                type="text"
                placeholder="Buscar paciente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink text-sm"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-sm font-medium text-menopausa-gray">Paciente</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-menopausa-gray">Idade</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-menopausa-gray">Contato</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-menopausa-gray">Desde</th>
                  <th className="py-3 px-4 text-right text-sm font-medium text-menopausa-gray">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.slice(0, 5).map((patient) => {
                  // Calcular idade
                  const birthDate = new Date(patient.birthDate || "");
                  const ageDifMs = Date.now() - birthDate.getTime();
                  const ageDate = new Date(ageDifMs);
                  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

                  return (
                    <tr key={patient.id} className="border-b hover:bg-menopausa-light-pink hover:bg-opacity-10">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-menopausa-light-pink flex items-center justify-center overflow-hidden mr-3">
                            {patient.avatar ? (
                              <img src={patient.avatar} alt={patient.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-xs font-medium text-menopausa-dark-pink">
                                {patient.name.split(' ').map(name => name[0]).join('')}
                              </span>
                            )}
                          </div>
                          <span className="font-medium text-menopausa-dark-pink">{patient.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-menopausa-gray">{age} anos</td>
                      <td className="py-3 px-4 text-menopausa-gray">{patient.phone}</td>
                      <td className="py-3 px-4 text-menopausa-gray">{formatDate(patient.createdAt)}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm" className="text-xs border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink">
                            Prontuário
                          </Button>
                          <Button size="sm" className="text-xs bg-menopausa-pink hover:bg-menopausa-dark-pink text-white">
                            Consulta
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center">
            <Link to="/dashboard/patients">
              <Button variant="link" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                Ver todos os pacientes <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Banner/CTA */}
      <div className="bg-gradient-to-r from-menopausa-light-pink to-menopausa-lavender p-6 rounded-lg shadow-sm">
        <div className="md:flex items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h2 className="text-xl font-serif font-bold text-menopausa-dark-pink mb-2">
              Compartilhe sua experiência
            </h2>
            <p className="text-menopausa-gray">
              Escreva um artigo ou dica para nossas pacientes. Seu conhecimento pode ajudar muitas mulheres.
            </p>
          </div>
          <Button className="bg-menopausa-pink hover:bg-menopausa-dark-pink text-white w-full md:w-auto">
            Escrever Artigo
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
