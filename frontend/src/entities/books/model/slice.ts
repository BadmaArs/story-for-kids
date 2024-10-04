import { createSlice } from "@reduxjs/toolkit";

interface IProps {
    books: string[];
}

const initialState: IProps = {
    books: [],
};

const bookSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.books = ["asd"];
        },
    },
});

export const { increment } = bookSlice.actions;
export default bookSlice.reducer;
