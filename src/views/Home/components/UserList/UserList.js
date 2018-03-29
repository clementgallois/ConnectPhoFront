import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';


import UserListItem from './UserListItem';

const UserList = ({ users, title, ...rest }) => (
  <Panel>
    <Panel.Heading>{title}</Panel.Heading>
    <ListGroup>
      {users.map(el => (
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
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

UserList.defaultProps = {
  title: null,
};


function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps, null)(UserList);
