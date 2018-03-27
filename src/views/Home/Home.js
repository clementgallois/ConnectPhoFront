import React from 'react';
import io from 'socket.io-client';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Tabs, Tab, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import * as lobbyActions from '../../services/lobby/actions';
import UserList from './components/UserList';

import './Home.css';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.socket = io.connect('http://localhost:8080', { query: `token=${sessionStorage.jwt}` });
    this.socket.on('USER_LIST', this.props.actions.createUserList);
    this.socket.on('ADD_USER', this.props.actions.addUser);
    this.socket.on('DEL_USER', this.props.actions.deleteUser);
    this.socket.on('INVITE_RECEIVED', this.props.actions.inviteReceived);
    this.socket.on('ROOM_JOINED', this.props.actions.addRoom);
    this.socket.on('ERROR', console.log);
    this.onClick = this.onClick.bind(this);
    this.onUserClick = this.onUserClick.bind(this);
  }

  onClick(room) {
    this.socket.emit('JOIN_ROOM', { room });
  }

  onUserClick(id) {
    this.socket.emit('INVITE', { to: id });
  }

  render() {
    return (
      <div className="main-body">
        <div className="user-list pull-right" >
          <UserList
            title="Connected Users"
            userList={this.props.lobby.userList}
            onClick={this.onUserClick}
          />
        </div>
        <Panel className="main-panel">
          <Tabs id="main-tab" defaultActiveKey="lobby" className="first-tab" animation={false} >
            <Tab eventKey="lobby" title="Lobby" >
              <ListGroup className="lobby-content">
                {this.props.lobby.invites.map(e => (
                  <ListGroupItem key={`invites-${e.room}`}>
                    <span>{e.from.username} invited you </span>
                    <input type="button" value="accept" onClick={() => this.onClick(e.room)} />
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Tab>
            { this.props.lobby.rooms.map(e => (
              <Tab key={e.room} eventKey={e.room} title={e.opponent.username} >
                coucou
              </Tab>
            )) }
          </Tabs>
        </Panel>
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.shape({
    addUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    createUserList: PropTypes.func.isRequired,
    inviteReceived: PropTypes.func.isRequired,
    addRoom: PropTypes.func.isRequired,
  }).isRequired,
  lobby: PropTypes.shape({
    userList: PropTypes.array.isRequired,
    invites: PropTypes.array.isRequired,
    rooms: PropTypes.array.isRequired,
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
