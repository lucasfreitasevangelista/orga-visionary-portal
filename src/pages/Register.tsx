
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

// Schema para o formulário de registro
const registerSchema = z.object({
  role: z.enum(["patient", "doctor"], {
    required_error: "Selecione o tipo de usuário",
  }),
  name: z.string().min(3, { message: "Nome completo é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  confirmPassword: z.string(),
  phone: z.string().min(10, { message: "Telefone inválido" }).optional(),
  birthDate: z.string().optional(),
  cpf: z.string().min(11, { message: "CPF inválido" }).optional(),
  crm: z.string().optional(),
  specialty: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos de uso e política de privacidade",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
}).refine(
  (data) => {
    if (data.role === "doctor") {
      return !!data.crm && !!data.specialty;
    }
    return true;
  },
  {
    message: "CRM e especialidade são obrigatórios para médicos",
    path: ["crm"],
  }
);

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const { register: registerUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "patient",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      birthDate: "",
      cpf: "",
      crm: "",
      specialty: "",
      termsAccepted: false,
    },
  });

  const watchRole = watch("role");

  const onSubmit = async (data: RegisterFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Trata os dados com base no tipo de usuário
      const userData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        ...(data.role === "patient" 
          ? { 
              cpf: data.cpf,
              birthDate: data.birthDate
            } 
          : { 
              crm: data.crm,
              specialty: data.specialty
            }
        ),
      };

      await registerUser(userData, data.role);
      toast({
        title: "Cadastro realizado com sucesso",
        description: "Bem-vinda à MENOPAUSA 24H!",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Erro ao realizar cadastro",
        description: "Ocorreu um erro ao processar seu cadastro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="max-w-2xl mx-auto my-12 p-6 bg-white rounded-lg shadow-card">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif font-bold text-menopausa-dark-pink mb-2">
            Crie sua conta na MENOPAUSA 24H
          </h1>
          <p className="text-menopausa-gray">
            Preencha o formulário abaixo para começar a cuidar da sua saúde
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                watchRole === "patient"
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
                watchRole === "doctor"
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

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-menopausa-gray mb-1">
                Nome Completo*
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-menopausa-gray mb-1">
                E-mail*
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

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-menopausa-gray mb-1">
                Telefone*
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                placeholder="(11) 99999-9999"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            {watchRole === "patient" ? (
              <>
                <div>
                  <label htmlFor="birthDate" className="block text-sm font-medium text-menopausa-gray mb-1">
                    Data de Nascimento*
                  </label>
                  <input
                    id="birthDate"
                    type="date"
                    {...register("birthDate")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                  />
                  {errors.birthDate && (
                    <p className="text-xs text-red-500 mt-1">{errors.birthDate.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-menopausa-gray mb-1">
                    CPF*
                  </label>
                  <input
                    id="cpf"
                    type="text"
                    {...register("cpf")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                    placeholder="123.456.789-00"
                  />
                  {errors.cpf && (
                    <p className="text-xs text-red-500 mt-1">{errors.cpf.message}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="crm" className="block text-sm font-medium text-menopausa-gray mb-1">
                    CRM*
                  </label>
                  <input
                    id="crm"
                    type="text"
                    {...register("crm")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                    placeholder="CRM/UF 123456"
                  />
                  {errors.crm && (
                    <p className="text-xs text-red-500 mt-1">{errors.crm.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-menopausa-gray mb-1">
                    Especialidade*
                  </label>
                  <select
                    id="specialty"
                    {...register("specialty")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                  >
                    <option value="">Selecione uma especialidade</option>
                    <option value="Ginecologia">Ginecologia</option>
                    <option value="Endocrinologia">Endocrinologia</option>
                    <option value="Psicologia">Psicologia</option>
                    <option value="Psiquiatria">Psiquiatria</option>
                    <option value="Nutrição">Nutrição</option>
                    <option value="Geriatria">Geriatria</option>
                    <option value="Outra">Outra</option>
                  </select>
                  {errors.specialty && (
                    <p className="text-xs text-red-500 mt-1">{errors.specialty.message}</p>
                  )}
                </div>
              </>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-menopausa-gray mb-1">
                Senha*
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-menopausa-gray mb-1">
                Confirmar Senha*
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-menopausa-pink"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-menopausa-gray"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Terms Acceptance */}
          <div>
            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 text-menopausa-pink border-gray-300 rounded focus:ring-menopausa-pink"
                {...register("termsAccepted")}
              />
              <span className="ml-2 text-sm text-menopausa-gray">
                Eu li e aceito os{" "}
                <Link to="/termos" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  Termos de Uso
                </Link>{" "}
                e a{" "}
                <Link to="/privacidade" className="text-menopausa-pink hover:text-menopausa-dark-pink">
                  Política de Privacidade
                </Link>{" "}
                da MENOPAUSA 24H.
              </span>
            </label>
            {errors.termsAccepted && (
              <p className="text-xs text-red-500 mt-1">{errors.termsAccepted.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-menopausa-pink hover:bg-menopausa-dark-pink text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Cadastrando..." : "Criar Conta"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-menopausa-gray text-sm">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-menopausa-pink hover:text-menopausa-dark-pink">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Register;
