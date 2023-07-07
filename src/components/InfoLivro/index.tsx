'use client';
import { ReactNode } from 'react';
import style from './style.module.css'
import Image from 'next/dist/client/image';
import Estudante from 'public/Estudante.jpg'

interface InfoProps {
    children: ReactNode; /*Obrigatoria*/
    /*children?: ReactNode; Opcional*/
}

export default function InformacaoLivro({ children }: InfoProps) {
    return (

        <div className={style.body}>

            <Image className={style.fotoperfil} src={Estudante} alt=" " />

            <div className={style.info}>
                {children}
            </div>
        </div>


    )
}