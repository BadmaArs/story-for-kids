import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Slides } from "@/entities/slide/model/types";

const apiToken = import.meta.env.VITE_API_GET_BOOKS_TOKEN;

export const slidesApi = createApi({
    reducerPath: "slidesApi",
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
        getSlides: builder.query<
            Slides,
            { lessonId: number; slideIdx: number }
        >({
            query: ({ lessonId, slideIdx }) =>
                `/api/slides?filters[lesson][id]=${lessonId}&sort[1]=number:asc&pagination[page]=${slideIdx}&pagination[pageSize]=1&populate=*`,
        }),
    }),
});

export const { useGetSlidesQuery } = slidesApi;

// /api/slides?filters[lesson][id]=${lessonId}&sort[1]=number:asc&pagination[page]=${slideIdx}&pagination[pageSize]=1
