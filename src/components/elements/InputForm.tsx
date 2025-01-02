import React from "react"
import { Label } from "./Label"
import { Input } from "./Input"

interface InputFormProps {
    label       : string
    name        : string
    type        : string 
    placeholder : string
}

export const InputForm: React.FC<InputFormProps> = ({ label, name, type, placeholder }) => {
    return (
        <div className="mb-6">
        <Label htmlFor="input form">
            {label}
        </Label>
        <Input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}