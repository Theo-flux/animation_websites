import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

:root {
  --primary: #0fac81;
  --primary-gradient: linear-gradient(135deg, #0fac81 0%, #04251c 100%);
  --white: #ffff;

  /* primary */
  --primary-light: #e7f7f2;
  --primary-light-hover: #dbf3ec;
  --primary-light-active: #b5e5d8;
  --primary-normal: #0fac81;
  --primary-normal-hover: #0e9b74;
  --primary-normal-active: #0c8a67;
  --primary-dark: #0b8161;
  --primary-dark-hover: #09674d;
  --primary-dark-active: #074d3a;
  --primary-darker: #053c2d;

  /* secondary */
  --S50: #EAEFF1;
  --S75: #A8BBC4;
  --S100: #859FAB;
  --S200: #507687;
  --S300: #2C5A6E;
  --S400: #1F3F4D;
  --S500: #1B3743;

  /* neutral colors */
  --N0: #fff;
  --N10: #fafafa;
  --N20: #f6f6f6;
  --N30: #ededed;
  --N40: #e1e1e1;
  --N50: #c6c5c6;
  --N60: #b8b7b8;
  --N70: #adacac;
  --N80: #9f9e9e;
  --N90: #919091;
  --N100: #838283;
  --N200: #767475;
  --N300: #686767;
  --N400: #5c5b5c;
  --N500: #4f4d4e;
  --N600: #434242;
  --N700: #333132;
  --N800: #252425;
  --N900: #1a1819;

  /* grey */
  --G50: #f2f2f2;
  --G75: #cbcbcb;
  --G100: #b5b5b5;
  --G200: #969696;
  --G300: #808080;
  --G400: #5a5a5a;
  --G500: #4e4e4e;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-family: 'Manrope', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
}

`;
