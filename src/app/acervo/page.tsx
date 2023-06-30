'use client';

import BarraNavegacao from "@/components/BarraNavegacao/page";
import style from './style.module.css'
import Rodape from "@/components/Rodape/page"
import BannerAcervo from 'public/BannerAcervo.png'
import Image from "next/image"
import Livro from "@/components/Livro/page"
import Botao from "@/components/Botao/page";



export default function Acervo() {
    return (
        <body>
            <div className={style.body}>
                <BarraNavegacao />

                <Image className={style.imagembanner} src={BannerAcervo} alt="BannerAcervo" />

                <div className="row" id="camposfiltrar" style={{ color: "#8c5c3d", display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "0 140px", position: "relative" }}>
                    <div >
                        <input style={{ border: "1px solid #8c5c3d", borderRadius: "7px", width: "100%", color: "#d3d3d3" }} type="text" name="nome" placeholder="Nome " />
                    </div>
                    <div>
                        <select id="filtro" style={{ border: "1px solid #8c5c3d", borderRadius: "7px", width: "115%" }} name="categoria">
                            <option value="">Todas as Categorias</option>
                        </select>
                    </div><br />
                    <div >
                        <input style={{ border: "1px solid #8c5c3d", borderRadius: "7px", width: "100%" }} id="filtro" type="text" name="preco_min" placeholder="Instituição" />
                    </div>
                    <div>
                        <input style={{ border: "1px solid #8c5c3d", borderRadius: "7px", width: "100%" }} id="filtro" type="text" name="preco_max" placeholder="Autor" />
                    </div>
                    <div>
                        <Botao>Filtrar</Botao>
                    </div>
                </div>

                <div className={style.livro}>
                    <Livro />
                    <Livro />
                    <Livro />
                    <Livro />
                    <Livro />
                    <Livro />
                </div>
                <Rodape />
            </div>
        </body >
    )
}