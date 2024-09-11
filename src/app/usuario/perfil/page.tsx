"use client";
import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from "./style.module.css";
import Rodape from "@/components/Rodape/index";
import Estudante from "public/Estudante.png";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

import React from 'react';
import ifrn from 'public/ifrn.png';

/*Menssagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConteudoCategoria from '@/components/ConteudoDasGuias/Categoria';
import ConteudoAutor from '@/components/ConteudoDasGuias/Autor';
import ConteudoEditora from '@/components/ConteudoDasGuias/Editora';
import ConteudoLivro from '@/components/ConteudoDasGuias/Livro';

export default function PerfilUsuario() {
    const { user, isAuthenticated } = useContext(AuthContext);
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className={style.body}>
                <BarraNavegacao />
                <br />

                {isAuthenticated && (
                    <div className={style.fotoperfil} >
                        {user.groups.some(group => group.name === 'usuarios') && (
                            <div className={style.fotoperfil} style={{ backgroundColor: "#eae8dc", height: "230px", borderRadius: "20px" }}>
                            <div>
                            {user.profile_picture && (
                                    <Image src={user.profile_picture} width={180} height={180} alt="" />
                                )}
                            </div>
                            <div className={style.info}>
                                <p>Usuário</p>
                                <p>Nome:<br /> {user.first_name}</p><br/>
                                <p>Sobrenome:<br /> {user.last_name}</p>
                                <br />
                                <p>E-mail: {user.email}</p>
                                <br />
                            </div>
                        </div>
                        )}

                        {user.groups.some(group => group.name === 'bibliotecarios') && (
                            <div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div className={style.fotoperfil} style={{ backgroundColor: "#eae8dc", height: "230px", borderRadius: "20px" }}>
                                        <div>
                                            <div>
                                                <Image src={Estudante} width={200} height={200} alt="" />
                                            </div>
                                        </div>
                                        <div className={style.info}>
                                            <p>Bibliotecário</p>
                                            <p>Nome:<br /> {user.first_name}</p><br />
                                            <p>Sobrenome:<br /> {user.last_name}</p>
                                            <br />
                                            <p>E-mail: {user.email}</p>
                                            <br />
                                        </div>
                                    </div>

                                    <div className={style.fotoperfil} style={{ backgroundColor: "#eae8dc", height: "230px", borderRadius: "20px" }}>
                                        <div>
                                            <Image src={ifrn} width={200} height={200} alt="" />
                                        </div>
                                        <div className={style.info}>
                                            <p>Instituição</p>
                                            <p>Nome: IFRN - Instituto Federal do Rio Grande do Norte</p>
                                            <br />
                                            <p>Campus: Pau Dos Ferros</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className={style.body} id="perfil">
                                        <div
                                            className="flex flex-wrap"
                                            style={{ color: '#4C3228', margin: '20px 10px', alignContent: "center" }}
                                        >
                                            <div className="w-full">
                                                <ul
                                                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                                                    role="tablist"
                                                >
                                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                        <a
                                                            className={
                                                                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                                                (openTab === 1 ? 'bg-orange-100' : 'bg-white')
                                                            }
                                                            onClick={(e) => {
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
                                                                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                                                (openTab === 2 ? 'bg-orange-100' : 'bg-white')
                                                            }
                                                            onClick={(e) => {
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
                                                                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                                                (openTab === 3 ? 'bg-orange-100' : 'bg-white')
                                                            }
                                                            onClick={(e) => {
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
                                                                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                                                (openTab === 4 ? 'bg-orange-100' : 'bg-white')
                                                            }
                                                            onClick={(e) => {
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
                                                </ul>
                                                <div>
                                                    <ToastContainer />
                                                    <div className="relative flex flex-col min-w-0 break-words bg--orange-900 w-full mb-6 shadow-lg rounded">
                                                        <div className="px-4 py-5 flex-auto">
                                                            <div className="tab-content tab-space">
                                                                <div
                                                                    className={openTab === 1 ? 'block' : 'hidden'}
                                                                    id="link1"
                                                                >
                                                                    <ConteudoCategoria />
                                                                </div>

                                                                <div
                                                                    className={openTab === 2 ? 'block' : 'hidden'}
                                                                    id="link2"
                                                                >
                                                                    <ConteudoAutor />
                                                                </div>

                                                                <div
                                                                    className={openTab === 3 ? 'block' : 'hidden'}
                                                                    id="link3"
                                                                >
                                                                    <ConteudoEditora />
                                                                </div>

                                                                <div
                                                                    className={openTab === 4 ? 'block' : 'hidden'}
                                                                    id="link4"
                                                                >
                                                                    <ConteudoLivro />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )};
                    </div>
                )};
            </div>
            <Rodape />
        </>
    )
}
