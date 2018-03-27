import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

import './UserList.css';

const UserListItem = ({ user, onClick }) => (
  <ListGroupItem onClick={() => onClick(user._id)}>
    <div className="userList-container">
      <img className="img-responsive img-circle pull-left" src={user.pictureUrl} alt="profilePicture" />
      <h2 className="pull-left userName">{user.username}</h2>
    </div>
  </ListGroupItem>
);

UserListItem.propTypes = {
  user: PropTypes.shape({
    pictureUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserListItem;
