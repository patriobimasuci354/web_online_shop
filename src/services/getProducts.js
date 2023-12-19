import axios from "axios"
export const getProducts = async (callback) => {
    try {
        const data = await axios.get('https://fakestoreapi.com/products')
        callback("succes", data.data)
    } catch (error) {
        callback("failed", error)
    }
}