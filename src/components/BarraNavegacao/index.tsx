"use client";
import Image from "next/image";
import Logo from "public/Logo.png";
import Estudante from "public/Estudante.png";
import style from "./style.module.css";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { User } from "@/@types/models";

const Elementoaexibir = (show: boolean, user: User) => {
  /*Estiver autenticado*/
  if (show) {
    return (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user.profile_picture ? (
              <Image
                src={user.profile_picture}
                alt="Estudante"
                width={180}
                height={180}
              />
            ) : (
              <Image src={Estudante} alt="Estudante" />
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Sair</a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <a href="/login" style={{ marginRight: "10px" }}>
          <h4>Entre ou</h4>
        </a>

        <a href="/usuario/criar" style={{ marginRight: "10px" }}>
          <h4>Cadastre-se</h4>
        </a>
      </div>
    );
  }
};

export default function BarraNavegacao() {
  const { isAuthenticated, user } = useContext(AuthContext);
  console.log(isAuthenticated, user);
  return (
    <header className={style.header}>
      <div className={style.secaologo}>
        <Image src={Logo} width={170} height={180} alt="Logo" />
        <div className={style.links}>
          <div className={style.cadalink}>
            <a href="/">Inicio</a>
          </div>
          <div className={style.cadalink}>
            <a href="/#servicos">Serviços</a>
          </div>
          <div className={style.cadalink}>
            <Link href="/acervo">Acervo</Link>
          </div>
          {isAuthenticated && (
            <div className={style.cadalink}>
              <Link href="/usuario/perfil">Perfil Usuário</Link>
            </div>
          )}

        </div>
        <div>{Elementoaexibir(isAuthenticated, user)}</div>
      </div>
    </header>
  );
}
