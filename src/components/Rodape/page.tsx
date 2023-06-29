import Image from "next/image"
import Logo from 'public/Logo.png'
import style from './style.module.css'

export default function Rodape() {
    return (
        <footer>
            <div className={style.secaologo}>
                <Image src={Logo} width={150} height={150} alt="Logo" />
                <div>
                    <h3>Serviços:</h3>
                </div>
                <div>
                    <p>Empréstimos</p>
                </div>
                <div>
                    <p>Consultas de Acervo</p>
                </div>
                <div>
                    <p>Cadastro de Livros</p>
                </div>
            </div>
        </footer>)
}