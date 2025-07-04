type InputProps = {
    type?: string
    placeholder?: string
    defaultValue?: string
    className?: string
}

export default function Input({ type = "text", placeholder = "", defaultValue = "", className = "" }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={`w-full rounded-md border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-neutral-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-700 ${className}`}
        />
    );
}

