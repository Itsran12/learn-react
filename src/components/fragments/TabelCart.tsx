import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

interface Product {
    id: number
    title: string
    price: number
}

interface CartItem {
    id: number
    qty: number
}

interface TableCartProps {
    products: Product[]
}

export const TableCart: React.FC<TableCartProps> = ({ products }) => {
    const cart = useSelector((state: RootState) => state.counter.data as CartItem[])
    const [totalCount, setTotalCount] = useState<number>(0)
    const totalAmountRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const total = cart.reduce((sum, item) => {
            const product = products.find((p) => p.id === item.id)
            return sum + (product?.price || 0) * item.qty
        }, 0)
        setTotalCount(total)
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart, products])

    useEffect(() => {
        if (totalAmountRef.current) {
            totalAmountRef.current.style.display = cart.length > 0 ? "block" : "none"
        }
    }, [cart])

    return (
        <div className="w-1/3 max-h-[500px] rounded-xl shadow-lg overflow-auto mr-10 mt-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <p className="text-3xl font-bold text-white tracking-tight">
                    Shopping Cart
                </p>
                <p className="text-blue-100 mt-1 text-sm">Your selected items</p>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-4 px-4 text-left text-sm uppercase tracking-wider font-semibold text-gray-600">
                            Product
                        </th>
                        <th className="py-4 px-4 text-left text-sm uppercase tracking-wider font-semibold text-gray-600">
                            Price
                        </th>
                        <th className="py-4 px-4 text-left text-sm uppercase tracking-wider font-semibold text-gray-600">
                            Qty
                        </th>
                        <th className="py-4 px-4 text-right text-sm uppercase tracking-wider font-semibold text-gray-600">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {cart.map((item) => {
                        const product = products.find((prod) => prod.id === item.id)
                        if (!product) return null
                        return (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-4">
                                    <div className="font-medium text-gray-900">
                                        {product.title.substring(0, 20)}...
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-gray-600">
                                    {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                </td>
                                <td className="py-4 px-4">
                                    <span className="inline-flex items-center justify-center h-6 min-w-[2.5rem] px-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                                        {item.qty}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-right font-medium text-gray-900">
                                    {(item.qty * product.price).toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="p-6">
                <div className="mt-6 pt-6 border-t border-gray-200" ref={totalAmountRef}>
                    <div className="flex items-center justify-between">
                        <div className="text-gray-600">Total Amount</div>
                        <div className="text-2xl font-bold text-blue-600">
                            {totalCount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}