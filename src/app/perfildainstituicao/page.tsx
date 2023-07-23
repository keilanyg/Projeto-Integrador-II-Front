'use client';

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import React from "react";
import Botao from "@/components/Botao/index";
import InputSelecaoProps from "@/components/CamposdeInformacao/InputSelect/index";
import InformacaoPerfil from "@/components/InfoPerfil";
import { useState, useEffect } from "react";
import { api } from "../services/api";
/*Menssagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Categoria {
    id: number;
    nome_categoria: string;
}
interface Autor {
    id: number;
    nome_autor: string;
}
interface Editora {
    id: number;
    nome_editora: string;
}
interface Livros {
    id: number;
    nome_livro: string;
    data_cadastro: Date;
    data_lancamento: Date;
    quantidade: number;
    descricao_livro: string;
    categoria: string;
    editora: string;
    autor: string;
}

export default function PerfilInstituicao() {

    const notifyPost = () => {
        toast.success('Cadastrado com Sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const notifyPut = () => {
        toast.success('Editado com Sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const notifyDelete = () => {
        toast.success('Deletado com Sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const [openTab, setOpenTab] = React.useState(1);

    const [livros, setLivros] = useState<Livros[]>([]);
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [editora, setEditora] = useState<Editora[]>([]);
    const [autor, setAutor] = useState<Autor[]>([]);

    const getLivros = async () => {
        const { data } = await api.get('livro/')
        setLivros(data)
    }
    const getCategoria = async () => {
        const { data } = await api.get('categoria/')
        console.log(data)
        setCategoria(data)
    }
    const getEditora = async () => {
        const { data } = await api.get('editora/')
        console.log(data)
        setEditora(data)
    }
    const getAutor = async () => {
        const { data } = await api.get('autor/')
        console.log(data)
        setAutor(data)
    }
    useEffect(() => {
        getLivros();
        getCategoria();
        getEditora();
        getAutor();
    }, []);


    const [nomecat, setNomecategoria] = useState("")
    const postNameCategoria = async (e) => {
        e.preventDefault();
        const newCat = {
            nome_categoria: nomecat
        }
        const data = await api.post('categoria/', newCat)
        getCategoria()
        setNomecategoria("");
        notifyPost();
        <ToastContainer />
    };
    const [nomeautor, setNomeautor] = useState("")
    const postNameAutor = async (e) => {
        e.preventDefault();
        const newAutor = {
            nome_autor: nomeautor
        }
        const data = await api.post('autor/', newAutor)
        getAutor()
        setNomeautor("");
        notifyPost();
        <ToastContainer />
    };
    const [nomeeditora, setNomeeditora] = useState("")
    const postNameEditora = async (e) => {
        e.preventDefault();
        const newEditora = {
            nome_editora: nomeeditora
        }
        const data = await api.post('editora/', newEditora)
        getEditora()
        setNomeeditora("");
        notifyPost();
        <ToastContainer />
    };
    const [nomelivro, setNomeLivro] = useState("")
    const [datalancamento, setDataLancamento] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [descricaolivro, setDescricaoLivro] = useState("")
    const [categorialivro, setCategoriaLivro] = useState("")
    const [editoralivro, setEditoraLivro] = useState("")
    const [autorlivro, setAutorLivro] = useState("")
    const postLivro = async (e) => {
        e.preventDefault();
        const newLivro = {
            nome_livro: nomelivro,
            data_lancamento: datalancamento,
            quantidade: quantidade,
            descricao_livro: descricaolivro,
            categoria: categorialivro,
            editora: editoralivro,
            autor: autorlivro
        }
        const data = await api.post('livro/', newLivro)
        getLivros()
        setNomeLivro("");
        setDataLancamento("");
        setQuantidade("");
        setDescricaoLivro("");
        setCategoriaLivro("");
        setEditoraLivro("");
        setAutorLivro("");
        notifyPost();
        <ToastContainer />
    };


    const deleteCategoria = async (id: number) => {
        const { data } = await api.delete(`categoria/${id}/`)
        notifyDelete();
        <ToastContainer />
        getCategoria()
    };
    const deleteEditora = async (id: number) => {
        const { data } = await api.delete(`editora/${id}/`)
        notifyDelete();
        <ToastContainer />
        getEditora()
    };
    const deleteAutor = async (id: number) => {
        const { data } = await api.delete(`autor/${id}/`)
        notifyDelete();
        <ToastContainer />
        getAutor()
    };
    const deleteLivro = async (id: number) => {
        const { data } = await api.delete(`livro/${id}/`)
        notifyDelete();
        <ToastContainer />
        getLivros()
    };

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
                    <div>
                        <div className="relative flex flex-col min-w-0 break-words bg--orange-900 w-full mb-6 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <form onSubmit={postNameCategoria}>
                                            <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Nome Categoria</label><br />
                                            <input type="text" value={nomecat} onChange={(e) => setNomecategoria(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            <br /><br /><Botao type="submit">Salvar</Botao >
                                        </form>
                                        <div>
                                            <ul>
                                                {categoria.map(({ id, nome_categoria }) => (
                                                    <li key={id} className={style.li}>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            {nome_categoria}
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <Botao>Editar</Botao>
                                                            <Botao funcao={() => deleteCategoria(id)}>Excluir</Botao>
                                                        </div>
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    </div>

                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <form onSubmit={postNameAutor}>
                                            <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Nome do(a) Autor(a)</label><br />
                                            <input type="text" value={nomeautor} onChange={(e) => setNomeautor(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            <br /><br /><Botao type="submit">Salvar</Botao>
                                        </form>
                                        <div>
                                            <ul>
                                                {autor.map(({ id, nome_autor }) => (
                                                    <li key={id} className={style.li}>
                                                        <div>
                                                            {nome_autor}
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <Botao>Editar</Botao>
                                                            <Botao funcao={() => deleteAutor(id)}>Excluir</Botao>
                                                        </div>

                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <form onSubmit={postNameEditora}>
                                            <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Nome da Editora</label><br />
                                            <input type="text" value={nomeeditora} onChange={(e) => setNomeeditora(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            <br /><br /><Botao type="submit" >Salvar</Botao>
                                        </form>

                                        <div>
                                            <ul>
                                                {editora.map(({ id, nome_editora }) => (
                                                    <li key={id} className={style.li}>
                                                        <div>
                                                            {nome_editora}
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <Botao>Editar</Botao>
                                                            <Botao funcao={() => deleteEditora(id)}>Excluir</Botao>
                                                        </div>
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    </div>

                                    <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                        <form onSubmit={postLivro} style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignItems: "end" }}>
                                            <div>
                                                <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Nome do Livro</label><br />
                                                <input type="text" value={nomelivro} onChange={(e) => setNomeLivro(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            </div>
                                            <div>
                                                <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Data de Lançamento</label><br />
                                                <input type="date" value={datalancamento} onChange={(e) => setDataLancamento(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            </div>

                                            <div>
                                                <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Descrição</label><br />
                                                <input type="text" value={descricaolivro} onChange={(e) => setDescricaoLivro(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            </div>
                                            <div>
                                                <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Quantidade</label><br />
                                                <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            </div>
                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Categoria</label><br />
                                                <select onChange={(e) => setCategoriaLivro(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {categoria.map(({ id, nome_categoria }) => (
                                                        <option value={id} key={id}>{nome_categoria}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Editora</label><br />
                                                <select onChange={(e) => setEditoraLivro(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {editora.map(({ id, nome_editora }) => (
                                                        <option value={id} key={id}>{nome_editora}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Autor</label><br />
                                                <select onChange={(e) => setAutorLivro(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {autor.map(({ id, nome_autor }) => (
                                                        <option value={id} key={id}>{nome_autor}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <br /><br /><Botao type="submit">Salvar</Botao>
                                        </form>
                                        <div>
                                            <ul>
                                                {livros.map(({ id, nome_livro, data_cadastro, data_lancamento, quantidade, descricao_livro, categoria, editora, autor }) => (
                                                    <li key={id} className={style.li}>
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
                                                            <Botao funcao={() => deleteLivro(id)}>Excluir</Botao>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                                        <form>
                                            <InputSelecaoProps label="Usuário" />
                                            <InputSelecaoProps label="Data de empréstimo" />
                                            <InputSelecaoProps label="Data de devolução" />
                                            <InputSelecaoProps label="Livro" />
                                            <br /><br /><Botao>Salvar</Botao>
                                        </form>
                                    </div>

                                    <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                                        <form>
                                            <InputSelecaoProps label="Nome do Usuário" />
                                            <InputSelecaoProps label="Livro" />
                                            <InputSelecaoProps label="Avaliação" />
                                            <br /><br /><Botao>Salvar</Botao>
                                        </form>
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
