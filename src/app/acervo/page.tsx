  'use client'

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
    const [autor, setAutor] = useState<Autor[]>([]);
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(21);

    const getLivros = async () => {
      try {
        const { data } = await api.get('livros/');
        setLivros(data);
      } catch (error) {
        console.error("Erro ao obter livros:", error);
      }
    }

    const getAutor = async () => {
      try {
        const { data } = await api.get('autor/');
        setAutor(data);
      } catch (error) {
        console.error("Erro ao obter autores:", error);
      }
    }

    const getCategoria = async () => {
      try {
        const { data } = await api.get('categoria/');
        setCategoria(data);
      } catch (error) {
        console.error("Erro ao obter categorias:", error);
      }
    }

    useEffect(() => {
      getLivros();
      getAutor();
      getCategoria();
    }, []);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = livros.slice(indexOfFirstBook, indexOfLastBook);

   

    return (
      <>
        <BarraNavegacao />
        <div className={style.body}>
          <Image className={style.imagembanner} src={BannerAcervo} alt="BannerAcervo" />
          <div id="camposfiltrar" style={{ color: "#8C5C3D", display: "flex", alignItems: "center", justifyContent: "center", margin: "10px auto", maxWidth: "600px" }}>
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
              <ul className={" grid grid-cols-7 content-start"}>
                {currentBooks.map(({ id, nome_livro, cover }) => (
                  <li key={id} className={style.li} style={{ display: "flex", margin: "0 10px", justifyContent: "space-between", flexDirection: "column" }}>
                    <div>
                      <br /><Image className={style.imagemlivro} src={cover} width={100} height={150} alt="" />
                    </div>
                    <div className={style.titulo}>
                      <p>{nome_livro}</p>
                    </div>
                    <Link href={`acessolivro/${id}`}>
                      <Botao>Acessar</Botao>
                    </Link>
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

 