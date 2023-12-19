import AuthLayout from "../components/layouts/authlayout"

const LoginPage = () => {
    return (
        <>
            <AuthLayout path="/register" signinout="Sign up" title="Login" dont="Don't" button="Login" buttonType="submit"></AuthLayout>
        </>
    )
}

export default LoginPage