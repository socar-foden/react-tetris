import React, { useState } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";

import useKeyboard from "../../hooks/useKeyboard";
import { getEmptySpaceListAll } from "../../utils/utils";
import useRAF from "../../hooks/useRAF";
import { set_board } from "../../stores/gameSlice";
import Panel from "../Panel/Panel";
import S from "./App.style";

let rAF: number;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [frame, setFrame] = useState(0);

  useKeyboard("keydown", (e: KeyboardEvent) => {
    console.log(e.key);
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const next: any = _.curry(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (frame: number, time: number): void => {
      if (frame++ % 60 === 0) {
        dispatch({
          type: set_board.type,
          payload: { board: getEmptySpaceListAll() },
        });
      }

      rAF = requestAnimationFrame(next(frame));
    }
  );

  useRAF(rAF, next(frame));

  return (
    <S.Main>
      <Panel />
    </S.Main>
  );
};

export default App;
