import React, { useState } from "react";
import _ from "lodash";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SpaceBarIcon from "@material-ui/icons/SpaceBar";
import AddIcon from "@material-ui/icons/Add";

import { KeyboardKey } from "../../constants/constants";
import useKeyboard from "../../hooks/useKeyboard";

import S from "./Guidance.style";

const Guidance: React.FC = () => {
  const [key, setKey] = useState<[KeyboardKey]>([null]);

  const handleKeyDown = (e: KeyboardEvent) => setKey([e.key as KeyboardKey]);
  const handleKeyUp = () => setKey([null]);

  useKeyboard("keydown", handleKeyDown);
  useKeyboard("keyup", handleKeyUp);

  return (
    <S.Wrapper>
      <S.IconWrapper width={"100px"} active={key[0] === KeyboardKey.spaceBar}>
        <SpaceBarIcon />
      </S.IconWrapper>

      <AddIcon />

      <S.ArrowWrapper>
        <S.Row>
          <S.IconWrapper active={key[0] === KeyboardKey.arrowUp}>
            <KeyboardArrowUpIcon />
          </S.IconWrapper>
        </S.Row>
        <S.Row>
          <S.IconWrapper active={key[0] === KeyboardKey.arrowLeft}>
            <KeyboardArrowLeftIcon />
          </S.IconWrapper>
          <S.IconWrapper active={key[0] === KeyboardKey.arrowDown}>
            <KeyboardArrowDownIcon />
          </S.IconWrapper>
          <S.IconWrapper active={key[0] === KeyboardKey.arrowRight}>
            <KeyboardArrowRightIcon />
          </S.IconWrapper>
        </S.Row>
      </S.ArrowWrapper>
    </S.Wrapper>
  );
};

export default Guidance;
