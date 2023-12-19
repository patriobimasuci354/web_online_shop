import { jwtDecode } from "jwt-decode"

export const tokenCompiler = (dataToken, callback) => {
    const token = jwtDecode(dataToken)
    callback(token)
}