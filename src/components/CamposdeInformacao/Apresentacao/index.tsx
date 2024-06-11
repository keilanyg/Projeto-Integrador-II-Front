interface ApresentacaoProps {
    titulo: string;
    conteudo: string | number | Date;

}
/*Campos da página Perfil do Usuario*/
export default function ApresentacaoProps({ titulo, conteudo }: ApresentacaoProps) {
    return (
        <div>
            <div className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#4C3228" }}>
                {titulo}
            </div>
            <div className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }}>
                {conteudo}
            </div>
        </div>
    )
}