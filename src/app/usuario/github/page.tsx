"use client";
import { AuthContext } from "@/context/AuthContext";
import { apiAcervo } from "@/services/api";
import { updateTokensInCookies } from "@/utils/updateTokensInCookies";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

type Props = {
  searchParams: {
    access: string;
    refresh: string;
  };
};

export default function UsuarioGithub({
  searchParams: { access, refresh },
}: Props) {
  const { getUsersMe, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  if (typeof access !== "string" && typeof refresh !== "string") {
    return (
      <div>
        <h1>Error de autenticação com o github</h1>
      </div>
    );
  }

  useEffect(() => {
    if (typeof access === "string" && typeof refresh === "string") {
      updateTokensInCookies({ access, refresh });
      apiAcervo.defaults.headers.Authorization = `Bearer ${access}`;
      getUsersMe();
    }
  }, []);

  return !isAuthenticated ? <h1>Carregando dados do usuário...</h1> : null;
}
