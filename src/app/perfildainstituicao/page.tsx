'use client';
import Image from "next/image";
import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import React from "react";
import Botao from "@/components/Botao/index";
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
    cover: File;
    nome_livro: string;
    data_cadastro: Date;
    data_lancamento: Date;
    quantidade: number;
    descricao_livro: string;
    categoria: string;
    editora: string;
    autor: string;
}
interface Emprestimo {
    id: number;
    nome_emprestado_usuario: string;
    data_emprestimo: Date;
    livro: string;
    status: string;
}
interface Devolucao {
    id: number;
    nome_emprestado_usuario: string;
    emprestimo: string;
    observacoes: string;
    data_devolucao: Date;
    avaliacao: string;
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
    const getLivros = async () => {
        const { data } = await api.get('livro/')
        setLivros(data)
    }

    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const getCategoria = async () => {
        const { data } = await api.get('categoria/')
        setCategoria(data)
    }

    const [editora, setEditora] = useState<Editora[]>([]);
    const getEditora = async () => {
        const { data } = await api.get('editora/')
        setEditora(data)
    }

    const [autor, setAutor] = useState<Autor[]>([]);
    const getAutor = async () => {
        const { data } = await api.get('autor/')
        setAutor(data)
    }

    const [emprestimo, setEmprestimo] = useState<Emprestimo[]>([]);
    const getEmprestimo = async () => {
        const { data } = await api.get('emprestimo/')
        setEmprestimo(data)
    }

    const [devolucao, setDevolucao] = useState<Devolucao[]>([]);
    const getDevolucao = async () => {
        const { data } = await api.get('devolucao/')
        setDevolucao(data)
    }

    useEffect(() => {
        getLivros();
        getCategoria();
        getEditora();
        getAutor();
        getEmprestimo();
        getDevolucao();

    }, []);



    const [nomecat, setNomecategoria] = useState("")
    const postNameCategoria = async (e) => {
        e.preventDefault();
        const newCat = {
            nome_categoria: nomecat
        }
        const data = await api.post('categoria/', newCat)
        setNomecategoria("");
        getCategoria()
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

        notifyPost();
        <ToastContainer />
        getEditora()
        setNomeeditora("");
    };

