import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";

import { GameState } from "../../stores/gameSlice";
import { RootState } from "../../stores/rootStore";
import Cell from "../Cell/Cell";
import S from "./Panel.style";

const Panel: React.FC = () => {
  const { board }: GameState = useSelector((state: RootState) => state.game);

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
