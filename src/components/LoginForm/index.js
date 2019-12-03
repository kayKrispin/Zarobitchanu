import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { actions as authActions } from "../../redux/modules/Auth";
import PropTypes from "prop-types";
import useForm from "react-hook-form";
import { modalActions } from "../../redux/modules/Modal";

const LoginFormContainer = ({ loginDivider, login, serverError, close, token, handleResetPassword, user, socialLogin }) => {

  const [forgetPasswordForm, handleForgetPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const emailValidation = /^\S+@\S+\.\S+$/;

  const onSubmit = (values, e) => {
    login(values);
    e.target.reset();
  };

    const responseGoogle = response => {

      if (response) {
          const credentials = {
              email: response.profileObj.email,
              password: response.profileObj.familyName,
              img: response.profileObj.imageUrl
          };

          socialLogin(credentials)
      }
    };

    const responseFacebook = (response) => {
        console.log(response);
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
    onSubmit,
    responseFacebook,
    responseGoogle
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
    socialLogin: credentials => dispatch(authActions.loginSocialRequest(credentials)),
    close: () => dispatch(modalActions.closeModal()),
    handleResetPassword: email => dispatch(authActions.resetPasswordRequest(email))
  })
)(LoginFormContainer);

LoginFormContainer.propTypes = {
  loginDivider: PropTypes.bool,
  login: PropTypes.func.isRequired
};
