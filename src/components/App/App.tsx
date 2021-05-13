import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { KeyboardKey, Location } from "../../constants/constants";
import { RootState } from "../../stores/rootStore";
import { Space } from "../../models/spaces";
import useKeyboard from "../../hooks/useKeyboard";
import {
  getRandomBlock,
  getBoard,
  isTouchingBlock,
  isTouchingBoundary,
  getValidateInfoNextFrame,
} from "../../utils/utils";
import useRAF from "../../hooks/useRAF";
import { Block } from "../../models/blocks";
import { GameState, set_board } from "../../stores/gameSlice";
import Panel from "../Panel/Panel";
import S from "./App.style";

let rAFId: number;
const startLocation: Location = { d_1: 0, d_2: 7 };

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { board }: GameState = useSelector((state: RootState) => state.game);
  const [frame, setFrame] = useState<number>(0);
  const [block, setBlock] = useState<Block>(getRandomBlock());
  const [location, setLocation] = useState<Location>(startLocation);
  const [tempBoard, setTempBoard] = useState<Space[][]>(board);

  const handleKeyDown = (e: KeyboardEvent) => {
    const key: string = e.key;

    if (key === KeyboardKey.spaceBar) {
      setFrame(() => {
        cancelAnimationFrame(rAFId);
        rAFId = requestAnimationFrame(next(0));

        return 0;
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const next: any = _.curry(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (frame: number, time: number): void => {
      if (++frame % 1 === 0) {
        setLocation((prev) => ({
          ...prev,
          d_1: prev.d_1 + 1,
        }));
      }

      rAFId = requestAnimationFrame(next(frame));
    }
  );

  useEffect(() => {
    const [touchingBoundary, touchingBlock] = getValidateInfoNextFrame(
      KeyboardKey.arrowDown,
      location,
      block._position,
      board
    );

    if (!touchingBoundary && !touchingBlock) {
      setTempBoard(getBoard(location, block, board));
    } else {
      dispatch({
        type: set_board,
        payload: { location, block },
      });

      const nextBlock: Block = getRandomBlock();
      setBlock(nextBlock);
      setTempBoard(getBoard(startLocation, nextBlock, board));
      setLocation(startLocation);
    }
  }, [location]);

  useKeyboard("keydown", handleKeyDown);
  useRAF(rAFId, next(frame));

  return (
    <S.Main>
      <Panel board={tempBoard} />
    </S.Main>
  );
};

export default App;
