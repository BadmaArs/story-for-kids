import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook, IBooks } from "../model/types";

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

// books
//

// Получение всех уроков
// /api/books/1?populate=lessons

// Получение всех слайдов
// /api/books/1?populate[lessons][populate]=slides

// Рабочая пагинация
// /api/slides?pagination[start]=0&pagination[limit]=3

// Пагинация на конкретном уроке
// /api/slides?filters[lesson]=1&pagination[start]=0&pagination[limit]=1

// /api/books?filters[id]=2 получаю книгу по id
