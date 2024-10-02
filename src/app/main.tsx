import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./router";
import { Provider } from "react-redux";
import { appStore } from "./store";

createRoot(document.getElementById("root")!).render(
    <Provider store={appStore}>
        <RouterProvider router={router} />
    </Provider>,
);
