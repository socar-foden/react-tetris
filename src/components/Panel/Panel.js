/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import fp from "lodash/fp";
import Cell from "../Cell/Cell";
import { actionKeyList, } from "../../constants/constants";
import useKeyboard from "../../hooks/useKeyboard";
import { getRandomBlock, getBoard, getNextFrameInfo, getRotatedBlock, } from "../../utils/utils";
import useRAF from "../../hooks/useRAF";
import { set_board } from "../../stores/gameSlice";
import S from "./Panel.style";
var rAFId;
var startLocation = { d_1: 0, d_2: 7 };
var Panel = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.game; }), board = _a.board, nextQueue = _a.nextQueue;
    var frame = useState(0)[0];
    var _b = useState(getRandomBlock()), block = _b[0], setBlock = _b[1];
    var _c = useState(["ArrowDown" /* arrowDown */]), action = _c[0], setAction = _c[1];
    var _d = useState({ d_1: -1, d_2: 7 }), location = _d[0], setLocation = _d[1];
    var _e = useState(board), tempBoard = _e[0], setTempBoard = _e[1];
    var handleKeyDown = function (e) { return setAction([e.key]); };
    var next = _.curry(function (frame, time) {
        if (frame++ % 90 === 0) {
            setAction(["ArrowDown" /* arrowDown */]);
        }
        rAFId = requestAnimationFrame(next(frame));
    });
    useEffect(function () {
        if (_.find(actionKeyList, fp.isEqual(action[0]))) {
            var rotatedBlock_1 = getRotatedBlock(block);
            var _a = getNextFrameInfo(action[0], location, action[0] === "ArrowUp" /* arrowUp */
                ? rotatedBlock_1._position
                : block._position, board), touchingBoundary = _a[0], touchingBlock = _a[1], nextLocation = _a[2];
            if (!touchingBoundary && !touchingBlock) {
                if (action[0] === "ArrowUp" /* arrowUp */) {
                    setBlock(function () {
                        setTempBoard(getBoard(location, rotatedBlock_1, board));
                        return rotatedBlock_1;
                    });
                }
                else {
                    setTempBoard(getBoard(nextLocation, block, board));
                    setLocation(nextLocation);
                    if (action[0] === " " /* spaceBar */) {
                        cancelAnimationFrame(rAFId);
                        rAFId = requestAnimationFrame(next(0));
                    }
                }
            }
            else {
                if (action[0] === "ArrowDown" /* arrowDown */) {
                    setTempBoard(getBoard(location, block, board));
                    dispatch({
                        type: set_board.type,
                        payload: { location: location, block: block },
                    });
                    var nextBlock = nextQueue[0];
                    setBlock(nextBlock);
                    setTempBoard(getBoard(startLocation, nextBlock, getBoard(location, block, board)));
                    setLocation(startLocation);
                }
            }
        }
    }, [action]);
    useKeyboard("keydown", handleKeyDown);
    useRAF(rAFId, next(frame));
    return (React.createElement(S.Panel, null, _.map(tempBoard, function (rows, r) { return (React.createElement(S.Row, { key: r }, _.map(rows, function (space, s) { return (React.createElement(Cell, { space: space, key: s })); }))); })));
};
export default Panel;
//# sourceMappingURL=Panel.js.map