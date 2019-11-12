import React from "react";

const LoginForm = () => (
  <React.Fragment>
    <form action="">
      <div className="login-divider mb-3"/>
      <label htmlFor="" className="d-flex form-label flex-column">
        Username:
        <input type="text"/>
      </label>
      <label htmlFor="" className="d-flex form-label flex-column">
        Password:
        <input type="text"/>
      </label>
      <button onClick={(e) => { e.preventDefault() }} className="login-btn mt-3 w-100">
        Login
      </button>
      <div className="login-divider mt-4"/>
      <div className="sidebar">
        <h3 className="mb-0 mt-3  social-title">Social login </h3>
      </div>
      <button onClick={(e) => { e.preventDefault() }} className="login-btn google-btn mt-3 w-100">
        Login with Google
      </button>
      <button onClick={(e) => { e.preventDefault() }} className="login-btn fb-btn mt-3 w-100">
        Login with Facebook
      </button>
      <div className="login-divider mt-4"/>
      <p className="forgot-pass-title mt-3">I forgot my password</p>
    </form>
  </React.Fragment>
);

export default LoginForm;
