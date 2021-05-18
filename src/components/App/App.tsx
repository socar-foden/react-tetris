import React from "react";

import Next from "../Next/Next";
import Guidance from "../Guidance/Guidance";
import Panel from "../Panel/Panel";
import Score from "../Score/Score";
import S from "./App.style";

const App: React.FC = () => {
  return (
    <S.Main>
      <S.Layout>
        <S.Row>
          <S.Left>
            <Panel />
          </S.Left>
          <S.Right>
            <Score />
            <Next />
          </S.Right>
        </S.Row>
        <S.Row>
          <Guidance />
        </S.Row>

        <S.Label>Tetris</S.Label>
      </S.Layout>
    </S.Main>
  );
};

export default App;
