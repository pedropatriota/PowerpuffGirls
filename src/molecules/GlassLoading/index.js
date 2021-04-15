import React from "react";
import * as S from "./styles";
import LoadingApp from "../../atoms/Loading";

const GlassLoading = (props) => {
  return (
    <S.Container calc={props.calc} transparent={props.transparent}>
      <span>Loading</span>
      <LoadingApp />
    </S.Container>
  );
};

export default GlassLoading;
