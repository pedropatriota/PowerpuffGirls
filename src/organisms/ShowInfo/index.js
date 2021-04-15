import React from "react";
import ShowSummary from "../../molecules/ShowSummary";
import Heading from "../../atoms/Heading";
import * as S from "./styles";

function ShowInfo({ htmlNode, childrenLink, childrenHeading, src }) {
  return (
    <S.Container>
      <S.Logo src={src} />
      <S.Wrapper>
        <Heading childrenHeading={childrenHeading} />
        <ShowSummary htmlNode={htmlNode} childrenLink={childrenLink} />
      </S.Wrapper>
    </S.Container>
  );
}

export default ShowInfo;
