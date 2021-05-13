import { createSlice } from "@reduxjs/toolkit";

export interface InfoState {
  score: number;
}

const initialState: InfoState = {
  score: 0,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    increment_score: (state, { payload: { score } }) => {
      state.score += score;
    },
  },
});

export const { increment_score } = infoSlice.actions;

export default infoSlice;
