import React from "react"

interface ButtonProps {
    type        : "button" | "submit" | "reset"
    children    : string
    className   : string
    onClick     : (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({ type, children, className, onClick }) => {
    return(
        <button
        type={type}
        className={className}
        onClick={onClick}
        >
            {children}
        </button>
    )
}