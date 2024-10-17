import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBooks } from "../model/types";

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
        getBooks: builder.query<IBooks, void>({
            query: () => "api/books",
        }),
    }),
});

export const { useGetBooksQuery } = booksApi;
