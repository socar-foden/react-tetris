import styled from "styled-components";

import {
  CELL_WIDTH_PX,
  BOARD_WIDTH_CNT,
  BOARD_HEIGHT_CNT,
} from "../../constants/constants";

const S = {
  Panel: styled.div`
    width: ${CELL_WIDTH_PX * BOARD_WIDTH_CNT}px;
    height: ${CELL_WIDTH_PX * BOARD_HEIGHT_CNT}px;
    display: table;
    border-collapse: collapse;
  `,
  Row: styled.div`
    display: table-row;
  `,
};

export default S;
