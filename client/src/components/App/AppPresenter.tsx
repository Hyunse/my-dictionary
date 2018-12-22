import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Login from '../../routes/Login';
import Main from '../../routes/Main';

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route path={'/login'} component={Login} />
        <Route path={'/'} component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppPresenter;
