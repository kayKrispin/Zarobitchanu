import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { actions as authActions } from "../../redux/modules/Auth";
import PropTypes from "prop-types";
import useForm from "react-hook-form";
import { modalActions } from "../../redux/modules/Modal";

const LoginFormContainer = ({
  loginDivider,
  login,
  serverError,
  handleResetPassword,
  user
}) => {

  const [forgetPasswordForm, handleForgetPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  //Email regex
  const emailValidation = /^\S+@\S+\.\S+$/;

  const onSubmit = (values, e) => {

    login(values);
    e.target.reset();
  };

  const props = {
    loginDivider,
    handleForgetPassword,
    forgetPasswordForm,
    register,
    handleSubmit,
    serverError,
    emailValidation,
    errors,
    handleResetPassword,
    user,
    onSubmit
  };

  return <LoginForm {...props}/>
};

export default connect(
  state => ({
    loading: state.authStore.loading,
    token: state.authStore.token,
    serverError: state.authStore.error,
    user: state.authStore.user
  }),
  dispatch => ({
    login: credentials => dispatch(authActions.loginRequest(credentials)),
    close: () => dispatch(modalActions.closeModal()),
    handleResetPassword: email => dispatch(authActions.resetPasswordRequest(email))
  })
)(LoginFormContainer);

LoginFormContainer.propTypes = {
  loginDivider: PropTypes.bool,
  login: PropTypes.func.isRequired,
  serverError: PropTypes.string,
  handleResetPassword: PropTypes.func,
  user: PropTypes.object
};
