import { createSlice } from "@reduxjs/toolkit";

import { Block } from "../models/blocks";
import { Space } from "../models/spaces";
import { getEmptySpaceListAll } from "../utils/utils";

interface GameState {
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
  reducers: {},
});

export default gameSlice;
