import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLessons } from "./thunks";

interface Post {
    id: number;
    title: string;
    body: string;
}
interface LessonsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}
const initialState: LessonsState = {
    posts: [],
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
                (state, action: PayloadAction<Post[]>) => {
                    state.loading = false;
                    state.posts = action.payload;
                },
            )
            .addCase(fetchLessons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default lessonsSlice.reducer;
