import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import {
  LogInPage,
  Home,
} from './views';

const Main = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/login" component={LogInPage} />
  </Switch>
);

export default Main;
