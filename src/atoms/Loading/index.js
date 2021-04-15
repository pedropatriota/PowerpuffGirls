import React from "react";
import Loader from "react-loader-spinner";
// import { DotLoader } from "react-spinners";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import * as S from "./styles";

const LoadingApp = () => {
  return (
    <S.Container as="span">
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </S.Container>
  );
};

export default LoadingApp;
