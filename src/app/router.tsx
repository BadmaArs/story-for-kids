import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { App } from "@/pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: "home", element: <App /> },
        ],
    },
]);
