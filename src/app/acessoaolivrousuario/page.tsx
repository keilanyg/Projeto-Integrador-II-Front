import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import InformacaoLivro from "@/components/InfoLivro/index";
import ApresentacaoProps from "@/components/CamposdeInformacao/Apresentacao/index";


export default function AcessoLivroInstituicao() {
    return (
        <>
            <BarraNavegacao />
            <div className={style.body}>
                <br />
                <InformacaoLivro>
                    <div className={style.coluna}>

                        <div className={style.linha}>
                            <ApresentacaoProps titulo="Nome do livro" conteudo="Teste" />
                            <ApresentacaoProps titulo="Autor" conteudo="Teste" />
                        </div>

                        <div className={style.linha}>
                            <ApresentacaoProps titulo="Categoria" conteudo="Teste" />
                            <ApresentacaoProps titulo="Editora" conteudo="Teste" />
                        </div>

                        <div className={style.linha}>
                            <ApresentacaoProps titulo="Instituto(s)" conteudo="Teste" />
                            <ApresentacaoProps titulo="Data de Lançamento" conteudo="Teste" />
                        </div>
                    </div>
                </InformacaoLivro>

            </div>
            <Rodape />
        </>
    )
}