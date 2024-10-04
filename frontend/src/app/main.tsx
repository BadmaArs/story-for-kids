import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { Provider } from "react-redux";
import { appStore } from "./store";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <Provider store={appStore}>
        <RouterProvider router={router} />
    </Provider>,
);
