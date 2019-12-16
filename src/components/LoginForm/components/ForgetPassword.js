import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "react-hook-form";
import ErrorsContent from "./ForgotPasswordErrors";
import PropTypes from "prop-types";
import LabeledInput from "../../LabeledInput";

const ForgetPassword = ({
  handleForgetPassword,
  handleResetPassword,
  serverError,
  user
}) => {

  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const emailValidation = /^\S+@\S+\.\S+$/;

  const onResetSubmit = (values, e) => {
    if (!values.email || Object.values(errors).length > 0) return;

    handleResetPassword(values.email);
    e.target.reset();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onResetSubmit)}>
        <p className="forget-password-main">
            Please type your email, that we can send you your new password
        </p>
        <LabeledInput
          title="Email:"
          content={
            <ErrorsContent
              errors={errors}
              serverError={serverError}
              user={user}
            />
          }
          name="email"
          register={register}
          required={true}
          pattern={emailValidation}
        />
        <button className="login-btn mt-3 w-100">
            Send new password
        </button>

        <p className="forgot-pass-title mt-3" onClick={() => { handleForgetPassword(false) }}>
          <FontAwesomeIcon className="mr-2" icon={["fas", "arrow-left"]} />
            Back to login
        </p>
      </form>
    </React.Fragment>
  )
};

export default ForgetPassword;


ForgetPassword.propTypes = {
  serverError: PropTypes.string,
  handleResetPassword: PropTypes.func,
  user: PropTypes.object,
  handleForgetPassword: PropTypes.func
};
