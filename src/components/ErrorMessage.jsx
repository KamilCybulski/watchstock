import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ msg }) => (
  <div>
    This is ErrorMessage Component. <br />
    {msg}
  </div>
);

ErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default ErrorMessage;
