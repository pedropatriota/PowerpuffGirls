import React from "react";
import Label from "../../atoms/Label";
import Text from "../../atoms/Text";

import * as S from "./styles";

function EpisodeInfo({ airDate, airTime, season, number }) {
  return (
    <S.Container>
      <S.Li>
        <Label>Air Date:</Label>
        <Text>{airDate}</Text>
      </S.Li>
      <S.Li>
        <Label>Air Time:</Label>
        <Text>{airTime}</Text>
      </S.Li>
      <S.Li>
        <Label>Season:</Label>
        <Text>{season}</Text>
      </S.Li>
      <S.Li>
        <Label>Chapter:</Label>
        <Text>{number}</Text>
      </S.Li>
    </S.Container>
  );
}

export default EpisodeInfo;
