import { baseApi } from "@/shared/api";

export const postsApi = {
    getPosts: () => baseApi.get("/posts"),
};
