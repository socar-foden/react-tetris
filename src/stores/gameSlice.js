var _a;
import { createSlice } from "@reduxjs/toolkit";
import { getEmptyBoard, getBoard, getRandomBlock, getRemovedCnt, } from "../utils/utils";
var initialState = {
    board: getEmptyBoard(),
    nextQueue: [getRandomBlock(), getRandomBlock()],
    score: 0,
};
var gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        set_board: function (state, _a) {
            var _b = _a.payload, location = _b.location, block = _b.block;
            state.board = getBoard(location, block, state.board);
            state.score += getRemovedCnt(state.board);
        },
        nextTime_nextQueue: function (state) {
            state.nextQueue = [state.nextQueue[1], getRandomBlock()];
        },
    },
});
export var set_board = (_a = gameSlice.actions, _a.set_board), nextTime_nextQueue = _a.nextTime_nextQueue;
export default gameSlice;
//# sourceMappingURL=gameSlice.js.map