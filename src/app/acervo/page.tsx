"use client"

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index"
import BannerAcervo from 'public/BannerAcervo.png'
import excluir from 'public/excluir.png'
import Image from "next/image"
import Botao from "@/components/Botao/index"
import { api } from "@/app/services/api";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Livros {
  id: number;
  cover: string;
  nome_livro: string;
  autor: number;
  editora: number;
  categoria: number;
}

interface Autor {
  id: number;
  nome_autor: string;
}

interface Categoria {
  id: number;
  nome_categoria: string;
}
interface Editora {
  id: number;
  nome_editora: string;
}

export default function Acervo() {
  const [livros, setLivros] = useState<Livros[]>([]);
  const [autor, setAutor] = useState<Autor[]>([]);
  const [editora, setEditora] = useState<Editora[]>([]);
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const [selectedLivro, setSelectedLivro] = useState<string>("");
  const [selectedAutor, setSelectedAutor] = useState<number | null>(null);
  const [selectedEditora, setSelectedEditora] = useState<number | null>(null);
  const [selectedCategoria, setSelectedCategoria] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(21);

  const getLivros = async () => {
    try {
      const { data } = await api.get('livro/');
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

  const getEditora = async () => {
    try {
      const { data } = await api.get('editora/');
      setEditora(data);
    } catch (error) {
      console.error("Erro ao obter editora:", error);
    }
  }

  useEffect(() => {
    getLivros();
    getAutor();
    getCategoria();
    getEditora();
  }, []);

  const handleFilter = () => {
    // Aplicar filtros aos livros
    let filteredBooks = livros;

    if (selectedAutor !== null) {
      filteredBooks = filteredBooks.filter(livro => livro.autor === selectedAutor);
    }

    if (selectedEditora !== null) {
      filteredBooks = filteredBooks.filter(livro => livro.editora === selectedEditora);
    }

    if (selectedCategoria !== null) {
      filteredBooks = filteredBooks.filter(livro => livro.categoria === selectedCategoria);
    }
    if (selectedLivro.trim() !== "") {
      filteredBooks = filteredBooks.filter(livro =>
        livro.nome_livro.toLowerCase().includes(selectedLivro.toLowerCase())
      );
    }

    return filteredBooks;
  }

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = handleFilter().slice(indexOfFirstBook, indexOfLastBook);

  // Função para resetar os campos do filtro
  const resetallFilters = () => {
    setSelectedLivro("");
    setSelectedAutor(null);
    setSelectedCategoria(null);
    setSelectedEditora(null);
  };

  const resetFiltersLivro = () => {
    setSelectedLivro("");
  };

  const resetFiltersAutor = () => {
    setSelectedAutor(null);
  };

  const resetFiltersCategoria = () => {
    setSelectedCategoria(null);
  };

  const resetFiltersEditora = () => {
    setSelectedEditora(null);
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(handleFilter().length / booksPerPage)) {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <>
      <BarraNavegacao />
      <div className={style.body}>
        <Image className={style.imagembanner} src={BannerAcervo} alt="BannerAcervo" />
        <div id="camposfiltrar" style={{ color: "#8C5C3D", display: "flex", alignItems: "center", justifyContent: "center", margin: "10px auto", maxWidth: "900px" }}>
          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              value={selectedLivro || ""}
              onChange={(e) => setSelectedLivro(e.target.value)}
            >
              <option value="" disabled>Livro</option>
              {livros.map(({ nome_livro }) => (
                <option value={nome_livro} key={nome_livro}>{nome_livro}</option>
              ))}
            </select> 
          </div>
           {/*Botão de resetar*/}
           <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <div onClick={resetFiltersLivro}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop:"10px" }}
                onClick={resetFiltersLivro}
              />
            </div>
          </div>


          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              onChange={(e) => setSelectedAutor(Number(e.target.value))}
            >
              <option selected disabled>Autor</option>
              {autor.map(({ id, nome_autor }) => (
                <option value={id} key={id}>{nome_autor}</option>
              ))}
            </select>
          </div>
          {/*Botão de resetar*/}
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <div onClick={resetFiltersAutor}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop:"10px" }}
                onClick={resetFiltersAutor}
              />
            </div>
          </div>


          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              onChange={(e) => setSelectedCategoria(Number(e.target.value))}
            >
              <option selected disabled>Categoria</option>
              {categoria.map(({ id, nome_categoria }) => (
                <option value={id} key={id}>{nome_categoria}</option>
              ))}
            </select>
          </div>
          {/*Botão de resetar*/}
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <div onClick={resetFiltersCategoria}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop:"10px" }}
                onClick={resetFiltersCategoria}
              />
            </div>
          </div>


          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              onChange={(e) => setSelectedEditora(Number(e.target.value))}
            >
              <option value="" selected disabled>Editora</option>
              {editora.map(({ id, nome_editora }) => (
                <option value={id} key={id}>{nome_editora}</option>
              ))}
            </select>
          </div>
          {/*Botão de resetar*/}
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <div onClick={resetFiltersEditora}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop:"10px" }}
                onClick={resetFiltersEditora}
              />
            </div>
          </div>

          <Botao funcao={resetallFilters}>Resetar tudo</Botao>
        
        </div>

        <div className={style.livro}>
          <div>
            <ul className={" grid grid-cols-7 content-start"}>
              {currentBooks.map(({ id, nome_livro, cover }) => (
                <li key={id} className={style.li} style={{ display: "flex", margin: "0 10px", justifyContent: "space-between", flexDirection: "column" }}>
                  <div>
                    <br /><Image className={style.imagemlivro} src={cover} width={130} height={160} alt="Capa do livro" />
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

        {/* Componente de paginação */}
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={handleFilter().length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <Rodape />
    </>
  )
}

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{ color: '#8C5C3D', display: 'flex', justifyContent: 'center', padding: '30px' }} >
        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a onClick={() => paginate(currentPage - 1)} href="#!" className="page-link relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Anterior
          </a>
        </li><br />
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
            <a onClick={() => paginate(number)} href="#!" className={`page-link relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === number ? style.selectedLink : ''}`}>
              {number}
            </a>
          </li>
        ))}
        <li className={currentPage === pageNumbers.length ? 'page-item disabled' : 'page-item'}>
          <a onClick={() => paginate(currentPage + 1)} href="#!" className="page-link relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Próxima
          </a>
        </li>
      </ul>
    </nav>
  );
};
