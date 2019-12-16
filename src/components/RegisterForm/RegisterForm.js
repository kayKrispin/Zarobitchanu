import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import ErrorMessage from "../ErrorMessage";
import LabeledInput from "../LabeledInput";
import ErrorsContent from "../LoginForm/components/ForgotPasswordErrors";

const RegisterForm = ({
  handleImage,
  avatar,
  register,
  handleSubmit,
  onSubmit,
  loading,
  serverError,
  userAvatar,
  user,
  errors
}) => {

  const btnStyles = ["login-btn mt-3 w-100"];
  const emailValidation = /^\S+@\S+\.\S+$/;

  const failedMsg = serverError &&
    <ErrorMessage
      className="error-msg d-flex mt-3 justify-content-center"
      error={serverError}
    />;

  const successMsg = user.email &&
    <ErrorMessage
      className="success-msg d-flex mt-3 justify-content-center"
      error="Congratuliations.You have created account.
      Now you need to verify your email and click the link."
    />;

  const passwordError = <div>
    {
      errors.password && errors.password.type === "required" &&
      <ErrorMessage
        error="Password is required"
        className="error-msg"
      />
    }
  </div>;

  if (loading) btnStyles.push("disabled-login");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="user-avatar">
          <div className="user-avatar--container">
            {avatar}
          </div>
          <p className="form-label mt-2">Choose your avatar</p>
          <input
            onChange={ e => handleImage(e.target.files[0])
            }
            className="user-avatar--file-uploader"
            type="file"
          />
        </div>
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
        <LabeledInput
          title="Password:"
          content={passwordError }
          name="password"
          register={register}
          required={true}
          pattern={emailValidation}
        />
        <button disabled={loading} className={btnStyles.join(" ")}>
          {
            loading ? <Spin /> : "Register"
          }
        </button>
        {failedMsg}

        {successMsg}
      </form>
    </div>
  )
};

export default RegisterForm;


RegisterForm.propTypes = {
  imageBlob: PropTypes.string,
  handleImageBlob: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object,
  handleImage: PropTypes.func,
  register: PropTypes.func,
  loading: PropTypes.bool
};
