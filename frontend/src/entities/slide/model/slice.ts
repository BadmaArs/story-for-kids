import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentQuiz } from "./types";
import { Lesson } from "@/entities/topic/model/types";

const initialState: CurrentQuiz = {
    currentQuiz: {
        id: null,
        body: null,
        title: null,
    },
};

const slideSlice = createSlice({
    name: "slide",
    initialState,
    reducers: {
        setQuiz(state, action: PayloadAction<Lesson>) {
            state.currentQuiz = action.payload
        },
    },
});

export const { setQuiz } = slideSlice.actions;
export default slideSlice.reducer;
