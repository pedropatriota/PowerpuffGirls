import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 3.5rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    width: 72%;
    max-width: 1280px;
    margin-bottom: 7rem;
  }
`;
