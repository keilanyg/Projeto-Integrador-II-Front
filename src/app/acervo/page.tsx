'use client';

import BarraNavegacao from "@/components/BarraNavegacao/page";
import style from './style.module.css'
import Rodape from "@/components/Rodape/page"
import BannerAcervo from 'public/BannerAcervo.png'
import Image from "next/image";
import Livro from "@/components/Livro/page";

export default function Acervo() {
    return (
        <body>
            <div className={style.body}>
                <BarraNavegacao />
                <Image className={style.imagembanner} src={BannerAcervo} alt="BannerAcervo" />
                <div className={style.livro}>
                    <Livro />
                </div>
                <Rodape />
            </div>
        </body >
    )
}