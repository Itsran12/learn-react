import React from "react"

interface LabelProps {
    htmlFor     : string
    children    : string
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children, }) => {
    return (
        <label 
        htmlFor={htmlFor}
        className="block text-slate-700 text-sm font-bold mb-2"
        >
            {children}
        </label>
    )
}