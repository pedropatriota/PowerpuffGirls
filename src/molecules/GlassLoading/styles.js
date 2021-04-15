import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${(props)=>props.calc || '0px'});
  /* position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  background-color: #fff;
  z-index: 999999999;
  transition: 300ms ease-in-out;
  animation: show 0.3s;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  span {
    animation: show 0.3s;
    font-size: 25px;
	  color: #000000;
  }
`;
