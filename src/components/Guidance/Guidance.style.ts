import styled from "styled-components";
import _ from "lodash";

import { CELL_BORDER_COLOR } from "../../constants/constants";
interface S_IconWrapperProps {
  width?: string;
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    border: 1px solid ${CELL_BORDER_COLOR};
    border-radius: 5px;
    margin-top: 20px;
    align-items: center;
  `,
  IconWrapper: styled.div<S_IconWrapperProps>`
    border: 1px solid ${CELL_BORDER_COLOR};
    border-radius: 5px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 1px 1px grey;
    width: ${(props) => _.get(props, "width") || "fit-content"};
    height: fit-content;
    margin-left: 2px;
    margin-right: 2px;
  `,
  ArrowWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  Row: styled.div`
    display: flex;
    justify-content: center;
    margin: 2px;
  `,
};

export default S;
