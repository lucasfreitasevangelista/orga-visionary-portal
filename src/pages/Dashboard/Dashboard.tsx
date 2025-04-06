
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import PatientDashboard from "./PatientDashboard";
import DoctorDashboard from "./DoctorDashboard";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-menopausa-light-gray">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-menopausa-pink border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-menopausa-gray">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return user.role === "doctor" ? <DoctorDashboard /> : <PatientDashboard />;
};

export default Dashboard;
