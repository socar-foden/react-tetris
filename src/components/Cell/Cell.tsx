import React from "react";

import { Space } from "../../models/spaces";
import S from "./Cell.style";

interface CellProps {
  space: Space;
}

const Cell: React.FC<CellProps> = ({ space }) => {
  return (
    <>
      <S.Cell color={space._block ? space._block.color : ""} />
    </>
  );
};

export default Cell;
