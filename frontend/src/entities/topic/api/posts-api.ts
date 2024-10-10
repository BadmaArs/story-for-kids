import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { Lesson } from "../model/types";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Lesson[], void>({
            query: () => "/posts",
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
