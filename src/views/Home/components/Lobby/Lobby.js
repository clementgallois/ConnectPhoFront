import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ListGroup, ListGroupItem } from 'react-bootstrap';


import * as lobbyActions from '../../../../services/lobby/actions';
import './Lobby.css';

class Lobby extends React.PureComponent {
  onClick(invite) {
    this.props.socket.socket.emit('JOIN_ROOM', { room: invite._id });
    this.props.actions.deleteInvite(invite);
  }

  render() {
    return (
      <div>
        <ListGroup className="lobby-content">
          {this.props.lobby.invites.map(e => (
            <ListGroupItem key={`invites-${e._id}`}>
              <span>{e.owner.id.username} invited you
              </span>
              <input type="button" value="accept" onClick={() => this.onClick(e)} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

Lobby.propTypes = {
  actions: PropTypes.shape({
    deleteInvite: PropTypes.func.isRequired,
  }).isRequired,
  lobby: PropTypes.shape({
    invites: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

function mapStateToProps({ lobby, socket }) {
  return {
    lobby,
    socket,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lobbyActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
