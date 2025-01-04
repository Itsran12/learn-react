import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartItem {
    id: number;
    qty: number;
}

interface CounterState {
    data: CartItem[] 
}

let cartData: CartItem[] = []
try {
    const storeData = localStorage.getItem("cart")
    cartData = storeData ? JSON.parse(storeData) : [] 
} catch (error) {
    console.error("Failed to parse cart data from localStorage:", error)
}

const initialState: CounterState = {
    data: cartData
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.data.find((item) => item.id === action.payload.id)
            if(existingItem) {
                existingItem.qty++
            }else {
                state.data.push(action.payload)
            }
        }
    }
})

export const { addToCart } = counterSlice.actions
export default counterSlice.reducer
