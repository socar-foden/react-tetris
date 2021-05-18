import { configureStore } from "@reduxjs/toolkit";

import gameSlice, { GameState } from "./gameSlice";

export interface RootState {
  game: GameState;
}

const rootStore = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default rootStore;
