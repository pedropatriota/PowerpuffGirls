import React from "react";

import * as S from "./styles";

function Link({ children }) {
  return (
    <S.Link href={children} rel="noreferrer" target="_blank">
      {children}
    </S.Link>
  );
}

export default Link;
