import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBookmark {
    url: string;
    selectedSlide: number;
    selectedLesson: number;
    lesson_name: string;
}

interface IBookmarkState {
    bookmarkMaterials: IBookmark[];
}

const initialState: IBookmarkState = {
    bookmarkMaterials: [],
};
const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        addNewBookmark(state, actions: PayloadAction<IBookmark>) {
            state.bookmarkMaterials.push(actions.payload);
        },
        removeBookmark(state, actions: PayloadAction<IBookmark>) {
            state.bookmarkMaterials = state.bookmarkMaterials.filter(
                (bookmark) =>
                    bookmark.url !== actions.payload.url ||
                    bookmark.selectedSlide !== actions.payload.selectedSlide ||
                    bookmark.selectedLesson !==
                        actions.payload.selectedLesson ||
                    bookmark.lesson_name !== actions.payload.lesson_name,
            );
        },
    },
});

export const { addNewBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
