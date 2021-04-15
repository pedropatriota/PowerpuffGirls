import styled from "styled-components";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";

export const Container = styled.div`
  background: var(--colorPrimary);
  padding: 5px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  @media (min-width: 768px) {
    height: 26px;
  }
`;

export const BreadcrumbContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;

  div:first-child {
    display: flex;
    align-items: center;
  }

  a {
    color: #000;
    letter-spacing: 0.3px;
  }
  .underline {
    text-transform: capitalize;
    text-decoration: underline !important;
  }

  @media (min-width: 768px) {
    max-width: 1280px;
    width: 72%;
  }
`;

export const Arrow = styled(ArrowIosForwardOutline)`
  width: 16px;
  color: #000;
`;
