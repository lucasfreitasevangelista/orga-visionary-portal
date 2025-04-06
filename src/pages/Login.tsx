
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  role: z.enum(["patient", "doctor"], {
    required_error: "Selecione o tipo de usuário",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "patient",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    
    try {
      await login(data.email, data.password, data.role);
      toast({
        title: "Login realizado com sucesso",
        description: "Bem-vinda de volta à MENOPAUSA 24H!",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Erro ao fazer login",
        description: "E-mail, senha ou tipo de usuário incorretos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-lg shadow-card">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif font-bold text-menopausa-dark-pink mb-2">
            Bem-vinda de volta!
          </h1>
          <p className="text-menopausa-gray">
            Faça login para acessar sua conta
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Role Selection */}
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <label className="flex-1">
              <input
                type="radio"
                value="patient"
                className="sr-only"
                {...register("role")}
              />
              <div className={`text-center py-3 cursor-pointer transition-colors ${
                watch("role") === "patient"
                  ? "bg-menopausa-pink text-white"
                  : "bg-white text-menopausa-gray hover:bg-menopausa-light-pink"
              }`}>
                Sou Paciente
              </div>
            </label>
            <label className="flex-1">
              <input
                type="radio"
                value="doctor"
                className="sr-only"
                {...register("role")}
              />
              <div className={`text-center py-3 cursor-pointer transition-colors ${
                watch("role") === "doctor"
                  ? "bg-menopausa-pink text-white"
                  : "bg-white text-menopausa-gray hover:bg-menopausa-light-pink"
              }`}>
                Sou Médico
              </div>
            </label>
          </div>
          {errors.role && (
            <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-menopausa-gray mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-menopausa-gray mb-1">
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-menopausa-gray"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-menopausa-pink border-gray-300 rounded focus:ring-menopausa-pink"
              />
              <span className="ml-2 text-sm text-menopausa-gray">Lembrar-me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-menopausa-pink hover:text-menopausa-dark-pink">
              Esqueceu a senha?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-menopausa-pink hover:bg-menopausa-dark-pink text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-menopausa-gray text-sm">
            Ainda não tem uma conta?{" "}
            <Link to="/register" className="text-menopausa-pink hover:text-menopausa-dark-pink">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Login;
