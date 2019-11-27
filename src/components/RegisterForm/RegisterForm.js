import React from "react";
import PropTypes from "prop-types";

const RegisterForm = ({imageBlob, handleImageBlob, avatar, register, handleSubmit, onSubmit }) => (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-avatar">
          <div className="user-avatar--container">
            {avatar}
          </div>
          <p className="form-label mt-2">Choose your avatar</p>
          <input
            onChange={ e =>
              handleImageBlob(URL.createObjectURL(e.target.files[0]))
            }
            className="user-avatar--file-uploader"
            type="file"
          />
        </div>
        <label className="d-flex form-label flex-column">
          Email:
          <input name="Email" ref={register} type="text"/>
        </label>
        <label className="d-flex form-label flex-column">
          Password:
          <input name="Password" ref={register} type="text"/>
        </label>
        <label className="d-flex form-label flex-column">
          Confirm Password:
            <input name="Confirm" ref={register} type="text"/>
        </label>
          <button className="login-btn mt-3 w-100">
              Register
          </button>
      </form>
    </div>
);

export default RegisterForm;


RegisterForm.propTypes = {
  imageBlob: PropTypes.string,
  handleImageBlob: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
};
