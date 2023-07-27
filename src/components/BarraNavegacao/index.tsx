import Image from "next/image"
import Logo from 'public/Logo.png'
import style from './style.module.css'

const Elementoaexibir = (x) => {
    /*Estiver autenticado*/
    if (x) {
        return <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Image src={Logo} alt="Estudante" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">Sair</a>
                </li>
            </ul>
        </div>;
    } else {
        return <div style={{ display: "flex" }}>
            <a href="/login" style={{ marginRight: "10px" }}>
                <h4>Entre  ou</h4>
            </a>

            <a href="/cadastro" style={{ marginRight: "10px" }}>
                <h4>Cadastre-se</h4>
            </a>

        </div>;
    }
};

export default function BarraNavegacao() {
    return (
        <header className={style.header}>
            <div className={style.secaologo}>
                <Image src={Logo} width={170} height={170} alt="Logo" />

                {Elementoaexibir(false)}
            </div>
            <div className={style.links}>
                <a href="/inicial">Inicio</a>
                <a href="/acervo">Biblioteca</a>
                <a href="/inicial/#quemsomos">Quem Somos</a>
                <a href="/perfildainstituicao/#perfil">Perfil</a>
            </div>
        </header>
    )
}
/*
  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={Logo} alt="Estudante" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">Sair</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="#">
                        <h4>Entre ou Cadastre-se</h4>
                    </a>
                </div>*/