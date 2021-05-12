import { configureStore } from "@reduxjs/toolkit";

import gameSlice from "./gameSlice";
import infoSlice from "./infoSlice";

const rootStore = configureStore({
  reducer: {
    info: infoSlice.reducer,
    game: gameSlice.reducer,
  },
  devTools: true,
});

export default rootStore;
