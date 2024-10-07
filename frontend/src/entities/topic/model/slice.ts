import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLessons } from "./thunks";
import { LessonsState, Lesson } from "./types";

export const initialState: LessonsState = {
    lessons: [],
    loading: false,
    error: null,
};

const lessonsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLessons.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchLessons.fulfilled,
                (state, action: PayloadAction<Lesson[]>) => {
                    state.loading = false;
                    state.lessons = action.payload;
                },
            )
            .addCase(fetchLessons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default lessonsSlice.reducer;
