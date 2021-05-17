/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import fp from "lodash/fp";

import {
  actionKeyList,
  KeyboardKey,
  Location,
} from "../../constants/constants";
import { RootState } from "../../stores/rootStore";
import { Space } from "../../models/spaces";
import useKeyboard from "../../hooks/useKeyboard";
import {
  getRandomBlock,
  getBoard,
  getNextFrameInfo,
  getRotatedBlock,
} from "../../utils/utils";
import useRAF from "../../hooks/useRAF";
import Next from "../Next/Next";
import { Block } from "../../models/blocks";
import { GameState, set_board } from "../../stores/gameSlice";
import Panel from "../Panel/Panel";
import S from "./App.style";

let rAFId: number;
const startLocation: Location = { d_1: 0, d_2: 7 };

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { board }: GameState = useSelector((state: RootState) => state.game);
  const [frame] = useState<number>(0);
  const [block, setBlock] = useState<Block>(getRandomBlock());
  const [action, setAction] = useState<[KeyboardKey]>([KeyboardKey.arrowDown]);
  const [location, setLocation] = useState<Location>({ d_1: -1, d_2: 7 });
  const [tempBoard, setTempBoard] = useState<Space[][]>(board);

  const handleKeyDown = (e: KeyboardEvent) => setAction([e.key as KeyboardKey]);

  const next: any = _.curry((frame: number, time: number): void => {
    if (frame++ % 90 === 0) {
      setAction([KeyboardKey.arrowDown]);
    }

    rAFId = requestAnimationFrame(next(frame));
  });

  useEffect(() => {
    if (_.find(actionKeyList, fp.isEqual(action[0]))) {
      const rotatedBlock = getRotatedBlock(block);
      const [touchingBoundary, touchingBlock, nextLocation] = getNextFrameInfo(
        action[0],
        location,
        action[0] === KeyboardKey.arrowUp
          ? rotatedBlock._position
          : block._position,
        board
      );

      if (!touchingBoundary && !touchingBlock) {
        if (action[0] === KeyboardKey.arrowUp) {
          setBlock(() => {
            setTempBoard(getBoard(location, rotatedBlock, board));
            return rotatedBlock;
          });
        } else {
          setTempBoard(getBoard(nextLocation, block, board));
          setLocation(nextLocation);

          if (action[0] === KeyboardKey.spaceBar) {
            cancelAnimationFrame(rAFId);
            rAFId = requestAnimationFrame(next(0));
          }
        }
      } else {
        if (action[0] === KeyboardKey.arrowDown) {
          setTempBoard(getBoard(location, block, board));

          dispatch({
            type: set_board.type,
            payload: { location, block },
          });

          const nextBlock: Block = getRandomBlock();
          setBlock(nextBlock);
          setTempBoard(
            getBoard(startLocation, nextBlock, getBoard(location, block, board))
          );
          setLocation(startLocation);
        }
      }
    }
  }, [action]);

  useKeyboard("keydown", handleKeyDown);
  useRAF(rAFId, next(frame));

  return (
    <S.Main>
      <S.Layout>
        <S.Left>
          <Panel board={tempBoard} />
        </S.Left>
        <S.Right>
          <Next />
        </S.Right>
      </S.Layout>
    </S.Main>
  );
};

export default App;
