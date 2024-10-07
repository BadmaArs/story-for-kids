import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndexCurrentSlide {
    indexCurrentSlide: number;
}

const initialState: IndexCurrentSlide = {
    indexCurrentSlide: 0,
};

const indexSlideSlice = createSlice({
    name: "current-slice",
    initialState,
    reducers: {
        setIndexCurrentSlide(state, actions: PayloadAction<IndexCurrentSlide>) {
            state.indexCurrentSlide = actions.payload.indexCurrentSlide;
        },
    },
});

export const { setIndexCurrentSlide } = indexSlideSlice.actions;
export default indexSlideSlice.reducer;
