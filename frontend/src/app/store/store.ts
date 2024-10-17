import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { booksApi } from "@/entities/books";
import { lessonsApi } from "@/entities/topic/api/lessons-api";
import { slidesApi } from "@/pages/quiz";
import { rootReducer } from "./rootReducer";

export function makeStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(lessonsApi.middleware)
                .concat(booksApi.middleware)
                .concat(slidesApi.middleware),
    });
    setupListeners(store.dispatch);

    return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
