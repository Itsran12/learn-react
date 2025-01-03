import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Star, Tag, ShoppingCart, Loader, Heart } from "lucide-react"
import axios from "axios"

type ProductProps = {
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

export const DetailProductPage = () => {
    const [product, setProduct] = useState<ProductProps | null>(null)
    const { id } = useParams()
    
    console.log(product)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<ProductProps>(`https://fakestoreapi.com/products/${id}`)
                setProduct(response.data)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchProducts()
    }, [id])

    if(!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <Loader className="h-12 w-12 text-blue-600 animate-spin mb-4" />
                <p className="text-gray-500 text-lg">Loading product details...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                
                <div className="sm:w-1/2 w-full bg-gray-100 p-6 flex items-center justify-center">
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
                    />
                </div>
                
                <div className="p-6 sm:w-1/2 w-full">
                    <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>
                    <Heart className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
                    </div>
                    <p className="text-gray-600 mt-3">{product.description}</p>
                    <div className="flex items-center mt-6 space-x-4">
                    <p className="text-xl font-bold text-gray-800">${product.price}</p>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <Tag className="h-5 w-5" />
                        <span className="capitalize">{product.category}</span>
                    </div>
                    </div>
                    <div className="flex items-center mt-4 space-x-1 text-yellow-500">
                    {[...Array(Math.round(product.rating.rate))].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                        ({product.rating.count} reviews)
                    </span>
                    </div>
                    <button className="mt-6 flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}