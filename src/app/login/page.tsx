"use client";
import GithubSvg from "./GithubSvg";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserService } from "@/services/user";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

interface IFormInput {
  email: string;
  password: string;
}

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit, formState } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData = error.response?.data;
        toast.error(JSON.stringify(errorData, null, 2));
      }
    }
  };

  function handleSignInGitHub() {
    const clientID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectURI =
      "http://localhost:8000/api/user/provider?groups=Bibliotecario";

    const authorizationEndpoint = "https://github.com/login/oauth/authorize";
    const scope = "user,repo";
    const githubAuthURL = `${authorizationEndpoint}?client_id=${clientID}&scope=${encodeURIComponent(
      scope
    )}&groups=${encodeURIComponent(redirectURI)}`;

    window.location.href = githubAuthURL;
  }

  return (
    <section className="flex items-center justify-center h-screen bg-[#8C5C3D]">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-center text-2xl font-extrabold text-[#8C5C3D] mb-6">
          Faça seu login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#8C5C3D]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#8C5C3D]"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 p-2 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("password", { required: true, minLength: 8 })}
            />
          </div>

          <div className="text-sm">
            <p className="text-gray-600">
              Não tem conta? <a href={"usuario/criar"} className="text-indigo-600">Cadastre-se</a>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#8C5C3D] text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Fazer Login
          </button>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">ou</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignInGitHub}
            className="w-full py-2 flex items-center justify-center bg-gray-800 text-white rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <GithubSvg className="mr-2" size={20} color="#fff" />
            Sign in with Github
          </button>
        </form>
      </div>
    </section>
  );
}
