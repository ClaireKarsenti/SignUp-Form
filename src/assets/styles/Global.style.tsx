import { createGlobalStyle } from 'styled-components';
import BgMobile from '../images/bg-intro-mobile.png';
import BgDesktop from '../images/bg-intro-desktop.png';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    :root {
        --red: hsl(0, 100%, 74%) ;
        --green: hsl(154, 59%, 51%);
        --blue: hsl(248, 32%, 49%);
        --dark-blue: hsl(249, 10%, 26%) ;
        --grayish-blue: hsl(246, 25%, 77%);
        --white: #ffff;
        --box-shadow: 0px 7px hsla(249, 10%, 26%, 0.351) ;

        --regular: 400;
        --medium: 500;
        --semiBold: 600;
        --bold: 700;

        --font-size: 16px
    }
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

/* Box sizing rules */
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }
  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

 /* Change the white to any color */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
    .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
  body {
    font-family: Poppins, sans-serif;
    background: url(${BgMobile}) var(--red);
    background-size: 100%;
    -webkit-font-smoothing: antialised;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: var(--white);
    padding: 1rem;
    @media screen and (min-width: 760px ) {
    background-image: url(${BgDesktop});
    }
  }
    `;
