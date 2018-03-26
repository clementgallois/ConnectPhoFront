import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (loggedIn ? (
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
  />);

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool,
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

PrivateRoute.defaultProps = {
  loggedIn: false,
  location: null,
};

function mapStateToProps({ auth }) {
  return {
    loggedIn: auth.loggedIn,
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
