import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

:root {
  --primary: #7F452A;
  --white: #ffff;

  /* primary */
  --primary-light: #E6D7BC;
  --primary-dark: #44331E;
  --primary-gray: #89745B;

  /* neutral colors */
  --N600: #434242;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
}

`;
