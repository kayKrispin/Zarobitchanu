import React, { useState } from "react";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";

const LoginFormContainer = ({ loginDivider }) => {

  const [forgetPasswordForm, handleForgetPassword] = useState(false);

  const props = {
    loginDivider,
    handleForgetPassword,
    forgetPasswordForm
  };

  return <LoginForm {...props}/>
};

export default LoginFormContainer;

LoginFormContainer.propTypes = {
  loginDivider: PropTypes.bool
};
