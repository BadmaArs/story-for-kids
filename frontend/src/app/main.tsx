import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { router } from "./router";
import { appStore, persistor } from "./store";
import "./index.css";
import { Loader } from "@/shared/ui/loader";

createRoot(document.getElementById("root")!).render(
    <Provider store={appStore}>
        <PersistGate loading={<Loader />} persistor={persistor}>
        <RouterProvider router={router} />
        </PersistGate>
    </Provider>,
);
