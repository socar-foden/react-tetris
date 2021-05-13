import { configureStore } from "@reduxjs/toolkit";

import gameSlice, { GameState } from "./gameSlice";
import infoSlice, { InfoState } from "./infoSlice";

export interface RootState {
  info: InfoState;
  game: GameState;
}

const rootStore = configureStore({
  reducer: {
    info: infoSlice.reducer,
    game: gameSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default rootStore;
