'use client';
import style from './style.module.css'
import React from "react";
import Botao from "@/components/Botao/index";
import { useState, useEffect } from "react";
import { api } from "@/app/services/api";

/*Menssagens*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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


export default function ConteudoDevolucao() {

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
  
  const [livros, setLivros] = useState<Livros[]>([]);
  const getLivros = async () => {
    const { data } = await api.get('livros/')
    setLivros(data)
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
    getEmprestimo();
    getDevolucao();
  }, []);


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


  return (
    <>
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
                              {/*<img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />*/}                                                                                        <div>
                                <h2 className="font-medium text-gray-800 ">{emprestimo_obj.livro_obj.nome_livro} - {usuario_devolucao_obj.email}</h2>
                                {/*<p className="text-sm font-normal text-gray-600 dark:text-gray-400">@authurmelo</p>*/}
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
      </div>
    </>
  )
}
