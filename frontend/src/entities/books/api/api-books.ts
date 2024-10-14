import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiToken = import.meta.env.VITE_API_GET_BOOKS_TOKEN;

export const booksApi = createApi({
    reducerPath: "booksApi",
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
        getBooks: builder.query<any, void>({
            query: () => "/api/books/1?populate[lesson]=1[slides]",
        }),
    }),
});

export const { useGetBooksQuery } = booksApi;

// Получение всех уроков
// /api/books/1?populate=lessons

// Получение всех слайдов
// /api/books/1?populate[lessons][populate]=slides

//
