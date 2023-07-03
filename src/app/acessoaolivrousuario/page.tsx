'use client';

import BarraNavegacao from "@/components/BarraNavegacao/page";
import style from './style.module.css'
import Rodape from "@/components/Rodape/page";
import InformacaoLivro from "@/components/InfoLivro/page";
import Botao from "@/components/Botao/page";
import Paginacao from "@/components/Paginacao/page";
import ApresentacaoProps from "@/components/CamposdeInformacao/Apresentacao/page";


export default function AcessoLivroInstituicao() {
    return (
        <div className={style.body}>
            <BarraNavegacao />
            <br />
            <InformacaoLivro>
                <div className={style.coluna}>

                    <div className={style.linha}>
                        <div>
                            <ApresentacaoProps titulo="Nome do livro" conteudo="Teste" />
                        </div>

                        <div>
                            <ApresentacaoProps titulo="Autor" conteudo="Teste" />
                        </div>
                    </div>

                    <div className={style.linha}>
                        <div>
                            <ApresentacaoProps titulo="Categoria" conteudo="Teste" />
                        </div>

                        <div>
                            <ApresentacaoProps titulo="Editora" conteudo="Teste" />
                        </div>
                    </div>

                    <div className={style.linha}>
                        <div>
                            <ApresentacaoProps titulo="Instituto(s)" conteudo="Teste" />
                        </div>
                        <div>
                            <ApresentacaoProps titulo="Data de Lançamento" conteudo="Teste" />
                        </div>
                    </div>
                </div>
            </InformacaoLivro>
            <br /><br />
            <Rodape />
        </div>
    )
}