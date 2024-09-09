"use client";
import { AuthContext } from "@/context/AuthContext";
import { UserService } from "@/services/user";
import { AxiosError } from "axios";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

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

  console.log(formState.errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-[480px] m-auto"
    >
      <label htmlFor="first_name" className="flex flex-col gap-2">
        <span>First name</span>
        <input
          {...register("first_name", {
            required: {
              value: true,
              message: "Primeiro nome é um campo obrigatorio",
            },
          })}
          placeholder="First name"
        />
        {formState.errors.first_name?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
      </label>
      <label htmlFor="last_name" className="flex flex-col gap-2">
        <span>Last name</span>
        <input
          {...register("last_name", {
            required: { value: true, message: "ASDASD" },
          })}
        />
        {formState.errors.first_name?.type === "required" && (
          <p role="alert">Last name is required</p>
        )}
      </label>
      <label htmlFor="email" className="flex flex-col gap-2">
        <span>Email</span>
        <input
          type="email"
          {...register("email", {
            required: { value: true, message: "Deve ser informado" },
          })}
        />
        {formState.errors.email?.type === "required" && (
          <p role="alert">Email is required</p>
        )}
      </label>
      <label htmlFor="password" className="flex flex-col gap-2">
        <span>Password</span>
        <input
          type="password"
          {...register("password", {
            min: "Deve ter no minimo 8 caracteres",
            max: "Deve ter no maximo 12 caracteres",
            required: {
              value: true,
              message: "Primeiro nome é um campo obrigatorio",
            },
          })}
        />
        {formState.errors.password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}
      </label>
      <label htmlFor="password" className="flex flex-col gap-2">
        <span>Grupo do usuário</span>

        <select {...register("group_name")}>
          <option value="usuarios">Usuário</option>
          <option value="bibliotecarios">Bibliotecario</option>
        </select>
      </label>
      <input type="submit" />
    </form>
  );
}
