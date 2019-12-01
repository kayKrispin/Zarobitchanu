import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

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
    <span className="error-msg d-flex mt-3 justify-content-center">
            {serverError}
    </span>;
  const successMsg = user.email &&
    <span className="success-msg d-flex mt-3 justify-content-center">
            Congratuliations.You have created account.Now you need to verify your email and click the link.
    </span>;

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
            onChange={ e =>
              handleImage(e.target.files[0])
            }
            className="user-avatar--file-uploader"
            type="file"
          />
        </div>
        <label className="d-flex form-label flex-column">
          Email:
          <input name="email" ref={register({
              required: true,
              pattern: emailValidation
          })} type="text"/>
            {
                errors.email && errors.email.type === "required" && (
                    <span className="error-msg">Email is required!</span>
                )
            }
            {
                errors.email && errors.email.type !== "required" && (
                    <span className="error-msg">Invalid email format!</span>
                )
            }
        </label>
        <label className="d-flex form-label flex-column">
          Password:
          <input name="password" ref={register({
              required: true
          })} type="text"/>
            {
                errors.password && errors.password.type === "required" && (
                    <span className="error-msg">Password is required!</span>
                )
            }
        </label>
        <button disabled={loading} className={btnStyles.join(" ")}>
          {
            loading ? <Spin /> : "Register"
          }
        </button>
        {
          failedMsg
        }

        {
          successMsg
        }
      </form>
    </div>
  )
};

export default RegisterForm;


RegisterForm.propTypes = {
  imageBlob: PropTypes.string,
  handleImageBlob: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object
};
