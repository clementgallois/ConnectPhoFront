import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import NotifIcon from './NotifIcon';
import NotifItem from './NotifItem';
import './CustomNavbar.css';

const CustomNavBar = ({ loggedIn, invites }) => (
  <Navbar className="CustomNavbar">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">
          <img src="/noodlelogo.png" alt="logo" />
          <span className="App-title">Connect Pho</span>
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      {loggedIn &&
        <NavDropdown
          eventKey={1}
          noCaret
          className="notification"
          title={<NotifIcon notifSize={invites.length} />}
        >
          {invites.map((e, i) => (
            <MenuItem eventKey={i} key={`invites-${e._id}`}>
              <NotifItem
                from={e.owner.id.username}
                inviteId={e._id}
              />
            </MenuItem>
          ))}
        </NavDropdown>}
    </Nav>
  </Navbar>);

CustomNavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  invites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ auth, invites }) {
  return {
    loggedIn: auth.loggedIn,
    invites,
  };
}

export default connect(mapStateToProps, null)(CustomNavBar);
