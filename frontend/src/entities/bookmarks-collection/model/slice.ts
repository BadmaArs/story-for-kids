import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    bookmarkMaterials: [],
};

const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        addNewBookmark(state, actions: PayloadAction<any>) {
            state.bookmarkMaterials.push(actions.payload);
        },
    },
});

export const { addNewBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
