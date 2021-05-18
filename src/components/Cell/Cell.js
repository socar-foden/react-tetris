import React from "react";
import S from "./Cell.style";
var Cell = function (_a) {
    var space = _a.space;
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Cell, { color: space._block ? space._block.color : "" })));
};
export default Cell;
//# sourceMappingURL=Cell.js.map