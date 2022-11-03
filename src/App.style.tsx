import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 2em;

  /* TABLET */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;
