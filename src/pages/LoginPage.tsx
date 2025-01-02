import { AuthLayout } from "../components/layouts/AuthLayout"
import { FormLogin } from "../components/fragments/FormLogin"

export const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    )
}