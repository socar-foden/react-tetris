import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SpaceBarIcon from "@material-ui/icons/SpaceBar";
import AddIcon from "@material-ui/icons/Add";
import S from "./Guidance.style";

const Guidance: React.FC = () => {
  return (
    <S.Wrapper>
      <S.IconWrapper width={"100px"}>
        <SpaceBarIcon />
      </S.IconWrapper>

      <AddIcon />

      <S.ArrowWrapper>
        <S.Row>
          <S.IconWrapper>
            <KeyboardArrowUpIcon />
          </S.IconWrapper>
        </S.Row>
        <S.Row>
          <S.IconWrapper>
            <KeyboardArrowLeftIcon />
          </S.IconWrapper>
          <S.IconWrapper>
            <KeyboardArrowDownIcon />
          </S.IconWrapper>
          <S.IconWrapper>
            <KeyboardArrowRightIcon />
          </S.IconWrapper>
        </S.Row>
      </S.ArrowWrapper>
    </S.Wrapper>
  );
};

export default Guidance;
