import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Panel } from 'react-bootstrap';

import UserListItem from './UserListItem';

const UserList = ({ userList, title, ...rest }) => (
  <Panel>
    <Panel.Heading>{title}</Panel.Heading>
    <ListGroup>
      {userList.map(el => (
        <UserListItem
          user={el}
          key={el._id}
          {...rest}
        />
      ))}
    </ListGroup>
  </Panel>
);

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

UserList.defaultProps = {
  title: null,
};

export default UserList;
