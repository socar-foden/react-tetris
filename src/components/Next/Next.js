import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { nextTime_nextQueue } from "../../stores/gameSlice";
import Score_S from "../Score/Score.style";
import { Space } from "../../models/spaces";
import Cell from "../Cell/Cell";
import S from "./Next.style";
var Next = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.game; }), nextQueue = _a.nextQueue, board = _a.board;
    useEffect(function () {
        dispatch({ type: nextTime_nextQueue.type });
    }, [board]);
    return (React.createElement(S.Wrapper, null,
        React.createElement(Score_S.Label, null, "Next"),
        React.createElement(S.Next, null, _.map(nextQueue, function (next, i) { return (React.createElement(S.RowWrapper, { key: i }, _.map(next._position, function (rows, j) { return (React.createElement(S.Row, { key: j }, _.map(rows, function (cell, k) {
            return cell == 1 ? (React.createElement(Cell, { key: k, space: new Space(next) })) : (React.createElement(S.Cell, { key: k }));
        }))); }))); }))));
};
export default Next;
//# sourceMappingURL=Next.js.map