import React from "react";
import LabeledInput from "../../LabeledInput";

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
      <LabeledInput
          register={register}
          title="Email:"
          name="email"
      />
        <LabeledInput
            register={register}
            title="Password:"
            name="password"
        />
      <button className="login-btn mt-3 w-100">
        Login
      </button>
      {
        !loginDivider && <div className="login-divider mb-3"/>
      }
      <p
          className="forgot-pass-title mt-3"
          onClick={() =>
          { handleForgetPassword(true) }
          }
      >
          I forgot my password
      </p>
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
