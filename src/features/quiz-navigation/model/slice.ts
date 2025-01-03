import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndexCurrentSlide {
    indexCurrentSlide: number;
    indexCurrentLesson: number;
    indexCurrentBook: number;
    indexCurrentImage: number;
}

const initialState: IndexCurrentSlide = {
    indexCurrentSlide: 1,
    indexCurrentLesson: 0,
    indexCurrentBook: 0,
    indexCurrentImage: 0,
};

const indexLessonAndSlideSlice = createSlice({
    name: "current-slice",
    initialState,
    reducers: {
        setIndexCurrentSlide(state, actions: PayloadAction<number>) {
            state.indexCurrentSlide = actions.payload;
        },
        setIndexCurrentLesson(state, actions: PayloadAction<number>) {
            state.indexCurrentLesson = actions.payload;
        },
        setIndexCurrentBook(state, actions: PayloadAction<number>) {
            state.indexCurrentBook = actions.payload;
        },
        setIndexCurrentImage(state, actions: PayloadAction<number>) {
            state.indexCurrentImage = actions.payload;
        },
    },
});

export const {
    setIndexCurrentSlide,
    setIndexCurrentLesson,
    setIndexCurrentBook,
    setIndexCurrentImage,
} = indexLessonAndSlideSlice.actions;
export default indexLessonAndSlideSlice.reducer;
