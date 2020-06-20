import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Login from '../../routes/Login';
import Main from '../../routes/Main';
import Signup from '../../routes/Signup';

const AppPresenter: React.SFC = () => (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route path={'/login'} component={Login} />
        <Route path={'/signup'} component={Signup} />
        <Route path={'/'} component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppPresenter;
