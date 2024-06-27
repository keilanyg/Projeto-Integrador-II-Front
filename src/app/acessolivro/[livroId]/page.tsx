'use client';

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import InformacaoLivro from "@/components/InfoLivro/index";
import ApresentacaoProps from "@/components/CamposdeInformacao/Apresentacao/index"
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import Image from "next/image";

interface livroprops {
  params: {
    livroId: number
  }
}

interface Categoria {
  id: number;
  nome_categoria: string;
}
interface Autor {
  id: number;
  nome_autor: string;
}
interface Editora {
  id: number;
  nome_editora: string;
}
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

export default function AcessoLivro({ params }: livroprops) {

  const [livros, setLivros] = useState<Livros>();
  const getLivros = async () => {
    const { data } = await api.get(`livros/${params.livroId}/`)
    setLivros(data)
  }
  useEffect(() => {
    getLivros();
  }, []);

  return (
    <>
      <div className={style.body}>
        <BarraNavegacao />
        <InformacaoLivro>
          <div className={style.linha}>
            <div>
              <Image src={livros?.cover} width={250} height={250} alt='' />
            </div>

            <div className={style.coluna}>
              <ApresentacaoProps titulo="Nome do livro" conteudo={livros?.nome_livro} />
              <ApresentacaoProps titulo="Autor" conteudo={livros?.autor_obj.nome_autor} />
              <ApresentacaoProps titulo="Categoria" conteudo={livros?.categoria_obj.nome_categoria} />
              <ApresentacaoProps titulo="Editora" conteudo={livros?.editora_obj.nome_editora} />
            </div>

            <div className={style.coluna}>
              <ApresentacaoProps titulo="Quantidade disponível" conteudo={livros?.quantidade} />
              <ApresentacaoProps titulo="Data de Cadastro" conteudo={livros?.data_cadastro} />
              <ApresentacaoProps titulo="Data de Lançamento" conteudo={livros?.data_lancamento} />
              <ApresentacaoProps titulo="Descrição" conteudo={livros?.descricao_livro} />
            </div>
          </div>
        </InformacaoLivro>
        <Rodape />
      </div>

    </>

  )
}
