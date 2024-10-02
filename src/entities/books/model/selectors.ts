import { RootState } from "@/app/store";

export const selectBook = (state: RootState) => state.books.books;
