import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import {
  Login,
  Home,
  Register,
} from './views';

const Main = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/Register" component={Register} />
  </Switch>
);

export default Main;
