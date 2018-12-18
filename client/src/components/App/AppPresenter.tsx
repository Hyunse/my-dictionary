import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Login from '../../routes/Login';
import Main from '../../routes/Main';

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact={true} path={"/"} component={Main} />
        <Route path={"/login"} component={Login} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppPresenter;
