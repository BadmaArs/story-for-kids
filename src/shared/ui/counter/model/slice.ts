import { createSlice } from "@reduxjs/toolkit";

interface IProps {
    value: number;
}

const initialState: IProps = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
    },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
