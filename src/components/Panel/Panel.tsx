import React from "react";
import _ from "lodash";

import { Space } from "../../models/spaces";
import Cell from "../Cell/Cell";
import S from "./Panel.style";

interface PanelProps {
  board: Space[][];
}

const Panel: React.FC<PanelProps> = ({ board }) => {
  return (
    <S.Panel>
      {_.map(board, (rows, r) => (
        <S.Row key={r}>
          {_.map(rows, (space, s) => (
            <Cell space={space} key={s} />
          ))}
        </S.Row>
      ))}
    </S.Panel>
  );
};

export default Panel;
