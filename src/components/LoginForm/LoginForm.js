import React from "react";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import PropTypes from "prop-types";

const LoginForm = ({ loginDivider, handleForgetPassword, forgetPasswordForm }) => (
  <React.Fragment>
    {
      forgetPasswordForm
        ? <ForgetPassword handleForgetPassword={handleForgetPassword}/>
        : <Login loginDivider={loginDivider} handleForgetPassword={handleForgetPassword} />
    }
  </React.Fragment>
);

export default LoginForm;


LoginForm.propTypes = {
  loginDivider: PropTypes.bool,
  handleForgetPassword: PropTypes.func,
  forgetPasswordForm: PropTypes.bool
};
