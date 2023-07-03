'use client';

import BarraNavegacao from "@/components/BarraNavegacao/page";
import style from './style.module.css'
import Rodape from "@/components/Rodape/page";
import InformacaoPerfil from "@/components/InfoPerfil/page";
import TabelaUsuario from "@/components/TabelaUsuario/page";


export default function PerfilUsuario() {
    return (

        <div className={style.body}>
            <BarraNavegacao />
            <br />
            <InformacaoPerfil>
                <p>Nome:<br /> Ana Izadora</p><br />

                <p>Sobrenome:<br /> Fernandes</p><br />

                <p>Email:</p> ana.izadora@escolar.ifrn.edu.br <br />

            </InformacaoPerfil>

            <TabelaUsuario />


            <Rodape />
        </div>
    )
}