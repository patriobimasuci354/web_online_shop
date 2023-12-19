import { useNavigate } from "react-router-dom"
import { getLogin } from "../../services/getLogin"
import Button from "../elements/button/button"
import Input from "../elements/input/input"
import Label from "../elements/label/label"

const AuthFragment = (props) => {
    const { button, register, buttonType } = props
    const navigate = useNavigate()

    const handleLoginButton = (event) => {
        event.preventDefault()
        const dataLogin = {
            username: event.target.name.value,
            password: event.target.password.value
        }
        getLogin(dataLogin, (token) => {
            localStorage.setItem('token', token)
            navigate('/products')
        })
    }

    return (
        <>
            <form onSubmit={handleLoginButton} >
                {register && (
                    <>
                        <Label label="email" css="mb-2 text-blue-800">Email :</Label>
                        <Input tipe="email" id="name" placeholder="Masukan Email.."></Input>
                    </>
                )
                }
                <Label htmlFor="name" css="mb-2 text-blue-800">Name :</Label>
                <Input tipe="text" id="name" placeholder="Masukan name.."></Input>
                <Label label="password" css="mt-3 text-blue-800">Password :</Label>
                <Input tipe="password" id="password" placeholder="Masukan Password.."></Input>
                <Button buttonType={buttonType} css="text-sm bg-blue-700 py-2 px-3 text-white w-full rounded-md mt-3">{button}</Button>
            </form>
        </>
    )
}
export default AuthFragment