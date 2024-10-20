import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { booksApi } from "@/entities/books";
import { lessonsApi } from "@/entities/topic/api/lessons-api";
import { slidesApi } from "@/pages/quiz";
import { rootReducer } from "./rootReducer";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [
        lessonsApi.reducerPath,
        booksApi.reducerPath,
        slidesApi.reducerPath,
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore() {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
            })
                .concat(lessonsApi.middleware)
                .concat(booksApi.middleware)
                .concat(slidesApi.middleware),
    });
    setupListeners(store.dispatch);
    return store;
}

export const appStore = makeStore();
export const persistor = persistStore(appStore);

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
