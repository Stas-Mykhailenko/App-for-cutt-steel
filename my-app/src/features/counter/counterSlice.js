import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.value = payload;
      console.log(state.value);
    },
  },
});

export const getValue = (state) => state.counter.value;
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
