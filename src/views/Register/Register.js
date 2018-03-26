import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as sessionActions from '../../services/auth/actions';
import TextField from '../../components/TextField';

import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', username: '', password: '' };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    return this.setState({ [field]: event.target.value });
  }

  onSave(e) {
    e.preventDefault();
    this.props.actions.registerUser(this.state);
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
            label="Email:"
            name="email"
            value={this.state.email}
            placeholder="Enter Email"
            onChange={this.onChange}
          />
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
            {'Already have an account ? '}
            <Link to={{
              pathname: '/login',
              state: {
                from: (this.props.location.state &&
                   this.props.location.state.from &&
                   this.props.location.state.from.pathname) || '/',
              },
            }}
            >
              {'Log in'}
            </Link>
          </span>
        </form>

      </div>

    );
  }
}

Register.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
  actions: PropTypes.shape({
    registerUser: PropTypes.func.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

Register.defaultProps = {
  location: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
