import React from "react";

import useKeyboard from "../../hooks/useKeyboard";
import Panel from "../Panel/Panel";
import S from "./App.style";

const App: React.FC = () => {
  useKeyboard("keydown", (e: KeyboardEvent) => {
    console.log(e.key);
  });

  return (
    <S.Main>
      <Panel />
    </S.Main>
  );
};

export default App;
