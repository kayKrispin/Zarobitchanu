import React, { useRef } from "react";

const ResetPasswordForm = ({ onSubmit, register, errors, handleSubmit, watch, confirmMessage }) => {

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div className="reset-password-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="forget-password-main">Choose your new password</p>
        <label className="d-flex form-label flex-column">
                    New Password:
          <input name="password" ref={register({
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters!"
            }
          })} type="password"/>
          {
            errors.password && (
              <span className="error-msg">{errors.password.message}</span>
            )
          }
        </label>
        <label className="d-flex form-label flex-column">
                    Confirm Password:
          <input name="confirmPassword" ref={register({
            validate: value => value === password.current || "The passwords do not match"
          })}
          type="password"/>
          {
            errors.confirmPassword && (
              <span className="error-msg">{errors.confirmPassword.message}</span>
            )
          }
        </label>
        {
          confirmMessage && <span className="success-msg d-flex mt-3 justify-content-center">
            {confirmMessage}
          </span>
        }
        <button className="login-btn mt-3 w-100">
                    Change Password
        </button>
      </form>
    </div>
  )
};

export default ResetPasswordForm;
