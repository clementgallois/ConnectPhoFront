import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as sessionActions from '../../services/auth/actions';
import TextField from '../../components/TextField';

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    return this.setState({ [field]: event.target.value });
  }

  onSave(e) {
    e.preventDefault();
    this.props.actions.logInUser(this.state);
  }

  render() {
    if (this.props.auth.loggedIn) {
      return (<Redirect to={
        (this.props.location.state &&
           this.props.location.state.from &&
           this.props.location.state.from.pathname) || '/'
      }
      />);
    }
    return (
      <div className="form-container">
        <form>
          <TextField
            label="Username:"
            name="username"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.onChange}
          />
          <TextField
            label="Password:"
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.onChange}
            password
          />

          <span>
            <input
              type="submit"
              className="btn btn-primary login-button"
              onClick={this.onSave}
            />
            {'No account yet ? '}
            <Link to={{
              pathname: '/register',
              state: {
                from: (this.props.location.state &&
                                 this.props.location.state.from &&
                                 this.props.location.state.from.pathname) || '/',
              },
            }}
            >
              {'Register'}
            </Link>
          </span>
        </form>

      </div>

    );
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
  actions: PropTypes.shape({
    logInUser: PropTypes.func.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

Login.defaultProps = {
  location: PropTypes.shape({
    state: undefined,
  }),
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
