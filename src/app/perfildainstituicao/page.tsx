'use client';
import Image from "next/image";
import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import React from "react";
import Botao from "@/components/Botao/index";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import ifrn from 'public/ifrn.png'
import usuarioimg from 'public/usuarioimg.png'


/*Menssagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Categoria {
  id: number;
  nome_categoria: string;
}

interface Emprestimo {
  id: number;
  data_emprestimo: Date;
  nome_emprestado_usuario: string;
  nome_emprestado_usuario_obj: User;
  livro: string;
  livro_obj: Livros;
}
interface Devolucao {
  id: number;
  emprestimo: string;
  emprestimo_obj: Emprestimo;
  data_devolucao: Date;
  usuario_devolucao: string;
  usuario_devolucao_obj: User;
  livro: string;
  livro_obj: Livros;
}
interface User {
  id: number;
  password: string;
  email: string;
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
    const { data } = await api.get('livros/')
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

  {/*const [usuario, setUsuario] = useState<User[]>([]);
    const getUsuario = async () => {
        const { data } = await core.get('user/')
        setUsuario(data)
    }*/}

  useEffect(() => {
    getLivros();
    getCategoria();
    getEditora();
    getAutor();
    getEmprestimo();
    //getUsuario();
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
    const data = await api.post('livros/', newLivro, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    notifyPost();
    <ToastContainer />
    getLivros()
    setNomeLivro("");
    setImgLivro(null);
    setDataLancamento("");
    setQuantidade("");
    setDescricaoLivro("");
    setCategoriaLivro("");
    setEditoraLivro("");
    setAutorLivro("");

  };

  const [nomeLivroDevolucao, setNomeLivroDev] = useState("")
  const [datadevolucao, setDataDevolucao] = useState("")
  const [nomeemprestadousuariodev, setNomeEmprestimoDev] = useState("")
  const postDevolucao = async (e) => {
    e.preventDefault();
    const newDevolucao = {
      emprestimo: nomeLivroDevolucao,
      data_devolucao: datadevolucao,
      nome_emprestado_usuario: nomeemprestadousuariodev

    }
    const data = await api.post('devolucao/', newDevolucao)
    notifyPost();
    <ToastContainer />
    setNomeLivroDev("");
    setDataDevolucao("");
    setNomeEmprestimoDev("");
    getDevolucao()
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
    getEmprestimo();
    setNomeEmprestimo("");
    setDataEmprestimo("");
    setNomeLivroEmp("");

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
    const { data } = await api.delete(`livros/${id}/`)
    notifyDelete();
    <ToastContainer />
    getLivros()
  };


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
                    <form onSubmit={postNameCategoria}>
                      <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>Nome Categoria / Gênero</label><br />
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
                        {livros.map(({ id, nome_livro, autor_obj, editora_obj, categoria_obj, cover, data_cadastro, data_lancamento, quantidade, descricao_livro, categoria, editora, autor }) => (
                          <li key={id} className={style.li}>
                            <div style={{ maxWidth: "22%" }}>

                              <p>Nome do Livro: {nome_livro}</p>
                              <p>Data de Cadastro: {data_cadastro}</p>
                              <p>Data de Lançamento: {data_lancamento}</p>
                              <p>Quantidade: {quantidade}</p>
                            </div>
                            <div style={{ maxWidth: "22%" }}>
                              <p>Descrição: {descricao_livro}</p>
                              <p>Categoria: {categoria_obj.nome_categoria}</p>
                              <p>Editora: {editora_obj.nome_editora}</p>
                              <p>Autor: {autor_obj.nome_autor}</p>
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

                  {/*<div className={openTab === 5 ? "block" : "hidden"} id="link5">
                    <form onSubmit={postEmprestimo} style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignItems: "end" }}>
                      <div>
                        <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Nome do Usuário</label><br />
                        <select onChange={(e) => setNomeEmprestimo(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                          <option selected disabled>Selecione</option>
                          {usuario.map(({ id, email }) => (
                            <option value={id} key={id}>{email}</option>
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
                                        <span>Usuário</span>
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
                                  {emprestimo.map(({ id, nome_emprestado_usuario_obj, data_emprestimo, livro_obj }) => (

                                    <tr>
                                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                          <div className="flex items-center gap-x-2">
                                            <Image className="object-cover w-10 h-10 rounded-full" src={usuarioimg} alt="" />
                                            <div>
                                              <h2 className="font-medium text-gray-800 ">{nome_emprestado_usuario_obj.email}</h2>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                          <h4 className="text-gray-700">{livro_obj.nome_livro}</h4>
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
                  </div>*/}

                  {/*<div className={openTab === 6 ? "block" : "hidden"} id="link6">
                    <form onSubmit={postDevolucao} style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignItems: "end", }}>
                      <div>
                        <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Nome do Livro - Nome do Usuário</label><br />
                        <select onChange={(e) => setNomeEmprestimo(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                          <option selected disabled>Selecione</option>
                          {emprestimo.map(({ id, nome_emprestado_usuario_obj, livro_obj }) => (
                            <option value={id} key={id}>{livro_obj.nome_livro}-{nome_emprestado_usuario_obj.email}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>Confirmação do Usuário</label><br />
                        <select onChange={(e) => setNomeEmprestimo(e.target.value)} className="select select-bordered mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                          <option selected disabled>Selecione</option>
                          {emprestimo.map(({ id, nome_emprestado_usuario_obj }) => (
                            <option value={id} key={id}>{nome_emprestado_usuario_obj.email}</option>
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
                                        <span>Nome do Livro e Usuário</span>
                                      </button>
                                    </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                      Data de Devolução
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {devolucao.map(({ data_devolucao, usuario_devolucao_obj, emprestimo_obj, livro_obj }) => (

                                                                        <tr>
                                                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                                <div className="inline-flex items-center gap-x-3">
                                                                                    <div className="flex items-center gap-x-2">
                                                                                            <h2 className="font-medium text-gray-800 ">{emprestimo_obj.livro_obj.nome_livro} - {usuario_devolucao_obj.email}</h2>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                                <div>
                                                                                    <h4 className="text-gray-700">{data_devolucao}</h4>
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
                  </div>*/}
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
