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

            <InformacaoPerfil>
                <p>Nome:<br />IFRN - Instituto Federal do Rio Grande do Norte</p><br />

                <p>Campus:<br />Pau Dos Ferros</p><br />

                <p>Email:</p><br />

                <p>Quantidade de livros:</p><br />
            </InformacaoPerfil>

            <Tabs />

            <Rodape />
        </div>
    )
}