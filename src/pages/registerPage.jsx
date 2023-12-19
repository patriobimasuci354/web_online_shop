import AuthLayout from "../components/layouts/authlayout"

const RegisterPage = () => {
    return (
        <AuthLayout path="/login" signinout="Sign in" title="Register" button="Register" register="yes"></AuthLayout>
    )
}

export default RegisterPage