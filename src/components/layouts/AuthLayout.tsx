import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { DMContext } from "../../context/DarkMode"
import { Button } from "../elements/Button"
import { Sun, Moon } from "lucide-react"

interface AuthLayoutProps {
    children    : React.ReactNode
    title       : string
    type        : string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, type }) => {
    const { isDarkMode, setIsDarkMode } = useContext( DMContext )
    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
            <div className="w-full max-w-xs">
                <Button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? <Sun /> : <Moon />}
                </Button>
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-3">
                    Welcome, please enter your detail
                </p>
                {children}
                <p className="text-sm mt-5 text-center">
                    {type === "login" ? "Don't have an account? " : "Already have an account?"}
                    
                    {type === "login" && (
                        <Link to="/register" className="font-bold text-blue-600"> Register </Link> 
                    )}

                    {type === "register" && (
                        <Link to="/" className="font-bold text-blue-600"> Login </Link> 
                    )}
                </p>
            </div>
        </div>
    )
}