import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "react-hook-form";

const ForgetPassword = ({ handleForgetPassword, handleResetPassword, serverError, user }) => {

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
                <p className="forget-password-main">Please type your email, that we can send you your new password</p>
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
                    {
                        serverError &&  (
                            <span className="error-msg d-flex mt-3 justify-content-center">
                              {serverError}
                              </span>
                        )
                    }
                    {
                        user.email &&
                        <span className="success-msg d-flex mt-3 justify-content-center">
                            Please confirm link to create new password in your email.
                       </span>
                    }
                </label>
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
