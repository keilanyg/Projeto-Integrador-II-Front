import Image from "next/image"
import style from './style.module.css'
import Estudante from 'public/Estudante.jpg'


export default function Instituto() {
    return (
        <div className={style.instituicoes}>
            <div className={style.infoinstituto}>
                <br /><Image className={style.imageminstituicao} src={Estudante} alt="Estudante" />
                <div className={style.detalheinfor}>
                    <p>IFRN</p>
                    <p>Pau dos Ferros</p>
                </div>
            </div>
        </div>
    )
}