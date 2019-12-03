import React from "react";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const Login = ({
                   loginDivider,
                   handleForgetPassword,
                   register,
                   handleSubmit,
                   onSubmit,
                   serverError,
                   responseGoogle,
                   responseFacebook
}) => (
  <React.Fragment>
    <form onSubmit={handleSubmit(onSubmit)} >
      {
        !loginDivider &&  <div className="login-divider mb-3"/>
      }
      <label className="d-flex form-label flex-column">
        Email:
        <input name="email" ref={register}  type="text"/>
      </label>
      <label className="d-flex form-label flex-column">
        Password:
        <input name="password" ref={register} type="text"/>
      </label>
      <button className="login-btn mt-3 w-100">
        Login
      </button>
      {
        !loginDivider &&  <div className="login-divider mb-3"/>
      }
      <div className="sidebar">
        <h3 className="mb-0 mt-3  social-title">Social login </h3>
      </div>
        <GoogleLogin
            clientId="613880626150-c69acudo8li5c1qgmf9dkokuruioq37r.apps.googleusercontent.com"
            render={renderProps => (
                <button onClick={renderProps.onClick} className="login-btn google-btn mt-3 w-100">
                Login with Google
                </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
                <button  className="login-btn fb-btn mt-3 w-100">
                Login with Facebook
                </button>
      {
        !loginDivider &&  <div className="login-divider mb-3"/>
      }
      <p className="forgot-pass-title mt-3" onClick={() => { handleForgetPassword(true) }}>I forgot my password</p>
      {
        serverError &&
        <span className="error-msg d-flex mt-3 justify-content-center">
            {serverError}
        </span>
      }
    </form>
  </React.Fragment>
);

export default Login;
