import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunks";

interface Post {
    id: number;
    title: string;
    body: string;
}
interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}
const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchPosts.fulfilled,
                (state, action: PayloadAction<Post[]>) => {
                    state.loading = false;
                    state.posts = action.payload;
                },
            )
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default postsSlice.reducer;
