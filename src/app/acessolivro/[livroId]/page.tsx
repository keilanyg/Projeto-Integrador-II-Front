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

interface Livro {
  id: string;
  nome_livro: string;
  descricao_livro: string;
  nome_categoria: string;
  nome_autor: string;
  nome_editora: string;
  cover: string;
}

export default function AcessoLivro({ params }: livroprops) {

  const [livro, setLivro] = useState<Livro | null>(null);

  useEffect(() => {
    const getLivro = async () => {
      try {
        const { data } = await api.get(`/livros/${params.livroId}/`);
        setLivro(data);
      } catch (error) {
        console.error("Erro ao buscar os dados do livro:", error);
      }
    };
    getLivro();
  }, [params.livroId]);

  if (!livro) {
    return <p>Carregando...</p>; // Ou outra mensagem de carregamento
  }

  return (
    <>
      <BarraNavegacao />
      <div className={style.body}>
        <InformacaoLivro>
          <div className={style.linha}>
            <div style={{ marginTop: "20px" }}>
              <Image src={livro.cover} width={200} height={200} alt='' />
            </div>

            <div className={style.coluna}>
              <ApresentacaoProps titulo="Nome do livro" conteudo={livro.nome_livro} />
              <ApresentacaoProps titulo="Autor" conteudo={livro.nome_autor} />
              <ApresentacaoProps titulo="Categoria" conteudo={livro.nome_categoria} />
              <ApresentacaoProps titulo="Editora" conteudo={livro.nome_editora} />
            </div>

            <div className={style.coluna}>
              <ApresentacaoProps titulo="Descrição" conteudo={livro.descricao_livro} />
            </div>
          </div>
        </InformacaoLivro>
      </div>

      <Rodape />
    </>
  );
}
