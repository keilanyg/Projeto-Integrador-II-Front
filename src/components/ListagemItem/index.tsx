import { ReactNode } from 'react';
import Botao from '../Botao';

interface ListaProps {
    label: string;
}

export default function Listadoitem({ label }: ListaProps) {
    return (
        <div style={{ display: "flex", gap: "24px", flexDirection: "row", margin: "10px  8px" }}>
            <ul>
                <li>{label}</li>
            </ul>
            <Botao>Editar</Botao>
            <Botao>Excluir</Botao>
        </div>
    )
}
