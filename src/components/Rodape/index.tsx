import Image from "next/image"
import LogoR from 'public/LogoR.png'
import style from './style.module.css'

export default function Rodape() {
    return (
        <footer className={style.footer}>
            <div className={style.secaologo}>
                <Image src={LogoR} width={140} height={140} alt="Logo" />
                <div>
                    <p>Empréstimos</p>
                </div>
                <div>
                    <p>Consultas de obras</p>
                </div>
                <div>
                    <p>Controle de Acervo</p>
                </div>
            </div>
        </footer>
        )
}