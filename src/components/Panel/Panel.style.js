var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { CELL_WIDTH_PX, BOARD_WIDTH_CNT, BOARD_HEIGHT_CNT, } from "../../constants/constants";
var S = {
    Panel: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n    display: table;\n    border-collapse: collapse;\n  "], ["\n    width: ", "px;\n    height: ", "px;\n    display: table;\n    border-collapse: collapse;\n  "])), CELL_WIDTH_PX * BOARD_WIDTH_CNT, CELL_WIDTH_PX * BOARD_HEIGHT_CNT),
    Row: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: table-row;\n  "], ["\n    display: table-row;\n  "]))),
};
export default S;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Panel.style.js.map