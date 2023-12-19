import { Link } from "react-router-dom"
import AuthFragment from "../fragments/authFragment"

const AuthLayout = (props) => {
    const { path, signinout, title, dont, button, register, buttonType } = props
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-[24rem] w-full p-3 border-2 border-blue-800 rounded-md">
                <h1 className="text-3xl font-bold text-blue-800">{title || `text`}</h1>
                <p className="text-xs my-2 mb-4">Please entry your detail </p>
                <AuthFragment button={button} register={register} buttonType={buttonType}></AuthFragment>
                <p className="text-xs mt-3">{dont} Have an account ? <Link className="text-blue-600 underline" to={path || `/#`}>{signinout || "test"}</Link></p>
            </div>
        </div>
    )
}
export default AuthLayout