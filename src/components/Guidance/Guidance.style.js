var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import _ from "lodash";
import { CELL_BORDER_COLOR } from "../../constants/constants";
var S = {
    Wrapper: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 20px;\n    border: 1px solid ", ";\n    border-radius: 5px;\n    margin-top: 20px;\n    align-items: center;\n  "], ["\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 20px;\n    border: 1px solid ", ";\n    border-radius: 5px;\n    margin-top: 20px;\n    align-items: center;\n  "])), CELL_BORDER_COLOR),
    IconWrapper: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    border-radius: 5px;\n    background-color: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 2px 1px 1px grey;\n    width: ", ";\n    height: fit-content;\n    margin-left: 2px;\n    margin-right: 2px;\n  "], ["\n    border: 1px solid ", ";\n    border-radius: 5px;\n    background-color: ",
        ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 2px 1px 1px grey;\n    width: ", ";\n    height: fit-content;\n    margin-left: 2px;\n    margin-right: 2px;\n  "])), CELL_BORDER_COLOR, function (props) {
        return _.get(props, "active") ? "lightgrey" : "white";
    }, function (props) { return _.get(props, "width") || "fit-content"; }),
    ArrowWrapper: styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  "], ["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  "]))),
    Row: styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    margin: 2px;\n  "], ["\n    display: flex;\n    justify-content: center;\n    margin: 2px;\n  "]))),
};
export default S;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Guidance.style.js.map