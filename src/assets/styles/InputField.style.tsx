import styled from 'styled-components';
import ErrorIcon from '../images/icon-error.svg';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.small`
  display: none;
  color: var(--red);
  text-align: right;
  width: 100%;
  font-size: 13px;
  font-style: italic;
  font-weight: var(--semiBold);
  margin-bottom: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 1.5em 0em 1.5em 1em;
  font-size: 16px;
  font-weight: var(--semiBold);
  color: var(--dark-blue);
  border-radius: 0.3em;
  border: 1px #dedede solid;
  margin-bottom: 1rem;
  @media screen and (min-width: 760px) {
     padding: 1.5em 0em 1.5em 2em;

  }
  ::placeholder {
    font-size: 0.875rem;
    color: var(--dark-blue);
    font-weight: var(--semiBold);
    opacity: 0.75;
  }
  &:invalid ~ ${Error} {
    display: ${(props: any) => props.focused && 'block'};
  }
  &:invalid {
    border: ${(props: any) => props.focused && '2px var(--red) solid'};
    background: ${(props: any) =>
      props.focused && `url(${ErrorIcon}) no-repeat`};
    margin-bottom: ${(props: any) => props.focused && '0.5rem'};
    background-position: bottom 15px right 20px;
  }
  &:valid {
    border: 1px var(--green) solid;
  }
  :focus {
    outline: none;
    border: 1px var(--blue) solid;
  }
`;
