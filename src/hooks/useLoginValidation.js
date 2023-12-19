import { useNavigate } from "react-router-dom"

export const useLoginValidation = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if (!token) {
        navigate('/login')
    }
}