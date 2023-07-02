'use client';

import BarraNavegacao from "@/components/BarraNavegacao/page";
import style from './style.module.css'
import Rodape from "@/components/Rodape/page";
import Tabs from "@/components/TabdeInstituicao/page";
import InformacaoPerfil from "@/components/InfoPerfil/page";

export default function PerfilInstituicao() {
    return (
        <div className={style.body}>
            <BarraNavegacao />

            <InformacaoPerfil />

            <Tabs />

            <Rodape />
        </div>
    )
}