import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { list } = props;

  return (
    <S.Container>
      <S.BreadcrumbContainer>
        {list.map((breadcrumb, index) => {
          return (
            <div key={index}>
              <Link
                to={breadcrumb.goTo || ""}
                className={index < list.length - 1 ? "underline" : ""}
              >
                {breadcrumb.name}
              </Link>
              {index < list.length - 1 && <S.Arrow />}
            </div>
          );
        })}
      </S.BreadcrumbContainer>
    </S.Container>
  );
};

export default Breadcrumb;
