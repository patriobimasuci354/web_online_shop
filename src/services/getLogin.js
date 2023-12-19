import axios from "axios"

export const getLogin = async (dataLogin, callback) => {
    try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', dataLogin)
        callback(response.data.token)
    } catch (error) {
        console.log(error)
    }
}