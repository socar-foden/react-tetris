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

const areEqual = (
  prevProps: React.PropsWithChildren<CellProps>,
  nextProps: React.PropsWithChildren<CellProps>
) => {
  const { _id: prevId } = prevProps.space;
  const { _id: nextId } = nextProps.space;
  return prevId === nextId;
};

export default React.memo(Cell, areEqual);
