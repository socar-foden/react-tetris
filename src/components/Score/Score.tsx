import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";

import { GameState } from "../../stores/gameSlice";
import { RootState } from "../../stores/rootStore";
import S from "./Score.style";

const Score: React.FC = () => {
  const { score }: GameState = useSelector((state: RootState) => state.game);

  return (
    <S.Wrapper>
      <S.Label>Score</S.Label>
      <S.ScoreBox>
        {_.map(_.range(3 - _.toString(score).length), () => 0)}
        {score}
      </S.ScoreBox>
    </S.Wrapper>
  );
};

export default Score;
