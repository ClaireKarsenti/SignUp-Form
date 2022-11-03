import styled from 'styled-components';

export const Container = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;

  /* TABLET */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const Section = styled.section`
  @media screen and (min-width: 760px) {
    flex: 1 0 50%;
  }
  p.announce {
    text-align: center;
    color: var(--white);
    background-color: var(--blue);
    border-radius: 0.6em;
    width: 100%;
    font-size: 16px;
    box-shadow: var(--box-shadow);
    margin-bottom: 1.4rem;
    padding: 1.2rem 4rem;
    @media screen and (min-width: 760px) {
      height: 4em;
    }
  }
  span {
    font-weight: var(--bold);
  }
`;

export const Form = styled.form`
  background-color: var(--white);
  padding: 1em 1em;
  box-shadow: var(--box-shadow);
  border-radius: 0.6em;
  @media only screen and (min-width: 760px) {
    width: 100%;
    height: 100%;
    padding: 2em 2em 2em;
  }
  .terms p {
    color: var(--grayish-blue);
    font-size: 0.68rem;
    font-weight: var(--medium);
    margin: -1.5em 0 0.7em;
    text-align: center;
    padding: 0 3em;
    line-height: 2em;
  }
  .terms a {
    color: var(--red);
    font-weight: var(--semiBold);
    text-decoration: none;
  }
  fieldset {
    border: none;
    margin: 0.4em;
    button.btn-control {
      text-align: center;
      color: var(--white);
      background-color: var(--green);
      text-transform: uppercase;
      border: none;
      border-radius: 0.3em;
      width: 100%;
      height: 4em;
      letter-spacing: 0.27px;
      line-height: 26px;
      font-size: 0.9375rem;
      font-weight: var(--semiBold);
      position: relative;
      top: -1.5em;
      box-shadow: inset 0 -4px rgba(0, 0, 0, 0.1);
      &:focus {
        outline: none;
      }
      @media (hover: hover) {
        /* Targets devices that can hover */
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
  }
`;
