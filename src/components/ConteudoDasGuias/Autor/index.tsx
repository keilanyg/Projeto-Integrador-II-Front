'use client';
import style from './style.module.css';
import React, { useState, useEffect } from 'react';
import Botao from '@/components/Botao/index';
import { apiAcervo } from '@/app/services/api';

/*Mensagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Autor {
  id: number;
  nome_autor: string;
}

export default function ConteudoAutor() {

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

  const [autor, setAutor] = useState<Autor[]>([]);
  const [nomeautor, setNomeautor] = useState("");
  const [editando, setEditando] = useState(false);
  const [autorId, setAutorId] = useState<number | null>(null);
  const [pesquisa, setPesquisa] = useState(""); // Estado para armazenar o termo de pesquisa

  const getAutor = async () => {
    const { data } = await apiAcervo.get('autor/');
    setAutor(data);
  }

  useEffect(() => {
    getAutor();
  }, []);

  const postNameAutor = async (e) => {
    e.preventDefault();
    const newAutor = { nome_autor: nomeautor };

    if (editando && autorId) {
      // Atualiza o autor existente
      await apiAcervo.put(`autor/${autorId}/`, newAutor);
      notifyPut();
      setEditando(false);
      setAutorId(null);
    } else {
      // Cria um novo autor
      await apiAcervo.post('autor/', newAutor);
      notifyPost();
    }

    getAutor();
    setNomeautor("");
  };

  const deleteAutor = async (id: number) => {
    await apiAcervo.delete(`autor/${id}/`);
    notifyDelete();
    getAutor();
  };

  const editAutor = (id: number, nome: string) => {
    setNomeautor(nome);
    setAutorId(id);
    setEditando(true);
  };

  const autoresFiltrados = autor.filter(a =>
    a.nome_autor.toLowerCase().includes(pesquisa.toLowerCase())
  ); // Filtra a lista de autores

  return (
    <>
      <form onSubmit={postNameAutor}>
        <label className="text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>
          Nome do(a) Autor(a)
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div>
            <input
              type="text"
              value={nomeautor}
              onChange={(e) => setNomeautor(e.target.value)}
              className="mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ border: "1px solid #8c5c3d" }}
            />
          </div>
          <div>
            <Botao type="submit">{editando ? "Atualizar" : "Salvar"}</Botao>
          </div>
        </div>
      </form>

      <div>
        <br/>
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          style={{ border: "1px solid #8c5c3d" }}
        />

        <ul>
          {autoresFiltrados.map(({ id, nome_autor }) => (
            <li key={id} className={style.li}>
              <div>{nome_autor}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Botao funcao={() => editAutor(id, nome_autor)}>Editar</Botao>
                <Botao funcao={() => deleteAutor(id)}>Excluir</Botao>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}
