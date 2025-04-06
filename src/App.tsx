
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";

// Páginas Públicas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Dashboard e Páginas Protegidas
import Dashboard from "./pages/Dashboard/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Rotas Protegidas */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/appointments" element={<Dashboard />} />
            <Route path="/dashboard/prescriptions" element={<Dashboard />} />
            <Route path="/dashboard/chat" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Dashboard />} />
            <Route path="/dashboard/patients" element={<Dashboard />} />
            <Route path="/dashboard/medical-records" element={<Dashboard />} />
            <Route path="/dashboard/settings" element={<Dashboard />} />
            
            {/* Rota de fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
