import { createSlice } from "@reduxjs/toolkit";

const enum Progress {
  END,
  START,
}

interface InfoState {
  score: number;
  progress: Progress;
}

const initialState: InfoState = {
  score: 0,
  progress: Progress.END,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    increment_score: (state, { payload: { score } }) => {
      state.score += score;
    },
    set_progress: (state, { payload: { progress } }) => {
      state.progress = progress;
    },
  },
});

export const { increment_score } = infoSlice.actions;

export default infoSlice;
