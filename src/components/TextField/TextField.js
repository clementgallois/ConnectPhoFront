import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

const TextField = ({
  validateFunc,
  label,
  password,
  ...rest
}) => (
  <FormGroup
    validationState={validateFunc ? () => validateFunc() : null}
  >
    {label && <ControlLabel>{label}</ControlLabel>}
    <FormControl
      type={password ? 'password' : 'text'}
      {...rest}
    />
  </FormGroup>
);

TextField.propTypes = {
  label: PropTypes.string,
  validateFunc: PropTypes.func,
  password: PropTypes.bool,
};

TextField.defaultProps = {
  label: null,
  validateFunc: null,
  password: false,
};

export default TextField;
