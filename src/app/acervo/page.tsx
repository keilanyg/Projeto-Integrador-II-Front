"use client";

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from "./style.module.css";
import Rodape from "@/components/Rodape/index";
import BannerAcervo from "public/BannerAcervo.png";
import excluir from "public/excluir.png";
import Image from "next/image";
import Botao from "@/components/Botao/index";
import {
  apiAcervo,
  apiAcervoIFRN,
  apiAcervoUERN,
  apiAcervoUFERSA,
} from "../../services/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Livros } from "@/@types/models";

export default function AcervoPage() {
  const [selectedLivro, setSelectedLivro] = useState<string>("");
  const [selectedAutor, setSelectedAutor] = useState<string>("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedEditora, setSelectedEditora] = useState("");

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(21);

  // Filtros
  const [autores, setAutores] = useState<string[]>([]);
  const [editoras, setEditoras] = useState<string[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [nomeLivros, setNomeLivros] = useState<string[]>([]);

  const [livros, setLivros] = useState<Livros[]>([]);
  const [filteredLivros, setFilteredListros] = useState<Livros[]>([]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const getLivros = async () => {
    try {
      const response = await apiAcervo.get("livro/");

      const nomeLivrosSet = new Set<string>();
      response.data.forEach((item: { nome_livro: string }) =>
        nomeLivrosSet.add(item.nome_livro)
      );
      // response2.data.forEach((item: { nome_livro: string; }) => nomeLivrosSet.add(item.nome_livro))
      // response3.data.forEach((item: { nome_livro: string; }) => nomeLivrosSet.add(item.nome_livro))
      // response4.data.forEach((item: { nome_livro: string; }) => nomeLivrosSet.add(item.nome_livro))

      // const livrosArray = [...response1.data, ...response2.data, ...response3.data, ...response4.data]
      setLivros(response.data);
      setFilteredListros(
        response.data.slice(indexOfFirstBook, indexOfLastBook)
      );
      setNomeLivros([...nomeLivrosSet]);
    } catch (error) {
      console.error("Erro ao obter livros:", error);
    }
  };

  const getAutor = async () => {
    try {
      const [response1, response2, response3, response4] = await Promise.all([
        apiAcervo.get("autor/"),
        apiAcervoIFRN.get("autor/"),
        apiAcervoUERN.get("autor/"),
        apiAcervoUFERSA.get("autor/"),
      ]);

      const autoresSet = new Set<string>();
      response1.data.forEach((item: { nome_autor: string }) =>
        autoresSet.add(item.nome_autor)
      );
      response2.data.forEach((item: { nome_autor: string }) =>
        autoresSet.add(item.nome_autor)
      );
      response3.data.forEach((item: { nome_autor: string }) =>
        autoresSet.add(item.nome_autor)
      );
      response4.data.forEach((item: { nome_autor: string }) =>
        autoresSet.add(item.nome_autor)
      );

      setAutores([...autoresSet]);
    } catch (error) {
      console.error("Erro ao obter autor:", error);
    }
  };

  const getCategoria = async () => {
    try {
      const response = await apiAcervo.get("categoria/");
      // apiAcervoIFRN.get('categoria/'),
      // apiAcervoUERN.get('categoria/'),
      // apiAcervoUFERSA.get('categoria/')
      // ]);
      const categoriaSet = new Set<string>();
      response.data.forEach((item: { nome_categoria: string }) =>
        categoriaSet.add(item.nome_categoria)
      );
      // response2.data.forEach((item: { nome_categoria: string; }) => categoriaSet.add(item.nome_categoria))
      // response3.data.forEach((item: { nome_categoria: string; }) => categoriaSet.add(item.nome_categoria))
      // response4.data.forEach((item: { nome_categoria: string; }) => categoriaSet.add(item.nome_categoria))
      setCategorias([...categoriaSet]);
    } catch (error) {
      console.error("Erro ao obter categoria:", error);
    }
  };

  const getEditora = async () => {
    try {
      const response = await apiAcervo.get("editora/");
      // apiAcervoIFRN.get('categoria/'),
      // apiAcervoUERN.get('categoria/'),
      // apiAcervoUFERSA.get('categoria/')
      // ]);
      const editoraSet = new Set<string>();
      response.data.forEach((item: { nome_editora: string }) =>
        editoraSet.add(item.nome_editora)
      );
      // response2.data.forEach((item: { nome_categoria: string; }) => categoriaSet.add(item.nome_categoria))
      // response3.data.forEach((item: { nome_categoria: string; }) => categoriaSet.add(item.nome_categoria))
      // response4.data.forEach((item: { nome_categoria: string; }) => categoriaSet.add(item.nome_categoria))
      setEditoras([...editoraSet]);
    } catch (error) {
      console.error("Erro ao obter editora:", error);
    }
  };

  useEffect(() => {
    getLivros();
    getAutor();
    getCategoria();
    getEditora();
  }, []);

  useEffect(() => {
    handleFilter(true);
  }, [
    selectedAutor,
    selectedCategoria,
    selectedLivro,
    selectedEditora,
    currentPage,
  ]);

  const handleFilter = (updateState = false) => {
    let filteredBooks = [...livros];

    if (selectedLivro.trim() !== "") {
      filteredBooks = filteredBooks.filter((livro) =>
        livro.nome_livro.toLowerCase().includes(selectedLivro.toLowerCase())
      );
    }

    if (selectedAutor.trim() !== "") {
      filteredBooks = filteredBooks.filter((livro) =>
        livro.autor_obj.nome_autor
          .toLowerCase()
          .includes(selectedAutor.toLowerCase())
      );
    }

    if (selectedCategoria.trim() !== "") {
      filteredBooks = filteredBooks.filter((livro) =>
        livro.categoria_obj.nome_categoria
          .toLowerCase()
          .includes(selectedCategoria.toLowerCase())
      );
    }

    if (updateState)
      setFilteredListros(
        filteredBooks.slice(indexOfFirstBook, indexOfLastBook)
      );
    return filteredBooks;
  };

  const resetallFilters = () => {
    setSelectedLivro("");
    setSelectedAutor("");
    setSelectedCategoria("");
    setSelectedEditora("");
  };

  const resetFiltersLivro = () => {
    setSelectedLivro("");
  };

  const resetFiltersAutor = () => {
    setSelectedAutor("");
  };

  const resetFiltersCategoria = () => {
    setSelectedCategoria("");
  };

  const resetFiltersEditora = () => {
    setSelectedEditora("");
  };

  const paginate = (pageNumber: number) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(handleFilter().length / booksPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <BarraNavegacao />
      <div className={style.body}>
        <Image
          className={style.imagembanner}
          src={BannerAcervo}
          alt="BannerAcervo"
        />
        <div
          id="camposfiltrar"
          style={{
            color: "#8C5C3D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px auto",
            maxWidth: "900px",
          }}
        >
          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              value={selectedLivro || ""}
              onChange={(e) => setSelectedLivro(e.target.value)}
            >
              <option value="">Livro</option>
              {nomeLivros.map((nome_livro, i) => (
                <option value={nome_livro} key={i}>
                  {nome_livro}
                </option>
              ))}
            </select>
          </div>
          {/*Botão de resetar*/}
          <div
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <div onClick={resetFiltersLivro}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop: "10px" }}
                onClick={resetFiltersLivro}
              />
            </div>
          </div>

          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              onChange={(e) => setSelectedAutor(e.target.value)}
              value={selectedAutor || ""}
            >
              <option value="">Autor</option>
              {autores.map((nome_autor, i) => (
                <option value={nome_autor} key={i}>
                  {nome_autor}
                </option>
              ))}
            </select>
          </div>
          {/*Botão de resetar*/}
          <div
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <div onClick={resetFiltersAutor}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop: "10px" }}
                onClick={resetFiltersAutor}
              />
            </div>
          </div>

          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              onChange={(e) => setSelectedCategoria(e.target.value)}
              value={selectedCategoria || ""}
            >
              <option value="">Categoria</option>
              {categorias.map((nome_categoria, i) => (
                <option key={i} value={nome_categoria}>
                  {nome_categoria}
                </option>
              ))}
            </select>
          </div>
          {/*Botão de resetar*/}
          <div
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <div onClick={resetFiltersCategoria}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop: "10px" }}
                onClick={resetFiltersCategoria}
              />
            </div>
          </div>

          <div style={{ flex: "2", marginLeft: "10px", marginRight: "10px" }}>
            <select
              className="select select-bordered mt-2 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              style={{ width: "100%", border: "1px solid #8c5c3d" }}
              onChange={(e) => setSelectedEditora(e.target.value)}
              defaultValue=""
            >
              <option value="">Editora</option>
              {editoras.map((nome_editora, i) => (
                <option value={nome_editora} key={i}>
                  {nome_editora}
                </option>
              ))}
            </select>
          </div>
          {/*Botão de resetar*/}
          <div
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <div onClick={resetFiltersEditora}>
              <Image
                src={excluir}
                alt="Descrição da Imagem"
                width={20}
                height={20}
                style={{ marginRight: "15px", marginTop: "10px" }}
                onClick={resetFiltersEditora}
              />
            </div>
          </div>

          <Botao funcao={resetallFilters}>Resetar tudo</Botao>
        </div>

        <div className={style.livro}>
          <div>
            <ul className={" grid grid-cols-7 content-start"}>
              {filteredLivros.map(
                ({ id, nome_livro, cover, instituicao }, i) => (
                  <li
                    key={i}
                    className={style.li}
                    style={{
                      display: "flex",
                      margin: "0 10px",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <br />
                      <Image
                        className={style.imagemlivro}
                        src={cover}
                        width={130}
                        height={160}
                        alt="Capa do livro"
                      />
                    </div>
                    <div className={style.titulo}>
                      <p>{nome_livro}</p>
                    </div>
                    <Link href={`acessolivro/${id}?instituicao=${instituicao}`}>
                      <Botao>Acessar</Botao>
                    </Link>
                  </li>
                )
              )}
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
  );
}

type PaginationProps = {
  booksPerPage: number;
  totalBooks: number;
  paginate: number;
};

const Pagination = ({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        className="pagination"
        style={{
          color: "#8C5C3D",
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="page-link relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Anterior
          </button>
        </li>
        <br />
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <a
              onClick={() => paginate(number)}
              href="#!"
              className={`page-link relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                currentPage === number ? style.selectedLink : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage === pageNumbers.length
              ? "page-item disabled"
              : "page-item"
          }
        >
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Próxima
          </button>
        </li>
      </ul>
    </nav>
  );
};
