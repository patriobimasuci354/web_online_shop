import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { tokenCompiler } from "../../services/tokenCompile"

const HeaderLayout = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState({})
    const dataCarts = useSelector(state => state.dataCart.data)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            tokenCompiler(token, (dataToken) => {
                setToken(dataToken)
            })
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className="fixed top-0 left-0 right-0 bg-slate-800 flex justify-between items-center h-14 px-5">
            <a href="/products" className="text-2xl text-white font-bold italic tracking-widest">Sigma Store</a>
            <div className="h-[70%] text-white flex item-center">
                <div className="me-3 border-r-2 border-white pe-3">
                    <h1 className="font-bold">{token.user}</h1>
                    <h4 className="text-xs">{token.iat}</h4>
                </div>
                <div className="flex flex-col items-center">
                    <h1>Cart : {dataCarts.length || 0}</h1>
                    <a href="/cart" className="bg-blue-600 px-3 rounded-md text-xs">Check</a>
                </div>
                <button onClick={handleLogout} className="bg-black ms-4 px-2 rounded-md flex flex-col items-center">
                    <p className="text-sm">Log</p>
                    <p className="text-xs">out</p>
                </button>
            </div>
        </div>
    )
}
export default HeaderLayout