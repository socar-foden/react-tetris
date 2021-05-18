var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { CELL_BORDER_COLOR } from "../../constants/constants";
import Cell_S from "../Cell/Cell.style";
var S = {
    Wrapper: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""]))),
    Next: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 80px;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 5px;\n  "], ["\n    width: 80px;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 5px;\n  "])), CELL_BORDER_COLOR),
    RowWrapper: styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin: 15px 0 15px 0;\n    display: table;\n    border-collapse: collapse;\n  "], ["\n    margin: 15px 0 15px 0;\n    display: table;\n    border-collapse: collapse;\n  "]))),
    Row: styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: table-row;\n  "], ["\n    display: table-row;\n  "]))),
    Cell: styled(Cell_S.Cell)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    border: none;\n  "], ["\n    border: none;\n  "]))),
};
export default S;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Next.style.js.map