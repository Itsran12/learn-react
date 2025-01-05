import React, { createContext, SetStateAction, useState, Dispatch } from "react"

interface DarkModeContextProps {
    children: React.ReactNode
}

interface DarkModeContextType {
    isDarkMode: boolean
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

const DarkModeContext = createContext<DarkModeContextType>({
    isDarkMode: false,
    setIsDarkMode: () => {},
})

export const DarkMode: React.FC<DarkModeContextProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const DMContext = DarkModeContext

