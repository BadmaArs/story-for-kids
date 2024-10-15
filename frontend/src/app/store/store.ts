import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/shared/ui/counter";
import { setupListeners } from "@reduxjs/toolkit/query";
import { slideSlice } from "@/entities/slide";
import { indexSlideSlice } from "@/features/quiz-navigation";
import { bookmarkSlice } from "@/entities/bookmarks-collection";
import { booksApi } from "@/entities/books";
import { lessonsApi } from "@/entities/topic/api/lessons-api";

export function makeStore() {
    const store = configureStore({
        reducer: {
            count: counterSlice,
            quiz: slideSlice,
            indexCurrentSlide: indexSlideSlice,
            bookmark: bookmarkSlice,
            [lessonsApi.reducerPath]: lessonsApi.reducer,
            [booksApi.reducerPath]: booksApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(lessonsApi.middleware)
                .concat(booksApi.middleware),
    });
    setupListeners(store.dispatch);

    return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
