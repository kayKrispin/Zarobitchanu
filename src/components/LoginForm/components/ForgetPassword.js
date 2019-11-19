import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgetPassword = ({ handleForgetPassword }) => (
  <React.Fragment>
    <form action="">
      <p className="forget-password-main">Please type your email, that we can send you your new password</p>
      <label className="d-flex form-label flex-column">
        Email:
        <input type="text"/>
      </label>
      <button onClick={(e) => { e.preventDefault() }} className="login-btn mt-3 w-100">
        Send new password
      </button>

      <p className="forgot-pass-title mt-3" onClick={() => { handleForgetPassword(false) }}>
        <FontAwesomeIcon className="mr-2" icon={["fas", "arrow-left"]} />
        Back to login
      </p>
    </form>
  </React.Fragment>
);

export default ForgetPassword;
