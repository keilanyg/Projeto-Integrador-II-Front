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
        <div className={style.body}>
            <BarraNavegacao />

            <Image className={style.imagembanner} src={BannerAcervo} alt="BannerAcervo" />

            <div className="row" id="camposfiltrar" style={{ color: "#4C3228", display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "0 200px", position: "relative" }}>
                <div >
                    <input className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "100%" }} type="text" name="nome" placeholder="Nome " />
                </div>
                <div>
                    <select className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "110%" }}>
                        <option value="">Todas as Categorias</option>
                    </select>
                </div><br />
                <div >
                    <input className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "100%" }} type="text" name="preco_min" placeholder="Instituição" />
                </div>
                <div>
                    <input className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d", width: "100%" }} type="text" name="preco_max" placeholder="Autor" />
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
    )
}