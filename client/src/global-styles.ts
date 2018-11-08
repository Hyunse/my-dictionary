import reset from 'styled-reset';
import { createGlobalStyle } from './typed-components';

// tslint:disable-next-line
const GlobalStyle = createGlobalStyle`
  ${reset}
  html,body {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;