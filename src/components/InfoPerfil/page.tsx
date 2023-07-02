'use client';

import style from './style.module.css'
import Image from 'next/dist/client/image';
import Estudante from 'public/Estudante.jpg'
import BarraNavegacao from '../BarraNavegacao/page';


export default function InformacaoPerfil() {
    return (

        <div className={style.body}>

            <Image className={style.fotoperfil} src={Estudante} alt="Estudante" />

            <div className={style.info}>
                <p>Nome:<br />IFRN - Instituto Federal do Rio Grande do Norte</p><br />

                <p>Campus:<br />Pau Dos Ferros</p><br />

                <p>Email:</p><br />

                <p>Quantidade de livros:</p><br />

            </div>

        </div>


    )
}