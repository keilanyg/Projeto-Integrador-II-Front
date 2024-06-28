
'use client';
import React from "react";
import Botao from "@/components/Botao/index";
import { useState, useEffect } from "react";
import style from './style.module.css'
import { api } from "@/app/services/api";

/*Menssagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Categoria {
    id: number;
    nome_categoria: string;
}

export default function ConteudoCategoria() {

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

    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const getCategoria = async () => {
        const { data } = await api.get('categoria/')
        setCategoria(data)
    }

    useEffect(() => {
        getCategoria();
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


    const deleteCategoria = async (id: number) => {
        const { data } = await api.delete(`categoria/${id}/`)
        notifyDelete();
        <ToastContainer />
        getCategoria()
    };
 

  return (
    <>
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
    </>
  )
}