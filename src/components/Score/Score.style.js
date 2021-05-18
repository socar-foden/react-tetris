var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { CELL_BORDER_COLOR } from "../../constants/constants";
var S = {
    Wrapper: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""]))),
    ScoreBox: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 80px;\n    height: 60px;\n    border: 1px solid ", ";\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    font-family: monospace;\n  "], ["\n    width: 80px;\n    height: 60px;\n    border: 1px solid ", ";\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    font-family: monospace;\n  "])), CELL_BORDER_COLOR),
    Label: styled.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 20px;\n    font-family: monospace;\n    margin-bottom: 10px;\n    margin-top: 0px;\n  "], ["\n    font-size: 20px;\n    font-family: monospace;\n    margin-bottom: 10px;\n    margin-top: 0px;\n  "]))),
};
export default S;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Score.style.js.map