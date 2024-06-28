'use client';
import Image from "next/image";
import style from './style.module.css'
import React from "react";
import Botao from "@/components/Botao/index";
import { useState, useEffect } from "react";
import { api } from "@/app/services/api";

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
  categoria_obj: Categoria
  editora: string;
  editora_obj: Editora
  autor: string;
  autor_obj: Autor;
}
interface Emprestimo {
  id: number;
  data_emprestimo: Date;
  nome_emprestado_usuario: string;
  livro: string;
  livro_obj: Livros;
}
interface Devolucao {
  id: number;
  emprestimo: string;
  emprestimo_obj: Emprestimo;
  data_devolucao: Date;
  usuario_devolucao: string;
  livro: string;
  livro_obj: Livros;
}

export default function ConteudoLivro() {

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

  useEffect(() => {
    getLivros();
    getCategoria();
    getEditora();
    getAutor();
  }, []);


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

  const deleteLivro = async (id: number) => {
    const { data } = await api.delete(`livro/${id}/`)
    notifyDelete();
    <ToastContainer />
    getLivros()
  };


  return (
    <>
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
    </>
  )
}
