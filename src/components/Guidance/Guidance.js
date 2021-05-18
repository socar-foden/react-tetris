import React, { useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SpaceBarIcon from "@material-ui/icons/SpaceBar";
import AddIcon from "@material-ui/icons/Add";
import useKeyboard from "../../hooks/useKeyboard";
import S from "./Guidance.style";
var Guidance = function () {
    var _a = useState([null]), key = _a[0], setKey = _a[1];
    var handleKeyDown = function (e) { return setKey([e.key]); };
    var handleKeyUp = function () { return setKey([null]); };
    useKeyboard("keydown", handleKeyDown);
    useKeyboard("keyup", handleKeyUp);
    return (React.createElement(S.Wrapper, null,
        React.createElement(S.IconWrapper, { width: "100px", active: key[0] === " " /* spaceBar */ },
            React.createElement(SpaceBarIcon, null)),
        React.createElement(AddIcon, null),
        React.createElement(S.ArrowWrapper, null,
            React.createElement(S.Row, null,
                React.createElement(S.IconWrapper, { active: key[0] === "ArrowUp" /* arrowUp */ },
                    React.createElement(KeyboardArrowUpIcon, null))),
            React.createElement(S.Row, null,
                React.createElement(S.IconWrapper, { active: key[0] === "ArrowLeft" /* arrowLeft */ },
                    React.createElement(KeyboardArrowLeftIcon, null)),
                React.createElement(S.IconWrapper, { active: key[0] === "ArrowDown" /* arrowDown */ },
                    React.createElement(KeyboardArrowDownIcon, null)),
                React.createElement(S.IconWrapper, { active: key[0] === "ArrowRight" /* arrowRight */ },
                    React.createElement(KeyboardArrowRightIcon, null))))));
};
export default Guidance;
//# sourceMappingURL=Guidance.js.map