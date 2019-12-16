import React from "react";
import ErrorMessage from "../../ErrorMessage";

const Errors = ({ errors, serverError, user }) => (
  <div>
    {
      errors.email && errors.email.type === "required" &&
      <ErrorMessage
        className="error-msg"
        error="Email is required"
      />
    }
    {
      errors.email && errors.email.type !== "required" &&
      <ErrorMessage
        className="error-msg"
        error="Invalid email format"
      />
    }
    {
      serverError &&
      <ErrorMessage
        className="error-msg d-flex mt-3 justify-content-center"
        error={serverError}
      />
    }
    {
      user.email &&
      <ErrorMessage
        className="success-msg d-flex mt-3 justify-content-center"
        error="Please confirm link to create new password in your email."
      />
    }
  </div>
);

export default Errors;
