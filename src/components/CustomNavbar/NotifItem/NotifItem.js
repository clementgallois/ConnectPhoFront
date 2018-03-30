import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

import * as inviteActions from '../../../services/invites/actions';

import './NotifItem.css';

class NotifItem extends React.PureComponent {
  render() {
    return (
      <div>
        <span>{this.props.from} invited you to a game!</span>
        <Button
          className="notifitem-button"
          bsStyle="success"
          bsSize="small"
          onClick={() => this.props.actions.acceptInvite(this.props.inviteId)}
        >
          Accept
        </Button>
        <Button
          className="notifitem-button"
          bsStyle="danger"
          bsSize="small"
          onClick={() => this.props.actions.deleteInvite(this.props.inviteId)}
        >
          Decline
        </Button>
      </div>
    );
  }
}

NotifItem.propTypes = {
  actions: PropTypes.shape({
    acceptInvite: PropTypes.func.isRequired,
    deleteInvite: PropTypes.func.isRequired,
  }).isRequired,
  from: PropTypes.string.isRequired,
  inviteId: PropTypes.string.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(inviteActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(NotifItem);
