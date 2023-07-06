'use client';

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import React, { useState } from "react";
import Botao from "@/components/Botao/index";
import InformacaoPerfil from "@/components/InfoPerfil";
import InputSelecaoProps from "@/components/CamposdeInformacao/InputSelect";
import InputProps from "@/components/CamposdeInformacao/Input";
import Listadoitem from "@/components/ListagemItem";

export default async function PerfilInstituicao() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className={style.body}>
            <BarraNavegacao />

            <InformacaoPerfil>
                <p>Nome:<br />IFRN - Instituto Federal do Rio Grande do Norte</p><br />

                <p>Campus:<br />Pau Dos Ferros</p><br />

                <p>Email:</p><br />

                <p>Quantidade de livros:</p><br />
            </InformacaoPerfil>

            <div className="flex flex-wrap" style={{ color: "#8c5c3d", margin: "20px 90px" }}>
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

                    <form className="relative flex flex-col min-w-0 break-words bg--orange-900 w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1" >
                                    <form>
                                        <InputProps label="Nome da categoria" type="text" />
                                        <br /><Botao>Salvar</Botao>
                                    </form>
                                    <Listadoitem label="categoria" />
                                </div>

                                <div className={openTab === 2 ? "block" : "hidden"} id="link2" >
                                    <form>
                                        <InputProps label="Nome do(a) Autor(a)" type="text" />
                                        <br /><Botao>Salvar</Botao>
                                    </form>
                                    <Listadoitem label="autor" />
                                </div>

                                <div className={openTab === 3 ? "block" : "hidden"} id="link3" >
                                    <form>
                                        <InputProps label="Nome da editora" type="text" />
                                        <br /><Botao>Salvar</Botao>
                                    </form>
                                    <Listadoitem label="editora" />
                                </div>

                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <form style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignItems: "end" }}>
                                        <InputProps label="Nome do Livro" type="text" />
                                        <InputProps label="Imagem" type="file" />
                                        <InputProps label="Data de Cadastro" type="date" />
                                        <InputProps label="Data de Lançamento" type="date" />
                                        <InputSelecaoProps label="Autor" />
                                        <InputSelecaoProps label="Categoria" />
                                        <Botao> Salvar</Botao>
                                    </form>
                                    <br /><Listadoitem label="livro" />
                                    <Listadoitem label="livro" />
                                </div>

                                <div className={openTab === 5 ? "block" : "hidden"} id="link5" >
                                    <form>
                                        <InputSelecaoProps label="Data de empréstimo" />
                                        <InputSelecaoProps label="Data de devolução" />
                                        <InputSelecaoProps label="Livro" />
                                        <br /><Botao>Salvar</Botao>
                                    </form>
                                    <Listadoitem label="emprestimo" />
                                </div>


                                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                                    <form>
                                        <InputSelecaoProps label="Nome do Usuário" />
                                        <InputSelecaoProps label="Livro" />
                                        <InputSelecaoProps label="Avaliação" />
                                        <br /><Botao>Salvar</Botao>
                                    </form>
                                    <Listadoitem label="devolução" />
                                </div>
                            </div>
                        </div>
                    </form >
                </div >
            </div >

            <Rodape />
        </div >
    )
}