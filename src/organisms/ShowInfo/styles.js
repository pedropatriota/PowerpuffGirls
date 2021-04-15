import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    height: 22rem;
    flex-wrap: nowrap;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Logo = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  max-width: 100%;
  max-height: 100%;
`;
