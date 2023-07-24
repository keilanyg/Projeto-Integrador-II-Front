'use client';
import { ReactNode } from 'react';
import style from './style.module.css'

interface InfoProps {
    children: ReactNode; /*Obrigatoria*/
    /*children?: ReactNode; Opcional*/
}

export default function InformacaoLivro({ children }: InfoProps) {
    return (
        <div className={style.body}>
            <div className={style.info}>
                {children}
            </div>
        </div>
    )
}