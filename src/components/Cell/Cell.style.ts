import styled from "styled-components";
import _ from "lodash";

import { CELL_WIDTH_PX } from "../../constants/constants";

interface S_CellProps {
  color: string;
}

const S = {
  Cell: styled.div<S_CellProps>`
    width: ${CELL_WIDTH_PX}px;
    height: ${CELL_WIDTH_PX}px;
    border: 1px solid lightgrey;
    background-color: ${(props) => _.get(props, "color") || ""};
    display: table-cell;
    box-sizing: border-box;
  `,
};

export default S;
