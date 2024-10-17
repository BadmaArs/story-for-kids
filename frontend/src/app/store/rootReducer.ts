import { combineReducers } from "@reduxjs/toolkit";
import { bookmarkSlice } from "@/entities/bookmarks-collection";
import { booksApi } from "@/entities/books";
import { lessonsApi } from "@/entities/topic/api/lessons-api";
import { indexLessonAndSlideSlice } from "@/features/quiz-navigation";
import { slidesApi } from "@/pages/quiz";
import { counterSlice } from "@/shared/ui/counter";

export const rootReducer = combineReducers({
    count: counterSlice,
    indexCurrentLessonAndSlide: indexLessonAndSlideSlice,
    bookmark: bookmarkSlice,
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [slidesApi.reducerPath]: slidesApi.reducer,
});
