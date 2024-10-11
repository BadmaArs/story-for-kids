import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookmarkMaterial, BookmarkMaterialArray } from "./types";

const initialState: BookmarkMaterialArray = {
    bookmarkMaterials: [],
};

const bookmarkSlide = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        addNewBookmark(state, actions: PayloadAction<BookmarkMaterial>) {
            state.bookmarkMaterials.push(actions.payload);
        },
    },
});

export const { addNewBookmark } = bookmarkSlide.actions;
export default bookmarkSlide.reducer;
