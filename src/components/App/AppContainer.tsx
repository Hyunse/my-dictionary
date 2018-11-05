import React from 'react';
import theme from '../../theme';
import { ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';

class AppContainer extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
            <AppPresenter />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default AppContainer;
