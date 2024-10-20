import { RootState } from "@/app/store";

export const selectIndexLesson = (state: RootState) =>
    state.indexCurrentLessonAndSlide.indexCurrentLesson;

export const selectIndexSlide = (state: RootState) =>
    state.indexCurrentLessonAndSlide.indexCurrentSlide;

export const selectIndexBook = (state: RootState) =>
    state.indexCurrentLessonAndSlide.indexCurrentBook;

export const selectIndexImage = (state: RootState) => 
    state.indexCurrentLessonAndSlide.indexCurrentImage