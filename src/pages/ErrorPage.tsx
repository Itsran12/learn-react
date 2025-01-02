import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError() as { statusText: string, message?: string }

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}