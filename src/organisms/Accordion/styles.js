import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: flex-start;
  position: relative;
  padding: 5rem 0;
`;

export const Wrap = styled.div`
  background: #8a2f77;
  color: #fff;
  font-family: "Open Sans";
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #ffbf00;
  h1 {
    padding: 2rem;
    font-size: 1.6rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  span {
    margin-right: 5rem;
    font-size: 2rem;
  }
`;

export const Dropdown = styled.div`
  background: #e67843;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  a {
    font-size: 1.6rem;
    color: #fff;
    padding: 2rem 1rem;
    border-bottom: 1px solid;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;
