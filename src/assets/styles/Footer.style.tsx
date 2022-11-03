import styled from 'styled-components';

export const Container = styled.footer`
  place-items: center;
  position: relative;
  font-size: 0.8em;
  text-align: center;
  margin: 2em 0 0.5em 0;
  line-height: 1.5em;
  @media screen and (min-width: 760px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .attribution,
  a {
    color: var(--white);
    transition: color 0.5s ease-in-out;
  }
  a {
    display: inline-block;
    font-weight: var(--bold);
    @media (hover: hover) {
      /* Targets devices that can hover */
      &:hover {
        color: var(--blue);
        text-decoration: none;
      }
    }
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
