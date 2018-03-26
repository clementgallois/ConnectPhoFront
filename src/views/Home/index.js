import React from 'react';
import io from 'socket.io-client';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as lobbyActions from '../../services/lobby/actions';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    const socket = io.connect('http://localhost:8080', { query: `token=${sessionStorage.jwt}` });
    socket.on('USER_LIST', this.props.actions.createUserList);
    socket.on('ADD_USER', this.props.actions.addUser);
    socket.on('DEL_USER', this.props.actions.deleteUser);
  }
  render() {
    return (
      <div>
        <h1> Connected users:</h1>
        <ul>
          {this.props.lobby.userList.map(el => (
            <li key={el._id}>{el.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.shape({
    addUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    createUserList: PropTypes.func.isRequired,
  }).isRequired,
  lobby: PropTypes.shape({
    userList: PropTypes.array.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lobbyActions, dispatch),
  };
}

function mapStateToProps({ lobby }) {
  return {
    lobby,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
