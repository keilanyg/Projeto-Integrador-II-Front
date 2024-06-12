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
  cover: string;
  nome_livro: string;
}
interface Autor {
  id: number;
  nome_autor: string;
}
interface Categoria {
  id: number;
  nome_categoria: string;
}
export default function Acervo() {
  const [livros, setLivros] = useState<Livros[]>([]);
  const getLivros = async () => {
    const { data } = await api.get('livros/')
    setLivros(data)
  }
  const [autor, setAutor] = useState<Autor[]>([]);
  const getAutor = async () => {
    const { data } = await api.get('autor/')
    setAutor(data)
  }
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const getCategoria = async () => {
    const { data } = await api.get('categoria/')
    setCategoria(data)
  }
  useEffect(() => {
    getLivros();
    getAutor();
    getCategoria();
  }, []);
  return (
    <>
      <BarraNavegacao />
      <div className={style.body}>
        <Image className={style.imagembanner} src={BannerAcervo} alt="BannerAcervo" />

        <div id="camposfiltrar" style={{ color: "#4C3228", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", maxWidth: "600px" }}>
          <div style={{ flex: "1" }}>
            <select className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ width: "100%", border: "1px solid #8c5c3d" }}>
              <option selected disabled>Livro</option>
              {livros.map(({ id, nome_livro }) => (
                <option value={id} key={id}>{nome_livro}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1", marginLeft: "10px", marginRight: "10px" }}>
            <select className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ width: "100%", border: "1px solid #8c5c3d" }}>
              <option selected disabled>Categoria</option>
              {categoria.map(({ id, nome_categoria }) => (
                <option value={id} key={id}>{nome_categoria}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1" }}>
            <select className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ width: "100%", border: "1px solid #8c5c3d" }}>
              <option selected disabled>Autor</option>
              {autor.map(({ id, nome_autor }) => (
                <option value={id} key={id}>{nome_autor}</option>
              ))}
            </select>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Botao>Filtrar</Botao>
          </div>
        </div>

        <div className={style.livro}>
          <div>
            <ul className={"h-56 grid grid-cols-7 gap-7 content-start"}>
              {livros.map(({ id, nome_livro, cover }) => (
                <li key={id} style={{ display: "flex", margin: "20px 10px 20px 10px", justifyContent: "space-between", flexDirection: "column" }}>
                  <div>
                    <br /><Image className={style.imagemlivro} src={cover} width={100} height={120} alt="" />
                  </div>
                  <div className={style.titulo}>
                    <p>{nome_livro}</p>
                  </div><br />
                  <Link href={`acessolivro/${id}`}>
                    <Botao>Acessar</Botao>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Rodape/>
    </>
  )
}