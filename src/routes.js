import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogInPage from './views/auth';
import auth from './services/auth/authenticate';

const Home = () => (<div><h1>Home</h1><br /><Link to="/login" >coucou</Link></div>);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (auth.loggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

PrivateRoute.defaultProps = {
  location: null,
};

const Main = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/login" component={LogInPage} />
  </Switch>
);

export default Main;
