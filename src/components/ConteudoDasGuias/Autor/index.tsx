'use client';
import style from './style.module.css'
import React from "react";
import Botao from "@/components/Botao/index";
import { useState, useEffect } from "react";
import { api } from "@/app/services/api";


/*Menssagens*/
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
  const getAutor = async () => {
    const { data } = await api.get('autor/')
    setAutor(data)
  }

  useEffect(() => {
    getAutor();
  }, []);


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

  const deleteAutor = async (id: number) => {
    const { data } = await api.delete(`autor/${id}/`)
    notifyDelete();
    <ToastContainer />
    getAutor()
  };

  return (
    <>
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
    </>
  )
}
