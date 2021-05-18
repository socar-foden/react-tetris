import { createSlice } from "@reduxjs/toolkit";

import { Block } from "../models/blocks";
import { Space } from "../models/spaces";
import {
  getEmptyBoard,
  getBoard,
  getRandomBlock,
  getRemovedCnt,
} from "../utils/utils";

export interface GameState {
  board: Space[][];
  nextQueue: Block[];
  score: number;
}

const initialState: GameState = {
  board: getEmptyBoard(),
  nextQueue: [getRandomBlock(), getRandomBlock()],
  score: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    set_board: (state: GameState, { payload: { location, block } }) => {
      state.board = getBoard(location, block, state.board);
      state.score += getRemovedCnt(state.board);
    },
    nextTime_nextQueue: (state: GameState) => {
      state.nextQueue = [state.nextQueue[1], getRandomBlock()];
    },
  },
});

export const { set_board, nextTime_nextQueue } = gameSlice.actions;

export default gameSlice;
