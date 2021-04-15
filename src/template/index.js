import React from "react";
import Header from "../organisms/Header";
import Breadcrumb from "../molecules/Breadcrumb";
import Loading from "../molecules/GlassLoading";

import * as S from "./styles";

function Template({ list, children, loading }) {
  if (loading) return <Loading />;

  return (
    <S.Container>
      <Header />
      <Breadcrumb list={list} />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
}

export default Template;
