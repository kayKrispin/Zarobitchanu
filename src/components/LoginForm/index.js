import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { actions as authActions } from "../../redux/modules/Auth";
import PropTypes from "prop-types";
import useForm from "react-hook-form";
import { modalActions } from "../../redux/modules/Modal";

const LoginFormContainer = ({ loginDivider, login, serverError, close, token }) => {

  const [forgetPasswordForm, handleForgetPassword] = useState(false);
  const { register, handleSubmit } = useForm(); // initialise the hook

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
    onSubmit,
  };

  return <LoginForm {...props}/>
};

export default connect(
  state => ({
    loading: state.authStore.loading,
    token: state.authStore.token,
    serverError: state.authStore.error,
  }),
  dispatch => ({
    login: credentials => dispatch(authActions.loginRequest(credentials)),
    close: () => dispatch(modalActions.closeModal())
  })
)(LoginFormContainer);

LoginFormContainer.propTypes = {
  loginDivider: PropTypes.bool,
  login: PropTypes.func.isRequired
};
