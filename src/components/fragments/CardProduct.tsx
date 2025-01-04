import React from "react"
import { Button } from "../elements/Button"
import { Link } from "react-router-dom"
import { addToCart } from "../../features/counter/counterSlice"
import { useDispatch } from "react-redux"

interface CardProductProps {
    id: number
    title: string
    description: string
    price: number
    category: string
    image: string
}

export const CardProduct: React.FC<CardProductProps> = ({ id, title, description, price, category, image }) => {
    const dispatch = useDispatch()

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ml-10 my-3">
            <Link to={`/detail/${id}`}>
                <img src={image} alt={title} className="w-full h-56 object-cover" />
            </Link>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{title.substring(0, 21)}...</h3>
                <h2 className="text-sm text-gray-800 mb-3">{description.substring(0, 90)}...</h2>
                <p className="text-gray-600 mb-2">{category}</p>
                <div className="text-gray-600 mb-3">
                    <span className="text-lg font-bold">
                        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </span>
                </div>
                <Button
                    type="button"
                    onClick={() => dispatch(addToCart({id, qty: 1}))}
                    className="font-semibold text-white h-10 inline-block px-6 rounded-md bg-blue-600 w-full hover:bg-blue-700"
                >
                    Add to cart
                </Button>
            </div>
        </div>
    )
}
