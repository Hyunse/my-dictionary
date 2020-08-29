import reset from 'styled-reset';
import { createGlobalStyle } from './typed-components';

// tslint:disable-next-line
const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:400,700');
  html,body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 750px) {
    html,body {
      height: 100%;
      font-size: 14px;
    }
  }

  #root {
    width: 100%;
    height: inherit;
    overflow: auto;
  }
`;

export default GlobalStyle;