
interface InputProps {
    type: string;
    label: string;

}
export default function InputProps({ type, label }: InputProps) {
    return (
        <div>
            <label className=" text-sm text-gray-500 dark:text-gray-500" style={{ color: "#4C3228" }}>{label}</label><br />
            <input type={type} className=" mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" style={{ border: "1px solid #8c5c3d" }} />
        </div>
    )
}