import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';

import './NotifIcon.css';

const NotifIcon = ({ notifSize }) => (
  <div>
    {notifSize > 0 && <span className="notify-bubble">{notifSize}</span>}
    <Glyphicon glyph="bell" style={{ fontSize: '18px' }} />
  </div>
);

NotifIcon.propTypes = {
  notifSize: PropTypes.number.isRequired,
};

export default NotifIcon;
