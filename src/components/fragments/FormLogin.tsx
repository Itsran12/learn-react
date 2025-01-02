import React, { useState } from "react"
import { InputForm } from "../elements/InputForm"
import { Button } from "../elements/Button"

export const FormLogin = () => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const usernameInput = form.elements.namedItem("username") as HTMLInputElement | null
        const passwordInput = form.elements.namedItem("password") as HTMLInputElement | null

        if (!usernameInput?.value || !passwordInput?.value) {
            setError("Username dan Password harus diisi!")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: usernameInput.value,
                    password: passwordInput.value,
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || "Login gagal. Periksa username dan password Anda.")
            }

            const data = await response.json()
            console.log("Response Data:", data)
            localStorage.setItem("token", data.token)
            window.location.href = "/product"

        } catch (err: any) {
            setError(err.message || "Terjadi kesalahan saat login.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <InputForm
                name="username"
                label="Username"
                type="text"
                placeholder="Enter your username"
            />

            <InputForm
                name="password"
                label="Password"
                type="password"
                placeholder="********"
            />

            <Button
                type="submit"
                className={`h-10 px-6 font-semibold rounded-md w-full text-white ${
                    loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={loading}
            >
                {loading ? "Loading..." : "Login"}
            </Button>
        </form>
    )
}
