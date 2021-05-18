import styled from "styled-components";

import { CELL_BORDER_COLOR } from "../../constants/constants";
import Cell_S from "../Cell/Cell.style";

const S = {
  Wrapper: styled.div``,
  Next: styled.div`
    width: 80px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${CELL_BORDER_COLOR};
    border-radius: 5px;
  `,
  RowWrapper: styled.div`
    margin: 15px 0 15px 0;
    display: table;
    border-collapse: collapse;
  `,
  Row: styled.div`
    display: table-row;
  `,
  Cell: styled(Cell_S.Cell)`
    border: none;
  `,
};

export default S;
