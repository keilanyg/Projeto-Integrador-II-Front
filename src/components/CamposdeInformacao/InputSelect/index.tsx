interface InputSelecaoProps {
    label: string;

}

/*Campos da página Perfil da Instituição*/
export default function InputSelecaoProps({ label }: InputSelecaoProps) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="text-sm text-gray-500" style={{ color: "#8c5c3d" }}>
                {label}
            </label>
            <select className="select select-bordered mt-2 w-80 
            rounded-lg border border-gray-200 bg-white py-2.5 
            text-gray-700 focus:border-blue-400 focus:outline-none 
            focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                style={{ border: "1px solid #8c5c3d" }}>
                <option disabled selected>Selecione</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Star Trek</option>
            </select>
        </div>
    )
}