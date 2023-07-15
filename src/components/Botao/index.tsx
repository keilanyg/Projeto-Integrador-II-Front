import { ReactNode } from 'react';
import style from './style.module.css';

interface ButtonProps {
    children: ReactNode; /*Obrigatoria*/
    /*children?: ReactNode; Opcional*/
    type?: "submit" | "reset" | undefined

}

export default function Botao({ children, type }: ButtonProps) {
    return (
        <button className={style.botao} type={type}>
            {children}
        </button>
    )
}