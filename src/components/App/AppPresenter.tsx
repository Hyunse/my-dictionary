import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Main from '../../routes/Main';

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route path={"/"} component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppPresenter;
