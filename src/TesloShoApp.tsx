import { appRouter } from "./app.router"
import { RouterProvider } from "react-router";

export const TesloShoApp = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}