    const [nomelivro, setNomeLivro] = useState("")
    const [imglivro, setImgLivro] = useState<File | null>(null)
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
            cover: imglivro,
            data_lancamento: datalancamento,
            quantidade: quantidade,
            descricao_livro: descricaolivro,
            categoria: categorialivro,
            editora: editoralivro,
            autor: autorlivro
        }
        const data = await api.post('livro/', newLivro, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        notifyPost();
        <ToastContainer />
        setNomeLivro("");
        setImgLivro(null);
        setDataLancamento("");
        setQuantidade("");
        setDescricaoLivro("");
        setCategoriaLivro("");
        setEditoraLivro("");
        setAutorLivro("");
        getLivros()

    };

    const [nomeLivroDevolucao, setNomeLivroDev] = useState("")
    const [datadevolucao, setDataDevolucao] = useState("")
    const [avaliacaodouser, setAvaliacao] = useState("")
    const [nomeemprestadousuariodev, setNomeEmprestimoDev] = useState("")

    const postDevolucao = async (e) => {
        e.preventDefault();
        const newDevolucao = {
            emprestimo: nomeLivroDevolucao,
            data_devolucao: datadevolucao,
            avaliacao: avaliacaodouser,
            nome_emprestado_usuario_dev: nomeemprestadousuariodev

        }
        const data = await api.post('devolucao/', newDevolucao)
        notifyPost();
        <ToastContainer />
        getDevolucao()
        setNomeLivroDev("");
        setDataDevolucao("");
        setNomeEmprestimoDev("");
        setAvaliacao("")
    };

    const [nomeemprestadousuario, setNomeEmprestimo] = useState("")
    const [dataemprestimo, setDataEmprestimo] = useState("")
    const [nomelivroemp, setNomeLivroEmp] = useState("")
    const postEmprestimo = async (e) => {
        e.preventDefault();
        const newEmprestimo = {
            nome_emprestado_usuario: nomeemprestadousuario,
            data_emprestimo: dataemprestimo,
            livro: nomelivroemp
        }
        const data = await api.post('emprestimo/', newEmprestimo)
        notifyPost();
        <ToastContainer />
        setNomeEmprestimo("");
        setDataEmprestimo("");
        setNomeLivroEmp("");
        getEmprestimo()
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

            <div className={style.fotoperfil}>
                <div>
                    <Image src={''} width={200} height={200} alt='' />
                </div>
                <div className={style.info}>
                    <p>Nome:<br />IFRN - Instituto Federal do Rio Grande do Norte</p><br /><br />

                    <p>Campus:<br />Pau Dos Ferros</p><br /><br />

                    <p>Email:<br /></p><br /><br />
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
                                                <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>IMG</label><br />
                                                <input type="file" onChange={(e) => e.target.files && setImgLivro(e.target.files[0])} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
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
                                            <br /><Botao type="submit">Salvar</Botao>
                                        </form>
                                        <div>
                                            <ul>
                                                {livros.map(({ id, nome_livro, cover, data_cadastro, data_lancamento, quantidade, descricao_livro, categoria, editora, autor }) => (
                                                    <li key={id} className={style.li}>
                                                        <div>
                                                            <p>Nome do Livro: {nome_livro}</p>
                                                            <p>Data de Cadastro: {data_cadastro}</p>
                                                            <p>Data de Lançamento: {data_lancamento}</p>
                                                            <p>Quantidade: {quantidade}</p>
                                                            <p>Descrição: {descricao_livro}</p>
                                                            <p>Categoria: {categoria.nome_categoria}</p>
                                                            <p>Editora: {editora.nome_editora}</p>
                                                            <p>Autor: {autor.nome_autor}</p>
                                                        </div>
                                                        <Image src={cover} width={100} height={100} alt='' />
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
                                        <form onSubmit={postEmprestimo} style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignItems: "end" }}>

                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Nome do Usuário</label><br />
                                                <select onChange={(e) => setNomeEmprestimo(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {emprestimo.map(({ id, nome_emprestado_usuario }) => (
                                                        <option value={id} key={id}>{nome_emprestado_usuario}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Data do Empréstimo</label><br />
                                                <input type="date" value={dataemprestimo} onChange={(e) => setDataEmprestimo(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            </div>
                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Nome do Livro</label><br />
                                                <select onChange={(e) => setNomeLivroEmp(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {livros.map(({ id, nome_livro }) => (
                                                        <option value={id} key={id}>{nome_livro}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <br /><Botao type="submit" >Salvar</Botao>
                                        </form>

                                        <div className="container px-4 mx-auto">
                                            <br /><h2>Histórico de Empréstimo</h2>
                                            <div className="flex flex-col mt-6">
                                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">

                                                            <table className="min-w-full divide-y divide-gray-200 ">
                                                                <thead className="bg-gray-50 ">
                                                                    <tr>
                                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                                            <button className="flex items-center gap-x-3 focus:outline-none">
                                                                                <span>Nome</span>
                                                                                <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                                    <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                                    <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                                                </svg>
                                                                            </button>
                                                                        </th>

                                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                                            Livro
                                                                        </th>

                                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                                            Data de empréstimo
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white divide-y divide-gray-200">
                                                                    {emprestimo.map(({ id, nome_emprestado_usuario, data_emprestimo, livro }) => (

                                                                        <tr>
                                                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                                <div className="inline-flex items-center gap-x-3">
                                                                                    <div className="flex items-center gap-x-2">
                                                                                        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                                                        <div>
                                                                                            <h2 className="font-medium text-gray-800 ">{nome_emprestado_usuario}</h2>
                                                                                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">@authurmelo</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                                <div>
                                                                                    <h4 className="text-gray-700">{livro}</h4>
                                                                                </div>
                                                                            </td>

                                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                                <div>
                                                                                    <h4 className="text-gray-700">{data_emprestimo}</h4>
                                                                                </div>
                                                                            </td>

                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                                        <form onSubmit={postDevolucao} style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignItems: "end" }}>
                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Nome do Livro</label><br />
                                                <select onChange={(e) => setNomeLivroDev(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {livros.map(({ id, nome_livro }) => (
                                                        <option value={id} key={id}>{nome_livro}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Nome do Usuário</label><br />
                                                <select onChange={(e) => setNomeEmprestimoDev(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {devolucao.map(({ id, nome_emprestado_usuario }) => (
                                                        <option value={id} key={id}>{nome_emprestado_usuario}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Avaliação</label><br />
                                                <select onChange={(e) => setAvaliacao(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                                                    <option selected disabled>Selecione</option>
                                                    {devolucao.map(({ id, avaliacao }) => (
                                                        <option value={id} key={id}>{avaliacao}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Data de Devolução</label><br />
                                                <input type="date" value={datadevolucao} onChange={(e) => setDataDevolucao(e.target.value)} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
                                            </div>

                                            <br /><Botao type="submit" >Salvar</Botao>
                                        </form>

                                        <div className="container px-4 mx-auto">
                                            <br /><h2>Histórico de Devolução</h2>
                                            <div className="flex flex-col mt-6">
                                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">

                                                            <table className="min-w-full divide-y divide-gray-200 ">
                                                                <thead className="bg-gray-50 ">
                                                                    <tr>
                                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                                            <button className="flex items-center gap-x-3 focus:outline-none">
                                                                                <span>Nome do Usuário</span>
                                                                                <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                                    <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                                    <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                                                </svg>
                                                                            </button>
                                                                        </th>

                                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                                            Nome do Livro
                                                                        </th>

                                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                                            Data de Devolução
                                                                        </th>

                                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                                            Avaliação
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white divide-y divide-gray-200">
                                                                    {devolucao.map(({ id, nome_emprestado_usuario, emprestimo, data_devolucao, avaliacao }) => (

                                                                        <tr>
                                                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                                <div className="inline-flex items-center gap-x-3">
                                                                                    <div className="flex items-center gap-x-2">
                                                                                        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                                                        <div>
                                                                                            <h2 className="font-medium text-gray-800 ">{nome_emprestado_usuario}</h2>
                                                                                            {/*<p className="text-sm font-normal text-gray-600 dark:text-gray-400">@authurmelo</p>*/}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                                <div>
                                                                                    <h4 className="text-gray-700">{emprestimo}</h4>
                                                                                </div>
                                                                            </td>

                                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                                <div>
                                                                                    <h4 className="text-gray-700">{data_devolucao}</h4>
                                                                                </div>
                                                                            </td>

                                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                                <div>
                                                                                    <h4 className="text-gray-700">{avaliacao}</h4>
                                                                                </div>
                                                                            </td>

                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>

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
                </div>
            </div>
            <Rodape />
        </div >
    )
}
