import React from "react";

const Login = ({
  loginDivider,
  handleForgetPassword,
  register,
  handleSubmit,
  onSubmit,
  serverError,
}) => (
  <React.Fragment>
    <form onSubmit={handleSubmit(onSubmit)} >
      {
        !loginDivider && <div className="login-divider mb-3"/>
      }
      <label className="d-flex form-label flex-column">
        Email:
        <input name="email" ref={register} type="text"/>
      </label>
      <label className="d-flex form-label flex-column">
        Password:
        <input name="password" ref={register} type="text"/>
      </label>
      <button className="login-btn mt-3 w-100">
        Login
      </button>
      {
        !loginDivider && <div className="login-divider mb-3"/>
      }
      {
        !loginDivider && <div className="login-divider mb-3"/>
      }
      <p className="forgot-pass-title mt-3" onClick={() => { handleForgetPassword(true) }}>I forgot my password</p>
      {
        serverError &&
        <span className="error-msg d-flex mt-3 justify-content-center">
          {serverError.toString()}
        </span>
      }
    </form>
  </React.Fragment>
);

export default Login;
