import { createSlice } from "@reduxjs/toolkit";

import { Block } from "../models/blocks";
import { Space } from "../models/spaces";
import { getEmptySpaceListAll } from "../utils/utils";

export interface GameState {
  board: Space[][];
  nextQueue: Block[];
}

const initialState: GameState = {
  board: getEmptySpaceListAll(),
  nextQueue: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    set_board: (state, { payload: { board } }) => {
      state.board = board;
    },
  },
});

export const { set_board } = gameSlice.actions;

export default gameSlice;
