
import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Rodape from "@/components/Rodape/index";
import Image from "next/image";

export default function PerfilUsuario() {
    return (

        <div className={style.body}>
            <BarraNavegacao />
            <br />
            <div className={style.fotoperfil}>
                <div>
                    <Image src={''} width={200} height={200} alt='' />
                </div>
                <div className={style.info}>
                    <p>Nome: IFRN - Instituto Federal do Rio Grande do Norte</p><br />

                    <p>Campus: Pau Dos Ferros</p><br />

                    <p>Email: </p><br />
                </div>
            </div>

            <section className="container px-4 mx-auto">
                <h2 className={style.titulo}>Meus Empréstimos</h2>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">

                                <table className="min-w-full divide-y divide-gray-400 ">
                                    <thead className="bg-gray-50 ">
                                        <tr>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                Nome do livro
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                Data de empréstimo
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-700">
                                                Data de devolução
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <h4 className="text-gray-700">NOME DO LIVRO</h4>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <h4 className="text-gray-700">DATA EMPRESTIMO</h4>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <h4 className="text-gray-700">DATA DEVOLUÇÃO</h4>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section><br />

            <Rodape />
        </div>
    )
}