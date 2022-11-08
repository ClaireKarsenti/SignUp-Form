import styled from 'styled-components';

export const Section = styled.section`
  max-width: 21rem;
  flex-grow: 1;
  margin: 0 auto;

  @media screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    max-width: 70rem;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  padding-top: 5em;
  margin-bottom: 3.2rem;

  @media screen and (min-width: 760px) {
    padding-top: 0;
    margin-bottom: 0;
    flex: 1 0 50%;
    text-align: left;
    margin-right: 2.3rem;
  }
  h1 {
    font-size: 1.75rem;
    line-height: 1.3em;
    padding-bottom: 1.2rem;
    font-weight: var(--bold);
    letter-spacing: -0.52px;
    @media screen and (min-width: 760px) {
      font-size: 3.3rem;
      line-height: 1.1em;
    }
  }
  p {
    line-height: 1.5em;
    font-weight: var(--medium);
    font-size: 1.05rem;
  }
`;
