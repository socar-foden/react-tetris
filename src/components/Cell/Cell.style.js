var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import _ from "lodash";
import { CELL_BORDER_COLOR, CELL_WIDTH_PX } from "../../constants/constants";
var S = {
    Cell: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n    border: 1px solid ", ";\n    background-color: ", ";\n    display: table-cell;\n    box-sizing: border-box;\n  "], ["\n    width: ", "px;\n    height: ", "px;\n    border: 1px solid ", ";\n    background-color: ", ";\n    display: table-cell;\n    box-sizing: border-box;\n  "])), CELL_WIDTH_PX, CELL_WIDTH_PX, CELL_BORDER_COLOR, function (props) { return _.get(props, "color") || ""; }),
};
export default S;
var templateObject_1;
//# sourceMappingURL=Cell.style.js.map