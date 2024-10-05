import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsApi } from "../api/posts-api";

export const fetchLessons = createAsyncThunk(
    "posts/fetchPosts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await postsApi.getPosts();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    },
);
