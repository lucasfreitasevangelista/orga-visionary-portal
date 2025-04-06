
import React, { createContext, useState, useContext, useEffect } from "react";
import { User, Patient, Doctor } from "../types/user";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: 'patient' | 'doctor') => Promise<void>;
  logout: () => void;
  register: (userData: Partial<Patient | Doctor>, role: 'patient' | 'doctor') => Promise<void>;
}

// Mock data for demo purposes
const MOCK_PATIENTS: Patient[] = [
  {
    id: "p1",
    name: "Maria Silva",
    email: "maria@example.com",
    cpf: "123.456.789-00",
    phone: "(11) 99999-8888",
    birthDate: "1968-05-15",
    role: "patient",
    createdAt: new Date("2023-01-15"),
    avatar: "/avatars/patient-1.jpg",
  },
];

const MOCK_DOCTORS: Doctor[] = [
  {
    id: "d1",
    name: "Dra. Ana Beatriz",
    email: "ana@example.com",
    crm: "CRM/SP 123456",
    specialty: "Ginecologia",
    role: "doctor",
    bio: "Especialista em saúde da mulher com foco em climatério e menopausa",
    createdAt: new Date("2022-03-10"),
    avatar: "/avatars/doctor-1.jpg",
  },
];

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  register: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("menopausa24h_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: 'patient' | 'doctor') => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication
      let foundUser = null;
      
      if (role === "patient") {
        foundUser = MOCK_PATIENTS.find(p => p.email === email);
      } else {
        foundUser = MOCK_DOCTORS.find(d => d.email === email);
      }
      
      if (!foundUser) {
        throw new Error("Usuário não encontrado");
      }
      
      // Store user in state and localStorage
      setUser(foundUser);
      localStorage.setItem("menopausa24h_user", JSON.stringify(foundUser));
      
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("menopausa24h_user");
  };

  const register = async (userData: Partial<Patient | Doctor>, role: 'patient' | 'doctor') => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        id: `${role[0]}${Math.floor(Math.random() * 10000)}`,
        ...userData,
        role,
        createdAt: new Date(),
      } as User;
      
      // Store user in state and localStorage
      setUser(newUser);
      localStorage.setItem("menopausa24h_user", JSON.stringify(newUser));
      
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
