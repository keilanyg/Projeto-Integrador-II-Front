import Image from "next/image"
import Logo from 'public/Logo.png'
import style from './style.module.css'

export default function BarraNavegacao() {
    return (
        <header className={style.header}>
            <div className={style.secaologo}>
                <Image src={Logo} width={170} height={170} alt="Logo" />
            </div>
            <div className={style.links}>
                <a href="#">Inicio</a>
                <a href="#">Biblioteca</a>
                <a href="#">Instituições</a>
                <a href="#">Perfil</a>

            </div>
        </header>)
}