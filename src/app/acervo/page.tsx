'use client';

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index"
import BannerAcervo from 'public/BannerAcervo.png'
import Image from "next/image"
import Botao from "@/components/Botao/index"
import { api } from "@/app/services/api";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Livros {
    id: number;
    cover: File;
    nome_livro: string;
}
export default function Acervo() {
    const [livros, setLivros] = useState<Livros[]>([]);
    const getLivros = async () => {
        const { data } = await api.get('livro/')
        setLivros(data)
    }
    useEffect(() => {
        getLivros();
    }, []);
    return (
        <>
            <BarraNavegacao />
            <div className={style.body}>
                <Image className={style.imagembanner} src={BannerAcervo} alt="BannerAcervo" />
                <div className="row" id="camposfiltrar" style={{ color: "#4C3228", display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "0 200px", position: "relative" }}>
                    <div >
                        <input className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "100%" }} type="text" name="nome" placeholder="Nome " />
                    </div>
                    <div>
                        <select className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "110%" }}>
                            <option value="">Todas as Categorias</option>
                        </select>
                    </div><br />
                    <div >
                        <input className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "100%" }} type="text" name="preco_min" placeholder="Instituição" />
                    </div>
                    <div>
                        <input className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "100%" }} type="text" name="preco_max" placeholder="Autor" />
                    </div>
                    <div>
                        <Botao>Filtrar</Botao>
                    </div>
                </div>
                <div className={style.livro}>
                    <div className={style.infolivro}>
                        <ul>
                            {livros.map(({ id, nome_livro, cover }) => (
                                <li key={id} style={{ display: "flex", margin: "20px 400px 20px 10px", justifyContent: "space-between", flexDirection: "column" }}>
                                    <div>
                                        <br /><Image className={style.imagemlivro} src={cover} width={100} height={120} alt="" />
                                    </div>
                                    <div className={style.titulo}>
                                        <p>{nome_livro}</p>
                                        <Link href={`acessolivro/${id}`}>
                                            <Botao>Acessar</Botao>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    )
}