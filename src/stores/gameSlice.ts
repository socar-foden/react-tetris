import { createSlice } from "@reduxjs/toolkit";

import { Block } from "../models/blocks";
import { Space } from "../models/spaces";
import { getEmptyBoard, getBoard } from "../utils/utils";

export interface GameState {
  board: Space[][];
  nextQueue: Block[];
}

const initialState: GameState = {
  board: getEmptyBoard(),
  nextQueue: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    set_board: (state: GameState, { payload: { location, block } }) => {
      state.board = getBoard(location, block, state.board);
    },
  },
});

export const { set_board } = gameSlice.actions;

export default gameSlice;
