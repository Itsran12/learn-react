import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
console.log("oncreate state : ", store.getState())

store.subscribe(() => {
    console.log("STORE_CHANGE : ", store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch