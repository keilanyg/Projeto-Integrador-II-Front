import { ReactNode } from 'react';
import style from './style.module.css';

interface ButtonProps {
    children: ReactNode; /*Obrigatoria*/
    /*children?: ReactNode; Opcional*/
    type?: "submit" | "reset" | undefined;
    funcao?: () => void
}

export default function Botao({ children, type, funcao }: ButtonProps) {
    return (
        <button className={style.botao} type={type} onClick={funcao}>
            {children}
        </button>
    )
}