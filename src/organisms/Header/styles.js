import styled from "styled-components";
import logoppg from "../../assets/images/logoppg.png";

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    95.02deg,
    #82307a 0%,
    #d7235d 50.36%,
    #e78140 100%
  );
`;

export const Container = styled.div`
  width: 90%;
  position: relative;
  color: #fffbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 72%;
    max-width: 1280px;
  }
`;

export const Logo = styled.img.attrs(({ src }) => ({
  src: logoppg,
}))`
  max-width: 100%;
  max-height: 6rem;
`;
