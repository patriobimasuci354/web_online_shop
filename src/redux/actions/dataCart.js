import { createSlice } from "@reduxjs/toolkit";


const dataCart = createSlice({
    name: 'dataCart',
    initialState: {
        data: JSON.parse(localStorage.getItem('dataCarts')) || []
    },
    reducers: {
        addDataCart(state, action) {
            alert('Berhasil di tambah ke keranjang')
            const duplikat = state.data.find(e => e.id === action.payload.id)
            if (duplikat) {
                duplikat.qwt += 1
            } else {
                const data = {
                    id: action.payload.id,
                    image: action.payload.image,
                    title: action.payload.title,
                    price: 100000 * action.payload.id,
                    qwt: 1,
                    rating: action.payload.rating,
                    total: 0
                }
                state.data.push(data)
            }

            localStorage.setItem('dataCarts', JSON.stringify(state.data))
            return state
        },
        deleteDataCart(state, action) {
            const check = window.confirm('Yakin ingin menghapus ?')
            if (check) {
                const newState = state.data.filter(e => e.id !== action.payload)
                localStorage.removeItem('dataCarts')
                localStorage.setItem('dataCarts', JSON.stringify(newState))
                return {
                    data: newState
                }
            } else {
                return state
            }

        }
    }
})

export const { addDataCart, deleteDataCart } = dataCart.actions
export default dataCart.reducer