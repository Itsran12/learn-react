import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { CardProduct } from "../components/fragments/CardProduct"
import { useLogin } from "../hooks/useLogin"
import { TableCart } from "../components/fragments/TabelCart"
import { Navbar } from "../components/layouts/Navbar"
import { DMContext } from "../context/DarkMode"

type Product = {
    id: number
    title: string
    description: string
    price: number
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const { isDarkMode } = useContext( DMContext )
    useLogin()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products")
                setProducts(response.data)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <>
            <Navbar />
            <div className={`flex mt-5 py-5 ${isDarkMode && "bg-slate-800"}`}>
                <div className="w-3/4 flex flex-wrap">
                    {products.map((prod) => (
                        <CardProduct
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            description={prod.description}
                            price={prod.price}
                            category={prod.category}
                            image={prod.image}
                        />
                    ))}
                </div>
                <TableCart products={products}/>
            </div>
        </>
    )
}
