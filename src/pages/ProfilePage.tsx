import { useLogin } from "../hooks/useLogin"


export const ProfilePage = () => {
    const username = useLogin()
    return (
        <div>
            <p>
            username : {username}
            </p>
        </div>
    )
}