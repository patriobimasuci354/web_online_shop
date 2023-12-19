import { configureStore } from "@reduxjs/toolkit";
import dataCart from "./actions/dataCart";

const store = configureStore({
    reducer: {
        dataCart: dataCart
    }
})
console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

export default store