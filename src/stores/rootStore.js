import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
var rootStore = configureStore({
    reducer: {
        game: gameSlice.reducer,
    },
    devTools: true,
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});
export default rootStore;
//# sourceMappingURL=rootStore.js.map