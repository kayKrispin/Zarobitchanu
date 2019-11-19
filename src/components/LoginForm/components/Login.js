import React from "react";

const Login = ({ loginDivider, handleForgetPassword }) => (
  <React.Fragment>
    <form action="">
      {
        !loginDivider &&  <div className="login-divider mb-3"/>
      }
      <label className="d-flex form-label flex-column">
        Email:
        <input type="text"/>
      </label>
      <label className="d-flex form-label flex-column">
        Password:
        <input type="text"/>
      </label>
      <button onClick={(e) => { e.preventDefault() }} className="login-btn mt-3 w-100">
        Login
      </button>
      {
        !loginDivider &&  <div className="login-divider mb-3"/>
      }
      <div className="sidebar">
        <h3 className="mb-0 mt-3  social-title">Social login </h3>
      </div>
      <button onClick={(e) => { e.preventDefault() }} className="login-btn google-btn mt-3 w-100">
        Login with Google
      </button>
      <button onClick={(e) => { e.preventDefault() }} className="login-btn fb-btn mt-3 w-100">
        Login with Facebook
      </button>
      {
        !loginDivider &&  <div className="login-divider mb-3"/>
      }
      <p className="forgot-pass-title mt-3" onClick={() => { handleForgetPassword(true) }}>I forgot my password</p>
    </form>
  </React.Fragment>
);

export default Login;
