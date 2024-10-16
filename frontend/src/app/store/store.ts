import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/shared/ui/counter";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { slideSlice } from "@/entities/slide";
import { bookmarkSlice } from "@/entities/bookmarks-collection";
import { booksApi } from "@/entities/books";
import { lessonsApi } from "@/entities/topic/api/lessons-api";
import { slidesApi } from "@/pages/quiz";
import { indexLessonAndSlideSlice } from "@/features/quiz-navigation";

export function makeStore() {
    const store = configureStore({
        reducer: {
            count: counterSlice,
            // quiz: slideSlice,
            indexCurrentLessonAndSlide: indexLessonAndSlideSlice,
            bookmark: bookmarkSlice,
            [lessonsApi.reducerPath]: lessonsApi.reducer,
            [booksApi.reducerPath]: booksApi.reducer,
            [slidesApi.reducerPath]: slidesApi.reducer,
        },
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
