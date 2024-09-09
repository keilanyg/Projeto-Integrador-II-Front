"use client";
import { AuthContext } from "@/context/AuthContext";
import { UserService } from "@/services/user";
import { AxiosError } from "axios";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import Logo from "public/Logo.png";
import Image from "next/image";



interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  group_name: string;
}

export default function UsuarioCriar() {
  const { register, handleSubmit, formState, reset } = useForm<IFormInput>();
  const { signIn } = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const userService = new UserService();
    try {
      const response = await userService.create(data);
      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso!");
        signIn({ email: data.email, password: data.password });
        reset();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData = error.response?.data;
        toast.error(JSON.stringify(errorData, null, 2));
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#8C5C3D]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
      >
        <div className="flex justify-center items-center mb-2">
          <Image src={Logo} width={170} height={180} alt="Logo" />
        </div>

        <h2 className="text-2xl font-bold mb-3 text-center text-[#8C5C3D]">Criar Conta</h2>

        <div className="flex flex-col gap-3">
          {/* Nome */}
          <label htmlFor="first_name" className="flex flex-col">
            <span className="font-semibold">Primeiro Nome</span>
            <input
              className="border bg-white p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
              {...register("first_name", {
                required: {
                  value: true,
                  message: "Primeiro nome é obrigatório",
                },
              })}
              placeholder="Seu primeiro nome"
            />
            {formState.errors.first_name && (
              <p className="text-red-600 text-sm mt-1">
                {formState.errors.first_name.message}
              </p>
            )}
          </label>

          {/* Sobrenome */}
          <label htmlFor="last_name" className="flex flex-col">
            <span className="font-semibold">Sobrenome</span>
            <input
              className="border bg-white p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
              {...register("last_name", {
                required: {
                  value: true,
                  message: "Sobrenome é obrigatório",
                },
              })}
              placeholder="Seu sobrenome"
            />
            {formState.errors.last_name && (
              <p className="text-red-600 text-sm mt-1">
                {formState.errors.last_name.message}
              </p>
            )}
          </label>

          {/* Email */}
          <label htmlFor="email" className="flex flex-col">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              className="border bg-white p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: { value: true, message: "Email é obrigatório" },
              })}
              placeholder="seuemail@exemplo.com"
            />
            {formState.errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {formState.errors.email.message}
              </p>
            )}
          </label>

          {/* Senha */}
          <label htmlFor="password" className="flex flex-col">
            <span className="font-semibold">Senha</span>
            <input
              type="password"
              className="border bg-white p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: {
                  value: true,
                  message: "Senha é obrigatória",
                },
                minLength: {
                  value: 8,
                  message: "A senha deve ter no mínimo 8 caracteres",
                },
                maxLength: {
                  value: 12,
                  message: "A senha deve ter no máximo 12 caracteres",
                },
              })}
              placeholder="Sua senha"
            />
            {formState.errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {formState.errors.password.message}
              </p>
            )}
          </label>

          {/* Grupo */}
          <label htmlFor="group_name" className="flex flex-col">
            <span className="font-semibold">Grupo do Usuário</span>
            <select
              className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
              {...register("group_name")}
            >
              <option value="usuarios">Usuário</option>
              <option value="bibliotecarios">Bibliotecário</option>
            </select>
          </label>

          {/* Botão de submit */}
          <button
            type="submit"
            className="bg-[#8C5C3D] text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Criar Conta
          </button>
        </div>
      </form>
    </div>
  );
}
