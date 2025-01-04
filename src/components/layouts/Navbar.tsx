import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import { Button } from "../elements/Button"
import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"

interface RootState {
    counter: {
        data: CartItem[]
    }
}

interface CartItem {
    qty: number
}

export const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state: RootState) => state.counter.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])

    const handleLogout = (): void => {
        localStorage.removeItem("token")
        window.location.href = "/"
    }
    
    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {username ? (
                <span className="mr-5">{username}</span>
            ) : (
                <span className="mr-5">Loading...</span>
            )}
            <div className="flex items-center md-5 mr-3">
                <ShoppingCart className="mr-3"/>
                {totalCart}
            </div>
            <Button
                type="button"
                className="h-10 px-6 font-semibold rounded-md bg-slate-800 text-white hover:bg-slate-700"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    )
}