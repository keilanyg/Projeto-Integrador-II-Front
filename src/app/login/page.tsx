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
    <section className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center">
        <h2 className="m-[1rem] font-extrabold text-[30px]">
          {" "}
          Faça seu login{" "}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="felx flex-col gap-2 w-[100%] max-w-[100%]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email"> Username </label>

            <input
              className="p-[10px] bg-slate-900 outline-0 rounded"
              {...register("email", { required: true })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password"> Senha </label>
            <input
              className="p-[10px] bg-slate-900 outline-0 rounded"
              type="password"
              {...register("password", { min: 8, max: 12, required: true })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>
              Não tem conta? <span> Cadastre-se </span>{" "}
            </p>
          </div>

          <button
            type="submit"
            className="p-[10px] w-[100%] max-w-[100%] bg-green-800  text-gray-50 font-medium rounded-0"
          >
            {" "}
            Fazer Login
          </button>

          <fieldset className="border-t border-slate-50 mt-[10px]">
            <legend className="mx-auto px-4 text-white text-1xl italic">
              {" "}
              ou{" "}
            </legend>
            <div className="text-white pt-4 p-[10px] w-[100%] max-w-[100%] justify-center">
              Acesse com o seu:
            </div>
          </fieldset>

          <button
            type="button"
            onClick={handleSignInGitHub}
            className="p-[10px] w-[100%] max-w-[100%] justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            <GithubSvg />
            Sign in with Github
          </button>
        </form>
      </div>
    </section>
  );
}
