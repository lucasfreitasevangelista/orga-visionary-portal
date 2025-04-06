
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Home, 
  Calendar, 
  FileText, 
  MessageCircle, 
  User, 
  LogOut, 
  Bell, 
  ChevronDown,
  Users,
  ClipboardList,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const patientLinks = [
    { path: "/dashboard", name: "Início", icon: <Home size={20} /> },
    { path: "/dashboard/appointments", name: "Consultas", icon: <Calendar size={20} /> },
    { path: "/dashboard/prescriptions", name: "Receitas", icon: <FileText size={20} /> },
    { path: "/dashboard/chat", name: "Chat", icon: <MessageCircle size={20} /> },
    { path: "/dashboard/profile", name: "Meu Perfil", icon: <User size={20} /> },
  ];

  const doctorLinks = [
    { path: "/dashboard", name: "Início", icon: <Home size={20} /> },
    { path: "/dashboard/patients", name: "Pacientes", icon: <Users size={20} /> },
    { path: "/dashboard/appointments", name: "Consultas", icon: <Calendar size={20} /> },
    { path: "/dashboard/medical-records", name: "Prontuários", icon: <ClipboardList size={20} /> },
    { path: "/dashboard/settings", name: "Configurações", icon: <Settings size={20} /> },
    { path: "/dashboard/profile", name: "Meu Perfil", icon: <User size={20} /> },
  ];

  const links = user?.role === 'doctor' ? doctorLinks : patientLinks;

  return (
    <div className="min-h-screen bg-menopausa-light-gray flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm z-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="mr-2 text-menopausa-gray hover:text-menopausa-pink md:hidden"
              >
                <Menu size={24} />
              </button>

              <Link to="/dashboard" className="flex items-center">
                <span className="text-menopausa-dark-pink font-serif text-xl font-bold">MENOPAUSA<span className="text-menopausa-pink">24H</span></span>
              </Link>
            </div>

            {/* User menu and notifications */}
            <div className="flex items-center space-x-4">
              {/* Notifications dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileOpen(false);
                  }}
                  className="p-1 rounded-full text-menopausa-gray hover:text-menopausa-pink focus:outline-none"
                >
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-menopausa-pink"></span>
                  <Bell size={20} />
                </button>

                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-10">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-menopausa-dark-pink">Notificações</p>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      <div className="px-4 py-3 hover:bg-menopausa-light-pink border-b border-gray-100">
                        <p className="text-sm font-medium text-menopausa-dark-pink">Lembrete de Consulta</p>
                        <p className="text-xs text-menopausa-gray">Você tem uma consulta amanhã às 15:00</p>
                        <p className="text-xs text-gray-400 mt-1">Há 1 hora</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-menopausa-light-pink">
                        <p className="text-sm font-medium text-menopausa-dark-pink">Nova Mensagem</p>
                        <p className="text-xs text-menopausa-gray">Dra. Ana enviou uma nova mensagem</p>
                        <p className="text-xs text-gray-400 mt-1">Há 3 horas</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 text-center border-t border-gray-100">
                      <a href="#" className="text-xs text-menopausa-pink hover:text-menopausa-dark-pink">Ver todas as notificações</a>
                    </div>
                  </div>
                )}
              </div>

              {/* User profile dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsNotificationsOpen(false);
                  }}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-menopausa-light-pink flex items-center justify-center overflow-hidden">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={18} className="text-menopausa-dark-pink" />
                    )}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-menopausa-dark-pink">{user?.name}</p>
                    <p className="text-xs text-menopausa-gray">{user?.role === 'doctor' ? 'Médico' : 'Paciente'}</p>
                  </div>
                  <ChevronDown size={16} className="text-menopausa-gray" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/dashboard/profile"
                      className="block px-4 py-2 text-sm text-menopausa-gray hover:bg-menopausa-light-pink"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Meu Perfil
                    </Link>
                    <Link
                      to="/dashboard/settings"
                      className="block px-4 py-2 text-sm text-menopausa-gray hover:bg-menopausa-light-pink"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Configurações
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-menopausa-gray hover:bg-menopausa-light-pink"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for tablet and desktop */}
        <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-sm">
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4">
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`flex items-center px-4 py-3 text-sm rounded-md ${
                        location.pathname === link.path
                          ? "bg-menopausa-light-pink text-menopausa-dark-pink font-medium"
                          : "text-menopausa-gray hover:bg-menopausa-light-pink hover:text-menopausa-dark-pink"
                      }`}
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-4 py-4">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full flex items-center justify-center border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink"
              >
                <LogOut size={16} className="mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-30 md:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeSidebar}></div>
            
            <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg flex flex-col">
              <div className="flex items-center justify-between px-4 h-16 border-b">
                <span className="text-menopausa-dark-pink font-serif text-xl font-bold">MENOPAUSA<span className="text-menopausa-pink">24H</span></span>
                <button onClick={closeSidebar} className="text-menopausa-gray">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <nav className="px-2 py-4">
                  <ul className="space-y-1">
                    {links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className={`flex items-center px-4 py-3 text-sm rounded-md ${
                            location.pathname === link.path
                              ? "bg-menopausa-light-pink text-menopausa-dark-pink font-medium"
                              : "text-menopausa-gray hover:bg-menopausa-light-pink hover:text-menopausa-dark-pink"
                          }`}
                          onClick={closeSidebar}
                        >
                          <span className="mr-3">{link.icon}</span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              
              <div className="px-4 py-4 border-t">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full flex items-center justify-center border-menopausa-pink text-menopausa-pink hover:bg-menopausa-light-pink"
                >
                  <LogOut size={16} className="mr-2" />
                  Sair
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
