import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { Block } from "../../models/blocks";
import { GameState, nextTime_nextQueue } from "../../stores/gameSlice";
import { RootState } from "../../stores/rootStore";
import { Space } from "../../models/spaces";
import Cell from "../Cell/Cell";
import S from "./Next.style";

const Next: React.FC = () => {
  const dispatch = useDispatch();
  const { nextQueue, board }: GameState = useSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    dispatch({ type: nextTime_nextQueue.type });
  }, [board]);

  return (
    <S.Next>
      {_.map(nextQueue, (next: Block, i) => (
        <S.RowWrapper key={i}>
          {_.map(next._position, (rows: number[], j) => (
            <S.Row key={j}>
              {_.map(rows, (cell: number, k) =>
                cell == 1 ? (
                  <Cell key={k} space={new Space(next)} />
                ) : (
                  <S.Cell key={k} />
                )
              )}
            </S.Row>
          ))}
        </S.RowWrapper>
      ))}
    </S.Next>
  );
};

export default Next;
