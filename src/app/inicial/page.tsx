import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Image from "next/image"
import BannerHome from 'public/BannerHome.jpg'
import Livro1 from 'public/Livro1.jpeg'
import Livro2 from 'public/Livro2.jpg'
import Livro3 from 'public/Livro3.jpg'
import Livro4 from 'public/Livro4.jpg'
import Livro5 from 'public/Livro5.jpeg'
import Livro6 from 'public/Livro6.jpeg'
import Livro7 from "public/Livro7.jpeg"
import Livro8 from 'public/Livro8.jpg'


import Estudante from 'public/Estudante.jpg'
import Instituto from "@/components/Institutos/index";
import Rodape from "@/components/Rodape/index";


export default function Inicial() {
    return (
        <div className={style.body}>
            <BarraNavegacao />
            <div className={style.bemvindo}>
                <div className={style.containerfrase}>
                    <p className={style.frase1}>
                        Olá, Bem-vindo(a)
                    </p>
                    <p className={style.frase2}>
                        ao Sistema de Gerenciamento de Bibliotecas.
                    </p>
                    <div className={style.retanguloDaEstante} />
                </div>

                <div>
                    <div className={style.contenu_carou_auto}>
                        <div className={style.caroussel_image}>
                            <Image className={style.imgestante} src={Livro1} alt="" />
                            <Image className={style.imgestante} src={Livro2} alt="" />
                            <Image className={style.imgestante} src={Livro3} alt="" />
                            <Image className={style.imgestante} src={Livro4} alt="" />
                            <Image className={style.imgestante} src={Livro5} alt="" />
                            <Image className={style.imgestante} src={Livro6} alt="" />
                            <Image className={style.imgestante} src={Livro7} alt="" />
                            <Image className={style.imgestante} src={Livro8} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section className={style.paginaHomeItem}>
                <div className={style.nossaMissao}>
                    <div className={style.titulomisao}>
                        <p>Nossa Missão</p>
                    </div>
                    <div className={style.frasemisao}>
                        <p>
                            Fornecer um software no qual irá suprir a necessidade de organização,
                            assim garantindo a qualidade e serviço prestado.
                        </p>
                    </div>
                </div>
                <Image className={style.imagembanner} src={BannerHome} alt="BannerHome" />
            </section>

            <section className={style.quemsomos}>
                <div className={style.tituloquemsomos}>
                    <p>Quem Somos</p>
                </div>
                <div className={style.frasequemsomos}>
                    <p>Surgimos com a necessidade  de reunir informações de bibliotecas públicas, no qual o usúario pode pesquisar por um exemplar de sua preferencia e saber qual local está.
                        <br /><br />Pensando também em orgãos de pequeno porte que podem não ter um software para gerenciar e reunir  informações de acervo e empréstimos.</p>
                </div>
            </section>

            <section>
                <div className={style.comofunciona}>
                    <div className="relative w-7/12 overflow-hidden bg-cover bg-no-repeat"
                        data-te-ripple-init
                    >
                        <Image className={style.estudante} src={Estudante} alt="Estudante" />
                    </div>
                    <div id="descricaocomofunciona" className="relative w-7/12 overflow-hidden bg-cover bg-no-repeat m-10"
                        data-te-ripple-init>
                        <div className={style.titulocomofunciona}>
                            <p>Como Funciona</p>
                        </div>
                        <div className={style.frasecomofunciona}>
                            <p>Este sistema permite que os usuários vejam catálogos das bibliotecas que se registrarem no nosso sistema.
                                <br /><br />Nele o bibliotecário poderá criar o catálogo dos livros que consta na sua biblioteca, adicionando todas as informações dos mesmos para que os usuários possam pesquisar por um título e ver informações desse tema e da instituição.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={style.sectionacervo}>
                    <a className={style.linkacervo} href="/acervo">Explore o nosso acervo completo</a>
                </div>
            </section>

            <hr /><p className={style.titulobibliotecas}>Bibliotecas Cadastradas</p><hr />
            <div className={style.instit} id="institut" >
                <Instituto />
                <Instituto />
            </div>

            <Rodape />

        </div>
    )
}