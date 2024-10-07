import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/shared/ui/counter";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lessonSlice } from "@/entities/topic";
import { slideSlice } from "@/entities/slide";
import { indexSlideSlice } from "@/features/quiz-navigation";

export function makeStore() {
    const store = configureStore({
        reducer: {
            count: counterSlice,
            lesson: lessonSlice,
            quiz: slideSlice,
            indexCurrentSlide: indexSlideSlice,
        },
    });
    setupListeners(store.dispatch);

    return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
