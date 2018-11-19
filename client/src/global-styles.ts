import reset from 'styled-reset';
import { createGlobalStyle } from './typed-components';

// tslint:disable-next-line
const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:400,700');
  html,body {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;