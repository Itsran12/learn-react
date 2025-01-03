import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

interface DecodedToken {
    user: string
}

export const useLogin = () => {
    const [username, setUsername] = useState<string | null>(null)
    useEffect(() => {
        const validateToken = () => {
            const token = localStorage.getItem("token")
            console.log("Token:", token)

            if (!token) {
                window.location.href = "/"
                return
            }

            try {
                const decoded = jwtDecode<DecodedToken>(token)
                console.log("Decoded token:", decoded)

                if (!decoded.user) {
                    console.error("Username not found in token")
                    return
                }

                setUsername(decoded.user)
            } catch (error) {
                console.error("Invalid token:", error)
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        }
        validateToken()
    }, [])
    return username
}