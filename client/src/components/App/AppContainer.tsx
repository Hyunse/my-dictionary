import React from 'react';
import { Provider } from 'react-redux';
import store from '../../createStore';
import theme from '../../theme';
import { ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';

class AppContainer extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppPresenter />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default AppContainer;
