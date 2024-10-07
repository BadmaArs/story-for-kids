import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentQuiz } from "./types";
import { Lesson } from "@/entities/topic/model/types";

const initialState: CurrentQuiz = {
    currentQuiz: {
        id: null,
        body: null,
        title: null,
    },
    slides: [
        {
            type_slide: "image-text",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage1",
        },
        {
            type_slide: "text",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage2",
        },
        {
            type_slide: "image",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage3",
        },
        {
            type_slide: "video",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage4",
        },
        {
            type_slide: "video-text",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage5",
        },
    ],
};

const slideSlice = createSlice({
    name: "slide",
    initialState,
    reducers: {
        setQuiz(state, action: PayloadAction<Lesson>) {
            state.currentQuiz = action.payload;
        },
    },
});

export const { setQuiz } = slideSlice.actions;
export default slideSlice.reducer;
