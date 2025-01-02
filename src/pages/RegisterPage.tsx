import { AuthLayout } from "../components/layouts/AuthLayout"
import { FormRegister } from "../components/fragments/FormRegister"

export const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister />
        </AuthLayout>
    )
}