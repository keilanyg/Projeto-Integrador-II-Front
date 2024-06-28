'use client';
import Image from "next/image";
import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import React from "react";
import ifrn from 'public/ifrn.png'


/*Menssagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConteudoCategoria from "@/components/ConteudoDasGuias/Categoria";
import ConteudoAutor from "@/components/ConteudoDasGuias/Autor";
import ConteudoEditora from "@/components/ConteudoDasGuias/Editora";
import ConteudoLivro from "@/components/ConteudoDasGuias/Livro";
import ConteudoEmprestimo from "@/components/ConteudoDasGuias/Emprestimo";
import ConteudoDevolucao from "@/components/ConteudoDasGuias/Devolucao";


export default function PerfilInstituicao() {

  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className={style.body} id="perfil">
      <BarraNavegacao />

      <div className={style.fotoperfil}>
        <div>
          <Image src={ifrn} width={200} height={200} alt='' />
        </div>
        <div className={style.info}>
          <p>Nome: IFRN - Instituto Federal do Rio Grande do Norte</p><br />

          <br /><p>Campus: Pau Dos Ferros</p><br />

          <p>Email:<br /></p><br />
        </div>
      </div>

      <div className="flex flex-wrap" style={{ color: "#4C3228", margin: "20px 90px" }}>
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Criar Categoria
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Criar Autor
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Criar Editora
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Criar Livro
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Empréstimo
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Devolução
              </a>
            </li>

          </ul>
          <div>
            <ToastContainer />
            <div className="relative flex flex-col min-w-0 break-words bg--orange-900 w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <ConteudoCategoria />
                  </div>

                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <ConteudoAutor />
                  </div>

                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <ConteudoEditora />
                  </div>

                  <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <ConteudoLivro />
                  </div>

                  <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                    <ConteudoEmprestimo />
                  </div>

                  <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                    <ConteudoDevolucao />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div >
  )
}
