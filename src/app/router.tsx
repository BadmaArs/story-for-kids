import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { App, Lesson, Quiz } from "@/pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: "home", element: <App /> },
            { path: "lesson", element: <Lesson /> },
            { path: "quiz", element: <Quiz /> },
        ],
    },
]);
