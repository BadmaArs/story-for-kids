import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentQuiz } from "./types";
import { Lesson } from "@/entities/topic/model/types";

// Моковоые данные которые будут приходить из сервера, изначальный их state должен быть null
// state получает данные о текущей теме урока, изменяется при переходе на новую тему

const initialState: CurrentQuiz = {
    currentQuiz: {
        id: null,
        body: null,
        title: null,
    },
    slides: [
        {
            type_slide: "image-text",
            text: "asd",
            media: "nameImage1",
            questions: null,
        },
        {
            type_slide: "text",
            text: "asd",
            media: "nameImage2",
            questions: null,
        },
        {
            type_slide: "image",
            text: "asd",
            media: "nameImage3",
            questions: null,
        },
        {
            type_slide: "video",
            text: "asd",
            media: "nameImage4",
            questions: null,
        },
        {
            type_slide: "video-text",
            text: "asd",
            media: "nameImage5",
            questions: null,
        },
        {
            type_slide: "questions",
            text: "Вопросы",
            questions: [
                {
                    question: "Какой язык используется для веб-разработки?",
                    options: ["HTML", "Python", "Java", "C++", "Ruby"],
                    correctAnswer: "HTML",
                },
                {
                    question: "Что такое React?",
                    options: [
                        "Библиотека",
                        "Язык программирования",
                        "Фреймворк",
                        "Система управления базами данных",
                        "Операционная система",
                    ],
                    correctAnswer: "Библиотека",
                },
                {
                    question: "Что такое Redux?",
                    options: [
                        "База данных",
                        "Менеджер состояния",
                        "Сервер",
                        "Язык программирования",
                        "Фреймворк",
                    ],
                    correctAnswer: "Менеджер состояния",
                },
            ],
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
