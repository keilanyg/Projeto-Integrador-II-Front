'use client';

import style from './style.module.css'
import React from "react";
import { useState, useEffect } from "react";
import { api } from "@/app/services/api";
import Botao from "@/components/Botao/index";


/*Menssagens*/
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
  const getEditora = async () => {
    const { data } = await api.get('editora/')
    setEditora(data)
  }


  useEffect(() => {
    getEditora();
  }, []);


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

  const deleteEditora = async (id: number) => {
    const { data } = await api.delete(`editora/${id}/`)
    notifyDelete();
    <ToastContainer />
    getEditora()
  };

  return (
    <>
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
    </>
  )
}
