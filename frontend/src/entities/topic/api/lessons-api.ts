import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LessonsData } from "../model/types";

const apiToken = import.meta.env.VITE_API_GET_BOOKS_TOKEN;

export const lessonsApi = createApi({
    reducerPath: "lessonsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://kalmykhistory.ru/strapi",
        prepareHeaders: (headers) => {
            if (apiToken) {
                headers.set("Authorization", `Bearer ${apiToken}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getLessons: builder.query<LessonsData, { bookId: number | null }>({
            query: ({ bookId }) => `api/books/${bookId}?populate=lessons`,
        }),
    }),
});

export const { useGetLessonsQuery } = lessonsApi;

