import React from "react";

import * as S from "./styles";

function Summary({ htmlNode }) {
  return <S.Summary dangerouslySetInnerHTML={{ __html: htmlNode }}></S.Summary>;
}

export default Summary;
