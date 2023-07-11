'use client';

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import React from "react";
import Botao from "@/components/Botao/index";
import InputSelecaoProps from "@/components/CamposdeInformacao/InputSelect/index";
import InputProps from "@/components/CamposdeInformacao/Input/index";
import InformacaoPerfil from "@/components/InfoPerfil";
import { useState, useEffect } from "react";

export default function PerfilInstituicao() {
    const [openTab, setOpenTab] = React.useState(1);

    const [livros, setLivros] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [editora, setEditora] = useState([]);
    const [autor, setAutor] = useState([]);

    async function fetchDataLivro() {
        const urlLivro = "http://localhost:3001/livros";
        const response = await fetch(urlLivro);
        const data = await response.json();
        setLivros(data);
        console.log(response)
    }
    async function fetchDataCategoria() {
        const urlCategoria = "http://localhost:3001/categoria";
        const response = await fetch(urlCategoria);
        const data = await response.json();
        setCategoria(data);
        console.log(response)
    }
    async function fetchDataEditora() {
        const urlEditora = "http://localhost:3001/editora";
        const response = await fetch(urlEditora);
        const data = await response.json();
        setEditora(data);
        console.log(response)
    }
    async function fetchDataAutor() {
        const urlAutor = "http://localhost:3001/autor";
        const response = await fetch(urlAutor);
        const data = await response.json();
        setAutor(data);
        console.log(response)
    }

    useEffect(() => {
        fetchDataLivro();
        fetchDataCategoria();
        fetchDataEditora();
        fetchDataAutor();
    }, []);

    return (
        <div className={style.body}>
            <BarraNavegacao />

            <InformacaoPerfil>
                <p>Nome:<br />IFRN - Instituto Federal do Rio Grande do Norte</p><br />

                <p>Campus:<br />Pau Dos Ferros</p><br />

                <p>Email:</p><br />

            </InformacaoPerfil>

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

                    <form>
                        <div className="relative flex flex-col min-w-0 break-words bg--orange-900 w-full mb-6 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div>
                                            <InputProps label="Nome da categoria" type="text" />
                                            <br /><Botao>Salvar</Botao>
                                        </div>
                                        <div>
                                            <ul>
                                                {categoria.map(({ id, nome_categoria }) => (
                                                    <li key={id} style={{ display: "flex", margin: "20px 400px 20px 10px", justifyContent: "space-between" }}>
                                                        <div>
                                                            {nome_categoria}
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <Botao>Editar</Botao>
                                                            <Botao>Excluir</Botao>
                                                        </div>

                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    </div>

                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div>
                                            <InputProps label="Nome do(a) Autor(a)" type="text" />
                                            <br /><Botao>Salvar</Botao>
                                        </div>
                                        <div>
                                            <ul>
                                                {autor.map(({ id, nome_autor }) => (
                                                    <li key={id} style={{ display: "flex", margin: "20px 400px 20px 10px", justifyContent: "space-between" }}>
                                                        <div>
                                                            {nome_autor}
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <Botao>Editar</Botao>
                                                            <Botao>Excluir</Botao>
                                                        </div>

                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    </div>

                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <div>
                                            <InputProps label="Nome da editora" type="text" />
                                            <br /><Botao>Salvar</Botao>
                                        </div>
                                        <div>
                                            <ul>
                                                {editora.map(({ id, nome_editora }) => (
                                                    <li key={id} style={{ display: "flex", margin: "20px 400px 20px 10px", justifyContent: "space-between" }}>
                                                        <div>
                                                            {nome_editora}
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <Botao>Editar</Botao>
                                                            <Botao>Excluir</Botao>
                                                        </div>

                                                    </li>
                                                ))}

                                            </ul>
                                        </div>

                                    </div>

                                    <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignItems: "end" }}>
                                            <InputProps label="Nome do Livro" type="text" />
                                            <InputProps label="Imagem" type="file" />
                                            <InputProps label="Data de Cadastro" type="date" />
                                            <InputProps label="Data de Lançamento" type="date" />
                                            <InputSelecaoProps label="Autor" />
                                            <InputSelecaoProps label="Categoria" />
                                            <InputSelecaoProps label="Editora" />
                                            <InputProps label="Descrição" type="text" />
                                            <InputProps label="Quantidade" type="number" />
                                            <Botao> Salvar</Botao>
                                        </div>
                                        <br />
                                        <div>
                                            <ul>
                                                {livros.map(({ id, nome_livro, data_cadastro, data_lancamento, quantidade, descricao_livro, categoria, editora, autor }) => (
                                                    <li key={id} style={{ display: "flex", margin: "20px 400px 20px 10px", justifyContent: "space-between", alignItems: "center" }}>
                                                        <div>
                                                            <p>Nome do Livro: {nome_livro}</p>
                                                            <p>Data de Cadastro: {data_cadastro}</p>
                                                            <p>Data de Lançamento: {data_lancamento}</p>
                                                            <p>Quantidade: {quantidade}</p>
                                                            <p>Descrição: {descricao_livro}</p>
                                                            <p>Categoria: {categoria}</p>
                                                            <p>Editora: {editora}</p>
                                                            <p>Autor: {autor}</p>
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <Botao>Editar</Botao>
                                                            <Botao>Excluir</Botao>
                                                        </div>

                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    </div>

                                    <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                                        <div>
                                            <InputSelecaoProps label="Usuário" />
                                            <InputSelecaoProps label="Data de empréstimo" />
                                            <InputSelecaoProps label="Data de devolução" />
                                            <InputSelecaoProps label="Livro" />
                                            <br /><Botao>Salvar</Botao>
                                        </div>
                                    </div>

                                    <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                                        <div>
                                            <InputSelecaoProps label="Nome do Usuário" />
                                            <InputSelecaoProps label="Livro" />
                                            <InputSelecaoProps label="Avaliação" />
                                            <br /><Botao>Salvar</Botao>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Rodape />
        </div >
    )
}
