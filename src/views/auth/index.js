import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as sessionActions from '../../services/auth/actions';

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { credentials: { username: '', password: '' } };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const { credentials } = this.state;
    credentials[field] = event.target.value;
    return this.setState({ credentials });
  }

  onSave() {
    this.props.actions.logInUser(this.state.credentials);
  }


  render() {
    if (sessionStorage.jwt) {
      return (<Redirect to={
        (this.props.location.state &&
           this.props.location.state.from &&
           this.props.location.state.from.pathname) || '/'
      }
      />);
    }

    return (
      <div>
        <form>
          <input
            name="username"
            label="username"
            value={this.state.credentials.username}
            onChange={this.onChange}
          />
          <input
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}
          />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}
          />
        </form>
      </div>

    );
  }
}

LogInPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
  actions: PropTypes.shape({
    logInUser: PropTypes.func.isRequired,
  }).isRequired,
};

LogInPage.defaultProps = {
  location: PropTypes.shape({
    state: undefined,
  }),
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(LogInPage);
