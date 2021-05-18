import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import S from "./Score.style";
var Score = function () {
    var score = useSelector(function (state) { return state.game; }).score;
    return (React.createElement(S.Wrapper, null,
        React.createElement(S.Label, null, "Score"),
        React.createElement(S.ScoreBox, null,
            _.map(_.range(3 - _.toString(score).length), function () { return 0; }),
            score)));
};
export default Score;
//# sourceMappingURL=Score.js.map