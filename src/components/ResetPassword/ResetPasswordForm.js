import React, { useRef } from "react";
import ErrorMessage from "../ErrorMessage";
import PropTypes from "prop-types";

const ResetPasswordForm = ({
  onSubmit,
  register,
  errors,
  handleSubmit,
  watch,
  confirmMessage
}) => {

  //Validate confirm password
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
            errors.password &&
            <ErrorMessage
              className="error-msg"
              error={errors.password.message}
            />
          }
        </label>
        <label className="d-flex form-label flex-column">
                    Confirm Password:
          <input name="confirmPassword" ref={register({
            validate: value => value === password.current || "The passwords do not match"
          })}
          type="password"/>
          {
            errors.confirmPassword &&
            <ErrorMessage
              className="error-msg"
              error={errors.confirmPassword.message}
            />
          }
        </label>
        {
          confirmMessage && <ErrorMessage
            className="success-msg d-flex mt-3 justify-content-center"
            error={confirmMessage}
          />
        }
        <button className="login-btn mt-3 w-100">
                    Change Password
        </button>
      </form>
    </div>
  )
};

export default ResetPasswordForm;

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.array,
  handleSubmit: PropTypes.func,
  confirmMessage: PropTypes.string
};
