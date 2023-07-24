'use client'

import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import InformacaoLivro from "@/components/InfoLivro/index";
import Paginacao from "@/components/Paginacao/index";
import ApresentacaoProps from "@/components/CamposdeInformacao/Apresentacao/index"
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import Image from "next/image";

interface livroprops {
    params: {
        livroId: number
    }
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
    editora: string;
    autor: string;
}
export default function AcessoLivro({ params }: livroprops) {

    const [livros, setLivros] = useState<Livros>();
    const getLivros = async () => {
        const { data } = await api.get(`livro/${params.livroId}/`)
        setLivros(data)
    }
    useEffect(() => {
        getLivros();
    }, []);

    return (
        <div className={style.body}>
            <BarraNavegacao />
            <InformacaoLivro>

                <div className={style.coluna}>
                    <Image src={livros?.cover} width={200} height={200} alt='' />

                    <div className={style.linha}>
                        <ApresentacaoProps titulo="Nome do livro" conteudo={livros?.nome_livro} />
                        <ApresentacaoProps titulo="Autor" conteudo={livros?.autor} />
                    </div>

                    <div className={style.linha}>
                        <ApresentacaoProps titulo="Categoria" conteudo={livros?.categoria} />
                        <ApresentacaoProps titulo="Editora" conteudo={livros?.editora} />
                    </div>

                    <div className={style.linha}>
                        <ApresentacaoProps titulo="Quantidade disponível" conteudo={livros?.quantidade} />
                        <ApresentacaoProps titulo="Descrição" conteudo={livros?.descricao_livro} />
                    </div>

                    <div className={style.linha}>
                        <ApresentacaoProps titulo="Data de Cadastro" conteudo={livros?.data_cadastro} />
                        <ApresentacaoProps titulo="Data de Lançamento" conteudo={livros?.data_lancamento} />
                    </div>

                    <div className={style.linha}>
                        <ApresentacaoProps titulo="Instituto(s)" conteudo="Teste" />
                    </div>
                </div>
            </InformacaoLivro>
            <Rodape />
        </div>
    )
}