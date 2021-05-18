import styled from "styled-components";

import Score_S from "../Score/Score.style";

const S = {
  Main: styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f4ed;
    text-align: center;
  `,
  Layout: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Row: styled.div`
    display: flex;
  `,
  Left: styled.div`
    margin: 10px;
  `,
  Right: styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Label: styled(Score_S.Label)`
    font-size: 30px;
    padding: 10px;
  `,
};

export default S;
