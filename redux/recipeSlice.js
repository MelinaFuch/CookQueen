import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 100,
  numeritos:1
};

export const recipeslice = createSlice({
    name: "Recipe",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
    },
});

export const { increment, decrement } = recipeslice.actions;

export default recipeslice.reducer;
