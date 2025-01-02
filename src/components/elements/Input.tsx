import React from "react"

interface InputProps {
    type        : string
    name        : string
    placeholder : string
}

export const Input: React.FC<InputProps> = ({ type, name, placeholder }) => {
    return (
        <input 
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" />
    )
}