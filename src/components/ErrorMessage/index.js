import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ className, error }) => (
  <span className={className}>
    {error}
  </span>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string
};
