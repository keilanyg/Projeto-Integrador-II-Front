import { ReactNode } from 'react';
import style from './style.module.css';

interface ButtonProps {
    children: ReactNode; /*Obrigatoria*/
    /*children?: ReactNode; Opcional*/
}

export default function Botao({ children }: ButtonProps) {
    return (
        <button className={style.botao}>
            {children}
        </button>
    )
}