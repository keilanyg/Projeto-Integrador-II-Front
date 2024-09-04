'use client';

import style from './style.module.css'
import React, { useState, useEffect } from "react";
import { apiAcervo } from "@/app/services/api";
import Botao from "@/components/Botao/index";

/*Mensagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Editora {
  id: number;
  nome_editora: string;
}

export default function ConteudoEditora() {

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

  const [editora, setEditora] = useState<Editora[]>([]);
  const [nomeeditora, setNomeeditora] = useState("");
  const [editando, setEditando] = useState(false);
  const [editoraId, setEditoraId] = useState<number | null>(null);
  const [pesquisa, setPesquisa] = useState(""); // Estado para armazenar o termo de pesquisa

  const getEditora = async () => {
    const { data } = await apiAcervo.get('editora/')
    setEditora(data)
  }

  useEffect(() => {
    getEditora();
  }, []);

  const postNameEditora = async (e: React.FormEvent) => {
    e.preventDefault();
    const newEditora = { nome_editora: nomeeditora };

    if (editando && editoraId) {
      // Atualiza a editora existente
      await apiAcervo.put(`editora/${editoraId}/`, newEditora);
      notifyPut();
      setEditando(false);
      setEditoraId(null);
    } else {
      // Cria uma editora nova
      await apiAcervo.post('editora/', newEditora);
      notifyPost();
    }

    getEditora();
    setNomeeditora("");
  };

  const deleteEditora = async (id: number) => {
    await apiAcervo.delete(`editora/${id}/`)
    notifyDelete();
    getEditora();
  };

  const editEditora = (id: number, nome: string) => {
    setNomeeditora(nome);
    setEditoraId(id);
    setEditando(true);
  };

  const editorasFiltradas = editora.filter(e =>
    e.nome_editora.toLowerCase().includes(pesquisa.toLowerCase())
  ); // Filtra a lista de editoras

  return (
    <>
      <ToastContainer />
      <form onSubmit={postNameEditora}>
        <label className="text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>
          Nome da Editora
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div>
            <input
              type="text"
              value={nomeeditora}
              onChange={(e) => setNomeeditora(e.target.value)}
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
          {editorasFiltradas.map(({ id, nome_editora }) => (
            <li key={id} className={style.li}>
              <div>
                {nome_editora}
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Botao funcao={() => editEditora(id, nome_editora)}>Editar</Botao>
                <Botao funcao={() => deleteEditora(id)}>Excluir</Botao>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
