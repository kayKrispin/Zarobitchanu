import React from "react";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import PropTypes from "prop-types";

const LoginForm = props => (
  <React.Fragment>
    {
      props.forgetPasswordForm
        ? <ForgetPassword {...props}/>
        : <Login {...props}/>
    }
  </React.Fragment>
);

export default LoginForm;


LoginForm.propTypes = {
  loginDivider: PropTypes.bool,
  handleForgetPassword: PropTypes.func,
  forgetPasswordForm: PropTypes.bool
};
