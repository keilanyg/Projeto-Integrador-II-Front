import Image from "next/image"
import style from './style.module.css'
import Estudante from 'public/Estudante.jpg'
import Botao from "../Botao/page"


export default function Livro() {
    return (
        <div className={style.body}>
            <div className={style.livro}>
                <div className={style.infolivro}>
                    <br /><Image className={style.imagemlivro} src={Estudante} alt="Estudante" />
                    <div className={style.titulo}>
                        <p>IFRN</p>
                        <Botao>Acessar</Botao>
                    </div>
                </div>
            </div>
        </div>
    )
}