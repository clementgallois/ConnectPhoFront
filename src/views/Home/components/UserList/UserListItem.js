import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import './UserList.css';

class UserListItem extends React.PureComponent {
  onClick(id) {
    this.props.socket.socket.emit('INVITE', { to: id });
  }
  render() {
    return (
      <ListGroupItem onClick={() => this.onClick(this.props.user._id)}>
        <div className="userList-container">
          <img className="img-responsive img-circle pull-left" src={this.props.user.pictureUrl} alt="profilePicture" />
          <h2 className="pull-left userName">{this.props.user.username}</h2>
        </div>
      </ListGroupItem>
    );
  }
}

UserListItem.propTypes = {
  user: PropTypes.shape({
    pictureUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps({
  socket,
}) {
  return {
    socket,
  };
}
export default connect(mapStateToProps, null)(UserListItem);
