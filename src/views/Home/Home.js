import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Tabs, Tab, Panel } from 'react-bootstrap';

import * as socketActions from '../../services/socket/actions';
import UserList from './components/UserList';
import Lobby from './components/Lobby';

import './Home.css';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.actions.createSocket('http://localhost:8080');
  }


  render() {
    return (
      <div className="main-body">
        <div className="user-list pull-right" >
          <UserList
            title="Connected Users"
          />
        </div>
        <Panel className="main-panel">
          <Tabs id="main-tab" defaultActiveKey="lobby" className="tabs" animation={false} >
            <Tab eventKey="lobby" title="Lobby" >
              <Lobby />
            </Tab>
            { this.props.rooms.map(e => (
              <Tab
                key={e._id}
                eventKey={e._id}
                title={e.isOwner ? e.opponent.id.username : e.owner.id.username}
              >
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
    createSocket: PropTypes.func.isRequired,
  }).isRequired,
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(socketActions, dispatch),
  };
}

function mapStateToProps({ rooms }) {
  return {
    rooms,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
