import axios from "axios"

export const getOneProduct = async (id, callback) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        callback(response.data)
    } catch (error) {
        console.log(error)
    }
}