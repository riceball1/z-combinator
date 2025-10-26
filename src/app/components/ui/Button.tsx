
interface ButtonProps { text: string, isPrimary?: boolean, onClick?: () => void }


export default function Button({ text, isPrimary, onClick }: ButtonProps) {
    return (
        <button className={isPrimary ? "bg-green-800 text-white px-8 py-3 rounded hover:bg-green-900 transition-colors" : "border border-gray-300 text-black px-8 py-3 rounded hover:bg-gray-50 transition-colors"} onClick={onClick} >
            {text}
        </button>
    )
}