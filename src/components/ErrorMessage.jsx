import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ msg }) => (
  <div>
    {msg}
  </div>
);

ErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default ErrorMessage;
