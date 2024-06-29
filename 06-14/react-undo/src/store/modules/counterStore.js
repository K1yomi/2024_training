import { createSlice } from "@reduxjs/toolkit";
import undoable, { includeAction } from "redux-undo";

const counterStore = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterStore.actions;
export default undoable(counterStore.reducer, {
  filter: includeAction([increment.type, decrement.type]),
});
