'use client';

import BarraNavegacao from "@/components/BarraNavegacao/page";
import style from './style.module.css'
import Image from "next/image"
import BannerHome from 'public/BannerHome.jpg'
import Logo from 'public/Logo.png'
import Estudante from 'public/Estudante.jpg'
import Instituto from "@/components/Institutos/page";
import Rodape from "@/components/Rodape/page";


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
                            <Image className={style.imgestante} src={Logo} alt="" />
                            <Image className={style.imgestante} src={Logo} alt="" />
                            <Image className={style.imgestante} src={Logo} alt="" />
                            <Image className={style.imgestante} src={Logo} alt="" />
                            <Image className={style.imgestante} src={Logo} alt="" />
                            <Image className={style.imgestante} src={Logo} alt="" />
                            <Image className={style.imgestante} src={Logo} alt="" />
                            <Image className={style.imgestante} src={Logo} alt="" />
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
                    <div style={{ position: "relative" }}>
                        <Image className={style.estudante} src={Estudante} alt="Estudante" />
                    </div>
                    <div className={style.descricaocomofunciona}>
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
                    <a className={style.linkacervo} href="#">Explore o nosso acervo completo</a>
                </div>
            </section>

            <hr /><p className={style.titulobibliotecas}>Bibliotecas Cadastradas</p><hr />
            <div className={style.instit}>
                <Instituto />
                <Instituto />
            </div>

            <Rodape />

        </div>
    )
}