import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/shared/ui/counter";
import { setupListeners } from "@reduxjs/toolkit/query";
import { slideSlice } from "@/entities/slide";
import { indexSlideSlice } from "@/features/quiz-navigation";
import { postsApi } from "@/entities/topic/api/posts-api";

export function makeStore() {
    const store = configureStore({
        reducer: {
            count: counterSlice,
            quiz: slideSlice,
            indexCurrentSlide: indexSlideSlice,
            [postsApi.reducerPath]: postsApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postsApi.middleware),
    });
    setupListeners(store.dispatch);

    return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
