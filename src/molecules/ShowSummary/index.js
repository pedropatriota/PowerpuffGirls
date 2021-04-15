import React from "react";
import Summary from "../../atoms/SummaryText";
import Link from "../../atoms/LinkText";
import * as S from "./styles";

function ShowInfo({ htmlNode, childrenLink }) {
  return (
    <S.Container>
      <Summary htmlNode={htmlNode} />
      <Link>{childrenLink}</Link>
    </S.Container>
  );
}

export default ShowInfo;
