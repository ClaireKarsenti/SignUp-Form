import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 0;
  animation: animate-slide 4s;
  @keyframes animate-slide {
    0% {
      opacity: 0;
      transform: translate(0, 20px);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  /* TABLET */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;
