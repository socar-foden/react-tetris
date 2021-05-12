import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  board: [][];
  nextQueue: [];
}

const initialState: GameState = {
  board: [[]],
  nextQueue: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

export default gameSlice;
