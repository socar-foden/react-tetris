import React from "react";

import Next from "../Next/Next";
import Panel from "../Panel/Panel";
import S from "./App.style";

const App: React.FC = () => {
  return (
    <S.Main>
      <S.Layout>
        <S.Left>
          <Panel />
        </S.Left>
        <S.Right>
          <Next />
        </S.Right>
      </S.Layout>
    </S.Main>
  );
};

export default App;
