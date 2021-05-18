import styled from "styled-components";

import { CELL_BORDER_COLOR } from "../../constants/constants";

const S = {
  Wrapper: styled.div``,
  ScoreBox: styled.div`
    width: 80px;
    height: 60px;
    border: 1px solid ${CELL_BORDER_COLOR};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: monospace;
  `,
  Label: styled.h3`
    font-size: 20px;
    font-family: monospace;
    margin-bottom: 10px;
    margin-top: 0px;
  `,
};

export default S;
