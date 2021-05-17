import styled from "styled-components";

const S = {
  Main: styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f4ed;
  `,
  Layout: styled.div`
    display: flex;
  `,
  Left: styled.div`
    margin: 10px;
  `,
  Right: styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
};

export default S;
