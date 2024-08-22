'use client';
import React, { useState, useEffect } from "react";
import Botao from "@/components/Botao/index";
import style from './style.module.css';
import { api } from "@/app/services/api";

/*Mensagens*/
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
    };

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
    };

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
    };

    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [nomecategoria, setNomecategoria] = useState("");
    const [editando, setEditando] = useState(false);
    const [categoriaId, setCategoriaId] = useState<number | null>(null);
    const [pesquisa, setPesquisa] = useState(""); // Estado para armazenar o termo de pesquisa

    const getCategoria = async () => {
        const { data } = await api.get('categoria/');
        setCategoria(data);
    };

    useEffect(() => {
        getCategoria();
    }, []);

    const postNameCategoria = async (e: React.FormEvent) => {
        e.preventDefault();
        const newCat = {
            nome_categoria: nomecategoria,
        };
        if (editando && categoriaId) {
            // Atualiza a categoria existente
            await api.put(`categoria/${categoriaId}/`, newCat);
            notifyPut();
            setEditando(false);
            setCategoriaId(null);
        } else {
            // Cria uma nova categoria
            await api.post('categoria/', newCat);
            notifyPost();
        }

        setNomecategoria("");
        getCategoria();
    };

    const deleteCategoria = async (id: number) => {
        await api.delete(`categoria/${id}/`);
        notifyDelete();
        getCategoria();
    };

    const editCategoria = (id: number, nome: string) => {
        setNomecategoria(nome);
        setCategoriaId(id);
        setEditando(true);
    };

    const categoriasFiltradas = categoria.filter(c =>
        c.nome_categoria.toLowerCase().includes(pesquisa.toLowerCase())
    ); // Filtra a lista de categorias

    return (
        <>
            <ToastContainer />
            <form onSubmit={postNameCategoria}>
                <label className="text-sm text-gray-500 dark:text-gray-500" style={{ color: "#8c5c3d" }}>
                    Nome da Categoria
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <div>
                        <input
                            type="text"
                            value={nomecategoria}
                            onChange={(e) => setNomecategoria(e.target.value)}
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
                    {categoriasFiltradas.map(({ id, nome_categoria }) => (
                        <li key={id} className={style.li}>
                            <div>
                                {nome_categoria}
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <Botao funcao={() => editCategoria(id, nome_categoria)}>Editar</Botao>
                                <Botao funcao={() => deleteCategoria(id)}>Excluir</Botao>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
