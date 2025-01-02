import { InputForm } from "../elements/InputForm"
import { Button } from "../elements/Button"

export const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
            name="username" 
            label="Username" 
            type="username" 
            placeholder="Insert your username" />

            <InputForm 
            name="email" 
            label="Email" 
            type="email" 
            placeholder="example@gmail.com" />

            <InputForm
            name="passsword" 
            label="Passsword" 
            type="passsword" 
            placeholder="********" />

            <Button type="submit" className="h-10 px-6 font-semibold rounded-md bg-blue-600 w-full text-white hover:bg-blue-700"> Register </Button>
        </form>
    )
}